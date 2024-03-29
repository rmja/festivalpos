import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

import { AlarmEvent } from "./alarms";
import { EventAggregator } from "aurelia-event-aggregator";
import { autoinject } from "aurelia-framework";
import { deserialize } from "@utiliread/json";

@autoinject()
export class AlarmsHub {
  private connection: HubConnection;
  private connectPromise?: Promise<void>;
  private connectedUsers = 0;

  constructor(eventAggregator: EventAggregator) {
    this.connection = new HubConnectionBuilder().withUrl("/Alarms").build();

    this.connection.on("EventCreated", (event: any) => {
      event = deserialize(event, AlarmEvent);
      eventAggregator.publish(new EventCreated(event));
    });
  }

  async connect() {
    if (!this.connectPromise) {
      this.connectPromise = this.connection.start();
    }

    await this.connectPromise;

    this.connectedUsers++;
  }

  async disconnect() {
    if (--this.connectedUsers === 0) {
      delete this.connectPromise;
      await this.connection.stop();
    }
  }
}

export class EventCreated {
  constructor(public event: AlarmEvent) {}
}
