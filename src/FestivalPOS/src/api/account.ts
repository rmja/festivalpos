import { Big } from "big.js";
import { bigConverter } from "./converters/big-converter";
import { jsonProperty } from "@utiliread/json";

export class Account {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    number!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty({ converter: bigConverter })
    maxCredit!: Big;

    @jsonProperty({ converter: bigConverter })
    remainingCredit!: Big;

    @jsonProperty()
    highPriorityServing!: boolean;
}