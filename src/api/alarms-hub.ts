import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { AlarmEvent } from "./alarms";
import { EventAggregator } from "aurelia-event-aggregator";
import { modelBind } from "ur-json";
import { autoinject } from "aurelia-framework";

@autoinject()
export class AlarmsHub {
    private connection: HubConnection;
    
    constructor(eventAggregator: EventAggregator) {
        this.connection = new HubConnectionBuilder()
            .withUrl("/alarms")
            .build();

        this.connection.on("event-created", (event: any) => {
            event = modelBind(AlarmEvent, event);
            eventAggregator.publish(new EventCreated(event));
        });
    }

    connect() {
        return this.connection.start();
    }

    disconnect() {
        return this.connection.stop();
    }
}

export class EventCreated {
    constructor(public event: AlarmEvent) {
    }
}