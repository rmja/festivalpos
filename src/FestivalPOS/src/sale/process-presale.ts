import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';

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
    orderId!: number;
    order?: OrderViewModel;

    get totalQuantity() {
        if (this.order) {
            return this.order.lines.reduce((sum, line) => sum + (line.redeem ? line.receiveable : 0), 0);
        }
    }

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async activate(params: { orderId: string }) {
        this.orderId = Number(params.orderId);

        try {
            this.order = await this.api.getOrderById(this.orderId).transfer();
        }
        catch (error) {
            if (error instanceof HttpError && error.statusCode === 404) {
                delete this.order;
            }
            else {
                throw error;
            }
        }

        if (this.order) {
            const products = await this.api.getProductsByPointOfSaleId(this.state.pointOfSaleId).transfer();

            for (const line of this.order.lines) {
                line.canRedeem = !!(line.receiveable && line.productId && products.find(x => x.product.id === line.productId));
                line.redeem = line.canRedeem;
            }
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
        if (!this.order) {
            return;
        }

        const redeem = this.order.lines.map(x => x.redeem ? x.receiveable : 0);
        if (Math.max(...redeem) === 0) {
            this.router.navigateToRoute("ticket");
        }

        await this.api.processPresale(this.order.id, this.state.pointOfSaleId, redeem).send();

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