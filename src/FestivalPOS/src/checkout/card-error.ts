import { AppRouter, Router } from "aurelia-router";

import { Api } from "../api";
import { Big } from "big.js";
import { Order } from "../api/order";
import { ProgressService } from "../resources/progress-service";
import { State } from "../state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@autoinject()
@connectTo()
export class CardError {
    private state!: State;
    private order!: Order;
    orderId!: number;
    cause!: string;
    message!: string;
    total!: Big;
    mobilepayEnabled!: boolean;

    constructor(private api: Api, private router: Router, private appRouter: AppRouter, private progress: ProgressService) {
    }

    async activate(params: { orderId: string, cause: string, message: string }) {
        this.orderId = Number(params.orderId);
        this.cause = params.cause;
        this.message = params.message;

        this.order = await this.api.getOrderById(this.orderId).transfer();
        this.total = this.order.total;
    }

    bind() {
        this.mobilepayEnabled = !!this.state.mobilepayNumber;
    }

    async cancelOrder() {
        if (!this.orderId) {
            throw new Error();
        }

        try {
            if (!this.progress.tryBusy("Sletter ordre", faTrash)) {
                return;
            }

            await this.api.deleteOrder(this.orderId).send();

            await this.progress.done();

            this.appRouter.navigateToRoute("sale");
        }
        catch (error) {
            await this.progress.error("Ordren kunne ikke slettes", error);
        }
    }

    doConfirm(method: "card" | "cash" | "account" | "mobilepay") {
        this.router.navigateToRoute(method, {
            orderId: this.order.id
        });
    }
}