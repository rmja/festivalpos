import { DateTime } from "luxon";
import { ServingViewModel } from "./dashboard";
import { bindable } from "aurelia-framework";

export class ServingItem {
    @bindable() serving!: ServingViewModel;
    @bindable() now!: DateTime;
}

export class TimeAgoValueConverter {
    toView(dateTime: DateTime, now: DateTime) {
        const diff = now.diff(dateTime, ["minutes", "seconds"]);

        if (diff.minutes === 1) {
            return "Ét minut";
        }
        else if (diff.minutes > 1) {
            return `${diff.minutes} min.`;
        }

        if (diff.seconds < 10) {
            return "Lige nu";
        }
        else {
            const seconds = Math.round(diff.seconds / 10) * 10;
            return `${seconds} sek.`;
        }
    }
}