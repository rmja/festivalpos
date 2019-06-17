import { Api } from './../api/index';
import { Router } from 'aurelia-router';
import { State } from '../state';
import { autoinject } from "aurelia-framework";
import { connectTo } from 'aurelia-store';

@autoinject()
@connectTo({
    setup: "activate",
    teardown: "deactivate",
    selector: store => store.state
})
export class ProcessPresale {
    private state!: State;
    tagNumber?: number;
    order!: OrderViewModel;

    get totalQuantity() {
        if (this.order) {
            return this.order.lines.reduce((sum, line) => sum + (line.redeem ? line.receiveable : 0), 0);
        }
    }

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async activate(params: { orderId: string, tagNumber?: string }) {
        if (params.tagNumber) {
            this.tagNumber = Number(params.tagNumber);
        }
        const orderId = Number(params.orderId);
        this.order = await this.api.getOrderById(orderId).transfer();
        const products = await this.api.getProductsByPointOfSaleId(this.state.pointOfSaleId).transfer();

        for (const line of this.order.lines) {
            line.canRedeem = !!(line.receiveable && line.productId && products.find(x => x.product.id === line.productId && !x.presale));
            line.redeem = line.canRedeem;
        }

        addEventListener("keyup", this.keyup);
    }

    deactivate() {
        removeEventListener("keyup", this.keyup);
    }

    private keyup(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            return this.process();
        }
    }

    async process() {
        const lines = this.order.lines.filter(x => x.redeem).map(x => {
            return {
                orderLineId: x.id,
                quantity: x.receiveable
            };
        });

        if (lines.length === 0) {
            this.router.navigateToRoute("ticket");
            return;
        }

        const serving = await this.api.createServing(this.order.id, {
            pointOfSaleId: this.state.pointOfSaleId,
            lines: lines
        }).transfer();

        this.router.navigateToRoute("serving-confirmation", {
            orderId: this.order.id,
            servingId: serving.id,
            tagNumber: this.tagNumber
        });
    }
}

interface OrderViewModel {
    id: number;
    lines: OrderLineViewModel[];
}

interface OrderLineViewModel {
    id: number;
    name?: string;
    quantity: number;
    productId?: number;
    receiveable: number;
    redeem?: boolean;
    canRedeem?: boolean;
}