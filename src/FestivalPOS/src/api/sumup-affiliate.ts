import { jsonProperty } from "ur-json";

export class SumUpAffiliate {
    @jsonProperty()
    key!: string;

    @jsonProperty()
    name?: string;
}