import { jsonProperty } from "@utiliread/json";

export class Terminal {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    name!: string;
}