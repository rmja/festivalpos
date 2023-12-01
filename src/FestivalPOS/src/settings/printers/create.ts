import { Api } from "../../api";
import { Router } from "aurelia-router";
import { State } from "../../state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { getPrinterNames } from "../../restprint";

@connectTo({
  setup: "activate",
  selector: (store) => store.state,
})
@autoinject()
export class CreatePrinter {
  private state!: State;
  name = "";
  terminal!: TerminalViewModel;
  printerNames!: string[];
  selectedPrinterName?: string;

  get canSubmit() {
    return !!this.name.length && this.selectedPrinterName;
  }

  constructor(
    private api: Api,
    private router: Router,
  ) {}

  async activate() {
    this.terminal = await this.api
      .getTerminal(this.state.terminalId)
      .transfer();
    this.printerNames = await getPrinterNames();
  }

  async submit() {
    await this.api
      .createPrinter({
        name: this.name,
        terminalId: this.terminal.id,
        restPrintPrinterName: this.selectedPrinterName,
      })
      .transfer();
    this.router.navigateToRoute("list");
  }
}

interface TerminalViewModel {
  id: number;
  name: string;
}
