import { DateTime } from "luxon";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "ur-json";

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

export class Serving {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    orderId!: number;

    @jsonProperty()
    pointOfSaleId!: number;

    @jsonProperty()
    state!: "pending" | "ongoing" | "completed";

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