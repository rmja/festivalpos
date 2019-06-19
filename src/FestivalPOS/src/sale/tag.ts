import { autoinject, observable } from "aurelia-framework";

import { Api } from "../api";
import { Big } from "big.js";
import { HttpError } from "ur-http";
import { Router } from "aurelia-router";

@autoinject()
export class Tag {
    @observable()
    tagNumber!: Big;
    notFound = false;

    constructor(private api: Api, private router: Router) {
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
            var order = await this.api.getCurrentOrderByTag(tagNumber).transfer();
        }
        catch (error) {
            if (error instanceof HttpError && error.statusCode === 404) {
                this.notFound = true;
                return;
            }

            throw error;
        }

        this.router.navigateToRoute("process-presale", {
            orderId: order.id,
            tagNumber: tagNumber
        });
    }
}