import { BACKSPACE, COMMA, Digit, ENTER } from "../keys";
import { Big, RoundingMode } from "big.js";
import { RedirectToRoute, Router } from "aurelia-router";

import { Api } from "../api";
import { HttpError } from "ur-http";
import { Order } from "../api/order";
import { autoinject } from "aurelia-framework";

type PaymentMethod = "card" | "cash" | "account";

@autoinject()
export class Tag {
    tagNumber!: Big;
    canSkip!: boolean;
    private orderId!: number;
    private order!: Order;
    private paymentMethod!: PaymentMethod;

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
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

    skip() {
        this.router.navigateToRoute(this.paymentMethod, {
            orderId: this.orderId
        });
    }

    async submit() {
        const tagNumber = Number(this.tagNumber.toFixed());

        let forceAssign = false;
        try {
            await this.api.assignOrderTag(this.orderId, tagNumber).send();
        }
        catch (error) {
            if (error instanceof HttpError && error.statusCode === 409) { // Conflict
                if (confirm(`Brik ${this.tagNumber} er allerede i brug, skal den virkelig bruges?`)) {
                    forceAssign = true;
                }
                else {
                    return;
                }
            }
        }

        if (forceAssign) {
            await this.api.assignOrderTag(this.orderId, tagNumber, true).send();
        }

        this.router.navigateToRoute(this.paymentMethod, {
            orderId: this.orderId,
            tagNumber
        });
    }
}