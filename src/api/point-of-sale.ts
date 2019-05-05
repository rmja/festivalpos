import { jsonProperty } from "ur-json";

export class PointOfSale {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;
}