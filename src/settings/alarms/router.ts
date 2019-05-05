import { PLATFORM } from "aurelia-framework";
import { RouteConfig, RouterConfiguration } from "aurelia-router";

const routes: RouteConfig[] = [
    { route: "", name: "list", moduleId: PLATFORM.moduleName("./list") },
    { route: "create", name: "create", moduleId: PLATFORM.moduleName("./create") },
    { route: ":alarmFeedId/edit", name: "edit", moduleId: PLATFORM.moduleName("./edit") },
]

export class AlarmsRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}