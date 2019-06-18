import { Api } from "./api";
import { AppRouter } from "aurelia-router";
import { State } from "./state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";

@connectTo()
@autoinject()
export class TopNavbar {
    private state!: State;
    private pointOfSaleId?: number;
    pointOfSaleName?: string;

    constructor(private api: Api, protected router: AppRouter) {
    }

    protected async stateChanged(newState: State) {
        if (newState.pointOfSaleId !== this.pointOfSaleId) {
            this.pointOfSaleId = newState.pointOfSaleId;
            const pos = await this.api.getPointOfSale(this.pointOfSaleId).transfer();
            this.pointOfSaleName = pos.name;
        }
    }
}