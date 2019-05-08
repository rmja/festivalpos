import { noView, autoinject } from "aurelia-framework";
import { RedirectToRoute } from "aurelia-router";
import { Api } from "../api";
import { Big } from "big.js";

@noView()
@autoinject()
export class CardCallback {
    constructor(private api: Api) {
    }

    async canActivate(params: { orderId: string, amount: string } & SumUpCallbackParams) {
        const orderId = Number(params.orderId);
        const amount = new Big(params.amount);

        if (params["smp-status"] === "success") {
            const payment = await this.api.createPayment(orderId, {
                method: "card",
                amount: amount,
                transactionNumber: params["smp-tx-code"]
            }).transfer();

            return new RedirectToRoute("receipt", {
                orderId: orderId,
                paymentId: payment.id,
            }, {
                replace: true
            });
        }
        else {
            return new RedirectToRoute("card-error", {
                orderId: orderId,
                cause: params["smp-failure-cause"],
                message: params["smp-message"]
            }, {
                replace: true
            });
        }
    }
}

type SumUpCallbackParams = SumUpSuccessCallbackParams | SumUpFailureCallbackParams;

interface SumUpSuccessCallbackParams {
    "smp-status": "success";
    "smp-message": string;
    "smp-receipt-sent": "true" | "false";
    "smp-tx-code": string;
}

interface SumUpFailureCallbackParams {
    "smp-status": "failed";
    "smp-failure-cause": string;
    "smp-message": string;
    "smp-receipt-sent": "true" | "false";
    "smp-tx-code": string;
}