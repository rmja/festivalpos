import { autoinject } from "aurelia-framework";
import { Api } from "../api";
import Big from "big.js";
import { State, addProductOrderLine } from "../state";
import { Store, connectTo } from "aurelia-store";

@connectTo({
    selector: store => store.state,
    setup: "activate"
})
@autoinject()
export class Products {
    private state!: State;
    products!: ProductViewModel[];

    constructor(private api: Api, private store: Store<State>) {
    }

    async activate() {
        this.products = await this.api.getProductsByPointOfSaleId(this.state.pointOfSaleId).transfer();
    }

    addToCart(product: ProductViewModel) {
        return this.store.dispatch(addProductOrderLine, product);
    }
}

interface ProductViewModel {
    id: number;
    name: string;
    price: Big;
}