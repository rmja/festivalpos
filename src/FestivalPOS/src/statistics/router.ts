import { RouteConfig, RouterConfiguration } from "aurelia-router";

import { DateTime } from "luxon";
import { PLATFORM } from "aurelia-pal";

const routes: RouteConfig[] = [
    { route: "", name: "dashboard", redirect: `/${DateTime.local().year}`, nav: true, title: "Dashboard" },
    { route: ":year", name: "year", moduleId: PLATFORM.moduleName("./dashboard", "statistics") },
    { route: ":year/:month", name: "month", moduleId: PLATFORM.moduleName("./dashboard", "statistics") },
    { route: ":year/:month/:day", name: "day", moduleId: PLATFORM.moduleName("./dashboard", "statistics") },
]

export class StatisticsRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}