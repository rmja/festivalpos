import { autoinject } from "aurelia-framework";
import { DateTime } from "luxon";
import { Big } from "big.js";
import { Api } from "../api";

const currentYear = DateTime.local().year;

@autoinject()
export class AccountDetails {
    name!: string;
    maxCredit!: Big;
    remainingCredit!: Big;
    payments!: PaymentViewModel[];
    years!: number[];
    year = currentYear;

    constructor(private api: Api) {
    }

    async activate(params: { accountId: string }) {
        const accountId = Number(params.accountId);
        const account = await this.api.getAccount(accountId).transfer();
        this.name = account.name;
        this.maxCredit = account.maxCredit;
        this.remainingCredit = account.remainingCredit;

        this.payments = await this.api.getAllPayments({ accountId: accountId }).transfer();
        
        this.years = [];
        for (let year = findMinYear(this.payments); year <= currentYear; year++) {
            this.years.push(year);
        }
        this.years.reverse();
    }
}

export class YearValueConverter {
    toView(payments: PaymentViewModel[], year: number) {
        return payments.filter(x => x.created.year === year);
    }
}

interface PaymentViewModel {
    orderId: number;
    amount: Big;
    created: DateTime;
}

function findMinYear(payments: PaymentViewModel[]) {
    let year = currentYear

    for (const payment of payments) {
        if (payment.created.year < year) {
            year = payment.created.year;
        }
    }

    return year;
}