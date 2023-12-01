import { autoinject, useView } from "aurelia-framework";

import { DialogController } from "aurelia-dialog";
import { ServingStaff } from "../api/serving-staff";

@autoinject()
@useView("serving/server-dialog.html")
export class ServerDialog {
  name!: string;

  constructor(private controller: DialogController) {}

  activate(model?: { name?: string }) {
    this.name = model?.name ?? "";
  }

  close() {
    this.controller.cancel();
  }

  submit() {
    const output: Partial<ServingStaff> = {
      name: this.name,
    };
    this.controller.ok(output);
  }
}
