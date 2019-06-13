import { Disposable, LogManager, autoinject } from "aurelia-framework";
import { PrintJobCreated, PrintingHub } from './api/printing-hub';

import { Api } from "./api";
import { EventAggregator } from 'aurelia-event-aggregator';
import { Logger } from "aurelia-logging";
import { Printer } from "./api/printer";
import { State } from "./state";
import { Store } from "aurelia-store";
import { Subscription } from "rxjs";
import { pluck } from "rxjs/operators";
import { printRaw } from "./restprint";

@autoinject()
export class PrintManager {
    private printers!: Printer[];
    private terminalId!: number;
    private stateSubscription!: Subscription;
    private disposables!: Disposable[];
    private logger: Logger;

    constructor(private store: Store<State>, private printingHub: PrintingHub, private api: Api, private eventAggregator: EventAggregator) {
        this.logger = LogManager.getLogger("print-manager");
    }

    async setup() {
        await this.printingHub.connect();

        this.printers = await this.api.getAllPrinters().transfer();

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

    private async print(event: PrintJobCreated) {
        const job = event.job;
        const printer = this.printers.find(x => x.id === job.printerId);

        if (!printer) {
            this.logger.error("Could not find printer", job);
            return;
        }

        if (printer.restPrintPrinterName) {
            this.logger.info(`Sending print to ${printer.restPrintPrinterName}`);
            await printRaw(printer.restPrintPrinterName, job.data, job.name);
        }
        else {
            this.logger.error("Unsupported printer");
        }
    }
}