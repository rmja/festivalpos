import { autoinject, useView } from "aurelia-framework";
import { Api } from "../../api";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreatePointOfSale {
    name = "";

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async submit() {
        const pos = await this.api.createPointOfSale({ name: this.name }).transfer();
        this.router.navigateToRoute("details", {
            pointOfSaleId: pos.id
        });
    }
}