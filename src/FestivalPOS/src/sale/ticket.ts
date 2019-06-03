import { BACKSPACE, COMMA, Digit, ENTER } from "../keys";
import { Big, RoundingMode } from "big.js";

import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class Ticket {
    orderId!: Big;

    constructor(private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async activate() {
        this.orderId = new Big(0);

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
        this.orderId = this.orderId.div(10).round(0, RoundingMode.RoundDown);
    }

    pushKey(value: Digit | "00") {
        if (value === "00") {
            this.orderId = this.orderId.mul(100);
        }
        else {
            this.orderId = this.orderId.mul(10).add(new Big(value));
        }
    }

    async submit() {
        this.router.navigateToRoute("process-presale", {
            orderId: this.orderId
        });
    }
}