import { DateTime } from "luxon";

export class DateTimeValueConverter {
    toView(value: DateTime) {
        return value.toLocaleString(DateTime.DATETIME_MED);
    }
}