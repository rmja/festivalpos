import { autoinject, useView, PLATFORM, viewStrategy } from "aurelia-framework";
import { Api } from "../../api";
import { Product } from "../../api/product";
import { DialogController } from "aurelia-dialog";

@autoinject()
@useView("settings/pointofsales/add-product-dialog.html")
export class AddProductDialog {
    products!: ProductViewModel[];
    product!: ProductViewModel;

    constructor(private controller: DialogController, private api: Api) {
    }

    async canActivate() {
        this.products = await this.api.getAllProducts().transfer();

        return !!this.products.length;
    }

    activate() {
        this.product = this.products[0];
    }

    close() {
        this.controller.cancel();
    }

    submit() {
        this.controller.ok(this.product);
    }
}

interface ProductViewModel extends Product {
    name: string;
}