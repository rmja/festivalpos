import { DateTime } from "luxon";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "@utiliread/json";

export class ServingLine {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    servingId!: number;

    @jsonProperty()
    quantity!: number;

    @jsonProperty()
    name!: string;
}

export type ServingState = "pending" | "ongoing" | "completed";

export class Serving {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    orderId!: number;

    @jsonProperty()
    pointOfSaleId!: number;

    @jsonProperty()
    state!: ServingState;

    @jsonProperty()
    highPriority!: boolean;

    @jsonProperty()
    tagNumber?: number;

    @jsonProperty({ converter: dateTimeConverter })
    created!: DateTime;

    @jsonProperty()
    staffNumber?: number;

    @jsonProperty({ converter: dateTimeConverter })
    accepted?: DateTime;

    @jsonProperty({ converter: dateTimeConverter })
    completed?: DateTime;

    @jsonProperty({ type: ServingLine })
    lines!: ServingLine[];
}