import { DialogService } from "aurelia-dialog";
import { ProgressBusy } from "./progress-busy";
import { ProgressError } from "./progress-error";
import { TimeoutError } from "@utiliread/http";
import { autoinject } from "aurelia-framework";

@autoinject()
export class ProgressService {
    private busyOpenPromise?: Promise<any>;

    public state: "idle" | "busy" | "error" = "idle";

    public get isIdle() {
        return this.state === "idle";
    }

    constructor(private dialog: DialogService) {
    }

    tryBusy(title: string, icon?: any) {
        if (!this.isIdle) {
            return false;
        }

        this.setBusy(title, icon);
        return true;
    }

    setBusy(title: string, icon?: any) {
        this.state = "busy";
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

    async done() {
        if (this.busyOpenPromise) {
            await this.busyOpenPromise.then(() => this.dialog.closeAll());
        }
        else {
            await this.dialog.closeAll();
        }

        this.state = "idle";
    }

    async error(title: string, error: unknown) {
        let message: string;
        this.state = "error";

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

        this.state = "idle";
    }
}