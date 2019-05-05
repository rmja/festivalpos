import { autoinject, PLATFORM } from "aurelia-framework";
import { RouteConfig, RouterConfiguration, Router } from "aurelia-router";
import { Store, MiddlewarePlacement, logMiddleware, LogLevel, localStorageMiddleware, rehydrateFromLocalStorage } from "aurelia-store";
import { State, addProductOrderLine, resetOrder, removeOrderLine, updateCurrentMisc, addCurrentMiscOrderLine, setup, ensureValidState } from "./state";

import { routes as settingsRoutes } from "./settings/router";
import { AlarmsHub } from "./api/alarms-hub";

const routes: RouteConfig[] = [
    { route: "", redirect: "sale" },
    { route: "setup", name: "setup", moduleId: PLATFORM.moduleName("./setup") },
    { route: "sale", name: "sale", moduleId: PLATFORM.moduleName("./sale/router"), nav: true, title: "Salg" },
    { route: "checkout", name: "checkout", moduleId: PLATFORM.moduleName("./checkout/router"), title: "Betaling" },
    { route: "accounts", name: "accounts", moduleId: PLATFORM.moduleName("./accounts/router"), nav: true, title: "Konti" },
    { route: "alarms", name: "alarms", moduleId: PLATFORM.moduleName("./alarms/router"), nav: true, title: "Alarmeringer" },
    { route: "statistics", name: "statistics", moduleId: PLATFORM.moduleName("./statistics/router"), nav: true, title: "Statistik" },
    { route: "setup", name: "setup", moduleId: PLATFORM.moduleName("./setup"), nav: true, title: "Opsætning" },
    { route: "settings", name: "settings", moduleId: PLATFORM.moduleName("./settings/router"), nav: true, title: "Indstillinger", settings: { childRoutes: settingsRoutes } },
];

@autoinject()
export class App {
    router!: Router;

    constructor(private store: Store<State>, private alarmsHub: AlarmsHub) {
        store.registerMiddleware(logMiddleware, MiddlewarePlacement.After, { logType: LogLevel.log });
        store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After, { key: "state" });

        store.registerAction("EnsureValidState", ensureValidState);
        store.registerAction("Setup", setup);
        store.registerAction("ResetOrder", resetOrder);
        store.registerAction("UpdateCurrentMisc", updateCurrentMisc);
        store.registerAction("AddProductOrderLine", addProductOrderLine);
        store.registerAction("AddCurrentMiscOrderLine", addCurrentMiscOrderLine);
        store.registerAction("RemoveOrderLine", removeOrderLine);
        store.registerAction('Rehydrate', rehydrateFromLocalStorage);
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map(routes);
        this.router = router;
    }

    async activate() {
        await this.store.dispatch(rehydrateFromLocalStorage, "state");
        await this.store.dispatch(ensureValidState);
        await this.alarmsHub.connect();
    }

    async deactivate() {
        await this.alarmsHub.disconnect();
    }
}