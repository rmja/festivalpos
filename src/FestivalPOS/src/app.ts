import { LogLevel, MiddlewarePlacement, Store, localStorageMiddleware, logMiddleware, rehydrateFromLocalStorage } from "aurelia-store";
import { PLATFORM, autoinject } from "aurelia-framework";
import { RouteConfig, Router, RouterConfiguration } from "aurelia-router";
import { State, addCurrentMiscOrderLine, addProductOrderLine, ensureValidState, removeOrderLine, resetOrder, setup, updateCurrentMisc } from "./state";

import { PrintManager } from "./print-manager";
import { routes as settingsRoutes } from "./settings/router";

const routes: RouteConfig[] = [
    { route: "", redirect: "sale" },
    { route: "sale", name: "sale", moduleId: PLATFORM.moduleName("./sale/router", "sale"), nav: true, title: "Salg" },
    { route: "orders", name: "orders", moduleId: PLATFORM.moduleName("./orders/router", "orders" ), nav: true, title: "Ordrehistorik" },
    { route: "serving", name: "serving", moduleId: PLATFORM.moduleName("./serving/router", "serving"), nav: true, title: "Servering" },
    { route: "checkout", name: "checkout", moduleId: PLATFORM.moduleName("./checkout/router", "checkout"), title: "Betaling" },
    { route: "accounts", name: "accounts", moduleId: PLATFORM.moduleName("./accounts/router", "accounts"), nav: true, title: "Konti" },
    { route: "alarms", name: "alarms", moduleId: PLATFORM.moduleName("./alarms/router", "alarms"), nav: true, title: "Alarmeringer" },
    { route: "statistics", name: "statistics", moduleId: PLATFORM.moduleName("./statistics/router", "statistics"), nav: true, title: "Statistik" },
    { route: "setup", name: "setup", moduleId: PLATFORM.moduleName("./setup", "setup"), nav: true, title: "Opsætning" },
    { route: "settings", name: "settings", moduleId: PLATFORM.moduleName("./settings/router", "settings"), nav: true, title: "Indstillinger", settings: { childRoutes: settingsRoutes } },
];

@autoinject()
export class App {
    router!: Router;

    constructor(private store: Store<State>, private printManager: PrintManager) {
        store.registerMiddleware(logMiddleware, MiddlewarePlacement.After, { logType: LogLevel.log });
        store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After, { key: "festivalpos-state" });

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
        await this.store.dispatch(rehydrateFromLocalStorage, "festivalpos-state");
        await this.store.dispatch(ensureValidState);

        await this.printManager.setup();
    }

    deactivate() {
        this.printManager.teardown();
    }
}