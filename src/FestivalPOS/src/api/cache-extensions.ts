import { HttpBuilder, HttpBuilderOfT } from "@utiliread/http";

declare module "@utiliread/http" {
  interface HttpBuilderOfT<T> {
    bypassClientCache(bypass?: boolean): HttpBuilderOfT<T>;
  }
}

function bypassClientCache<B extends HttpBuilder>(this: B, bypass = true) {
  if (bypass) {
    // Setting "no-cache" makes Chrome omit "If-None-Match".
    // Setting max-age=0 forces the browser to connect to the server without serving the browser cache.
    this.message.headers.set("Cache-Control", "max-age=0");
  }
  return this;
}

HttpBuilderOfT.prototype.bypassClientCache = bypassClientCache;
