import { Big } from "big.js";
import { DateTime } from "luxon";
import { bigConverter } from "./converters/big-converter";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "@utiliread/json";

export type PaymentMethod = "card" | "cash" | "account" | "mobilePay";

export class Payment {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    orderId?: number;

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