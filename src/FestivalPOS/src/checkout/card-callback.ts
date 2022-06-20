import { autoinject, noView } from "aurelia-framework";

import { Api } from "../api";
import { Big } from "big.js";
import { ProgressService } from "../resources/progress-service";
import { RedirectToRoute } from "aurelia-router";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";

@noView()
@autoinject()
export class CardCallback {
    constructor(private api: Api, private progress: ProgressService) {
    }

    // Example callback url: https://example.com/?smp-status=success&smp-message=Transaction%20successful.&smp-receipt-sent=false&smp-tx-code=TDT3L2XDGM#/checkout/orders/87/pay/card-callback?amount=40
    async canActivate(params: { orderId: string, amount: string, tagNumber?: string } & SumUpCallbackParams & {[key: string]: string}) {
        const orderId = Number(params.orderId);
        const amount = new Big(params.amount);
        
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.forEach((value, key) => {
            if (!(key in params)) {
                params[key] = value;
            }
        });

        if (params["smp-status"] === "success") {
            try {
                this.progress.setBusy("Registrerer betaling", faCashRegister);

                const payment = await this.api.createPayment(orderId, {
                    method: "card",
                    amount: amount,
                    transactionNumber: params["smp-tx-code"]
                }).transfer();

                await this.progress.done();

                return new RedirectToRoute("receipt", {
                    orderId: orderId,
                    paymentId: payment.id,
                    tagNumber: params.tagNumber
                }, {
                    replace: true
                });
            }
            catch (error) {
                await this.progress.error("Betalingen kunne ikke registreres", error);
            }
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