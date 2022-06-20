import { jsonProperty } from "@utiliread/json";

export class SumUpAffiliate {
    @jsonProperty()
    key!: string;

    @jsonProperty()
    name?: string;
}