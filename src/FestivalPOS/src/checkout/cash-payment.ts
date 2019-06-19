import { Api } from "../api";
import { Big } from "big.js";
import { Order } from "../api/order";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";
import { computedFrom } from "aurelia-binding";

@autoinject()
export class CashPayment {
    private order!: Order;
    private tagNumber?: string;
    total!: Big;
    amountDue!: Big;
    received!: Big;

    @computedFrom(nameof<CashPayment>(x => x.received))
    get change() {
        return this.received.gte(this.amountDue) ? this.received.minus(this.amountDue) : new Big(0);
    }

    @computedFrom(nameof<CashPayment>(x => x.received))
    get canSubmit() {
        return this.amountDue.gt(0) && this.received.gte(this.amountDue);
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { orderId: string, tagNumber?: string }) {
        const orderId = Number(params.orderId);
        this.tagNumber = params.tagNumber;
        this.order = await this.api.getOrderById(orderId).transfer();

        this.total = this.order.total;
        this.amountDue = this.order.amountDue;
        this.received = new Big(0);
    }

    exactAmount() {
        this.received = this.amountDue.plus(0);
    }

    async cancel() {
        await this.api.deleteOrder(this.order.id).send();

        this.router.navigate("/sale");
    }

    async submit() {
        if (!this.canSubmit) {
            return;
        }

        const payment = await this.api.createPayment(this.order.id, {
            method: "cash",
            amount: this.amountDue
        }).transfer();

        this.router.navigateToRoute("receipt", {
            orderId: payment.orderId,
            paymentId: payment.id,
            change: this.received.minus(payment.amount).toFixed(2),
            tagNumber: this.tagNumber
        });
    }
}