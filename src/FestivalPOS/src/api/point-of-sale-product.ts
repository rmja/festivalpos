import { Product } from "./product";
import { jsonProperty } from "ur-json";

export class PointOfSaleProduct {
    @jsonProperty()
    product!: Product;

    @jsonProperty()
    presale!: boolean;
}