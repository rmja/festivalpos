import { JsonConverter } from "@utiliread/json";

class TransparentConverter implements JsonConverter {
  toJson(source: number | null) {
    return source;
  }

  fromJson(source: number | null) {
    return source;
  }
}

export const transparentConverter = new TransparentConverter();
