import "@utiliread/http/json";
import "@utiliread/http/jsonpatch";
import "./cache-extensions";

import { Http } from "@utiliread/http";

export const http = new Http({
    baseUrl: "/api",
    timeout: 10_000,
});