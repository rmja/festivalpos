import { autoinject, useView } from "aurelia-framework";

import { Api } from "../../api";
import { PrinterViewModel } from "./edit";
import { Router } from "aurelia-router";

@autoinject()
@useView("./edit.html")
export class CreatePointOfSale {
    name = "";
    noOfServingStaff = 0;
    printers!: PrinterViewModel[];
    receiptPrinter?: PrinterViewModel;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate() {
        this.printers = await this.api.getAllPrinters().transfer();
    }

    async submit() {
        const pos = await this.api.createPointOfSale({
            name: this.name,
            noOfServingStaff: this.noOfServingStaff,
            receiptPrinterId: this.receiptPrinter && this.receiptPrinter.id,
        }).transfer();
        this.router.navigateToRoute("details", {
            pointOfSaleId: pos.id
        });
    }
}