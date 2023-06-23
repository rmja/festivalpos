import * as Croppie from "croppie";

import { autoinject, useView } from "aurelia-framework";
import { createCroppie, destroyCroppie } from "./crop-utils";

import { Api } from "../../api";
import { Big } from "big.js";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreateProduct {
  name = "";
  price = "0";
  imageUrl?: string;

  private croppie?: Croppie;
  protected croppieElement!: HTMLDivElement;
  protected file!: HTMLInputElement;

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(private api: Api, private router: Router) {}

  deactivate() {
    if (this.croppie) {
      this.croppie.destroy();
    }
  }

  async fileSelected() {
    this.croppie = await createCroppie(this.file, this.croppieElement);
  }

  deleteImage() {
    if (this.croppie) {
      destroyCroppie(this.file, this.croppie);
      delete this.croppie;
    }
    delete this.imageUrl;
  }

  async submit() {
    const product = await this.api
      .createProduct({ name: this.name, price: new Big(this.price) })
      .transfer();

    if (this.croppie && this.file.files) {
      const filename = this.file.files[0].name;
      const image = await this.croppie.result({ type: "blob" });

      await this.api.uploadImage(product.id, image, filename).transfer();
    }

    this.router.navigateToRoute("list");
  }
}
