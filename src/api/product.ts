import { jsonProperty } from "ur-json"
import Big, { } from "big.js"
import { bigConverter } from "./converters/big-converter";

export class Product {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty({ converter: bigConverter })
    price!: Big;
}