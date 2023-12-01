import { Big } from "big.js";
import { DateTime } from "luxon";
import { PaymentMethod } from "./payment";
import { bigConverter } from "./converters/big-converter";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "@utiliread/json";

class PaymentStats {
  @jsonProperty()
  method!: PaymentMethod;

  @jsonProperty()
  payments!: number;

  @jsonProperty({ converter: bigConverter })
  total!: Big;
}

class ProductStats {
  @jsonProperty()
  productId!: number;

  @jsonProperty()
  productName!: string;

  @jsonProperty()
  orderCount!: number;

  @jsonProperty()
  saleQuantity!: number;

  @jsonProperty({ converter: bigConverter })
  saleTotal!: Big;

  @jsonProperty()
  servingCount!: number;

  @jsonProperty()
  servingQuantity!: number;
}

export class OrderStats {
  @jsonProperty()
  kind!: "yearly" | "monthly" | "daily" | "hourly";

  @jsonProperty({ converter: dateTimeConverter })
  periodStart!: DateTime;

  @jsonProperty()
  orderCount!: number;

  @jsonProperty({ converter: bigConverter })
  total!: Big;

  @jsonProperty({ type: PaymentStats })
  payments!: PaymentStats[];

  @jsonProperty({ type: ProductStats })
  products!: ProductStats[];
}
