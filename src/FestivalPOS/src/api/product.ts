import Big, { } from "big.js"
import { bigConverter } from "./converters/big-converter";
import { jsonProperty } from "@utiliread/json"

export class Product {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty({ converter: bigConverter })
    price!: Big;

    @jsonProperty()
    previewImageUrl?: string;

    @jsonProperty()
    thumbnailImageUrl?: string;
}