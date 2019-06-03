import { Disposable, autoinject } from "aurelia-framework";
import { PrintJobCreated, PrintingHub } from './api/printing-hub';

import { EventAggregator } from 'aurelia-event-aggregator';
import { State } from "./state";
import { Store } from "aurelia-store";
import { Subscription } from "rxjs";
import { pluck } from "rxjs/operators";

@autoinject()
export class PrintManager {
    private terminalId!: number;
    private stateSubscription!: Subscription;
    private disposables!: Disposable[];

    constructor(private store: Store<State>, private printingHub: PrintingHub, private eventAggregator: EventAggregator) {
    }

    async setup() {
        await this.printingHub.connect();

        this.stateSubscription = this.store.state.pipe(pluck("terminalId")).subscribe(terminalId => {
            if (terminalId !== this.terminalId) {
                this.terminalId = terminalId;
                this.terminalIdChanged();
            }
        });
        this.disposables = [
            this.eventAggregator.subscribe(PrintJobCreated, this.print.bind(this)),
        ];
    }

    async teardown() {
        for (const disposable of this.disposables) {
            disposable.dispose();
        }

        this.stateSubscription.unsubscribe();

        await this.printingHub.disconnect();
    }

    private terminalIdChanged() {
        return this.printingHub.hello(this.terminalId);
    }

    private print(event: PrintJobCreated) {
        const job = event.job;

        alert(job.name);
    }
}