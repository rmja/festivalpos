import { autoinject, observable } from "aurelia-framework";

import { Api } from "../api";
import { Big } from "big.js";
import { DateTime } from "luxon";

@autoinject()
export class StatisticsDashboard {
    kind!: "yearly" | "monthly" | "daily" | "hourly";
    year!: number;
    month!: number;
    day!: number;
    periodStart!: DateTime;
    periodEnd!: DateTime;
    years!: number[];
    @observable({ changeHandler: "changeHandler" }) pointOfSale?: PointOfSaleViewModel;
    pointsOfSale!: PointOfSaleViewModel[];
    @observable({ changeHandler: "changeHandler" }) terminal?: TerminalViewModel;
    terminals!: TerminalViewModel[];
    firstYear = 2019;
    currentYear = DateTime.local().year;
    activated = false;

    stats: StatsViewModel[] = [];

    constructor(private api: Api) {
        this.fetch = this.fetch.bind(this);
    }

    async activate(params: { year: string, month?: string; day?: string }) {
        this.year = Number(params.year);
        this.month = Number(params.month);
        this.day = Number(params.day);
        if (params.month && params.day) {
            this.kind = "hourly";
            this.periodStart = DateTime.local(Number(params.year), Number(params.month), Number(params.day));
            this.periodEnd = this.periodStart.plus({ days: 1 });
        }
        else if (params.month) {
            this.kind = "daily";
            this.periodStart = DateTime.local(Number(params.year), Number(params.month));
            this.periodEnd = this.periodStart.plus({ months: 1 });
        }
        else {
            this.kind = "monthly";
            this.periodStart = DateTime.local(Number(params.year));
            this.periodEnd = this.periodStart.plus({ years: 1 });
        }

        [this.pointsOfSale, this.terminals] = await Promise.all([
            this.api.getAllPointOfSales().transfer(),
            this.api.getAllTerminals().transfer(),
            this.fetch()
        ]);

        this.activated = true;
    }

    changeHandler() {
        if (!this.activated) {
            return;
        }

        return this.fetch();
    }

    private async fetch() {
        this.stats = await this.api.getStats(this.periodStart, this.periodEnd, this.kind, {
            pointOfSaleId: this.pointOfSale && this.pointOfSale.id,
            terminalId: this.terminal && this.terminal.id
        }).bypassCache().transfer();
    }
}

interface PointOfSaleViewModel {
    id: number;
    name: string;
}

interface TerminalViewModel {
    id: number;
    name: string;
}

export type Kind = "yearly" | "monthly" | "daily" | "hourly";

export interface StatsViewModel {
    kind: Kind;
    periodStart: DateTime;
    orderCount: number;
    total: Big;
    payments: PaymentStatsViewModel[];
    products: ProductStatsViewModel[];
}

export interface PaymentStatsViewModel {
    method: "card" | "cash" | "account"
    payments: number;
    total: Big;
};

export interface ProductStatsViewModel {
    productId: number;
    productName: string;
    saleQuantity: number;
    saleTotal: Big;
    servingQuantity: number;
}

export class MonthNameValueConverter {
    toView(dateTime: DateTime) {
        return dateTime.toLocaleString({
            month: "long"
        });
    }
}

export class DayNameValueConverter {
    toView(dateTime: DateTime) {
        return dateTime.toLocaleString({
            day: "numeric",
            weekday: "long"
        });
    }
}