import { Api } from "../api";
import { Patch } from "ur-jsonpatch";
import { Router } from "aurelia-router";
import { Serving } from "../api/serving";
import { autoinject } from "aurelia-framework";

@autoinject()
export class ServingConfirmation {
    orderId!: number;
    serving!: ServingViewModel;

    constructor(private api: Api, private router: Router) {
        this.keyup = this.keyup.bind(this);
    }

    async activate(params: { orderId: string, servingId: string, tagNumber?: string }) {
        this.orderId = Number(params.orderId);
        const servingId = Number(params.servingId);
        this.serving = await this.api.getServingById(servingId).transfer();
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

    async complete(markAsCompleted?: boolean) {
        if (markAsCompleted) {
            const patch = new Patch<Serving>()
                .replace(x => x.state, "completed");

            await this.api.updateServing(this.serving.id, patch.operations).send();
        }

        this.router.navigateToRoute("tag");
    }
}

interface ServingViewModel {
    id: number;
}