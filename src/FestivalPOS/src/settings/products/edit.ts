import "croppie/croppie.css";

import * as Croppie from "croppie";

import { createCroppie, destroyCroppie } from "./crop-utils";

import { Api } from "../../api";
import { Big } from "big.js";
import { Patch } from "@utiliread/jsonpatch";
import { Product } from "../../api/product";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";
import { nameof } from "../../utils";

@autoinject()
export class EditProduct {
  private productId!: number;
  name!: string;
  price!: string;
  imageUrl?: string;

  private croppie?: Croppie;
  protected croppieElement!: HTMLDivElement;
  protected file!: HTMLInputElement;

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(private api: Api, private router: Router) {}

  async activate(params: { productId: string }) {
    this.productId = Number(params.productId);
    const product = await this.api.getProduct(this.productId).transfer();
    this.name = product.name;
    this.price = product.price.toFixed(2);
    this.imageUrl = product.previewImageUrl;
  }

  deactivate() {
    if (this.croppie) {
      this.croppie.destroy();
    }
  }

  async fileSelected() {
    this.croppie = await createCroppie(this.file, this.croppieElement);
  }

  async delete() {
    if (confirm("Skal produktet slettes?")) {
      await this.api.deleteProduct(this.productId).send();
      this.router.navigateToRoute("list");
    }
  }

  deleteImage() {
    if (this.croppie) {
      destroyCroppie(this.file, this.croppie);
      delete this.croppie;
    }
    delete this.imageUrl;
  }

  async submit() {
    let patch = new Patch<Product>()
      .replace((x) => x.name, this.name)
      .replace((x) => x.price, new Big(this.price));

    if (!this.imageUrl) {
      patch = patch.replace(nameof<Product>("previewImageName"), null);
      patch = patch.replace(nameof<Product>("thumbnailImageName"), null);
    }

    await this.api.updateProduct(this.productId, patch.operations).transfer();

    if (this.croppie && this.file.files) {
      const filename = this.file.files[0].name;
      const image = await this.croppie.result({ type: "blob" });

      await this.api.uploadImage(this.productId, image, filename).transfer();
    }

    this.router.navigateToRoute("list");
  }
}
