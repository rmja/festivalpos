import { AppRouter, Router } from "aurelia-router";

import { Api } from "../api";
import { Big } from "big.js";
import { Order } from "../api/order";
import { autoinject } from "aurelia-framework";

@autoinject()
export class CardError {
    private order!: Order;
    orderId!: number;
    cause!: string;
    message!: string;
    total!: Big;

    constructor(private api: Api, private router: Router, private appRouter: AppRouter) {
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

        await this.api.deleteOrder(this.orderId).send();
        this.appRouter.navigateToRoute("sale");
    }

    doConfirm(method: "card" | "cash" | "account") {
        this.router.navigateToRoute(method, {
            orderId: this.order.id
        });
    }
}