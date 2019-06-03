import { jsonProperty } from "ur-json";
import { transparentConverter } from "./converters/transparent-converter";

export class PointOfSale {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty({ converter: transparentConverter })
    receiptPrinterId!: number | null;

    @jsonProperty({ converter: transparentConverter })
    ticketPrinterId!: number | null;

    @jsonProperty({ converter: transparentConverter })
    servingPrinterId!: number | null;
}