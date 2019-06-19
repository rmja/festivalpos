import { Api } from "../api";
import { Patch } from "ur-jsonpatch";
import { ProgressService } from "../resources/progress-service";
import { Router } from "aurelia-router";
import { Serving } from "../api/serving";
import { autoinject } from "aurelia-framework";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

@autoinject()
export class ServingConfirmation {
    orderId!: number;
    serving!: ServingViewModel;

    constructor(private api: Api, private router: Router, private progress: ProgressService) {
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

            this.progress.busy("Færdiggør servering", faUtensils);

            try {
                await this.api.updateServing(this.serving.id, patch.operations).send();

                this.progress.done();
            }
            catch (error) {
                await this.progress.error("Serveringen kunne ikke færdiggøres");
                return;
            }
        }

        this.router.navigateToRoute("tag");
    }
}

interface ServingViewModel {
    id: number;
}