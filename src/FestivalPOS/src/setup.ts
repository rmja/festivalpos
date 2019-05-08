import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { Api } from "./api";
import { connectTo, Store } from "aurelia-store";
import { State, setup } from "./state";

@connectTo()
@autoinject()
export class Setup {
    private state!: State;
    terminal?: Terminal;
    terminals!: Terminal[];

    pointOfSale?: PointOfSale;
    pointOfSales!: PointOfSale[];

    get canSubmit() {
        return this.terminal && this.pointOfSale;
    }

    constructor(private api: Api, private store: Store<State>, private router: Router) {
    }

    async canActivate() {
        this.terminals = await this.api.getAllTerminals().transfer();
        this.pointOfSales = await this.api.getAllPointOfSales().transfer();

        return true;
    }

    bind() {
        this.terminal = this.terminals.find(x => x.id === this.state.terminalId);
        this.pointOfSale = this.pointOfSales.find(x => x.id === this.state.pointOfSaleId);
    }

    async createDefaults() {
        this.terminals.push(await this.api.createTerminal({ name: "Terminal 1" }).transfer());
        this.pointOfSales.push(await this.api.createPointOfSale({ name: "Salgssted 1" }).transfer());
    }

    async submit() {
        if (!this.terminal || !this.pointOfSale) {
            throw new Error();
        }

        await this.store.dispatch(setup, this.terminal.id, this.pointOfSale.id);

        this.router.navigateToRoute("sale");
    }
}

interface Terminal {
    id: number;
    name: string;
}

interface PointOfSale {
    id: number;
    name: string;
}