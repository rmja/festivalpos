import { autoinject } from "aurelia-framework";
import { Api } from "../../api";
import { PointOfSale } from "../../api/point-of-sale";
import { Router } from "aurelia-router";

@autoinject()
export class AccountDetails {
    private account!: PointOfSale;
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