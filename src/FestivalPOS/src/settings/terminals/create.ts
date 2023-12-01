import { autoinject, useView } from "aurelia-framework";
import { Api } from "../../api";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreateTerminal {
  name = "";

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(
    private api: Api,
    private router: Router,
  ) {}

  async submit() {
    const terminal = await this.api
      .createTerminal({ name: this.name })
      .transfer();
    this.router.navigateToRoute("list");
  }
}
