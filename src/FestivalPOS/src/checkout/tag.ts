import { RedirectToRoute, Router } from "aurelia-router";

import { Api } from "../api";
import { Big } from "big.js";
import { DialogService } from "aurelia-dialog";
import { HttpError } from "ur-http";
import { Order } from "../api/order";
import { ProgressService } from "../resources/progress-service";
import { TagOverwriteDialog } from "./tag-overwrite-dialog";
import { autoinject } from "aurelia-framework";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

type PaymentMethod = "card" | "cash" | "account";

@autoinject()
export class Tag {
    tagNumber!: Big;
    canSkip!: boolean;
    private orderId!: number;
    private order!: Order;
    private paymentMethod!: PaymentMethod;

    constructor(private api: Api, private router: Router, private dialog: DialogService, private progress: ProgressService) {
    }

    async canActivate(params: { orderId: string, paymentMethod: PaymentMethod }) {
        if (params.paymentMethod === "account") {
            return new RedirectToRoute("account", {
                orderId: params.orderId
            });
        }
        else {
            this.orderId = Number(params.orderId);
            this.order = await this.api.getOrderById(this.orderId).transfer();
            this.paymentMethod = params.paymentMethod;

            return true;
        }
    }

    activate() {
        this.tagNumber = new Big(0);

        this.canSkip = !this.order.mustHaveTag();
    }

    skip() {
        this.router.navigateToRoute(this.paymentMethod, {
            orderId: this.orderId
        });
    }

    async submit() {
        const tagNumber = Number(this.tagNumber.toFixed());

        let forceAssign = false;
        try {
            this.progress.busy("Registrerer brik", faTicketAlt);

            await this.api.assignOrderTag(this.orderId, tagNumber).send();

            this.progress.done();
        }
        catch (error) {
            if (error instanceof HttpError && error.statusCode === 409) { // Conflict
                this.progress.done();
                const result = await this.dialog.open({ viewModel: TagOverwriteDialog, model: tagNumber }).whenClosed();

                if (!result.wasCancelled) {
                    forceAssign = true;
                }
                else {
                    return;
                }
            }
            else {
                await this.progress.error("Brikken kunne ikke registreres", error);
                return;
            }
        }

        if (forceAssign) {
            try {
                await this.api.assignOrderTag(this.orderId, tagNumber, true).send();
            }
            catch (error) {
                await this.progress.error("Brikken kunne ikke registreres", error);
                return;
            }
        }

        this.router.navigateToRoute(this.paymentMethod, {
            orderId: this.orderId,
            tagNumber
        });
    }
}