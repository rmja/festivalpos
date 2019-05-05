import { RouteConfig, RouterConfiguration, RedirectToRoute } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";
import { autoinject, computedFrom } from "aurelia-framework";
import { State, getOrderQuantityTotal, isSetup } from "../state";
import { connectTo } from "aurelia-store";

const routes: RouteConfig[] = [
    { route: "", name: "list", moduleId: PLATFORM.moduleName("./list") },
    { route: ":accountId", name: "details", moduleId: PLATFORM.moduleName("./details") },
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