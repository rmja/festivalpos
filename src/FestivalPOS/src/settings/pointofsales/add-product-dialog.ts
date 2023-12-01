import { autoinject, observable, useView } from "aurelia-framework";

import { Api } from "../../api";
import { DialogController } from "aurelia-dialog";
import { PointOfSaleProduct } from "./../../api/point-of-sale-product";
import { Product } from "../../api/product";

@autoinject()
@useView("settings/pointofsales/add-product-dialog.html")
export class AddProductDialog {
  products!: ProductViewModel[];
  product!: ProductViewModel;
  @observable()
  presale = false;
  isServing = false;

  constructor(
    private controller: DialogController,
    private api: Api,
  ) {}

  async canActivate() {
    this.products = await this.api.getAllProducts().transfer();

    return !!this.products.length;
  }

  activate() {
    this.product = this.products[0];
  }

  presaleChanged() {
    if (this.presale) {
      this.isServing = false;
    }
  }

  close() {
    this.controller.cancel();
  }

  submit() {
    const output: PointOfSaleProduct = {
      product: this.product,
      presale: this.presale,
      isServing: this.isServing,
    };
    this.controller.ok(output);
  }
}

interface ProductViewModel extends Product {
  name: string;
}
