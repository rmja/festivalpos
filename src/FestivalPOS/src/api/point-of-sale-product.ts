import { Product } from "./product";
import { jsonProperty } from "@utiliread/json";

export class PointOfSaleProduct {
    @jsonProperty()
    product!: Product;

    @jsonProperty()
    presale!: boolean;

    @jsonProperty()
    isServing!: boolean;
}