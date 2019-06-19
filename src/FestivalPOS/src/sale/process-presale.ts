import { Api } from './../api/index';
import { ProgressService } from '../resources/progress-service';
import { Router } from 'aurelia-router';
import { State } from '../state';
import { autoinject } from "aurelia-framework";
import { connectTo } from 'aurelia-store';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

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

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
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

        try {
            this.progress.busy("Opretter servering", faUtensils);

            const serving = await this.api.createServing(this.order.id, {
                pointOfSaleId: this.state.pointOfSaleId,
                lines: lines
            }).transfer();

            this.progress.done();

            this.router.navigateToRoute("serving-confirmation", {
                orderId: this.order.id,
                servingId: serving.id,
                tagNumber: this.tagNumber
            });
        }
        catch (error) {
            await this.progress.error("Serveringen kunne ikke oprettes", error);
        }
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