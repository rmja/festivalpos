import { autoinject, useView } from "aurelia-framework";

import { DialogController } from "aurelia-dialog";

@autoinject()
@useView("resources/progress-error.html")
export class ProgressError {
    constructor(private controller: DialogController) {
    }

    close() {
        this.controller.ok();
    }
}