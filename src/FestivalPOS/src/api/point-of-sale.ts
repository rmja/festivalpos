import { ServingStaff } from './serving-staff';
import { jsonProperty } from "@utiliread/json";
import { transparentConverter } from "./converters/transparent-converter";

export class PointOfSale {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty({ type: ServingStaff })
    servingStaff!: ServingStaff[];

    @jsonProperty({ converter: transparentConverter })
    receiptPrinterId!: number | null;
}