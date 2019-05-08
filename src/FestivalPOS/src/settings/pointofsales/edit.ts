import { autoinject } from "aurelia-framework";
import { Api } from "../../api";
import { PointOfSale } from "../../api/point-of-sale";
import { Patch } from "ur-jsonpatch";
import { Router } from "aurelia-router";

@autoinject()
export class EditPointOfSale {
    private pointOfSaleId!: number;
    name!: string;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { pointOfSaleId: string }) {
        this.pointOfSaleId = Number(params.pointOfSaleId);
        const pos = await this.api.getPointOfSale(this.pointOfSaleId).transfer();
        this.name = pos.name;
    }

    async submit() {
        const patch = new Patch<PointOfSale>()
            .replace(x => x.name, this.name);

        await this.api.updatePointOfSale(this.pointOfSaleId, patch.operations).transfer();
        this.router.navigateToRoute("details", { pointOfSaleId: this.pointOfSaleId });
    }
}