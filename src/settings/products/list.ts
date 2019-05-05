import { autoinject } from "aurelia-framework";
import { Api } from "../../api";
import { DialogService } from "aurelia-dialog";
import { Big } from "big.js";

@autoinject()
export class ProductList {
    products!: ProductViewModel[];

    constructor(private api: Api, private dialog: DialogService) {
    }

    async activate() {
        this.products = await this.api.getAllProducts().transfer();
    }
}

interface ProductViewModel {
    id: number;
    name: string;
    price: Big;
}