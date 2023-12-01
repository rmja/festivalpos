import { autoinject } from "aurelia-framework";
import { Api } from "../../api";

@autoinject()
export class PointOfSalesList {
  pointOfSales!: PointOfSaleViewModel[];

  constructor(private api: Api) {}

  async activate() {
    this.pointOfSales = await this.api.getAllPointOfSales().transfer();
  }
}

interface PointOfSaleViewModel {
  id: number;
  name: string;
}
