import { autoinject, useView } from "aurelia-framework";

import { Api } from "../../api";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreatePrinter {
    name = "";

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async submit() {
        await this.api.createPrinter({ name: this.name }).transfer();
        this.router.navigateToRoute("list");
    }
}