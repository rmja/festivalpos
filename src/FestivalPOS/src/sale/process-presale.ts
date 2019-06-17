import { Api } from './../api/index';
import { HttpError } from 'ur-http';
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
            line.canRedeem = !!(line.receiveable && line.productId && products.find(x => x.product.id === line.productId));
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
        const redeem = this.order.lines.map(x => x.redeem ? x.receiveable : 0);
        if (Math.max(...redeem) === 0) {
            this.router.navigateToRoute("ticket");
        }

        await this.api.serve(this.order.id, this.state.pointOfSaleId, redeem).send();

        this.router.navigateToRoute("process-presale-confirmation", {
            orderId: this.order.id
        });
    }
}

interface OrderViewModel {
    id: number;
    lines: OrderLineViewModel[];
}

interface OrderLineViewModel {
    name?: string;
    quantity: number;
    productId?: number;
    receiveable: number;
    redeem?: boolean;
    canRedeem?: boolean;
}