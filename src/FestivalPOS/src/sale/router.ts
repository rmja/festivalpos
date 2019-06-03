import { RedirectToRoute, RouteConfig, RouterConfiguration } from "aurelia-router";
import { State, getOrderQuantityTotal, isSetup } from "../state";
import { autoinject, computedFrom } from "aurelia-framework";

import { PLATFORM } from "aurelia-pal";
import { connectTo } from "aurelia-store";

const routes: RouteConfig[] = [
    { route: "alarms", name: "alarms", moduleId: PLATFORM.moduleName("./alarms", "alarms") },
    { route: "ticket", name: "ticket", moduleId: PLATFORM.moduleName("./ticket", "ticket") },
    { route: "", name: "products", moduleId: PLATFORM.moduleName("./products", "sale") },
    { route: "misc", name: "misc", moduleId: PLATFORM.moduleName("./misc", "sale") },
    { route: "cart", name: "cart", moduleId: PLATFORM.moduleName("./cart", "sale") },
    { route: "orders/:orderId/process-presale", name: "process-presale", moduleId: PLATFORM.moduleName("./process-presale", "sale") },
    { route: "orders/:orderId/process-presale-confirmation", name: "process-presale-confirmation", moduleId: PLATFORM.moduleName("./process-presale-confirmation", "sale") }
];

@autoinject()
@connectTo({
    selector: store => store.state,
    setup: "canActivate"
})
export class SaleRouter {
    private state!: State;

    @computedFrom("state")
    get totalQuantity() {
        if (this.state) {
            return getOrderQuantityTotal(this.state);
        }
    }

    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }

    canActivate() {
        if (!isSetup(this.state)) {
            return new RedirectToRoute("setup");
        }

        return true;
    }
}