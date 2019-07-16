import { RouteConfig, RouterConfiguration } from "aurelia-router";

import { PLATFORM } from "aurelia-pal";

const routes: RouteConfig[] = [
    { route: "orders/:orderId/tag", name: "tag", moduleId: PLATFORM.moduleName("./tag", "checkout") },
    { route: "orders/:orderId/pay/card", name: "card", moduleId: PLATFORM.moduleName("./card-payment", "checkout") },
    { route: "orders/:orderId/pay/card-callback", name: "card-callback", moduleId: PLATFORM.moduleName("./card-callback", "checkout") },
    { route: "orders/:orderId/pay/card-error", name: "card-error", moduleId: PLATFORM.moduleName("./card-error", "checkout") },
    { route: "orders/:orderId/pay/cash", name: "cash", moduleId: PLATFORM.moduleName("./cash-payment", "checkout") },
    { route: "orders/:orderId/pay/account", name: "account", moduleId: PLATFORM.moduleName("./account-payment", "checkout") },
    { route: "orders/:orderId/pay/account/tag", name: "account-tag", moduleId: PLATFORM.moduleName("./account-tag", "checkout") },
    { route: "orders/:orderId/payments/:paymentId/receipt", name: "receipt", moduleId: PLATFORM.moduleName("./receipt", "checkout") },
];

export class CheckoutRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}