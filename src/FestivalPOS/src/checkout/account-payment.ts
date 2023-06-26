import { autoinject, computedFrom, observable } from "aurelia-framework";

import { Account } from "../api/account";
import { Api } from "../api";
import { Big } from "big.js";
import { HttpError } from "@utiliread/http";
import { Order } from "../api/order";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { nameof } from "../utils";

@autoinject()
export class AccountPayment {
    private order!: Order;
    private accounts!: Account[];
    account?: Account;
    total!: Big;
    @observable() accountNumber!: Big;

    @computedFrom(nameof<AccountPayment>("account"))
    get accountName() {
        if (this.account) {
            return this.account.name;
        }
    }

    @computedFrom(nameof<AccountPayment>("account"))
    get remainingCredit() {
        if (this.account) {
            return this.account.remainingCredit;
        }
    }

    @computedFrom(nameof<AccountPayment>("account"))
    get remainingCreditClass() {
        if (this.account) {
            if (this.account.remainingCredit.gte(this.total)) {
                return "text-success";
            }
            else {
                return "text-danger";
            }
        }
    }

    get canSubmit() {
        return this.account && this.remainingCredit && this.remainingCredit.gte(this.total);
    }

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
    }

    async activate(params: { orderId: string }) {
        const orderId = Number(params.orderId);
        this.order = await this.api.getOrderById(orderId).transfer();
        this.accounts = await this.api.getAllAccounts().transfer();

        this.total = this.order.total;
        this.accountNumber = new Big(0);
    }

    async cancel() {
        await this.api.deleteOrder(this.order.id).send();

        this.router.navigate("/sale");
    }

    async submit() {
        if (!this.canSubmit) {
            return;
        }

        if (!this.account) {
            throw new Error();
        }

        try {
            if (!this.progress.tryBusy("Registrerer betaling", faCashRegister)) {
                return;
            }

            const payment = await this.api.createPayment(this.order.id, {
                method: "account",
                amount: this.total,
                accountId: this.account.id
            }).transfer();

            await this.progress.done();

            if (this.order.canHaveTag()) {
                    this.router.navigateToRoute("account-tag", {
                    orderId: payment.orderId,
                    paymentId: payment.id,
                    accountNumber: this.account.number
                });
            }
            else {
                this.router.navigateToRoute("receipt", {
                    orderId: payment.orderId,
                    paymentId: payment.id,
                    tagNumber: this.account.number
                });
            }
        }
        catch (error) {
            await this.progress.error("Betalingen kunne ikke registreres", error);
        }
    }

    protected accountNumberChanged() {
        const number = parseInt(this.accountNumber.toFixed(0));
        this.account = this.accounts.find(x => x.number === number);
    }
}