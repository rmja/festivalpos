import { RouteConfig, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";
import { connectTo } from "aurelia-store";

const routes: RouteConfig[] = [
    { route: "orders/:orderId/pay/card", name: "card", moduleId: PLATFORM.moduleName("./cash-payment") }, // TODO
    { route: "orders/:orderId/pay/cash", name: "cash", moduleId: PLATFORM.moduleName("./cash-payment") },
    { route: "orders/:orderId/pay/account", name: "account", moduleId: PLATFORM.moduleName("./account-payment") }, // TODO
    { route: "orders/:orderId/payments/:paymentId/receipt", name: "receipt", moduleId: PLATFORM.moduleName("./receipt") },
];

@connectTo()
export class CheckoutRouter {
    configureRouter(config: RouterConfiguration) {
        config.map(routes);
    }
}