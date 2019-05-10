import { autoinject } from "aurelia-framework";
import { Api } from "../api";
import { Big } from "big.js";
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
        this.updateQuantity(this.state);
    }

    addToCart(product: ProductViewModel) {
        return this.store.dispatch(addProductOrderLine, product);
    }

    stateChanged(newState: State) {
        if (this.products) {
            this.updateQuantity(newState);
        }
    }

    private updateQuantity(state: State) {
        for (const product of this.products) {
            product.qty = state.orderLines.filter(x => x.productId === product.id).reduce((sum, line) => sum + line.quantity, 0);
        }
    }
}

interface ProductViewModel {
    id: number;
    name: string;
    price: Big;
    thumbnailImageUrl?: string;
    qty?: number;
}