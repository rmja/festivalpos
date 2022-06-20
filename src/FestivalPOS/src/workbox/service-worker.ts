import { NavigationRoute, registerRoute } from "workbox-routing";
import { NetworkOnly, StaleWhileRevalidate } from "workbox-strategies";
import {
  PrecacheEntry,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { clientsClaim, setCacheNameDetails } from "workbox-core";

import { ExpirationPlugin } from "workbox-expiration";

declare var self: ServiceWorkerGlobalScope & { __WB_MANIFEST: PrecacheEntry[] };

// cacheId: "FestivalPOS"
setCacheNameDetails({ prefix: "FestivalPOS" });
// skipWaiting: true
self.skipWaiting();
// clientsClaim: true
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

// navigateFallback: "Index"
registerRoute(new NavigationRoute(createHandlerBoundToURL("Index")));

// runtimeCaching: []
const apiStrategies = {
  networkOnly: new NetworkOnly(),
  staleWhileRevalidate: new StaleWhileRevalidate(),
};
registerRoute(
  /\/api\/Products\/[0-9]+\/Image.*$/,
  new StaleWhileRevalidate({
    cacheName: "FestivalPOS-product-images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 3600, // 1 hour
      }),
    ],
  }),
  "GET"
);
registerRoute(
  /\/api\/.*/,
  function (options) {
    const bypassClientCache = options.request.headers
      .get("cache-control")
      ?.includes("max-age=0");
    const strategy = bypassClientCache
      ? apiStrategies.networkOnly
      : apiStrategies.staleWhileRevalidate;
    return strategy.handle(options);
  },
  "GET"
);
