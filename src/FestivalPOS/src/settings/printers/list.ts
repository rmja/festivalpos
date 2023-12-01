import { Api } from "../../api";
import { autoinject } from "aurelia-framework";

@autoinject()
export class PrintersList {
  printers!: PrinterViewModel[];

  constructor(private api: Api) {}

  async activate() {
    this.printers = await this.api.getAllPrinters().transfer();
    const terminals = await this.api.getAllTerminals().transfer();

    for (const printer of this.printers) {
      const terminal = terminals.find((x) => x.id === printer.terminalId);
      if (terminal) {
        printer.terminalName = terminal.name;
      }
    }
  }
}

interface PrinterViewModel {
  id: number;
  name: string;
  terminalId: number;
  restPrintPrinterName?: string;
  terminalName?: string;
}
