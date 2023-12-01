import { autoinject, useView } from "aurelia-framework";

import { Account } from "../../api/account";
import { Api } from "../../api";
import { Big } from "big.js";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreateAccount {
  private accounts!: Account[];
  number = 0;
  name = "";
  maxCredit = "0";
  highPriorityServing = false;

  get canSubmit() {
    return (
      this.number > 0 &&
      !!this.name.length &&
      this.accounts &&
      this.accounts.findIndex((x) => x.number === this.number) === -1
    );
  }

  constructor(
    private api: Api,
    private router: Router,
  ) {}

  async activate() {
    this.accounts = await this.api.getAllAccounts().transfer();
  }

  async submit() {
    const account = await this.api
      .createAccount({
        number: this.number,
        name: this.name,
        maxCredit: new Big(this.maxCredit),
        highPriorityServing: this.highPriorityServing,
      })
      .transfer();

    this.router.navigateToRoute("details", {
      accountId: account.id,
    });
  }
}
