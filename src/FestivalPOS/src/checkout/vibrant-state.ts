const StorageKey = "festivalpos-vibrant-state";

export class VibrantState {
  setState(data: VibrantData) {
    localStorage.setItem(StorageKey, JSON.stringify(data));
  }

  getState(): VibrantData | null {
    const item = localStorage.getItem(StorageKey);
    if (item) {
      return JSON.parse(item) as VibrantData;
    }
    return null;
  }
}

export interface VibrantData {
  paymentIntentId: string;
  orderId: number;
  tagNumber?: string;
}
