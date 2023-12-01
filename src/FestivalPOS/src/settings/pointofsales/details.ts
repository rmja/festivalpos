import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

import { AddProductDialog } from "./add-product-dialog";
import { Api } from "../../api";
import { DialogService } from "aurelia-dialog";
import { EditProductDialog } from "./edit-product-dialog";
import { PointOfSale } from "../../api/point-of-sale";
import { PointOfSaleProduct } from "./../../api/point-of-sale-product";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";
import { diff } from "@utiliread/jsonpatch";
import { moveBefore } from "../../move-before";

@autoinject()
export class PointOfSaleDetails {
  private pointOfSale!: PointOfSale;
  pointOfSaleId!: number;
  name!: string;
  private currentProducts!: PointOfSaleProduct[];
  products!: PointOfSaleProductViewModel[];

  constructor(
    private api: Api,
    private router: Router,
    private dialog: DialogService,
  ) {}

  async activate(params: { pointOfSaleId: string }) {
    this.pointOfSaleId = Number(params.pointOfSaleId);

    this.pointOfSale = await this.api
      .getPointOfSale(this.pointOfSaleId)
      .transfer();
    this.name = this.pointOfSale.name;
    this.currentProducts = await this.api
      .getProductsByPointOfSaleId(this.pointOfSaleId)
      .transfer();
    this.products = [...this.currentProducts];
  }

  async delete() {
    if (confirm("Skal salgsstedet slettes?")) {
      await this.api.deletePointOfSale(this.pointOfSale.id).send();
      this.router.navigateToRoute("list");
    }
  }

  async addProduct() {
    const result = await this.dialog
      .open({ viewModel: AddProductDialog })
      .whenClosed();

    if (!result.wasCancelled) {
      const item = result.output as PointOfSaleProduct;
      this.products.push(item);
    }
  }

  async editProduct(index: number) {
    const product = this.products[index];
    const result = await this.dialog
      .open({ viewModel: EditProductDialog, model: product })
      .whenClosed();

    if (!result.wasCancelled) {
      const item = result.output as PointOfSaleProduct;
      this.products.splice(index, 1, item);
    }
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  itemDropped(itemElement: HTMLElement, siblingElement: HTMLElement) {
    const item = this.products[Number(itemElement.dataset.index)];
    const sibling = siblingElement
      ? this.products[Number(siblingElement.dataset.index)]
      : undefined;
    moveBefore(
      this.products,
      (x) => x === item,
      (x) => x === sibling,
    );
  }

  getBoolIcon(value: boolean) {
    return value ? faCheckSquare : faSquare;
  }

  async submit() {
    const operations = diff(this.currentProducts, this.products);

    await this.api
      .updateProductsByPointOfSaleId(this.pointOfSale.id, operations)
      .transfer();
    this.currentProducts = this.products;
    this.router.navigateToRoute("list");
  }
}

type PointOfSaleProductViewModel = PointOfSaleProduct & {
  product: {
    id: number;
    name: string;
  };

  presale: boolean;
  isServing: boolean;
};
