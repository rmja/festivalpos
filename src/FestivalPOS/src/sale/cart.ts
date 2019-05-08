import { autoinject, computedFrom } from "aurelia-framework";
import { connectTo, dispatchify } from "aurelia-store";
import { State, removeOrderLine, resetOrder } from "../state";
import { Big } from "big.js";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

@autoinject()
@connectTo()
export class Cart {
    private state!: State;
    faShoppingCart = faShoppingCart;

    delete = dispatchify(removeOrderLine);
    clear = dispatchify(resetOrder);

    @computedFrom("state")
    get orderLines(): OrderLineViewModel[] {
        return this.state.orderLines;
    }
}

interface OrderLineViewModel {
    quantity: number;
    name?: string;
    total: Big;
}