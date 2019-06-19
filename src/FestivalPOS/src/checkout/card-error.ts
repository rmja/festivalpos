import { AppRouter, Router } from "aurelia-router";

import { Api } from "../api";
import { Big } from "big.js";
import { Order } from "../api/order";
import { ProgressService } from "../resources/progress-service";
import { autoinject } from "aurelia-framework";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@autoinject()
export class CardError {
    private order!: Order;
    orderId!: number;
    cause!: string;
    message!: string;
    total!: Big;

    constructor(private api: Api, private router: Router, private appRouter: AppRouter, private progress: ProgressService) {
    }

    async activate(params: { orderId: string, cause: string, message: string }) {
        this.orderId = Number(params.orderId);
        this.cause = params.cause;
        this.message = params.message;

        this.order = await this.api.getOrderById(this.orderId).transfer();
        this.total = this.order.total;
    }

    async cancelOrder() {
        if (!this.orderId) {
            throw new Error();
        }

        try {
            this.progress.busy("Sletter ordre", faTrash);

            await this.api.deleteOrder(this.orderId).send();

            this.progress.done();

            this.appRouter.navigateToRoute("sale");
        }
        catch (error) {
            await this.progress.error("Ordren kunne ikke slettes", error);
        }
    }

    doConfirm(method: "card" | "cash" | "account") {
        this.router.navigateToRoute(method, {
            orderId: this.order.id
        });
    }
}