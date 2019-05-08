import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";

@autoinject()
export class CacheBuster {
    private httpClient: HttpClient;
    private baseUrl: string;
    private cacheName: string;
    private cache?: Cache;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
        const baseElement = document.querySelector("base") as HTMLBaseElement;
        this.baseUrl = baseElement ? baseElement.href : window.location.origin;
        this.cacheName = `FestivalPOS-runtime-${this.baseUrl}`;
    }

    /**
     * Invalidate cache entries matching a filter.
     * @param urlFilter The filter to match the url for. The url is without the query string
     */
    async invalidate(urlFilter: string | RegExp | (string | RegExp)[]) {
        if (!this.cache) {
            this.cache = await caches.open(this.cacheName);
        }

        const keys = await this.cache.keys();

        if (keys.length) {
            console.warn("The cache does not contain any keys");
        }

        const urlFilters = Array.isArray(urlFilter) ? urlFilter : [urlFilter];
        const baseUrl = `${this.baseUrl}${this.httpClient.baseUrl}`;
        const promises: Promise<boolean>[] = [];

        for (const key of keys) {
            const url = key.url;
            for (const filter of urlFilters) {
                const isMatch = typeof filter === "string" ? url === filter || url === `${baseUrl}${filter}` : filter.test(url);
                if (isMatch) {
                    promises.push(this.cache.delete(key));
                    break;
                }
            }
        }

        await Promise.all(promises);
    }
}