import { Big } from "big.js";
import { DateTime } from "luxon";
import { PaymentMethod } from "./payment";
import { bigConverter } from "./converters/big-converter";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "ur-json";

class PaymentStats {
    @jsonProperty()
    method!: PaymentMethod;

    @jsonProperty()
    payments!: number;

    @jsonProperty({ converter: bigConverter })
    total!: Big;
}

class ProductSaleStats {
    @jsonProperty()
    productId!: number;

    @jsonProperty()
    productName!: string;

    @jsonProperty()
    productQuantity!: number;

    @jsonProperty()
    orderCount!: number;

    @jsonProperty({ converter: bigConverter })
    total!: Big;
}

class ProductServingStats {
    @jsonProperty()
    productId!: number;

    @jsonProperty()
    productName!: string;

    @jsonProperty()
    productQuantity!: number;

    @jsonProperty()
    servingCount!: number;
}

export class OrderStats {
    @jsonProperty({ converter: dateTimeConverter })
    periodStart!: DateTime;

    @jsonProperty()
    orderCount!: number;

    @jsonProperty({ converter: bigConverter })
    total!: Big;

    @jsonProperty({ type: PaymentStats })
    payments!: PaymentStats[];

    @jsonProperty({ type: ProductSaleStats })
    productSales!: ProductSaleStats[];

    @jsonProperty({ type: ProductServingStats })
    productServings!: ProductServingStats[];
}