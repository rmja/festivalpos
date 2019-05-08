import { autoinject, Disposable } from "aurelia-framework";
import { Api } from "../api";
import { DateTime } from "luxon";
import { EventAggregator } from "aurelia-event-aggregator";
import { EventCreated, AlarmsHub } from "../api/alarms-hub";
import { faBell } from "@fortawesome/free-solid-svg-icons";

@autoinject()
export class PendingAlarms {
    pendingEvents!: AlarmEventViewModel[];
    faBell = faBell;
    private disposables!: Disposable[];

    constructor(private api: Api, private alarmsHub: AlarmsHub, private eventAggregator: EventAggregator) {
    }

    async activate() {
        await this.alarmsHub.connect();

        this.pendingEvents = await this.api.getAllPendingAlarmEvents().bypassCache().transfer();

        this.disposables = [
            this.eventAggregator.subscribe(EventCreated, this.eventCreated.bind(this))
        ];
    }

    async deactivate() {
        for (const disposable of this.disposables) {
            disposable.dispose();
        }

        await this.alarmsHub.disconnect();
    }

    private eventCreated(event: EventCreated) {
        this.pendingEvents.push(event.event);
    }

    async cancel(event: AlarmEventViewModel, index: number) {
        event = await this.api.cancelAlarmEvent(event.id).transfer();
        this.pendingEvents.splice(index, 1, event);
    }
}

interface AlarmEventViewModel {
    id: number;
    alarmFeedName: string;
    terminalName: string;
    pointOfSaleName: string;
    created: DateTime;
}