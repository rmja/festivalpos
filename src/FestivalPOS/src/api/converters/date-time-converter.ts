import { DateTime } from "luxon";
import { JsonConverter } from "@utiliread/json";

class DateTimeConverter implements JsonConverter {
    toJson(source: DateTime) {
        if (source) {
            return source.toJSON();
        }
    }

    fromJson(source: string) {
        if (source) {
            return DateTime.fromISO(source);
        }
    }
}

export const dateTimeConverter = new DateTimeConverter();