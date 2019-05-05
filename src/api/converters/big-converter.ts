import { JsonConverter } from "ur-json";
import { Big } from "big.js";

class BigConverter implements JsonConverter {
    toJson(source: Big) {
        return source.toJSON();
    }

    fromJson(source: number) {
        return new Big(source);
    }
}

export const bigConverter = new BigConverter();