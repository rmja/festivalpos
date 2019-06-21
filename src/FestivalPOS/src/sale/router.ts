import { Manager, Pan } from "hammerjs";
import { RedirectToRoute, RouteConfig, Router, RouterConfiguration } from "aurelia-router";
import { State, getOrderQuantityTotal, isSetup } from "../state";
import { faBullhorn, faCalculator, faTh, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

import { PLATFORM } from "aurelia-pal";
import { computedFrom } from "aurelia-framework";
import { connectTo } from "aurelia-store";

const routes: RouteConfig[] = [
    { route: "alarms", name: "alarms", moduleId: PLATFORM.moduleName("./alarms", "alarms"), nav: true, settings: { icon: faBullhorn } },
    { route: "misc", name: "misc", moduleId: PLATFORM.moduleName("./misc", "sale"), nav: true, settings: { icon: faCalculator } },
    { route: "tag", name: "tag", moduleId: PLATFORM.moduleName("./tag", "sale"), nav: true, settings: { icon: faTicketAlt } },
    { route: "", name: "products", moduleId: PLATFORM.moduleName("./products", "sale"), nav: true, settings: { icon: faTh } },
    { route: "cart", name: "cart", moduleId: PLATFORM.moduleName("./cart", "sale"), nav: true },
    { route: "orders/:orderId/process-presale", name: "process-presale", moduleId: PLATFORM.moduleName("./process-presale", "sale") },
    { route: "orders/:orderId/servings/:servingId/confirmation", name: "serving-confirmation", moduleId: PLATFORM.moduleName("./serving-confirmation", "sale") }
];

@connectTo({
    selector: store => store.state,
    setup: "canActivate"
})
export class SaleRouter {
    private state!: State;
    router!: Router;
    private hammer!: HammerManager;

    @computedFrom("state")
    get totalQuantity() {
        if (this.state) {
            return getOrderQuantityTotal(this.state);
        }
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map(routes);
        this.router = router;
    }

    canActivate() {
        if (!isSetup(this.state)) {
            return new RedirectToRoute("setup");
        }

        return true;
    }

    bind() {
        this.hammer = new Manager(document);
        this.hammer.add(new Pan({ direction: Hammer.DIRECTION_HORIZONTAL }));
        this.hammer.on("panend", event => {
            if (Math.abs(event.deltaX) > 2 * Math.abs(event.deltaY)) {
                const index = routes.findIndex(x => x.name === this.router.currentInstruction.config.name);

                if (index >= 0) {
                    const nextRoute = routes[index + (event.deltaX < 0 ? 1 : -1)];
                    if (nextRoute && nextRoute.name && nextRoute.nav) {
                        this.router.navigateToRoute(nextRoute.name);
                    }
                }
            }
        })
    }

    unbind() {
        this.hammer.destroy();
    }
}