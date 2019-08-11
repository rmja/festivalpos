import { jsonProperty } from "ur-json";
import { transparentConverter } from "./converters/transparent-converter";

export class ServingStaff {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    number!: number;

    @jsonProperty({ converter: transparentConverter })
    name!: string | null;
}