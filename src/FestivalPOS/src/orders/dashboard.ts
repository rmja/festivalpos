import { autoinject, observable } from "aurelia-framework";

import { Api } from "../api";
import { State } from "../state";
import { connectTo } from "aurelia-store";

@autoinject()
@connectTo({
    setup: "activate",
    selector: store => store.state
})
export class OrdersDashboard {
    private state!: State;
    orders!: OrderViewModel[];

    @observable({ changeHandler: "changeHandler" }) pointOfSale?: PointOfSaleViewModel;
    pointsOfSale!: PointOfSaleViewModel[];
    @observable({ changeHandler: "changeHandler" }) terminal?: TerminalViewModel;
    terminals!: TerminalViewModel[];
    private activated = false;

    constructor(private api: Api) {
    }

    async activate() {
        [this.pointsOfSale, this.terminals] = await Promise.all([
            this.api.getAllPointOfSales().transfer(),
            this.api.getAllTerminals().transfer()
        ]);

        await this.fetch();

        this.pointOfSale = this.pointsOfSale.find(x => x.id === this.state.pointOfSaleId);
        this.terminal = this.terminals.find(x => x.id === this.state.terminalId);
        
        this.activated = true;
    }

    changeHandler() {
        if (!this.activated) {
            return;
        }

        return this.fetch();
    }

    private async fetch() {
        this.orders = await this.api.getAllOrders({
            pointOfSaleId: this.pointOfSale && this.pointOfSale.id,
            terminalId: this.terminal && this.terminal.id
        }).bypassCache().transfer();

        for (const order of this.orders) {
            const pos = this.pointsOfSale.find(x => x.id === order.pointOfSaleId);
            const terminal = this.terminals.find(x => x.id === order.terminalId);

            order.pointOfSaleName = pos && pos.name;
            order.terminalName = terminal && terminal.name;
        }
    }
}

interface OrderViewModel {
    id: number;
    pointOfSaleId: number;
    pointOfSaleName?: string;
    terminalId: number;
    terminalName?: string;
}

interface PointOfSaleViewModel {
    id: number;
    name: string;
}

interface TerminalViewModel {
    id: number;
    name: string;
}