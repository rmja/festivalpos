import { autoinject } from "aurelia-framework";
import { Api } from "../api";
import { DateTime } from "luxon";
import { Big } from "big.js";

@autoinject()
export class StatisticsDashboard {
    private timerHandle!: any;
    year!: number;

    hourStats?: StatsViewModel[];
    posStats!: {
        id: number;
        name: string;
        hourStats?: StatsViewModel[]
    }[];

    constructor(private api: Api) {
        this.fetch = this.fetch.bind(this);
    }

    async activate(params: { year?: string }) {
        this.year = Number(params.year) || DateTime.local().year;

        this.posStats = await this.api.getAllPointOfSales().transfer();
        await this.fetch();

        this.timerHandle = setInterval(this.fetch, 10000);
    }

    deactivate() {
        clearInterval(this.timerHandle);
    }

    private fetch() {
        const promises = [
            this.api.getHourlyStats({ year: this.year }).bypassCache().transfer().then(result => this.hourStats = result),
            ...this.posStats.map(pos => this.api.getHourlyStats({ year: this.year, pointOfSaleId: pos.id }).bypassCache().transfer().then(result => pos.hourStats = result))
        ];

        return Promise.all(promises);
    }
}

export interface StatsViewModel {
    periodStart: DateTime;
    orders: number;
    total: Big;
    payments: {
        method: "card" | "cash" | "account"
        payments: number;
        total: Big;
    }[];
    products: {
        productId: number;
        productName: string;
        orders: number;
        quantity: number;
        total: Big;
    }[];
}