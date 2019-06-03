import { Api } from "../../api";
import { Patch } from "ur-jsonpatch";
import { PointOfSale } from "../../api/point-of-sale";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditPointOfSale {
    private pointOfSaleId!: number;
    name!: string;
    printers!: PrinterViewModel[];
    receiptPrinter?: PrinterViewModel;
    ticketPrinter?: PrinterViewModel;
    servingPrinter?: PrinterViewModel;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { pointOfSaleId: string }) {
        this.pointOfSaleId = Number(params.pointOfSaleId);
        const pos = await this.api.getPointOfSale(this.pointOfSaleId).transfer();
        this.name = pos.name;
        this.printers = await this.api.getAllPrinters().transfer();
        this.receiptPrinter = this.printers.find(x => x.id === pos.receiptPrinterId);
        this.ticketPrinter = this.printers.find(x => x.id === pos.ticketPrinterId);
        this.servingPrinter = this.printers.find(x => x.id === pos.servingPrinterId);
    }

    async submit() {
        const patch = new Patch<PointOfSale>()
            .replace(x => x.name, this.name)
            .replace(x => x.receiptPrinterId, this.receiptPrinter ? this.receiptPrinter.id : null)
            .replace(x => x.ticketPrinterId, this.ticketPrinter ? this.ticketPrinter.id : null)
            .replace(x => x.servingPrinterId, this.servingPrinter ? this.servingPrinter.id : null)

        await this.api.updatePointOfSale(this.pointOfSaleId, patch.operations).transfer();
        this.router.navigateToRoute("details", { pointOfSaleId: this.pointOfSaleId });
    }
}

interface PrinterViewModel {
    id: number;
    name: string;
}