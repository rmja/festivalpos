import { RouteConfig, RouterConfiguration } from "aurelia-router";

import { PLATFORM } from "aurelia-pal";
import { autoinject } from "aurelia-framework";

const routes: RouteConfig[] = [
  {
    route: "",
    name: "list",
    moduleId: PLATFORM.moduleName("./list", "accounts"),
  },
  {
    route: ":accountId",
    name: "account",
    moduleId: PLATFORM.moduleName("./account-router", "accounts"),
  },
];

@autoinject()
export class AccountsRouter {
  configureRouter(config: RouterConfiguration) {
    config.map(routes);
  }
}
