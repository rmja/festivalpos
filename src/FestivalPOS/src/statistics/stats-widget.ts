import { IconDefinition, faCoins, faCreditCard, faUser, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { Kind, PaymentStatsViewModel, StatsViewModel } from "./dashboard";
import { autoinject, bindable } from "aurelia-framework";

import { Big } from "big.js";
import { DateTime } from "luxon";
import { PaymentMethod } from "../api/payment";
import { Router } from "aurelia-router";

const icons: { [id in PaymentMethod]: IconDefinition } = {
    "card": faCreditCard,
    "cash": faCoins,
    "account": faUser,
    "mobilePay": faMobileScreenButton,
}

const names: { [id in PaymentMethod]: string } = {
    "card": "Kort omsætning",
    "cash": "Kontant omsætning",
    "account": "Konto omsætning",
    "mobilePay": "MobilePay omsætning",
};

@autoinject()
export class StatsWidget {
    @bindable() value!: StatsViewModel;

    constructor(private router: Router) {
    }

    getPaymentMethodIcon(method: PaymentMethod) {
        return icons[method];
    }

    getPaymentMethodName(method: PaymentMethod) {
        return names[method];
    }

    getHref(stats: StatsViewModel) {
        switch (stats.kind) {
            case "monthly": return this.router.generate("month", {
                year: stats.periodStart.year,
                month: stats.periodStart.month
            });
            case "daily": return this.router.generate("day", {
                year: stats.periodStart.year,
                month: stats.periodStart.month,
                day: stats.periodStart.day
            });
        }
    }
}

export class PeriodStartFormatValueConverter {
    toView(dateTime: DateTime, kind: Kind) {
        switch (kind) {
            case "monthly": return dateTime.toLocaleString({
                month: "long",
                year: "numeric"
            });
            case "daily": return dateTime.toLocaleString({
                day: "numeric",
                weekday: "short"
            });
            case "hourly": return dateTime.toLocaleString(DateTime.TIME_24_SIMPLE);
        }
    }
}

export class EnsureAllPaymentMethodsValueConverter {
    toView(payments: PaymentStatsViewModel[]) {
        const result: PaymentStatsViewModel[] = [];

        for (const method of <PaymentMethod[]> ["card", "cash", "account"]) {
            const payment = payments.find(x => x.method === method) || {
                method: method,
                payments: 0,
                total: new Big(0)
            };

            result.push(payment);
        }

        return result;
    }
}