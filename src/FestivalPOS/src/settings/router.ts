import { RouteConfig, Router, RouterConfiguration } from "aurelia-router";

import { PLATFORM } from "aurelia-pal";

export const routes: RouteConfig[] = [
    { route: "products", name: "products", moduleId: PLATFORM.moduleName("./products/router", "settings"), nav: true, title: "Produkter" },
    { route: "accounts", name: "accounts", moduleId: PLATFORM.moduleName("./accounts/router", "settings"), nav: true, title: "Konti" },
    { route: "pointofsales", name: "pointofsales", moduleId: PLATFORM.moduleName("./pointofsales/router", "settings"), nav: true, title: "Salgssteder" },
    { route: "terminals", name: "terminals", moduleId: PLATFORM.moduleName("./terminals/router", "settings"), nav: true, title: "Terminaler" },
    { route: "printers", name: "printers", moduleId: PLATFORM.moduleName("./printers/router", "settings"), nav: true, title: "Printere" },
    { route: "alarms", name: "alarms", moduleId: PLATFORM.moduleName("./alarms/router", "settings"), nav: true, title: "Alarmer" },
    { route: "sumup", name: "sumup", moduleId: PLATFORM.moduleName("./sumup", "settings"), nav: true, title: "SumUp" },
]

export class SettingsRouter {
    router!: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map(routes);
        this.router = router;
    }
}