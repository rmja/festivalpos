import { autoinject } from "aurelia-framework";
import { Api } from "../../api";

@autoinject()
export class TerminalsList {
    terminals!: TerminalViewModel[];

    constructor(private api: Api) {
    }

    async activate() {
        this.terminals = await this.api.getAllTerminals().transfer();
    }
}

interface TerminalViewModel {
    id: number;
    name: string;
}