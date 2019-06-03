import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

import { EventAggregator } from "aurelia-event-aggregator";
import { PrintJob } from './print-job';
import { autoinject } from "aurelia-framework";
import { modelBind } from "ur-json";

@autoinject()
export class PrintingHub {
    private connection: HubConnection;
    private connectPromise?: Promise<void>;
    private connectedUsers = 0;
    
    constructor(eventAggregator: EventAggregator) {
        this.connection = new HubConnectionBuilder()
            .withUrl("/printing")
            .build();

        this.connection.on("print", (job: any) => {
            job = modelBind(PrintJob, job);
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
            await this.connection.stop();
        }
    }

    async hello(terminalId: number) {
        await this.connection.invoke("hello", terminalId);
    }
}

export class PrintJobCreated {
    constructor(public job: PrintJob) {
    }
}