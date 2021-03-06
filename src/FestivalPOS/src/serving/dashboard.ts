import { Disposable, PLATFORM, autoinject } from "aurelia-framework";
import { ServingCreated, ServingHub, ServingUpdated } from "../api/serving-hub";

import { AddServerDialog } from './add-server-dialog';
import { Api } from "../api";
import { DateTime } from "luxon";
import { DialogService } from 'aurelia-dialog';
import { EventAggregator } from "aurelia-event-aggregator";
import { Patch } from "ur-jsonpatch";
import { PointOfSaleUpdated } from './../api/serving-hub';
import { Serving } from "../api/serving";
import { ServingStaff } from '../api/serving-staff';
import { State } from "../state";
import { connectTo } from "aurelia-store";

@connectTo({
    setup: "activate",
    selector: store => store.state
})
@autoinject()
export class ServingDashboard {
    private state!: State;
    private beam!: boolean;
    servingStaff!: ServingStaffViewModel[];
    servings: ServingViewModel[] = [];
    selectedServing?: ServingViewModel;
    private intervalHandle!: number;
    private timeoutHandles: number[] = [];
    private disposables!: Disposable[];

    now = DateTime.local();

    get pendingServings() {
        return this.servings.filter(x => x.state === "pending");
    }

    constructor(private api: Api, private hub: ServingHub, private eventAggregator: EventAggregator, private dialog: DialogService) {
    }

    async activate(params: { beam?: true }) {
        this.beam = !!params.beam;
        const [pos, servings] = await Promise.all([
            this.api.getPointOfSale(this.state.pointOfSaleId).transfer(),
            this.api.getAllServingsByPointOfSaleId(this.state.pointOfSaleId).bypassCache().transfer()
        ]);
        this.servingStaff = pos.servingStaff.map(x => new ServingStaffViewModel(this, x));

        for (const serving of servings) {
            this.addOrUpdateServing(serving);
        }

        await this.hub.connect();
        await this.hub.hello(this.state.pointOfSaleId);

        this.intervalHandle = window.setInterval(() => this.now = DateTime.local(), 500);

        this.disposables = [
            this.eventAggregator.subscribe(ServingCreated, (event: ServingCreated) => this.addOrUpdateServing(event.serving)),
            this.eventAggregator.subscribe(ServingUpdated, (event: ServingUpdated) => this.addOrUpdateServing(event.serving)),
            this.eventAggregator.subscribe(PointOfSaleUpdated, (event: PointOfSaleUpdated) => this.servingStaff = event.pos.servingStaff.map(x => new ServingStaffViewModel(this, x))),
        ];
    }

    async deactivate() {
        await this.hub.disconnect();

        clearInterval(this.intervalHandle);

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

    async addServer() {
        const result = await this.dialog.open({ viewModel: AddServerDialog }).whenClosed();

        if (!result.wasCancelled) {
            const output: Partial<ServingStaff> = result.output;

            await this.api.updatePointOfSale(this.state.pointOfSaleId, [
                { op: "add", path: "/servingStaff/-", value: { name: output.name } }
            ]).send();
        }
    }

    removeServer(index: number) {
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
                .replace(x => x.state, "ongoing")
                .replace(nameof<Serving>(x => x.staffNumber), staffNumber);

            await this.api.updateServing(serving.id, patch.operations).transfer();
        }
    }

    async complete(serving: ServingViewModel) {
        const patch = new Patch<Serving>()
            .replace(x => x.state, "completed");

        await this.api.updateServing(serving.id, patch.operations).transfer();
    }

    private addOrUpdateServing(serving: ServingViewModel) {
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