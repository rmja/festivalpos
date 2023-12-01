import { Big } from "big.js";
import { JsonConverter } from "@utiliread/json";

class BigConverter implements JsonConverter {
  toJson(source: Big) {
    return source.toJSON();
  }

  fromJson(source: number) {
    return new Big(source);
  }
}

export const bigConverter = new BigConverter();
