import { Big, RoundingMode } from "big.js";
import { autoinject, observable, computedFrom } from "aurelia-framework";
import { Account } from "../api/account";
import { Api } from "../api";
import { Order } from "../api/order";
import { Router } from "aurelia-router";
import { Digit, ENTER, ESCAPE, COMMA, BACKSPACE } from "../keys";

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
        this.keyup = this.keyup.bind(this);
    }

    async activate(params: { orderId: string }) {
        const orderId = Number(params.orderId);
        this.order = await this.api.getOrderById(orderId).transfer();
        this.accounts = await this.api.getAllAccounts().transfer();

        this.total = this.order.total;
        this.accountNumber = new Big(0);

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
        else if (event.key === ESCAPE) {
            return this.cancel();
        }
    }

    backspace() {
        this.accountNumber = this.accountNumber.div(10).round(0, RoundingMode.RoundDown);
    }

    pushKey(value: Digit | "00") {
        if (value === "00") {
            this.accountNumber = this.accountNumber.mul(100);
        }
        else {
            this.accountNumber = this.accountNumber.mul(10).add(new Big(value));
        }
    }

    async cancel() {
        await this.api.deleteOrder(this.order.id);

        this.router.navigate("/sale");
    }

    async submit() {
        if (!this.canSubmit) {
            return;
        }

        if (!this.account) {
            throw new Error();
        }

        const payment = await this.api.createPayment(this.order.id, {
            method: "account",
            amount: this.total,
            accountId: this.account.id
        }).transfer();

        this.router.navigateToRoute("receipt", {
            orderId: payment.orderId,
            paymentId: payment.id
        });
    }

    protected accountNumberChanged() {
        const number = parseInt(this.accountNumber.toFixed(0));
        this.account = this.accounts.find(x => x.number === number);
    }
}