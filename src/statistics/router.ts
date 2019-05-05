import { RouteConfig, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

const routes: RouteConfig[] = [
    { route: "", name: "dashboard", moduleId: PLATFORM.moduleName("./dashboard"), nav: true, title: "Dashboard" }
]

export class StatisticsRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}