import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import "bootstrap/dist/js/bootstrap.js";

import { Aurelia, PLATFORM } from "aurelia-framework";

import { DialogConfiguration } from "aurelia-dialog";
import { Http } from "ur-http";
import { HttpClient } from "aurelia-fetch-client";
import { initialState } from "./state";

if ('serviceWorker' in navigator && window.location.protocol.startsWith('https')) {
    window.addEventListener('load', async () => {
        const registration = await navigator.serviceWorker.register('service-worker.js');
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    });
}

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName("aurelia-dragula"))
        .plugin(PLATFORM.moduleName("aurelia-validation"))
        .plugin(PLATFORM.moduleName("aurelia-fontawesome"))
        .plugin(PLATFORM.moduleName("aurelia-fontawesome-loader"))
        .plugin(PLATFORM.moduleName("aurelia-dialog"), (config: DialogConfiguration) => {
            config.useDefaults();
            config.settings.keyboard = true;
        })
        .plugin(PLATFORM.moduleName("aurelia-store"), { initialState })
        .globalResources(PLATFORM.moduleName("top-navbar"))
        .globalResources(PLATFORM.moduleName("page-body.html"))
        .globalResources(PLATFORM.moduleName("empty-hint.html"))
        .globalResources(PLATFORM.moduleName("resources/date-time-format"))
        .globalResources(PLATFORM.moduleName("resources/money-format"))
        .globalResources(PLATFORM.moduleName("resources/number-format"))
        .globalResources(PLATFORM.moduleName("resources/keypad-display"))
        .globalResources(PLATFORM.moduleName("resources/keypad-input"));

    if (__DEBUG__) {
        aurelia.use.developmentLogging();
    }

    await aurelia.start();

    const httpClient = aurelia.container.get(HttpClient) as HttpClient;
    httpClient.configure(config => config.withBaseUrl("api"));
    Http.defaults.fetch = httpClient.fetch.bind(httpClient);
    Http.defaults.timeout = 5000;

    // const oidc = aurelia.container.get(OpenIdConnect) as OpenIdConnect;
    // httpClient.configure(config => config.withInterceptor(new AuthInterceptor(oidc, aurelia)));

    await aurelia.setRoot(PLATFORM.moduleName("app"));
}