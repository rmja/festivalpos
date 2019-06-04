import { autoinject, useView } from "aurelia-framework";
import { Api } from "../../api";
import { Router } from "aurelia-router";
import { PrinterViewModel } from "./edit";

@autoinject()
@useView("./edit.html")
export class CreatePointOfSale {
    name = "";
    printers!: PrinterViewModel[];
    receiptPrinter?: PrinterViewModel;
    ticketPrinter?: PrinterViewModel;
    servingPrinter?: PrinterViewModel;

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
            receiptPrinterId: this.receiptPrinter && this.receiptPrinter.id,
            ticketPrinterId: this.ticketPrinter && this.ticketPrinter.id,
            servingPrinterId: this.servingPrinter && this.servingPrinter.id
        }).transfer();
        this.router.navigateToRoute("details", {
            pointOfSaleId: pos.id
        });
    }
}