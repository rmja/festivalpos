import { autoinject, useView } from "aurelia-framework";

import { DialogController } from "aurelia-dialog";
import { ServingStaff } from "../api/serving-staff";

@autoinject()
@useView("serving/add-server-dialog.html")
export class AddServerDialog {
    name = "";

    constructor(private controller: DialogController) {
    }

    close() {
        this.controller.cancel();
    }

    submit() {
        const output: Partial<ServingStaff> = {
            name: this.name
        };
        this.controller.ok(output);
    }
}