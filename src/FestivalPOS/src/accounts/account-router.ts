import { RouteConfig, RouterConfiguration } from "aurelia-router";
import {
  faSignInAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { PLATFORM } from "aurelia-pal";
import { autoinject } from "aurelia-framework";

const routes: RouteConfig[] = [
  {
    route: "",
    name: "details",
    moduleId: PLATFORM.moduleName("./details", "accounts"),
    nav: true,
    title: "Overblik",
    settings: { icon: faTachometerAlt },
  },
  {
    route: "deposit",
    name: "deposit",
    moduleId: PLATFORM.moduleName("./deposit", "accounts"),
    nav: true,
    title: "Indsæt",
    settings: { icon: faSignInAlt },
  },
];

@autoinject()
export class AccountRouter {
  configureRouter(config: RouterConfiguration) {
    config.map(routes);
  }
}
