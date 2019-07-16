import { RedirectToRoute, Router } from "aurelia-router";
import { faTicketAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Api } from "../api";
import { Big } from "big.js";
import { DialogService } from "aurelia-dialog";
import { HttpError } from "ur-http";
import { ProgressService } from "../resources/progress-service";
import { TagOverwriteDialog } from "./tag-overwrite-dialog";
import { autoinject } from "aurelia-framework";

@autoinject()
export class AccountTag {
    tagNumber!: Big;
    private orderId!: number;
    private paymentId!: number;
    accountNumber!: number;

    constructor(private api: Api, private router: Router, private dialog: DialogService, private progress: ProgressService) {
    }

    async activate(params: { orderId: string, paymentId: string, accountNumber: string }) {
        this.tagNumber = new Big(0);
        this.orderId = Number(params.orderId);
        this.paymentId = Number(params.paymentId);
        this.accountNumber = Number(params.accountNumber);
    }

    async submit() {
        const tagNumber = Number(this.tagNumber.toFixed());

        try {
            this.progress.busy("Registrerer brik", faTicketAlt);

            if (await this.tryAssignTag(tagNumber)) {
                // Tag was assigned
                this.progress.done();
            }
            else {
                const result = await this.dialog.open({ viewModel: TagOverwriteDialog, model: tagNumber }).whenClosed();

                if (!result.wasCancelled) {
                    // Overwrite current tag
                    await this.api.assignOrderTag(this.orderId, tagNumber, true).send();
                    this.progress.done();
                }
                else {
                    // Do not overwrite
                    this.progress.done();
                    return;
                }
            }
        }
        catch (error) {
            await this.progress.error("Brikken kunne ikke registreres", error);
            return;
        }

        this.router.navigateToRoute("receipt", {
            orderId: this.orderId,
            paymentId: this.paymentId,
            tagNumber
        });
    }

    private async tryAssignTag(tagNumber: number) {
        try {
            await this.api.assignOrderTag(this.orderId, tagNumber).send();
            return true;
        }
        catch (error) {
            if (error instanceof HttpError && error.statusCode === 409) { // Conflict
                return false;
            }
            else {
                throw error;
            }
        }
    }
}