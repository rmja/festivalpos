import { Api } from "../../api";
import { Patch } from "@utiliread/jsonpatch";
import { Router } from "aurelia-router";
import { Terminal } from "../../api/terminal";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditTerminal {
  private terminalId!: number;
  name!: string;

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(
    private api: Api,
    private router: Router
  ) {}

  async activate(params: { terminalId: string }) {
    this.terminalId = Number(params.terminalId);
    const terminal = await this.api.getTerminal(this.terminalId).transfer();
    this.name = terminal.name;
  }

  async delete() {
    if (confirm("Skal terminalen slettes?")) {
      await this.api.deleteTerminal(this.terminalId).send();
      this.router.navigateToRoute("list");
    }
  }

  async submit() {
    const patch = new Patch<Terminal>().replace((x) => x.name, this.name);

    await this.api.updateTerminal(this.terminalId, patch.operations).transfer();
    this.router.navigateToRoute("list");
  }
}
