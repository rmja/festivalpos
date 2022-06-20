import { State, setup } from "./state";
import { Store, connectTo } from "aurelia-store";

import { Api } from "./api";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@connectTo({
    setup: "activate",
    selector: store => store.state
})
@autoinject()
export class Setup {
    private state!: State;
    terminal?: TerminalViewModel;
    terminals!: TerminalViewModel[];

    pointOfSale?: PointOfSaleViewModel;
    pointOfSales!: PointOfSaleViewModel[];

    affiliate?: SumUpAffiliateViewModel;
    affiliates!: SumUpAffiliateViewModel[];
    receiptEmail?: string;

    mobilepayNumber?: number;

    get canSubmit() {
        return this.terminal && this.pointOfSale;
    }

    constructor(private api: Api, private store: Store<State>, private router: Router) {
    }

    async activate() {
        this.terminals = await this.api.getAllTerminals().transfer();
        this.pointOfSales = await this.api.getAllPointOfSales().transfer();
        this.affiliates = await this.api.getAllSumupAffiliates().transfer();

        this.terminal = this.terminals.find(x => x.id === this.state.terminalId);
        this.pointOfSale = this.pointOfSales.find(x => x.id === this.state.pointOfSaleId);
        this.affiliate = this.affiliates.find(x => x.key === this.state.sumupAffiliateKey);
        this.receiptEmail = this.state.sumupReceiptEmail;
        this.mobilepayNumber = this.state.mobilepayNumber;
    }

    async createDefaults() {
        this.terminals.push(await this.api.createTerminal({ name: "Terminal 1" }).transfer());
        this.pointOfSales.push(await this.api.createPointOfSale({ name: "Salgssted 1" }).transfer());
    }

    async submit() {
        if (!this.terminal || !this.pointOfSale) {
            throw new Error();
        }

        await this.store.dispatch(setup, {
            terminalId: this.terminal.id,
            pointOfSaleId: this.pointOfSale.id,
            sumupAffiliateKey: this.affiliate?.key,
            sumupReceiptEmail: this.receiptEmail || undefined,
            mobilepayNumber: this.mobilepayNumber && this.mobilepayNumber,
        });

        this.router.navigateToRoute("sale");
    }
}

interface TerminalViewModel {
    id: number;
    name: string;
}

interface PointOfSaleViewModel {
    id: number;
    name: string;
}

interface SumUpAffiliateViewModel {
    key: string;
    name?: string;
}