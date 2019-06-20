import { Disposable, autoinject } from "aurelia-framework";
import { ServingCreated, ServingHub, ServingUpdated } from "../api/serving-hub";

import { Api } from "../api";
import { DateTime } from "luxon";
import { EventAggregator } from "aurelia-event-aggregator";
import { Patch } from "ur-jsonpatch";
import { Serving } from "../api/serving";
import { State } from "../state";
import { connectTo } from "aurelia-store";

@connectTo({
    setup: "activate",
    selector: store => store.state
})
@autoinject()
export class ServingDashboard {
    private state!: State;
    noOfServingStaff!: number;
    servings: ServingViewModel[] = [];
    selectedServing?: ServingViewModel;
    private intervalHandle!: number;
    private timeoutHandles: number[] = [];
    private disposables!: Disposable[];

    now = DateTime.local();

    constructor(private api: Api, private hub: ServingHub, private eventAggregator: EventAggregator) {
    }

    async activate() {
        const [pos, servings] = await Promise.all([
            this.api.getPointOfSale(this.state.pointOfSaleId).transfer(),
            this.api.getAllServingsByPointOfSaleId(this.state.pointOfSaleId).bypassCache().transfer()
        ]);
        this.noOfServingStaff = pos.noOfServingStaff;
        this.servings.push(...servings);
        
        await this.hub.connect();
        await this.hub.hello(this.state.pointOfSaleId);

        this.intervalHandle = window.setInterval(() => this.now = DateTime.local(), 500);

        this.disposables = [
            this.eventAggregator.subscribe(ServingCreated, (event: ServingCreated) => this.addOrUpdateServing(event.serving)),
            this.eventAggregator.subscribe(ServingUpdated, (event: ServingUpdated) => this.addOrUpdateServing(event.serving)),
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
                const index = this.servings.indexOf(serving);

                if (index >= 0) {
                    this.servings.splice(index);
                }
            }, 10 * 60 * 1000));
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

export class PendingValueConverter {
    toView(servings: ServingViewModel[]) {
        return servings.filter(x => x.state === "pending");
    }
}

export class OngoingValueConverter {
    toView(servings: ServingViewModel[]) {
        return servings.filter(x => x.state === "ongoing");
    }
}

export class CompletedValueConverter {
    toView(servings: ServingViewModel[]) {
        return servings.filter(x => x.state === "completed");
    }
}

export class StaffNumberValueConverter {
    toView(servings: ServingViewModel[], staffNumber: number) {
        return servings.filter(x => x.staffNumber === staffNumber);
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