import { Api } from "../../api";
import { autoinject, useView } from "aurelia-framework";
import { Big } from "big.js";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreateProduct {
    name = "";
    price = "0";

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async submit() {
        const product = await this.api.createProduct({ name: this.name, price: new Big(this.price) }).transfer();
        this.router.navigateToRoute("list");
    }
}