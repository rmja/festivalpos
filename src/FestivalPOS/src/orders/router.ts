import { RedirectToRoute, RouteConfig, RouterConfiguration } from "aurelia-router";
import { State, isSetup } from "../state";

import { PLATFORM } from "aurelia-pal";
import { connectTo } from "aurelia-store";

const routes: RouteConfig[] = [
    { route: "", name: "dashboard", moduleId: PLATFORM.moduleName("./dashboard", "orders") },
    { route: ":orderId", name: "details", moduleId: PLATFORM.moduleName("./details", "orders" ) }
]

@connectTo({
    selector: store => store.state,
    setup: "canActivate"
})
export class OrdersRouter {
    private state!: State;

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