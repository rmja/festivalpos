import { autoinject, observable } from "aurelia-framework";

import { Api } from "../api";
import { Big } from "big.js";
import { HttpError } from "ur-http";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

@autoinject()
export class Tag {
    @observable()
    tagNumber!: Big;
    notFound = false;

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
    }

    activate() {
        this.tagNumber = new Big(0);
    }

    protected tagNumberChanged() {
        this.notFound = false;
    }

    async submit() {
        const tagNumber = Number(this.tagNumber.toFixed());

        try {
            this.progress.busy("Registrerer brik", faTicketAlt);
            
            var order = await this.api.getCurrentOrderByTag(tagNumber).transfer();

            this.progress.done();
        }
        catch (error) {
            if (error instanceof HttpError && error.statusCode === 404) {
                this.notFound = true;
            }
            else {
                await this.progress.error("Brikken kunne ikke registreres");
            }

            return;
        }

        this.router.navigateToRoute("process-presale", {
            orderId: order.id,
            tagNumber: tagNumber
        });
    }
}