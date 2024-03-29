import {
  RedirectToRoute,
  RouteConfig,
  RouterConfiguration,
} from "aurelia-router";
import { State, isSetup } from "../state";

import { PLATFORM } from "aurelia-pal";
import { connectTo } from "aurelia-store";

const routes: RouteConfig[] = [
  {
    route: "",
    name: "dashboard",
    moduleId: PLATFORM.moduleName("./dashboard", "serving"),
  },
];

@connectTo({
  selector: (store) => store.state,
  setup: "canActivate",
})
export class ServingRouter {
  private state!: State;

  configureRouter(config: RouterConfiguration) {
    config.map(routes);
  }

  canActivate() {
    if (!isSetup(this.state)) {
      return new RedirectToRoute("setup");
    }

    return true;
  }
}
