import { autoinject, useView } from "aurelia-framework";

import { Api } from "../../api";
import { Router } from "aurelia-router";
import { TerminalViewModel } from "./edit";

@autoinject()
@useView("./edit.html")
export class CreatePrinter {
    name = "";
    terminals!: TerminalViewModel[];
    terminal?: TerminalViewModel;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate() {
        this.terminals = await this.api.getAllTerminals().transfer();
    }

    async submit() {
        await this.api.createPrinter({ name: this.name, terminalId: this.terminal && this.terminal.id }).transfer();
        this.router.navigateToRoute("list");
    }
}