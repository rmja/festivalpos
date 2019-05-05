import { Big } from "big.js";
import { jsonProperty } from "ur-json";
import { bigConverter } from "./converters/big-converter";

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
}