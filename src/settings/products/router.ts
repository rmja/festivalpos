import { PLATFORM } from "aurelia-framework";
import { RouteConfig, RouterConfiguration } from "aurelia-router";

const routes: RouteConfig[] = [
    { route: "", name: "list", moduleId: PLATFORM.moduleName("./list") },
    { route: "create", name: "create", moduleId: PLATFORM.moduleName("./create") },
    { route: ":productId/edit", name: "edit", moduleId: PLATFORM.moduleName("./edit") },
]

export class ProductsRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}