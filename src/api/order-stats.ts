import { DateTime } from "luxon";
import { jsonProperty } from "ur-json";
import { dateTimeConverter } from "./converters/date-time-converter";
import { bigConverter } from "./converters/big-converter";
import { Big } from "big.js";
import { PaymentMethod } from "./payment";

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
    orders!: number;

    @jsonProperty()
    quantity!: number;

    @jsonProperty({ converter: bigConverter })
    total!: Big;
}

export class OrderStats {
    @jsonProperty({ converter: dateTimeConverter })
    periodStart!: DateTime;

    @jsonProperty()
    orders!: number;

    @jsonProperty({ converter: bigConverter })
    total!: Big;

    @jsonProperty({type: PaymentStats})
    payments!: PaymentStats[];

    @jsonProperty({type: ProductStats})
    products!: ProductStats[];
}