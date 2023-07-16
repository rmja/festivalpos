import { Disposable, LogManager, PLATFORM, autoinject } from "aurelia-framework";
import { ServingCreated, ServingHub, ServingUpdated } from "../api/serving-hub";

import { Api } from "../api";
import { DateTime } from "luxon";
import { DialogService } from 'aurelia-dialog';
import { EventAggregator } from "aurelia-event-aggregator";
import { Patch } from "@utiliread/jsonpatch";
import { PointOfSaleUpdated } from './../api/serving-hub';
import { ServerDialog } from './server-dialog';
import { Serving } from "../api/serving";
import { ServingStaff } from '../api/serving-staff';
import { State } from "../state";
import { connectTo } from "aurelia-store";
import { nameof } from "../utils";

@connectTo({
    setup: "activate",
    selector: store => store.state
})
@autoinject()
export class ServingDashboard {
    private logger = LogManager.getLogger("serving");
    private state!: State;
    private beam!: boolean;
    servingStaff!: ServingStaffViewModel[];
    servings: ServingViewModel[] = [];
    selectedServing?: ServingViewModel;
    private intervalHandle!: number;
    private helloHandle!: number;
    private timeoutHandles: number[] = [];
    private disposables!: Disposable[];
    fullscreenEnabled = document.fullscreenEnabled;
    
    get isFullscreen() {
        return !!document.fullscreenElement;
    }

    now = DateTime.local();

    get pendingServings() {
        return this.servings.filter(x => x.state === "pending");
    }

    get anyOngoingServings() {
        return this.servings.some(x => x.state === "ongoing");
    }

    get pendingServingSummary() {
        let count = new Map<string, number>();
        for (const serving of this.pendingServings) {
            for (const line of serving.lines) {
                let current = count.get(line.name) || 0;
                count.set(line.name, current + line.quantity);
            }
        }        

        return new Map([...count].sort());
    }

    constructor(private api: Api, private hub: ServingHub, private eventAggregator: EventAggregator, private dialog: DialogService) {
    }

    async activate(params: { beam?: true }) {
        this.beam = !!params.beam;
        const [pos, servings] = await Promise.all([
            this.api.getPointOfSale(this.state.pointOfSaleId).transfer(),
            this.api.getAllServingsByPointOfSaleId(this.state.pointOfSaleId).bypassClientCache().transfer()
        ]);
        this.servingStaff = pos.servingStaff.map(x => new ServingStaffViewModel(this, x));

        for (const serving of servings) {
            this.addOrUpdateServing(serving);
        }

        await this.hub.connect();
        await this.hub.hello(this.state.pointOfSaleId);

        this.intervalHandle = window.setInterval(() => this.now = DateTime.local(), 500);

        // Ensure that we are connected to server even when the server reboots and looses connection state
        this.helloHandle = window.setInterval(() => this.hub.hello(this.state.pointOfSaleId), 10_000);

        this.disposables = [
            this.eventAggregator.subscribe(ServingCreated, (event: ServingCreated) => this.addOrUpdateServing(event.serving)),
            this.eventAggregator.subscribe(ServingUpdated, (event: ServingUpdated) => this.addOrUpdateServing(event.serving)),
            this.eventAggregator.subscribe(PointOfSaleUpdated, (event: PointOfSaleUpdated) => this.servingStaff = event.pos.servingStaff.map(x => new ServingStaffViewModel(this, x))),
        ];
    }

    async deactivate() {
        clearInterval(this.intervalHandle);
        clearInterval(this.helloHandle);

        await this.hub.disconnect();

        for (const handle of this.timeoutHandles) {
            clearTimeout(handle);
        }

        for (const disposable of this.disposables) {
            disposable.dispose();
        }
    }

    getViewStrategy() {
        return this.beam ? PLATFORM.moduleName("./dashboard-beam.html") : PLATFORM.moduleName("./dashboard.html");
    }

