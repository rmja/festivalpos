import { DialogService } from "aurelia-dialog";
import { ProgressBusy } from "./progress-busy";
import { ProgressError } from "./progress-error";
import { autoinject } from "aurelia-framework";

@autoinject()
export class ProgressService {
    constructor(private dialog: DialogService) {
    }

    busy(title: string, icon?: any) {
        this.dialog.open({ viewModel: ProgressBusy, model: { icon, title } });
    }

    done() {
        return this.dialog.closeAll();
    }

    error(title: string, message?: string) {
        return this.dialog.open({ viewModel: ProgressError, model: { title, message } }).whenClosed();
    }
}