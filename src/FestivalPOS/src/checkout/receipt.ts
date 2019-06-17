import { Api } from "../api";
import { Big } from "big.js";
import { Patch } from "ur-jsonpatch";
import { Payment } from "../api/payment";
import { Router } from "aurelia-router";
import { Serving } from "../api/serving";
import { autoinject } from "aurelia-framework";

interface Params { orderId: string, paymentId: string, change?: string };

@autoinject()
export class CashReceipt {
    private payment!: Payment
    orderId!: number;
    servingId?: number;
    total!: Big;
    change?: Big;

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async canActivate(params: Params) {
        this.orderId = Number(params.orderId);
        const paymentId = Number(params.paymentId);
        const order = await this.api.getOrderById(this.orderId).transfer();
        this.servingId = order.servings.length && order.servings[0].id;
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

    printReceipt() {
        return this.api.printReceipt(this.orderId).send();
    }

    async complete(markAsCompleted?: boolean) {
        if (this.servingId && markAsCompleted) {
            const patch = new Patch<Serving>()
                .replace(x => x.state, "completed");

            await this.api.updateServing(this.servingId, patch.operations).send();
        }
        
        this.router.navigate("/sale");
    }
}