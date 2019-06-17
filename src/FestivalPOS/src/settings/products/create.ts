import { autoinject, useView } from "aurelia-framework";

import { Api } from "../../api";
import { Big } from "big.js";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreateProduct {
    name = "";
    price = "0";
    isServing = false;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async submit() {
        await this.api.createProduct({ name: this.name, price: new Big(this.price), isServing: this.isServing }).send();
        this.router.navigateToRoute("list");
    }
}