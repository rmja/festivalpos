import Big from "big.js";

export class MoneyValueConverter {
    toView(value: Big) {
        if (value) {
            return value.toFixed(2);
        }
    }
}