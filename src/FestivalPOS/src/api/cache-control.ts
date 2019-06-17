import { CacheContext, TagEntry } from "./cache-context";

import { autoinject } from "aurelia-framework";

@autoinject()
export class CacheControl {
    private cacheName: string;
    private cache?: Cache;

    constructor(private db: CacheContext) {
        const baseElement = document.querySelector("base") as HTMLBaseElement;
        const baseUrl = baseElement ? baseElement.href : window.location.origin;
        this.cacheName = `FestivalPOS-runtime-${baseUrl}`;
    }

    tag(url: string, tags: string[]) {
        const entries = tags.map(tag => {
            return {
                key: createKey(url, tag),
                tag: tag
            };
        });

        console.log(`Tagging ${url} with`, tags);

        return this.db.tags.bulkPut(entries);
    }

    async bust(tags: string[]) {
        let urls!: string[];

        await this.db.transaction("rw", this.db.tags, async () => {
            const entries = await this.db.tags.where(nameof<TagEntry>(x => x.tag)).anyOf(tags).toArray();
            await this.db.tags.bulkDelete(entries.map(x => x.key));
            urls = entries.map(x => splitKey(x.key).url);
        });

        console.log("Busting urls", urls);

        await this.delete(urls);
    }

    private async delete(urls: string[]) {
        if (!this.cache) {
            this.cache = await caches.open(this.cacheName);
        }

        const set = new Set(urls);
        const keys = await this.cache.keys();

        for (const key of keys) {
            if (set.has(key.url)) {
                await this.cache.delete(key);
            }
        }
    }
}

const GS = String.fromCharCode(0x1D);

function createKey(url: string, tag: string) {
    return url + GS + tag;
}

function splitKey(key: string) {
    const index = key.indexOf(GS);
    return {
        url: key.slice(0, index),
        tag: key.slice(index + 1)
    };
}