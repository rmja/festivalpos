import { autoinject, computedFrom, observable } from "aurelia-framework";

import { Account } from "../api/account";
import { Api } from "../api";
import { Big } from "big.js";
import { Order } from "../api/order";
import { Router } from "aurelia-router";

@autoinject()
export class AccountPayment {
    private order!: Order;
    private accounts!: Account[];
    private account?: Account;
    total!: Big;
    @observable() accountNumber!: Big;

    @computedFrom(nameof<AccountPayment>(x => x.account))
    get accountName() {
        if (this.account) {
            return this.account.name;
        }
    }

    @computedFrom(nameof<AccountPayment>(x => x.account))
    get remainingCredit() {
        if (this.account) {
            return this.account.remainingCredit;
        }
    }

    @computedFrom(nameof<AccountPayment>(x => x.account))
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

    constructor(private api: Api, private router: Router) {
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

        await this.api.assignOrderTag(this.order.id, this.account.number, true).send();

        const payment = await this.api.createPayment(this.order.id, {
            method: "account",
            amount: this.total,
            accountId: this.account.id
        }).transfer();

        this.router.navigateToRoute("receipt", {
            orderId: payment.orderId,
            paymentId: payment.id,
            tagNumber: this.account.number
        });
    }

    protected accountNumberChanged() {
        const number = parseInt(this.accountNumber.toFixed(0));
        this.account = this.accounts.find(x => x.number === number);
    }
}