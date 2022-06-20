import { State, getOrderQuantityTotal, getOrderTotal, resetOrder } from "../state";
import { Store, connectTo } from "aurelia-store";
import { autoinject, bindable, computedFrom } from "aurelia-framework";

import { Api } from "../api";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

@autoinject()
@connectTo()
export class PayButtonCustomElement {
    private state!: State;
    cardEnabled!: boolean;
    mobilepayEnabled!: boolean;
    @bindable() confirm?: () => void | Promise<void>;

    @computedFrom("state")
    get total() {
        if (this.state) {
            return getOrderTotal(this.state);
        }
    }

    get canConfirm() {
        if (this.state) {
            return getOrderQuantityTotal(this.state) > 0;
        }
    }

    constructor(private api: Api, private store: Store<State>, private router: Router, private progress: ProgressService) {
    }

    bind() {
        this.cardEnabled = !!this.state.sumupAffiliateKey;
        this.mobilepayEnabled = !!this.state.mobilepayNumber;
    }

    async doConfirm(method: "card" | "cash" | "account" | "mobilepay") {
        if (!this.canConfirm) {
            return;
        }

        if (this.confirm) {
            await Promise.resolve(this.confirm());
        }

        try {
            this.progress.busy("Opretter ordre", faFileAlt);

            const order = await this.api.createOrder({
                terminalId: this.state.terminalId,
                pointOfSaleId: this.state.pointOfSaleId,
                lines: this.state.orderLines.map(x => {
                    return Object.assign({}, x, {
                        receiveable: x.presale ? x.quantity : 0
                    });
                })
            }).transfer();

            await this.store.dispatch(resetOrder);

            this.progress.done();

            if (order.canHaveTag()) {
                this.router.navigate(`/checkout/orders/${order.id}/tag?paymentMethod=${method}`);
            }
            else {
                this.router.navigate(`/checkout/orders/${order.id}/pay/${method}`);
            }
        }
        catch (error) {
            await this.progress.error("Ordren kunne ikke oprettes", error);
        }
    }
}