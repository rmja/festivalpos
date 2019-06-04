import { Api } from "../../api";
import { Patch } from "ur-jsonpatch";
import { Printer } from "../../api/printer";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditPrinter {
    private printerId!: number;
    name!: string;
    terminals!: TerminalViewModel[];
    terminal?: TerminalViewModel;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { printerId: string }) {
        this.printerId = Number(params.printerId);
        const printer = await this.api.getPrinter(this.printerId).transfer();
        this.name = printer.name;
        this.terminals = await this.api.getAllTerminals().transfer();
        this.terminal = this.terminals.find(x => x.id === printer.terminalId);
    }

    async delete() {
        if (confirm("Skal printeren slettes?")) {
            await this.api.deletePrinter(this.printerId).send();
            this.router.navigateToRoute("list");
        }
    }

    async submit() {
        const patch = new Patch<Printer>()
            .replace(x => x.name, this.name)
            .replace(x => x.terminalId, this.terminal ? this.terminal.id : null);

        await this.api.updatePrinter(this.printerId, patch.operations).transfer();
        this.router.navigateToRoute("list");
    }
}

export interface TerminalViewModel {
    id: number;
    name: string;
}