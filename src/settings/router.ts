
import { RouterConfiguration, RouteConfig, Router } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export const routes: RouteConfig[] = [
    { route: "products", name: "products", moduleId: PLATFORM.moduleName("./products/router"), nav: true, title: "Produkter" },
    { route: "accounts", name: "accounts", moduleId: PLATFORM.moduleName("./accounts/router"), nav: true, title: "Konti" },
    { route: "pointofsales", name: "pointofsales", moduleId: PLATFORM.moduleName("./pointofsales/router"), nav: true, title: "Salgssteder" },
    { route: "terminals", name: "terminals", moduleId: PLATFORM.moduleName("./terminals/router"), nav: true, title: "Terminaler" },
    { route: "alarms", name: "alarms", moduleId: PLATFORM.moduleName("./alarms/router"), nav: true, title: "Alarmer" },
]

export class SettingsRouter {
    router!: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map(routes);
        this.router = router;
    }
}