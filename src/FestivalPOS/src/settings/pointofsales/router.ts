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
    route: ":pointOfSaleId",
    name: "details",
    moduleId: PLATFORM.moduleName("./details", "settings"),
  },
  {
    route: ":pointOfSaleId/edit",
    name: "edit",
    moduleId: PLATFORM.moduleName("./edit", "settings"),
  },
];

export class PointOfSalesRouter {
  configureRouter(config: RouterConfiguration) {
    config.map(routes);
  }
}
