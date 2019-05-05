import Big, { RoundingMode } from "big.js";
import { computedFrom } from "aurelia-binding";
import { autoinject } from "aurelia-framework";
import { Api } from "../api";
import { Order } from "../api/order";
import { Router } from "aurelia-router";
import { Digit, ENTER, ESCAPE, COMMA, BACKSPACE } from "../keys";

@autoinject()
export class CashPayment {
    private order!: Order;
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
        this.keyup = this.keyup.bind(this);
    }

    async activate(params: {orderId: string}) {
        const orderId = Number(params.orderId);
        this.order = await this.api.getOrderById(orderId).transfer();

        this.total = this.order.total;
        this.amountDue = this.order.amountDue;
        this.received = new Big(0);

        document.addEventListener("keyup", this.keyup);
    }

    deactivate() {
        document.removeEventListener("keyup", this.keyup);
    }

    private keyup(event: KeyboardEvent) {
        if (event.key >= "0" && event.key <= "9") {
            const digit = Number(event.key) as Digit;
            this.pushKey(digit);
        }
        else if (event.key === COMMA) {
            this.pushKey("00");
        }
        else if (event.key === BACKSPACE) {
            this.backspace();
        }
        else if (event.key === ENTER) {
            return this.submit();
        }
        else if (event.key === ESCAPE) {
            return this.cancel();
        }
    }

    backspace() {
        this.received = this.received.div(10).round(2, RoundingMode.RoundDown);
    }

    pushKey(value: Digit | "00") {
        if (value === "00") {
            this.received = this.received.mul(100);
        }
        else {
            this.received = this.received.mul(10).add(new Big(value).div(100));
        }
    }

    exactAmount() {
        this.received = this.amountDue.plus(0);
    }

    async cancel() {
        await this.api.deleteOrder(this.order.id);

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
            change: this.received.minus(payment.amount).toFixed(2)
        });
    }
}