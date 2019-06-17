import { BACKSPACE, COMMA, Digit, ENTER } from "../keys";
import { Big, RoundingMode } from "big.js";
import { autoinject, observable } from "aurelia-framework";

import { Api } from "../api";
import { HttpError } from "ur-http";
import { Router } from "aurelia-router";

@autoinject()
export class Tag {
    @observable()
    tagNumber!: Big;
    notFound = false;

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    activate() {
        this.tagNumber = new Big(0);

        document.addEventListener("keyup", this.keyup);
    }

    deactivate() {
        document.removeEventListener("keyup", this.keyup);
    }

    private keyup(event: KeyboardEvent) {
        if (event.key >= "0" && event.key <= "9") {
            const digit = Number(event.key) as Digit;
            this.pushKey(digit);
        }
        else if (event.key === COMMA) {
            this.pushKey("00");
        }
        else if (event.key === BACKSPACE) {
            this.backspace();
        }
        else if (event.key === ENTER) {
            return this.submit();
        }
    }

    backspace() {
        this.tagNumber = this.tagNumber.div(10).round(0, RoundingMode.RoundDown);
    }

    pushKey(value: Digit | "00") {
        if (value === "00") {
            this.tagNumber = this.tagNumber.mul(100);
        }
        else {
            this.tagNumber = this.tagNumber.mul(10).add(new Big(value));
        }
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