import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

import { EventAggregator } from "aurelia-event-aggregator";
import { PrintJob } from "./print-job";
import { autoinject } from "aurelia-framework";
import { deserialize } from "@utiliread/json";

@autoinject()
export class PrintingHub {
  private connection: HubConnection;
  private connectPromise?: Promise<void>;
  private connectedUsers = 0;

  constructor(eventAggregator: EventAggregator) {
    this.connection = new HubConnectionBuilder().withUrl("/Printing").build();

    this.connection.on("Print", (job: any) => {
      job = deserialize(job, PrintJob);
      eventAggregator.publish(new PrintJobCreated(job));
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

  async hello(terminalId: number) {
    await this.connection.invoke("Hello", terminalId);
  }
}

export class PrintJobCreated {
  constructor(public job: PrintJob) {}
}
