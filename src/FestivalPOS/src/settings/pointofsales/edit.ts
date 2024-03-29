import { Api } from "../../api";
import { Patch } from "@utiliread/jsonpatch";
import { PointOfSale } from "../../api/point-of-sale";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditPointOfSale {
  private pointOfSaleId!: number;
  name!: string;
  printers!: PrinterViewModel[];
  receiptPrinter?: PrinterViewModel;

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(
    private api: Api,
    private router: Router,
  ) {}

  async activate(params: { pointOfSaleId: string }) {
    this.pointOfSaleId = Number(params.pointOfSaleId);
    const pos = await this.api.getPointOfSale(this.pointOfSaleId).transfer();
    this.name = pos.name;
    this.printers = await this.api.getAllPrinters().transfer();
    this.receiptPrinter = this.printers.find(
      (x) => x.id === pos.receiptPrinterId,
    );
  }

  async submit() {
    const patch = new Patch<PointOfSale>()
      .replace((x) => x.name, this.name)
      .replace(
        (x) => x.receiptPrinterId,
        this.receiptPrinter ? this.receiptPrinter.id : null,
      );

    await this.api
      .updatePointOfSale(this.pointOfSaleId, patch.operations)
      .transfer();
    this.router.navigateToRoute("details", {
      pointOfSaleId: this.pointOfSaleId,
    });
  }
}

export interface PrinterViewModel {
  id: number;
  name: string;
}
