import { autoinject, observable } from "aurelia-framework";

import { Api } from "../api";
import { Big } from "big.js";
import { HttpError } from "@utiliread/http";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@autoinject()
export class Tag {
  @observable()
  tagNumber!: Big;
  notFound = false;

  constructor(
    private api: Api,
    private router: Router,
    private progress: ProgressService,
  ) {}

  activate() {
    this.tagNumber = new Big(0);
  }

  protected tagNumberChanged() {
    this.notFound = false;
  }

  async submit() {
    const tagNumber = Number(this.tagNumber.toFixed());

    try {
      if (!this.progress.tryBusy("Søger efter ordre", faSearch)) {
        return;
      }

      var order = await this.api.getCurrentOrderByTag(tagNumber).transfer();

      await this.progress.done();
    } catch (error) {
      if (error instanceof HttpError && error.statusCode === 404) {
        await this.progress.done();
        this.notFound = true;
      } else {
        await this.progress.error("Ordren kunne ikke findes", error);
      }

      return;
    }

    this.router.navigateToRoute("process-presale", {
      orderId: order.id,
      tagNumber: tagNumber,
    });
  }
}
