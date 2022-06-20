import { jsonProperty } from "@utiliread/json";

export class Printer {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty()
    terminalId!: number;

    @jsonProperty()
    restPrintPrinterName?: string;
}