    protected async toggleFullscreen() {
        try {
            if (this.isFullscreen) {
                screen.orientation.unlock(); // Remove landscape lock and go back to the default in manifest.json
                await document.exitFullscreen();
            }
            else {
                await document.documentElement.requestFullscreen();
                await screen.orientation.lock("landscape");
            }
        }
        catch (error) {
            alert("errror" + error);
        }
    }

    async addServer() {
        const result = await this.dialog.open({ viewModel: ServerDialog }).whenClosed();

        if (!result.wasCancelled) {
            const output: Partial<ServingStaff> = result.output;

            await this.api.updatePointOfSale(this.state.pointOfSaleId, [
                { op: "add", path: "/servingStaff/-", value: { name: output.name } }
            ]).send();
        }
    }

    async editServer(staff: ServingStaffViewModel, index: number) {
        const result = await this.dialog.open({ viewModel: ServerDialog, model: { name: staff.name } }).whenClosed();

        if (!result.wasCancelled) {
            const output: Partial<ServingStaff> = result.output;
            const name = output.name!;

            await this.api.updatePointOfSale(this.state.pointOfSaleId, [
                { op: "replace", path: `/servingStaff/${index}/name`, value: name }
            ]).send();
            staff.name = staff.name;
        }
    }

    removeServer(staff: ServingStaffViewModel, index: number) {
        if (!confirm(`Skal ${staff.name} fjernes?`)) {
            return;
        }
        return this.api.updatePointOfSale(this.state.pointOfSaleId, [
            { op: "remove", path: `/servingStaff/${index}` }
        ]).send();
    }

    toggleSelected(serving: ServingViewModel) {
        if (serving === this.selectedServing) {
            this.selectedServing = undefined;
        }
        else {
            this.selectedServing = serving;
        }
    }

    async acceptNextServing(staffNumber: number) {
        const pendingServings = this.servings.filter(x => x.state === "pending");
        const serving = this.selectedServing || pendingServings.find(x => x.highPriority) || pendingServings[0];
        this.selectedServing = undefined;

        if (serving) {
            const patch = new Patch<Serving>()
                .test(x => x.state, "pending")
                .replace(x => x.state, "ongoing")
                .replace(nameof<Serving>("staffNumber"), staffNumber);

            await this.api.updateServing(serving.id, patch.operations).transfer();
        }
    }

    async complete(serving: ServingViewModel) {
        const patch = new Patch<Serving>()
            .replace(x => x.state, "completed");

        await this.api.updateServing(serving.id, patch.operations).transfer();
    }

    private addOrUpdateServing(serving: ServingViewModel) {
        this.logger.info(`Handling serving ${serving.id} created ${serving.created}`);
        const index = this.servings.findIndex(x => x.id === serving.id);

        if (index >= 0) {
            this.servings.splice(index, 1);
        }
        this.servings.push(serving);

        if (serving.state === "completed") {
            this.timeoutHandles.push(window.setTimeout(() => {
                const index = this.servings.findIndex(x => x.id === serving.id);

                if (index >= 0) {
                    this.servings.splice(index, 1);
                }
            }, 60 * 1000));
        }
    }
}

export interface ServingViewModel {
    id: number;
    state: "pending" | "ongoing" | "completed";
    highPriority: boolean;
    tagNumber?: number;
    staffNumber?: number;
    lines: {
        quantity: number;
        name: string;
    }[];
    created: DateTime;
}

class ServingStaffViewModel {
    number: number;
    name: string | null;

    get ongoingServings() {
        return this.dashboard.servings.filter(x => x.staffNumber === this.number && x.state === "ongoing");
    }

    get completedServings() {
        return this.dashboard.servings.filter(x => x.staffNumber === this.number && x.state === "completed")
    }

    constructor(private dashboard: ServingDashboard, staff: ServingStaff) {
        this.number = staff.number;
        this.name = staff.name;
    }
}

export class LastValueConverter {
    toView(servings: ServingViewModel[], limit: number) {
        return servings.slice(-limit);
    }
}

export class InverseValueConverter {
    toView(servings: ServingViewModel[]) {
        return servings.slice().reverse();
    }
}