import { Api } from "../../api";
import { Patch } from "@utiliread/jsonpatch";
import { Printer } from "../../api/printer";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditPrinter {
  private printerId!: number;
  name!: string;

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(
    private api: Api,
    private router: Router,
  ) {}

  async activate(params: { printerId: string }) {
    this.printerId = Number(params.printerId);
    const printer = await this.api.getPrinter(this.printerId).transfer();
    this.name = printer.name;
  }

  async delete() {
    if (confirm("Skal printeren slettes?")) {
      await this.api.deletePrinter(this.printerId).send();
      this.router.navigateToRoute("list");
    }
  }

  async submit() {
    const patch = new Patch<Printer>().replace((x) => x.name, this.name);

    await this.api.updatePrinter(this.printerId, patch.operations).transfer();
    this.router.navigateToRoute("list");
  }
}
