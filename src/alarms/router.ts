import { RouterConfiguration, RouteConfig } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

const routes: RouteConfig[] = [
    { route: "", redirect: "pending" },
    { route: "pending", name: "pending", moduleId: PLATFORM.moduleName("./pending") },
]

export class AlarmsRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}