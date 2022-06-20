import { jsonProperty } from "@utiliread/json";

export class PrintJob {
    @jsonProperty()
    printerId!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty()
    data!: ArrayBuffer;
}