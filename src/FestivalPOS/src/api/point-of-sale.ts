import { jsonProperty } from "ur-json";
import { transparentConverter } from "./converters/transparent-converter";

export class PointOfSale {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty()
    noOfServingStaff!: number;

    @jsonProperty({ converter: transparentConverter })
    receiptPrinterId!: number | null;
}