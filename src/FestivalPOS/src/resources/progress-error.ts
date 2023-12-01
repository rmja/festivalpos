import { autoinject, useView } from "aurelia-framework";

import { DialogController } from "aurelia-dialog";

@autoinject()
@useView("resources/progress-error.html")
export class ProgressError {
  title!: string;
  message?: string;

  constructor(private controller: DialogController) {}

  activate(model: { title: string; message?: string }) {
    this.title = model.title;
    this.message = model.message;
  }

  close() {
    this.controller.ok();
  }
}
