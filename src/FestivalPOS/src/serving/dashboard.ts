import { Disposable, autoinject } from "aurelia-framework";
import { Serving, ServingLine } from "../api/serving";
import { ServingCreated, ServingHub, ServingUpdated } from "../api/serving-hub";

import { Api } from "../api";
import { DateTime } from "luxon";
import { EventAggregator } from "aurelia-event-aggregator";
import { Patch } from "ur-jsonpatch";
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
    private disposables!: Disposable[];

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

        this.disposables = [
            this.eventAggregator.subscribe(ServingCreated, (event: ServingCreated) => this.addOrUpdateServing(event.serving)),
            this.eventAggregator.subscribe(ServingUpdated, (event: ServingUpdated) => this.addOrUpdateServing(event.serving)),
        ];
    }

    async deactivate() {
        await this.hub.disconnect();

        for (const disposable of this.disposables) {
            disposable.dispose();
        }
    }

    async acceptNextServing(staffNumber: number) {
        const serving = this.servings.find(x => x.state === "pending");

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
    }
}

interface ServingViewModel {
    id: number;
    state: "pending" | "ongoing" | "completed";
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