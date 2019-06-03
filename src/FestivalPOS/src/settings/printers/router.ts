import { RouteConfig, RouterConfiguration } from "aurelia-router";

import { PLATFORM } from "aurelia-framework";

const routes: RouteConfig[] = [
    { route: "", name: "list", moduleId: PLATFORM.moduleName("./list", "settings") },
    { route: "create", name: "create", moduleId: PLATFORM.moduleName("./create", "settings") },
    { route: ":printerId/edit", name: "edit", moduleId: PLATFORM.moduleName("./edit", "settings") },
]

export class PrintersRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}