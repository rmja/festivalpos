import { Api } from "../api";
import { Big } from "big.js";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class Deposit {
  private accountId!: number;
  name!: string;
  number!: number;
  amount = new Big(0);

  constructor(
    private api: Api,
    protected router: Router,
  ) {}

  async activate(params: { accountId: string }) {
    this.accountId = Number(params.accountId);
    const account = await this.api.getAccount(this.accountId).transfer();
    this.name = account.name;
    this.number = account.number;
  }

  async submit() {
    await this.api.depositAccount(this.accountId, this.amount).send();
    this.router.navigateToRoute("details");
  }
}
