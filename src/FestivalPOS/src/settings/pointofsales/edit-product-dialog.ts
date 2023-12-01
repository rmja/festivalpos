import { autoinject, observable, useView } from "aurelia-framework";

import { DialogController } from "aurelia-dialog";
import { PointOfSaleProduct } from "./../../api/point-of-sale-product";

@autoinject()
@useView("settings/pointofsales/edit-product-dialog.html")
export class EditProductDialog {
  private product!: PointOfSaleProduct;
  @observable()
  presale!: boolean;
  isServing!: boolean;

  constructor(private controller: DialogController) {}

  activate(product: PointOfSaleProduct) {
    this.product = product;
    this.presale = product.presale;
    this.isServing = product.isServing;
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
    const result: PointOfSaleProduct = JSON.parse(JSON.stringify(this.product));
    result.presale = this.presale;
    result.isServing = this.isServing;
    this.controller.ok(result);
  }
}
