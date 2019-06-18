import { Api } from "../api";
import { Big } from "big.js";
import { Patch } from "ur-jsonpatch";
import { Payment } from "../api/payment";
import { Router } from "aurelia-router";
import { Serving } from "../api/serving";
import { State } from "../state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";

interface Params { orderId: string, paymentId: string, change?: string, tagNumber?: string };

@connectTo({
    setup: "activate",
    selector: store => store.state
})
@autoinject()
export class CashReceipt {
    private state!: State;
    private payment!: Payment
    tagNumber?: number;
    orderId!: number;
    servingId?: number;
    total!: Big;
    change?: Big;
    canPrintReceipt = false;

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async canActivate(params: Params) {
        this.orderId = Number(params.orderId);
        const paymentId = Number(params.paymentId);
        const order = await this.api.getOrderById(this.orderId).transfer();
        if (params.tagNumber) {
            this.tagNumber = Number(params.tagNumber);
            this.servingId = order.servings.length && order.servings[0].id;
        }
        
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

        const post = await this.api.getPointOfSale(this.state.pointOfSaleId).transfer();
        this.canPrintReceipt = !!post.receiptPrinterId;;

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

    complete() {
        this.router.navigate("/sale");
    }
}