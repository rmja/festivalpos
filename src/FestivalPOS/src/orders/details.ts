import { IconDefinition, faCoins, faCreditCard, faUser } from "@fortawesome/free-solid-svg-icons";

import { Api } from "../api";
import { Big } from "big.js";
import { DateTime } from "luxon";
import { PaymentMethod } from "../api/payment";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

const icons: { [id in PaymentMethod]: IconDefinition } = {
    "card": faCreditCard,
    "cash": faCoins,
    "account": faUser
}

@autoinject()
export class OrderDetails {
    orderId!: number;
    created!: DateTime;
    lines!: OrderLineViewModel[];
    payments!: PaymentViewModel[];
    servings!: ServingViewModel[];

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
    }

    async activate(params: { orderId: string }) {
        this.orderId = Number(params.orderId);

        const [order, pointsOfSale] = await Promise.all([
            this.api.getOrderById(this.orderId).transfer(),
            this.api.getAllPointOfSales().transfer()
        ]);

        this.created = order.created;
        this.lines = order.lines;
        this.payments = order.payments;
        this.servings = order.servings;

        for (const payment of this.payments) {
            if (payment.accountId) {
                const account = await this.api.getAccount(payment.accountId).transfer();
                payment.accountName = account.name;
            }
        }

        for (const serving of this.servings) {
            const pos = pointsOfSale.find(x => x.id === serving.pointOfSaleId);
            serving.pointOfSaleName = pos && pos.name;
        }
    }

    async delete() {
        try {
            this.progress.busy("Sletter ordre");
            await this.api.deleteOrder(this.orderId).send();
            await this.progress.done();
        }
        catch (error) {
            await this.progress.error("Fejl ved sletning af ordre", error);
        }

        this.router.navigateToRoute("dashboard");
    }

    getPaymentMethodIcon(method: PaymentMethod) {
        return icons[method];
    }
}

interface OrderLineViewModel {
    name?: string;
    quantity: number;
    total: Big;
}

interface PaymentViewModel {
    method: PaymentMethod;
    amount: Big;
    transactionNumber?: string;
    accountId?: number;
    accountName?: string;
    created: DateTime;
}

interface ServingViewModel {
    state: "pending" | "ongoing" | "completed";
    pointOfSaleId: number;
    pointOfSaleName?: string;
    tagNumber?: number;
    created: DateTime;
}