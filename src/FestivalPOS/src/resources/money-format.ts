import { Big } from "big.js";

export class MoneyValueConverter {
    toView(value: Big, decimals = 2) {
        if (value) {
            return value.toFixed(decimals);
        }
    }
}