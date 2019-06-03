import { jsonProperty } from "ur-json";
import { transparentConverter } from './converters/transparent-converter';

export class Printer {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;

    @jsonProperty({ converter: transparentConverter })
    terminalId!: number | null;
}