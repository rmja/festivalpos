import { DialogService } from "aurelia-dialog";
import { ProgressBusy } from "./progress-busy";
import { ProgressError } from "./progress-error";
import { TimeoutError } from "@utiliread/http";
import { autoinject } from "aurelia-framework";

@autoinject()
export class ProgressService {
    private busyOpenPromise?: Promise<any>;

    constructor(private dialog: DialogService) {
    }

    busy(title: string, icon?: any) {
        if (this.busyOpenPromise) {
            this.busyOpenPromise.then(async () => {
                await this.dialog.closeAll();
                this.busyOpenPromise = this.dialog.open({ viewModel: ProgressBusy, model: { icon, title } });
            });
        }
        else {
            this.busyOpenPromise = this.dialog.open({ viewModel: ProgressBusy, model: { icon, title } });
        }
    }

    done() {
        if (this.busyOpenPromise) {
            return this.busyOpenPromise.then(() => this.dialog.closeAll());
        }
        else {
            return this.dialog.closeAll();
        }
    }

    async error(title: string, error: unknown) {
        let message: string;

        if (typeof error === "string") {
            message = error;
        }
        else if (error instanceof TypeError && error.message === "Failed to fetch") {
            message = "Der kunne ikke oprettes forbindelse til serveren";
        }
        else if (error instanceof TimeoutError) {
            message = "Intet svar indenfor tidsgrænsen";
        }
        else {
            message = (<any>error).message;
        }

        if (this.busyOpenPromise) {
            await this.busyOpenPromise;
        }
        await this.dialog.closeAll();
        await this.dialog.open({ viewModel: ProgressError, model: { title, message } }).whenClosed();
    }
}