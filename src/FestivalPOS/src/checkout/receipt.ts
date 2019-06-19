import { Api } from "../api";
import { Big } from "big.js";
import { Patch } from "ur-jsonpatch";
import { Payment } from "../api/payment";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { Serving } from "../api/serving";
import { State } from "../state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

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

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
    }

    async canActivate(params: Params) {
        this.orderId = Number(params.orderId);
        const paymentId = Number(params.paymentId);
        const order = await this.api.getOrderById(this.orderId).transfer();
        if (params.tagNumber) {
            this.tagNumber = Number(params.tagNumber);
        }
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

        const post = await this.api.getPointOfSale(this.state.pointOfSaleId).transfer();
        this.canPrintReceipt = !!post.receiptPrinterId;;
    }

    printReceipt() {
        return this.api.printReceipt(this.orderId).send();
    }

    async complete(markAsCompleted?: boolean) {
        if (markAsCompleted && this.servingId) {
            const patch = new Patch<Serving>()
                .replace(x => x.state, "completed");

            try {
                this.progress.busy("Færdiggør servering", faUtensils);

                await this.api.updateServing(this.servingId, patch.operations).send();

                this.progress.done();
            }
            catch (error) {
                await this.progress.error("Serveringen kunne ikke færdiggøres", error);
                return;
            }
        }
        this.router.navigate("/sale");
    }
}