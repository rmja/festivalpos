import { Big } from "big.js";
import { Api } from "../api";
import { autoinject } from "aurelia-framework";
import { Order } from "../api/order";
import { AppRouter, Router } from "aurelia-router";
import { Sumup } from "../sumup";

@autoinject()
export class CardError {
    private order!: Order;
    orderId!: number;
    cause!: string;
    message!: string;
    total!: Big;

    constructor(private api: Api, private sumup: Sumup, private router: Router, private appRouter: AppRouter) {
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

    async doConfirm(method: "card" | "cash" | "account") {
        if (method === "card") {
            await this.sumup.redirectToApp(this.order);
        } else {
            this.router.navigateToRoute(method, {
                orderId: this.order.id
            });
        }
    }
}