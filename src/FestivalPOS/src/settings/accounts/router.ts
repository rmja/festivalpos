import { PLATFORM } from "aurelia-framework";
import { RouteConfig, RouterConfiguration } from "aurelia-router";

const routes: RouteConfig[] = [
  {
    route: "",
    name: "list",
    moduleId: PLATFORM.moduleName("./list", "settings"),
  },
  {
    route: "create",
    name: "create",
    moduleId: PLATFORM.moduleName("./create", "settings"),
  },
  {
    route: ":accountId",
    name: "details",
    moduleId: PLATFORM.moduleName("./details", "settings"),
  },
  {
    route: ":accountId/edit",
    name: "edit",
    moduleId: PLATFORM.moduleName("./edit", "settings"),
  },
];

export class AccountsRouter {
  configureRouter(config: RouterConfiguration) {
    config.map(routes);
  }
}
