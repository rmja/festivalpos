import { jsonProperty } from "ur-json";

export class Terminal {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;
}