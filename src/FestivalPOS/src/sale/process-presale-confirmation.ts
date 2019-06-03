import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class ProcessPresaleConfirmation {
    orderId!: number;

    constructor(private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async activate(params: {orderId: string}) {
        this.orderId = Number(params.orderId);
        addEventListener("keyup", this.keyup);
    }

    deactivate() {
        removeEventListener("keyup", this.keyup);
    }

    private keyup(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            return this.complete();
        }
    }

    complete() {
        this.router.navigate("/ticket");
    }
}