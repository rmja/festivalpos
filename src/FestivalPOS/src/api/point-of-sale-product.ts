import { Product } from "./product";
import { jsonProperty } from "@utiliread/json";

export class PointOfSaleProduct {
  @jsonProperty({ type: Product })
  product!: Product;

  @jsonProperty()
  presale!: boolean;

  @jsonProperty()
  isServing!: boolean;
}
