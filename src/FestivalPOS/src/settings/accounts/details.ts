import { Account } from './../../api/account';
import { Api } from "../../api";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class AccountDetails {
    private account!: Account;
    accountId!: number;
    name!: string;

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { accountId: string }) {
        this.accountId = Number(params.accountId);

        this.account = await this.api.getAccount(this.accountId).transfer();
        this.name = this.account.name;
    }

    async delete() {
        if (confirm("Skal kontoen slettes?")) {
            await this.api.deleteAccount(this.account.id).send();
            this.router.navigateToRoute("list");
        }
    }

    async submit() {
        this.router.navigateToRoute("list");
    }
}