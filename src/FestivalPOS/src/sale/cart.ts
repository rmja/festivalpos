import { State, removeOrderLine, resetOrder } from "../state";
import { Store, connectTo } from "aurelia-store";
import { autoinject, computedFrom } from "aurelia-framework";

import { Big } from "big.js";
import { Router } from "aurelia-router";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

@autoinject()
@connectTo()
export class Cart {
  private state!: State;
  faShoppingCart = faShoppingCart;

  constructor(
    private store: Store<State>,
    private router: Router,
  ) {}

  @computedFrom("state")
  get orderLines(): OrderLineViewModel[] {
    return this.state.orderLines;
  }

  async delete(index: number) {
    await this.store.dispatch(removeOrderLine, index);

    if (this.state.orderLines.length === 0) {
      this.router.navigateToRoute("products");
    }
  }

  async clear() {
    await this.store.dispatch(resetOrder);
    this.router.navigateToRoute("products");
  }
}

interface OrderLineViewModel {
  quantity: number;
  name?: string;
  total: Big;
}
