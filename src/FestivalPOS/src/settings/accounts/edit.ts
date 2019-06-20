import { Account } from "../../api/account";
import { Api } from "../../api";
import {Big} from "big.js";
import { Patch } from "ur-jsonpatch";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditAccount {
    private accountId!: number;
    private accounts!: Account[];
    number!: number;
    name!: string;
    maxCredit!: Big;
    highPriorityServing!: boolean;

    get canSubmit() {
        return this.number > 0 && !!this.name.length && this.accounts.findIndex(x => x.id !== this.accountId && x.number === this.number) === -1;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { accountId: string }) {
        this.accountId = Number(params.accountId);
        const account = await this.api.getAccount(this.accountId).transfer();
        this.accounts = await this.api.getAllAccounts().transfer();
        this.number = account.number;
        this.name = account.name;
        this.maxCredit = account.maxCredit;
        this.highPriorityServing = account.highPriorityServing;
    }

    async submit() {
        const patch = new Patch<Account>()
            .replace(x => x.number, this.number)
            .replace(x => x.name, this.name)
            .replace(x => x.maxCredit, this.maxCredit)
            .replace(x => x.highPriorityServing, this.highPriorityServing);

        await this.api.updateAccount(this.accountId, patch.operations).transfer();
        this.router.navigateToRoute("details", { accountId: this.accountId });
    }
}