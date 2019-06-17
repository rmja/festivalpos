import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

import { EventAggregator } from "aurelia-event-aggregator";
import { Serving } from "./serving";
import { autoinject } from "aurelia-framework";
import { modelBind } from "ur-json";

@autoinject()
export class ServingHub {
    private connection: HubConnection;
    private connectPromise?: Promise<void>;
    private connectedUsers = 0;
    
    constructor(eventAggregator: EventAggregator) {
        this.connection = new HubConnectionBuilder()
            .withUrl("/Serving")
            .build();

        this.connection.on("ServingCreated", (serving: any) => {
            serving = modelBind(Serving, serving);
            eventAggregator.publish(new ServingCreated(serving));
        });

        this.connection.on("ServingUpdated", (serving: any) => {
            serving = modelBind(Serving, serving);
            eventAggregator.publish(new ServingUpdated(serving));
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

    async hello(pointOfSaleId: number) {
        await this.connection.invoke("Hello", pointOfSaleId);
    }
}

export class ServingCreated {
    constructor(public serving: Serving) {
    }
}

export class ServingUpdated {
    constructor(public serving: Serving) {
    }
}