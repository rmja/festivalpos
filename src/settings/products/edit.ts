import { autoinject } from "aurelia-framework";
import { Api } from "../../api";
import { Patch } from "ur-jsonpatch";
import { Router } from "aurelia-router";
import { Product } from "../../api/product";
import { Big } from "big.js";

@autoinject()
export class EditProduct {
    private productId!: number;
    name!: string;
    price!: string;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { productId: string }) {
        this.productId = Number(params.productId);
        const product = await this.api.getProduct(this.productId).transfer();
        this.name = product.name;
        this.price = product.price.toFixed(2);
    }

    async delete() {
        if (confirm("Skal produktet slettes?")) {
            await this.api.deleteProduct(this.productId).send();
            this.router.navigateToRoute("list");
        }
    }

    async submit() {
        const patch = new Patch<Product>()
            .replace(x => x.name, this.name)
            .replace(x => x.price, new Big(this.price));

        await this.api.updateProduct(this.productId, patch.operations).transfer();
        this.router.navigateToRoute("list");
    }
}