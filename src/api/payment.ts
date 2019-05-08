import { jsonProperty } from "ur-json";
import { Big } from "big.js";
import { bigConverter } from "./converters/big-converter";
import { dateTimeConverter } from "./converters/date-time-converter";
import { DateTime } from "luxon";

export type PaymentMethod = "card" | "cash" | "account";

export class Payment {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    orderId!: number;

    @jsonProperty()
    method!: PaymentMethod;

    @jsonProperty({ converter: bigConverter })
    amount!: Big;

    @jsonProperty()
    transactionNumber?: string;

    @jsonProperty()
    accountId?: number;

    @jsonProperty({ converter: dateTimeConverter })
    created!: DateTime;
}