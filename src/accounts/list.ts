import { autoinject } from "aurelia-framework";
import { Api } from "../api";
import { Big } from "big.js";

@autoinject()
export class AccountsList {
    accounts!: AccountViewModel[];

    constructor(private api: Api) {
    }

    async activate() {
        this.accounts = await this.api.getAllAccounts().transfer();
    }
}

interface AccountViewModel {
    id: number;
    number: number;
    name: string;
    maxCredit: Big;
    remainingCredit: Big;
}