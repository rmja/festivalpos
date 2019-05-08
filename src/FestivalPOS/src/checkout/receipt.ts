import { Router } from "aurelia-router";
import { Api } from "../api";
import { Big } from "big.js";
import { Payment } from "../api/payment";
import { autoinject } from "aurelia-framework";

interface Params { orderId: string, paymentId: string, change?: string };

@autoinject()
export class CashReceipt {
    private payment!: Payment
    orderId!: number;
    total!: Big;
    change?: Big;

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async canActivate(params: Params) {
        this.orderId = Number(params.orderId);
        const paymentId = Number(params.paymentId);
        const order = await this.api.getOrderById(this.orderId).transfer();
        const payment = order.payments.find(x => x.id === paymentId);

        if (!payment) {
            return false;
        }

        this.payment = payment;
        return true;
    }

    async activate(params: Params) {
        this.total = this.payment.amount;

        if (params.change) {
            this.change = new Big(params.change);
        }

        addEventListener("keyup", this.keyup);
    }

    deactivate() {
        removeEventListener("keyup", this.keyup);
    }

    private keyup(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            return this.complete();
        }
    }

    complete() {
        this.router.navigate("/sale");
    }
}