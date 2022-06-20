import { faCashRegister, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Api } from "../api";
import { Big } from "big.js";
import { DateTime } from "luxon";
import { Order } from "../api/order";
import { ProgressService } from "../resources/progress-service";
import { QueryString } from "@utiliread/http";
import { Router } from "aurelia-router";
import { State } from "../state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";

@autoinject()
@connectTo({
    setup: "activate",
    selector: store => store.state
})
export class MobilepayPayment {
    private state!: State;
    private order!: Order;
    private tagNumber?: string;
    total!: Big;
    amountDue!: Big;
    mobilepayNumber!: number;
    transactionNumber!: string;
    qrValue!: string;

    get canSubmit() {
        return this.amountDue.gt(0);
    }

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
    }

    async activate(params: { orderId: string, tagNumber?: string }) {
        const orderId = Number(params.orderId);
        this.tagNumber = params.tagNumber;
        this.order = await this.api.getOrderById(orderId).transfer();

        this.total = this.order.total;
        this.amountDue = this.order.amountDue;
        this.mobilepayNumber = this.state.mobilepayNumber!;
        const timestamp = Math.floor(DateTime.utc().toSeconds());
        this.transactionNumber = `${timestamp}-${this.order.terminalId}`;
        this.qrValue = generateLink(this.mobilepayNumber, Number(this.amountDue.toFixed(0)), this.transactionNumber, true);
    }

    async cancel() {
        try {
            if (!this.progress.tryBusy("Sletter ordre", faTrash)) {
                return;
            }

            await this.api.deleteOrder(this.order.id).send();

            await this.progress.done();

            this.router.navigate("/sale");
        }
        catch (error) {
            await this.progress.error("Ordren kunne ikke slettes", error);
        }
    }

    async submit() {
        if (!this.canSubmit) {
            return;
        }

        try {
            if (!this.progress.tryBusy("Registrerer betaling", faCashRegister)) {
                return;
            }

            const payment = await this.api.createPayment(this.order.id, {
                method: "mobilePay",
                amount: this.amountDue,
                transactionNumber: this.transactionNumber,
            }).transfer();

            await this.progress.done();

            this.router.navigateToRoute("receipt", {
                orderId: payment.orderId,
                paymentId: payment.id,
                tagNumber: this.tagNumber
            });
        }
        catch (error) {
            await this.progress.error("Betalingen kunne ikke registreres", error);
        }
    }
}

function generateLink(phone: number, amount?: number, comment?: string, lock = false) {
    return QueryString.append("https://www.mobilepay.dk/erhverv/betalingslink/betalingslink-svar", {
        phone,
        amount,
        comment,
        lock: lock ? 1 : 0,
    });
}