import Dexie from "dexie";

export class CacheContext extends Dexie {
  tags!: Dexie.Table<TagEntry, string>;

  constructor() {
    super("FestivalPOS-cache");

    this.version(1).stores({
      tags: "key, tag",
    });
  }
}

export interface TagEntry {
  key: string;
  tag: string;
}
