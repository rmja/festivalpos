import { autoinject, useView } from "aurelia-framework";

import { DialogController } from "aurelia-dialog";

@autoinject()
@useView("checkout/tag-overwrite-dialog.html")
export class TagOverwriteDialog {
  protected tagNumber!: number;

  constructor(private controller: DialogController) {}

  activate(tagNumber: number) {
    this.tagNumber = tagNumber;
  }

  cancel() {
    this.controller.cancel();
  }

  overwrite() {
    this.controller.ok();
  }
}
