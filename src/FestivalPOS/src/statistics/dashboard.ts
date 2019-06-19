import { Api } from "../api";
import { Big } from "big.js";
import { DateTime } from "luxon";
import { autoinject } from "aurelia-framework";

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
    orderCount: number;
    total: Big;
    payments: {
        method: "card" | "cash" | "account"
        payments: number;
        total: Big;
    }[];
    productSales: {
        productId: number;
        productName: string;
        productQuantity: number;
        orderCount: number;
        total: Big;
    }[];
    productServings: {
        productId: number;
        productName: string;
        productQuantity: number;
        servingCount: number;
    }[];
}