import { Big } from "big.js"
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
    previewImageName?: string;

    @jsonProperty()
    previewImageUrl?: string;

    @jsonProperty()
    thumbnailImageName?: string;

    @jsonProperty()
    thumbnailImageUrl?: string;
}