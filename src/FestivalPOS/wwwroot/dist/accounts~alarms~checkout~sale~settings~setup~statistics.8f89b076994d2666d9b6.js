(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts~alarms~checkout~sale~settings~setup~statistics"],{

/***/ "./src/api/account.ts":
/*!****************************!*\
  !*** ./src/api/account.ts ***!
  \****************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/big-converter */ "./src/api/converters/big-converter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Account = /** @class */ (function () {
    function Account() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Account.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Account.prototype, "number", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_0__["Big"])
    ], Account.prototype, "maxCredit", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_0__["Big"])
    ], Account.prototype, "remainingCredit", void 0);
    return Account;
}());



/***/ }),

/***/ "./src/api/alarms.ts":
/*!***************************!*\
  !*** ./src/api/alarms.ts ***!
  \***************************/
/*! exports provided: AlarmFeed, AlarmEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmFeed", function() { return AlarmFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmEvent", function() { return AlarmEvent; });
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/date-time-converter */ "./src/api/converters/date-time-converter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlarmFeed = /** @class */ (function () {
    function AlarmFeed() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], AlarmFeed.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], AlarmFeed.prototype, "name", void 0);
    return AlarmFeed;
}());

var AlarmEvent = /** @class */ (function () {
    function AlarmEvent() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], AlarmEvent.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], AlarmEvent.prototype, "alarmFeedId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], AlarmEvent.prototype, "alarmFeedName", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], AlarmEvent.prototype, "terminalId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], AlarmEvent.prototype, "terminalName", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], AlarmEvent.prototype, "pointOfSaleId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], AlarmEvent.prototype, "pointOfSaleName", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__["dateTimeConverter"] }),
        __metadata("design:type", luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"])
    ], AlarmEvent.prototype, "cancelled", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__["dateTimeConverter"] }),
        __metadata("design:type", luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"])
    ], AlarmEvent.prototype, "created", void 0);
    return AlarmEvent;
}());



/***/ }),

/***/ "./src/api/cache-buster.ts":
/*!*********************************!*\
  !*** ./src/api/cache-buster.ts ***!
  \*********************************/
/*! exports provided: CacheBuster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheBuster", function() { return CacheBuster; });
/* harmony import */ var aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-fetch-client */ "./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CacheBuster = /** @class */ (function () {
    function CacheBuster(httpClient) {
        this.httpClient = httpClient;
        var baseElement = document.querySelector("base");
        this.baseUrl = baseElement ? baseElement.href : window.location.origin;
        this.cacheName = "FestivalPOS-runtime-" + this.baseUrl;
    }
    /**
     * Invalidate cache entries matching a filter.
     * @param urlFilter The filter to match the url for. The url is without the query string
     */
    CacheBuster.prototype.invalidate = function (urlFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keys, urlFilters, baseUrl, promises, _i, keys_1, key, url, _b, urlFilters_1, filter, isMatch;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this.cache) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, caches.open(this.cacheName)];
                    case 1:
                        _a.cache = _c.sent();
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.cache.keys()];
                    case 3:
                        keys = _c.sent();
                        if (keys.length) {
                            console.warn("The cache does not contain any keys");
                        }
                        urlFilters = Array.isArray(urlFilter) ? urlFilter : [urlFilter];
                        baseUrl = "" + this.baseUrl + this.httpClient.baseUrl;
                        promises = [];
                        for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            key = keys_1[_i];
                            url = key.url;
                            for (_b = 0, urlFilters_1 = urlFilters; _b < urlFilters_1.length; _b++) {
                                filter = urlFilters_1[_b];
                                isMatch = typeof filter === "string" ? url === filter || url === "" + baseUrl + filter : filter.test(url);
                                if (isMatch) {
                                    promises.push(this.cache.delete(key));
                                    break;
                                }
                            }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheBuster = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"])(),
        __metadata("design:paramtypes", [aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CacheBuster);
    return CacheBuster;
}());



/***/ }),

/***/ "./src/api/converters/big-converter.ts":
/*!*********************************************!*\
  !*** ./src/api/converters/big-converter.ts ***!
  \*********************************************/
/*! exports provided: bigConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigConverter", function() { return bigConverter; });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);

var BigConverter = /** @class */ (function () {
    function BigConverter() {
    }
    BigConverter.prototype.toJson = function (source) {
        return source.toJSON();
    };
    BigConverter.prototype.fromJson = function (source) {
        return new big_js__WEBPACK_IMPORTED_MODULE_0__["Big"](source);
    };
    return BigConverter;
}());
var bigConverter = new BigConverter();


/***/ }),

/***/ "./src/api/converters/date-time-converter.ts":
/*!***************************************************!*\
  !*** ./src/api/converters/date-time-converter.ts ***!
  \***************************************************/
/*! exports provided: dateTimeConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeConverter", function() { return dateTimeConverter; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

var DateTimeConverter = /** @class */ (function () {
    function DateTimeConverter() {
    }
    DateTimeConverter.prototype.toJson = function (source) {
        if (source) {
            return source.toJSON();
        }
    };
    DateTimeConverter.prototype.fromJson = function (source) {
        if (source) {
            return luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromISO(source);
        }
    };
    return DateTimeConverter;
}());
var dateTimeConverter = new DateTimeConverter();


/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var ur_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-http */ "./node_modules/ur-http/dist/esm/index.js");
/* harmony import */ var _point_of_sale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-of-sale */ "./src/api/point-of-sale.ts");
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminal */ "./src/api/terminal.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "./src/api/product.ts");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment */ "./src/api/payment.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order */ "./src/api/order.ts");
/* harmony import */ var _order_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-stats */ "./src/api/order-stats.ts");
/* harmony import */ var _alarms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alarms */ "./src/api/alarms.ts");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account */ "./src/api/account.ts");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _cache_buster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cache-buster */ "./src/api/cache-buster.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Api = /** @class */ (function () {
    function Api(buster) {
        this.buster = buster;
        this.invalidate = this.invalidate.bind(this);
    }
    Api.prototype.createPointOfSale = function (pos) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/PointOfSales").withJson(pos).expectJson(_point_of_sale__WEBPACK_IMPORTED_MODULE_1__["PointOfSale"]).onSent(this.invalidate());
    };
    Api.prototype.getAllPointOfSales = function () {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/PointOfSales").expectJsonArray(_point_of_sale__WEBPACK_IMPORTED_MODULE_1__["PointOfSale"]);
    };
    Api.prototype.getPointOfSale = function (pointOfSaleId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/PointOfSales/" + pointOfSaleId).expectJson(_point_of_sale__WEBPACK_IMPORTED_MODULE_1__["PointOfSale"]);
    };
    Api.prototype.updatePointOfSale = function (pointOfSaleId, patch) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].patch("/PointOfSales/" + pointOfSaleId).withJson(patch).expectJson(_point_of_sale__WEBPACK_IMPORTED_MODULE_1__["PointOfSale"]).onSent(this.invalidate());
    };
    Api.prototype.deletePointOfSale = function (pointOfSaleId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/PointOfSales/" + pointOfSaleId).onSent(this.invalidate());
    };
    Api.prototype.createTerminal = function (terminal) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Terminals").withJson(terminal).expectJson(_terminal__WEBPACK_IMPORTED_MODULE_2__["Terminal"]).onSent(this.invalidate());
    };
    Api.prototype.getAllTerminals = function () {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Terminals").expectJsonArray(_terminal__WEBPACK_IMPORTED_MODULE_2__["Terminal"]);
    };
    Api.prototype.getTerminal = function (terminalId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Terminals/" + terminalId).expectJson(_terminal__WEBPACK_IMPORTED_MODULE_2__["Terminal"]);
    };
    Api.prototype.updateTerminal = function (terminalId, patch) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].patch("/Terminals/" + terminalId).withJson(patch).expectJson(_terminal__WEBPACK_IMPORTED_MODULE_2__["Terminal"]).onSent(this.invalidate());
    };
    Api.prototype.deleteTerminal = function (terminalId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/Terminals/" + terminalId).onSent(this.invalidate());
    };
    Api.prototype.createProduct = function (product) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Products").withJson(product).expectJson(_product__WEBPACK_IMPORTED_MODULE_3__["Product"]).onSent(this.invalidate());
    };
    Api.prototype.getAllProducts = function () {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Products").expectJsonArray(_product__WEBPACK_IMPORTED_MODULE_3__["Product"]);
    };
    Api.prototype.getProduct = function (productId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Products/" + productId).expectJson(_product__WEBPACK_IMPORTED_MODULE_3__["Product"]);
    };
    Api.prototype.updateProduct = function (productId, patch) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].patch("/Products/" + productId).withJson(patch).expectJson(_product__WEBPACK_IMPORTED_MODULE_3__["Product"]).onSent(this.invalidate(/\/PointOfSales\/\d+\/Products/));
    };
    Api.prototype.deleteProduct = function (productId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/Products/" + productId).onSent(this.invalidate(/\/PointOfSales\/\d+\/Products/));
    };
    Api.prototype.getProductsByPointOfSaleId = function (pointOfSaleId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/PointOfSales/" + pointOfSaleId + "/Products").expectJsonArray(_product__WEBPACK_IMPORTED_MODULE_3__["Product"]);
    };
    Api.prototype.updateProductsByPointOfSaleId = function (pointOfSaleId, patch) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].patch("/PointOfSales/" + pointOfSaleId + "/Products").withJson(patch).expectJsonArray(_product__WEBPACK_IMPORTED_MODULE_3__["Product"]).onSent(this.invalidate());
    };
    Api.prototype.createOrder = function (order) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Orders").withJson(order).expectJson(_order__WEBPACK_IMPORTED_MODULE_5__["Order"]).onSent(this.invalidate());
    };
    Api.prototype.getOrderById = function (orderId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Orders/" + orderId).expectJson(_order__WEBPACK_IMPORTED_MODULE_5__["Order"]);
    };
    Api.prototype.deleteOrder = function (orderId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/Orders/" + orderId).onSent(this.invalidate());
    };
    Api.prototype.createPayment = function (orderId, payment) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Orders/" + orderId + "/Payments").withJson(payment).expectJson(_payment__WEBPACK_IMPORTED_MODULE_4__["Payment"]).onSent(this.invalidate("/Payments", "/Orders/" + orderId));
    };
    Api.prototype.getAllPayments = function (filter) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Payments", filter).expectJsonArray(_payment__WEBPACK_IMPORTED_MODULE_4__["Payment"]);
    };
    Api.prototype.getHourlyStats = function (filter) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Stats/Hourly", filter).expectJsonArray(_order_stats__WEBPACK_IMPORTED_MODULE_6__["OrderStats"]);
    };
    Api.prototype.createAlarmFeed = function (feed) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Alarms/Feeds").withJson(feed).expectJson(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmFeed"]).onSent(this.invalidate());
    };
    Api.prototype.getAllAlarmFeeds = function () {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Alarms/Feeds").expectJsonArray(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmFeed"]);
    };
    Api.prototype.getAlarmFeed = function (alarmFeedId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Alarms/Feeds/" + alarmFeedId).expectJson(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmFeed"]);
    };
    Api.prototype.updateAlarmFeed = function (alarmFeedId, patch) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].patch("/Alarms/Feeds/" + alarmFeedId).withJson(patch).expectJson(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmFeed"]).onSent(this.invalidate());
    };
    Api.prototype.deleteAlarmFeed = function (alarmFeedId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/Alarms/Feeds/" + alarmFeedId).onSent(this.invalidate());
    };
    Api.prototype.createAlarmEvent = function (alarmFeedId, event) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Alarms/Feeds/" + alarmFeedId + "/Events").withJson(event).expectJson(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmEvent"]).onSent(this.invalidate("/Alarms/Events/Pending"));
    };
    Api.prototype.getAllPendingAlarmEvents = function (filter) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Alarms/Events/Pending", filter).expectJsonArray(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmEvent"]);
    };
    Api.prototype.cancelAlarmEvent = function (alarmEventId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/Alarms/Events/" + alarmEventId).expectJson(_alarms__WEBPACK_IMPORTED_MODULE_7__["AlarmEvent"]).onSent(this.invalidate("/Alarms/Events/Pending"));
    };
    Api.prototype.createAccount = function (account) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Accounts").withJson(account).expectJson(_account__WEBPACK_IMPORTED_MODULE_8__["Account"]).onSent(this.invalidate());
    };
    Api.prototype.getAllAccounts = function () {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Accounts").expectJsonArray(_account__WEBPACK_IMPORTED_MODULE_8__["Account"]);
    };
    Api.prototype.getAccount = function (accountId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].get("/Accounts/" + accountId).expectJson(_account__WEBPACK_IMPORTED_MODULE_8__["Account"]);
    };
    Api.prototype.updateAccount = function (accountId, patch) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].patch("/Accounts/" + accountId).withJson(patch).expectJson(_account__WEBPACK_IMPORTED_MODULE_8__["Account"]).onSent(this.invalidate());
    };
    Api.prototype.resetAllAccounts = function () {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].post("/Accounts/Reset").onSent(this.invalidate(/\/Accounts/));
    };
    Api.prototype.deleteAccount = function (accountId) {
        return ur_http__WEBPACK_IMPORTED_MODULE_0__["Http"].delete("/Accounts/" + accountId).onSent(this.invalidate());
    };
    Api.prototype.invalidate = function () {
        var _this = this;
        var additionalFilters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            additionalFilters[_i] = arguments[_i];
        }
        return function (response) {
            var url = response.rawResponse.url;
            var filters = [url].concat(additionalFilters);
            var match = /(.*)\/\d+$/.exec(url);
            if (match) {
                filters.push(match[1]);
            }
            return _this.buster.invalidate(filters);
        };
    };
    Api = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_9__["autoinject"])(),
        __metadata("design:paramtypes", [_cache_buster__WEBPACK_IMPORTED_MODULE_10__["CacheBuster"]])
    ], Api);
    return Api;
}());

function bypassCache() {
    this.message.url = ur_http__WEBPACK_IMPORTED_MODULE_0__["QueryString"].append(this.message.url, { bypassCache: null });
    this.addHeader("Cache-Control", "no-cache");
    return this;
}
ur_http__WEBPACK_IMPORTED_MODULE_0__["HttpBuilderOfT"].prototype.bypassCache = bypassCache;


/***/ }),

/***/ "./src/api/order-stats.ts":
/*!********************************!*\
  !*** ./src/api/order-stats.ts ***!
  \********************************/
/*! exports provided: OrderStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStats", function() { return OrderStats; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/date-time-converter */ "./src/api/converters/date-time-converter.ts");
/* harmony import */ var _converters_big_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converters/big-converter */ "./src/api/converters/big-converter.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentStats = /** @class */ (function () {
    function PaymentStats() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", String)
    ], PaymentStats.prototype, "method", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], PaymentStats.prototype, "payments", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_3__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_4__["Big"])
    ], PaymentStats.prototype, "total", void 0);
    return PaymentStats;
}());
var ProductStats = /** @class */ (function () {
    function ProductStats() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], ProductStats.prototype, "productId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", String)
    ], ProductStats.prototype, "productName", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], ProductStats.prototype, "orders", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], ProductStats.prototype, "quantity", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_3__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_4__["Big"])
    ], ProductStats.prototype, "total", void 0);
    return ProductStats;
}());
var OrderStats = /** @class */ (function () {
    function OrderStats() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ converter: _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__["dateTimeConverter"] }),
        __metadata("design:type", luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"])
    ], OrderStats.prototype, "periodStart", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], OrderStats.prototype, "orders", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_3__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_4__["Big"])
    ], OrderStats.prototype, "total", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ type: PaymentStats }),
        __metadata("design:type", Array)
    ], OrderStats.prototype, "payments", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_1__["jsonProperty"])({ type: ProductStats }),
        __metadata("design:type", Array)
    ], OrderStats.prototype, "products", void 0);
    return OrderStats;
}());



/***/ }),

/***/ "./src/api/order.ts":
/*!**************************!*\
  !*** ./src/api/order.ts ***!
  \**************************/
/*! exports provided: OrderLine, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderLine", function() { return OrderLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/date-time-converter */ "./src/api/converters/date-time-converter.ts");
/* harmony import */ var _converters_big_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converters/big-converter */ "./src/api/converters/big-converter.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment */ "./src/api/payment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderLine = /** @class */ (function () {
    function OrderLine() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], OrderLine.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], OrderLine.prototype, "orderId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], OrderLine.prototype, "name", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], OrderLine.prototype, "note", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], OrderLine.prototype, "productId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], OrderLine.prototype, "quantity", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_3__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_4__["Big"])
    ], OrderLine.prototype, "total", void 0);
    return OrderLine;
}());

var Order = /** @class */ (function () {
    function Order() {
        this.lines = [];
        this.payments = [];
    }
    Object.defineProperty(Order.prototype, "totalQuantity", {
        get: function () {
            return this.lines.reduce(function (current, line) { return current + line.quantity; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "total", {
        get: function () {
            return this.lines.reduce(function (current, line) { return current.add(line.total); }, new big_js__WEBPACK_IMPORTED_MODULE_4__["Big"](0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "totalPaid", {
        get: function () {
            return this.payments.reduce(function (current, payment) { return current.add(payment.amount); }, new big_js__WEBPACK_IMPORTED_MODULE_4__["Big"](0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "amountDue", {
        get: function () {
            return this.total.sub(this.totalPaid);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Order.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Order.prototype, "pointOfSaleId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Order.prototype, "terminalId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ type: OrderLine }),
        __metadata("design:type", Array)
    ], Order.prototype, "lines", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ type: _payment__WEBPACK_IMPORTED_MODULE_5__["Payment"] }),
        __metadata("design:type", Array)
    ], Order.prototype, "payments", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_2__["dateTimeConverter"] }),
        __metadata("design:type", luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"])
    ], Order.prototype, "created", void 0);
    return Order;
}());



/***/ }),

/***/ "./src/api/payment.ts":
/*!****************************!*\
  !*** ./src/api/payment.ts ***!
  \****************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/big-converter */ "./src/api/converters/big-converter.ts");
/* harmony import */ var _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converters/date-time-converter */ "./src/api/converters/date-time-converter.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Payment = /** @class */ (function () {
    function Payment() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Payment.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Payment.prototype, "orderId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], Payment.prototype, "method", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_1__["Big"])
    ], Payment.prototype, "amount", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], Payment.prototype, "transactionNumber", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Payment.prototype, "accountId", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_date_time_converter__WEBPACK_IMPORTED_MODULE_3__["dateTimeConverter"] }),
        __metadata("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], Payment.prototype, "created", void 0);
    return Payment;
}());



/***/ }),

/***/ "./src/api/point-of-sale.ts":
/*!**********************************!*\
  !*** ./src/api/point-of-sale.ts ***!
  \**********************************/
/*! exports provided: PointOfSale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfSale", function() { return PointOfSale; });
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PointOfSale = /** @class */ (function () {
    function PointOfSale() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], PointOfSale.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], PointOfSale.prototype, "name", void 0);
    return PointOfSale;
}());



/***/ }),

/***/ "./src/api/product.ts":
/*!****************************!*\
  !*** ./src/api/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/big-converter */ "./src/api/converters/big-converter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])({ converter: _converters_big_converter__WEBPACK_IMPORTED_MODULE_2__["bigConverter"] }),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_1___default.a)
    ], Product.prototype, "price", void 0);
    return Product;
}());



/***/ }),

/***/ "./src/api/terminal.ts":
/*!*****************************!*\
  !*** ./src/api/terminal.ts ***!
  \*****************************/
/*! exports provided: Terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Terminal = /** @class */ (function () {
    function Terminal() {
    }
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", Number)
    ], Terminal.prototype, "id", void 0);
    __decorate([
        Object(ur_json__WEBPACK_IMPORTED_MODULE_0__["jsonProperty"])(),
        __metadata("design:type", String)
    ], Terminal.prototype, "name", void 0);
    return Terminal;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FjY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hbGFybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jYWNoZS1idXN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jb252ZXJ0ZXJzL2JpZy1jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jb252ZXJ0ZXJzL2RhdGUtdGltZS1jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL29yZGVyLXN0YXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvb3JkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9wYXltZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcG9pbnQtb2Ytc2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS90ZXJtaW5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1U7QUFDbUI7QUFFMUQ7SUFBQTtJQWVBLENBQUM7SUFiRztRQURDLDREQUFZLEVBQUU7O3VDQUNIO0lBR1o7UUFEQyw0REFBWSxFQUFFOzsyQ0FDQztJQUdoQjtRQURDLDREQUFZLEVBQUU7O3lDQUNEO0lBR2Q7UUFEQyw0REFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLHNFQUFZLEVBQUUsQ0FBQztrQ0FDOUIsMENBQUc7OENBQUM7SUFHaEI7UUFEQyw0REFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLHNFQUFZLEVBQUUsQ0FBQztrQ0FDeEIsMENBQUc7b0RBQUM7SUFDMUIsY0FBQztDQUFBO0FBZm1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ptQjtBQUNOO0FBQ29DO0FBRXJFO0lBQUE7SUFNQSxDQUFDO0lBSkc7UUFEQyw0REFB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bEIsa0JBQUM7Q0FBQTtBQU51Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZjO0FBQ1Q7QUFDNkI7QUFFMUQ7SUFBQTtJQVNBLENBQUM7SUFQRztRQURDLDREQUFZLEVBQUU7O3VDQUNIO0lBR1o7UUFEQyw0REFBWSxFQUFFOzt5Q0FDRDtJQUdkO1FBREMsNERBQVksQ0FBQyxFQUFFLFNBQVMsRUFBRSxzRUFBWSxFQUFFLENBQUM7a0NBQ2xDLDZDQUFHOzBDQUFDO0lBQ2hCLGNBQUM7Q0FBQTtBQVRtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ptQjtBQUV2QztJQUFBO0lBTUEsQ0FBQztJQUpHO1FBREMsNERBQVksRUFBRTs7d0NBQ0g7SUFHWjtRQURDLDREQUFZLEVBQUU7OzBDQUNEO0lBQ2xCLGVBQUM7Q0FBQTtBQU5vQiIsImZpbGUiOiJhY2NvdW50c35hbGFybXN+Y2hlY2tvdXR+c2FsZX5zZXR0aW5nc35zZXR1cH5zdGF0aXN0aWNzLjhmODliMDc2OTk0ZDI2NjZkOWI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBqc29uUHJvcGVydHkgfSBmcm9tIFwidXItanNvblwiO1xyXG5pbXBvcnQgeyBiaWdDb252ZXJ0ZXIgfSBmcm9tIFwiLi9jb252ZXJ0ZXJzL2JpZy1jb252ZXJ0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50IHtcclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgaWQhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBudW1iZXIhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGJpZ0NvbnZlcnRlciB9KVxyXG4gICAgbWF4Q3JlZGl0ITogQmlnO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGJpZ0NvbnZlcnRlciB9KVxyXG4gICAgcmVtYWluaW5nQ3JlZGl0ITogQmlnO1xyXG59IiwiaW1wb3J0IHsganNvblByb3BlcnR5IH0gZnJvbSBcInVyLWpzb25cIjtcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcclxuaW1wb3J0IHsgZGF0ZVRpbWVDb252ZXJ0ZXIgfSBmcm9tIFwiLi9jb252ZXJ0ZXJzL2RhdGUtdGltZS1jb252ZXJ0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGFybUZlZWQge1xyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBpZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbGFybUV2ZW50IHtcclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgaWQhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBhbGFybUZlZWRJZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIGFsYXJtRmVlZE5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICB0ZXJtaW5hbElkITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgdGVybWluYWxOYW1lITogc3RyaW5nO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgcG9pbnRPZlNhbGVJZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIHBvaW50T2ZTYWxlTmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBAanNvblByb3BlcnR5KHsgY29udmVydGVyOiBkYXRlVGltZUNvbnZlcnRlciB9KVxyXG4gICAgY2FuY2VsbGVkPzogRGF0ZVRpbWU7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSh7IGNvbnZlcnRlcjogZGF0ZVRpbWVDb252ZXJ0ZXIgfSlcclxuICAgIGNyZWF0ZWQhOiBEYXRlVGltZTtcclxufSIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FjaGVCdXN0ZXIge1xyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xyXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhY2hlTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjYWNoZT86IENhY2hlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIGNvbnN0IGJhc2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIikgYXMgSFRNTEJhc2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VFbGVtZW50ID8gYmFzZUVsZW1lbnQuaHJlZiA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgICAgdGhpcy5jYWNoZU5hbWUgPSBgRmVzdGl2YWxQT1MtcnVudGltZS0ke3RoaXMuYmFzZVVybH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52YWxpZGF0ZSBjYWNoZSBlbnRyaWVzIG1hdGNoaW5nIGEgZmlsdGVyLlxyXG4gICAgICogQHBhcmFtIHVybEZpbHRlciBUaGUgZmlsdGVyIHRvIG1hdGNoIHRoZSB1cmwgZm9yLiBUaGUgdXJsIGlzIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBhc3luYyBpbnZhbGlkYXRlKHVybEZpbHRlcjogc3RyaW5nIHwgUmVnRXhwIHwgKHN0cmluZyB8IFJlZ0V4cClbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYWNoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4odGhpcy5jYWNoZU5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXMuY2FjaGUua2V5cygpO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGNhY2hlIGRvZXMgbm90IGNvbnRhaW4gYW55IGtleXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmxGaWx0ZXJzID0gQXJyYXkuaXNBcnJheSh1cmxGaWx0ZXIpID8gdXJsRmlsdGVyIDogW3VybEZpbHRlcl07XHJcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGAke3RoaXMuYmFzZVVybH0ke3RoaXMuaHR0cENsaWVudC5iYXNlVXJsfWA7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8Ym9vbGVhbj5bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGtleS51cmw7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIHVybEZpbHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzTWF0Y2ggPSB0eXBlb2YgZmlsdGVyID09PSBcInN0cmluZ1wiID8gdXJsID09PSBmaWx0ZXIgfHwgdXJsID09PSBgJHtiYXNlVXJsfSR7ZmlsdGVyfWAgOiBmaWx0ZXIudGVzdCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuY2FjaGUuZGVsZXRlKGtleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBKc29uQ29udmVydGVyIH0gZnJvbSBcInVyLWpzb25cIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuY2xhc3MgQmlnQ29udmVydGVyIGltcGxlbWVudHMgSnNvbkNvbnZlcnRlciB7XHJcbiAgICB0b0pzb24oc291cmNlOiBCaWcpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlLnRvSlNPTigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21Kc29uKHNvdXJjZTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWcoc291cmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJpZ0NvbnZlcnRlciA9IG5ldyBCaWdDb252ZXJ0ZXIoKTsiLCJpbXBvcnQgeyBKc29uQ29udmVydGVyIH0gZnJvbSBcInVyLWpzb25cIjtcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcclxuXHJcbmNsYXNzIERhdGVUaW1lQ29udmVydGVyIGltcGxlbWVudHMgSnNvbkNvbnZlcnRlciB7XHJcbiAgICB0b0pzb24oc291cmNlOiBEYXRlVGltZSkge1xyXG4gICAgICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS50b0pTT04oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUpzb24oc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tSVNPKHNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZVRpbWVDb252ZXJ0ZXIgPSBuZXcgRGF0ZVRpbWVDb252ZXJ0ZXIoKTsiLCJpbXBvcnQgeyBIdHRwLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidXItaHR0cFwiO1xyXG5pbXBvcnQgeyBQb2ludE9mU2FsZSB9IGZyb20gXCIuL3BvaW50LW9mLXNhbGVcIjtcclxuaW1wb3J0IHsgVGVybWluYWwgfSBmcm9tIFwiLi90ZXJtaW5hbFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSBcIi4vcGF5bWVudFwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XHJcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi9vcmRlclwiO1xyXG5pbXBvcnQgeyBPcmRlclN0YXRzIH0gZnJvbSBcIi4vb3JkZXItc3RhdHNcIjtcclxuaW1wb3J0IHsgSHR0cEJ1aWxkZXJPZlQsIFF1ZXJ5U3RyaW5nIH0gZnJvbSBcInVyLWh0dHBcIjtcclxuaW1wb3J0IHsgQWxhcm1GZWVkLCBBbGFybUV2ZW50IH0gZnJvbSBcIi4vYWxhcm1zXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9hY2NvdW50XCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQ2FjaGVCdXN0ZXIgfSBmcm9tIFwiLi9jYWNoZS1idXN0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1c3RlcjogQ2FjaGVCdXN0ZXIpIHtcclxuICAgICAgICB0aGlzLmludmFsaWRhdGUgPSB0aGlzLmludmFsaWRhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb2ludE9mU2FsZShwb3M6IHsgbmFtZTogc3RyaW5nIH0pIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5wb3N0KFwiL1BvaW50T2ZTYWxlc1wiKS53aXRoSnNvbihwb3MpLmV4cGVjdEpzb24oUG9pbnRPZlNhbGUpLm9uU2VudCh0aGlzLmludmFsaWRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUG9pbnRPZlNhbGVzKCkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChcIi9Qb2ludE9mU2FsZXNcIikuZXhwZWN0SnNvbkFycmF5KFBvaW50T2ZTYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2ludE9mU2FsZShwb2ludE9mU2FsZUlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5nZXQoYC9Qb2ludE9mU2FsZXMvJHtwb2ludE9mU2FsZUlkfWApLmV4cGVjdEpzb24oUG9pbnRPZlNhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvaW50T2ZTYWxlKHBvaW50T2ZTYWxlSWQ6IG51bWJlciwgcGF0Y2g6IE9wZXJhdGlvbltdKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucGF0Y2goYC9Qb2ludE9mU2FsZXMvJHtwb2ludE9mU2FsZUlkfWApLndpdGhKc29uKHBhdGNoKS5leHBlY3RKc29uKFBvaW50T2ZTYWxlKS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBvaW50T2ZTYWxlKHBvaW50T2ZTYWxlSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmRlbGV0ZShgL1BvaW50T2ZTYWxlcy8ke3BvaW50T2ZTYWxlSWR9YCkub25TZW50KHRoaXMuaW52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUZXJtaW5hbCh0ZXJtaW5hbDogeyBuYW1lOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLnBvc3QoXCIvVGVybWluYWxzXCIpLndpdGhKc29uKHRlcm1pbmFsKS5leHBlY3RKc29uKFRlcm1pbmFsKS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFRlcm1pbmFscygpIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5nZXQoXCIvVGVybWluYWxzXCIpLmV4cGVjdEpzb25BcnJheShUZXJtaW5hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVybWluYWwodGVybWluYWxJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAuZ2V0KGAvVGVybWluYWxzLyR7dGVybWluYWxJZH1gKS5leHBlY3RKc29uKFRlcm1pbmFsKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUZXJtaW5hbCh0ZXJtaW5hbElkOiBudW1iZXIsIHBhdGNoOiBPcGVyYXRpb25bXSkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLnBhdGNoKGAvVGVybWluYWxzLyR7dGVybWluYWxJZH1gKS53aXRoSnNvbihwYXRjaCkuZXhwZWN0SnNvbihUZXJtaW5hbCkub25TZW50KHRoaXMuaW52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUZXJtaW5hbCh0ZXJtaW5hbElkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5kZWxldGUoYC9UZXJtaW5hbHMvJHt0ZXJtaW5hbElkfWApLm9uU2VudCh0aGlzLmludmFsaWRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJvZHVjdChwcm9kdWN0OiB7IG5hbWU6IHN0cmluZywgcHJpY2U/OiBCaWcgfSkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLnBvc3QoXCIvUHJvZHVjdHNcIikud2l0aEpzb24ocHJvZHVjdCkuZXhwZWN0SnNvbihQcm9kdWN0KS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFByb2R1Y3RzKCkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChcIi9Qcm9kdWN0c1wiKS5leHBlY3RKc29uQXJyYXkoUHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZHVjdChwcm9kdWN0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChgL1Byb2R1Y3RzLyR7cHJvZHVjdElkfWApLmV4cGVjdEpzb24oUHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZHVjdChwcm9kdWN0SWQ6IG51bWJlciwgcGF0Y2g6IE9wZXJhdGlvbltdKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucGF0Y2goYC9Qcm9kdWN0cy8ke3Byb2R1Y3RJZH1gKS53aXRoSnNvbihwYXRjaCkuZXhwZWN0SnNvbihQcm9kdWN0KS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKFxyXG4gICAgICAgICAgICAvXFwvUG9pbnRPZlNhbGVzXFwvXFxkK1xcL1Byb2R1Y3RzL1xyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5kZWxldGUoYC9Qcm9kdWN0cy8ke3Byb2R1Y3RJZH1gKS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKFxyXG4gICAgICAgICAgICAvXFwvUG9pbnRPZlNhbGVzXFwvXFxkK1xcL1Byb2R1Y3RzL1xyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RzQnlQb2ludE9mU2FsZUlkKHBvaW50T2ZTYWxlSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChgL1BvaW50T2ZTYWxlcy8ke3BvaW50T2ZTYWxlSWR9L1Byb2R1Y3RzYCkuZXhwZWN0SnNvbkFycmF5KFByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb2R1Y3RzQnlQb2ludE9mU2FsZUlkKHBvaW50T2ZTYWxlSWQ6IG51bWJlciwgcGF0Y2g6IE9wZXJhdGlvbltdKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucGF0Y2goYC9Qb2ludE9mU2FsZXMvJHtwb2ludE9mU2FsZUlkfS9Qcm9kdWN0c2ApLndpdGhKc29uKHBhdGNoKS5leHBlY3RKc29uQXJyYXkoUHJvZHVjdCkub25TZW50KHRoaXMuaW52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPcmRlcihvcmRlcjogeyBwb2ludE9mU2FsZUlkOiBudW1iZXIsIHRlcm1pbmFsSWQ6IG51bWJlciwgbGluZXM6IHsgbmFtZT86IHN0cmluZywgbm90ZT86IHN0cmluZywgcXVhbnRpdHk6IG51bWJlciwgdG90YWw6IEJpZywgcHJvZHVjdElkPzogbnVtYmVyIH1bXSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucG9zdChcIi9PcmRlcnNcIikud2l0aEpzb24ob3JkZXIpLmV4cGVjdEpzb24oT3JkZXIpLm9uU2VudCh0aGlzLmludmFsaWRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkZXJCeUlkKG9yZGVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChgL09yZGVycy8ke29yZGVySWR9YCkuZXhwZWN0SnNvbihPcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlT3JkZXIob3JkZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAuZGVsZXRlKGAvT3JkZXJzLyR7b3JkZXJJZH1gKS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBheW1lbnQob3JkZXJJZDogbnVtYmVyLCBwYXltZW50OiB7IG1ldGhvZDogXCJjYXJkXCIgfCBcImNhc2hcIiB8IFwiYWNjb3VudFwiLCBhbW91bnQ6IEJpZywgdHJhbnNhY3Rpb25OdW1iZXI/OiBzdHJpbmcsIGFjY291bnRJZD86IG51bWJlciB9KSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucG9zdChgL09yZGVycy8ke29yZGVySWR9L1BheW1lbnRzYCkud2l0aEpzb24ocGF5bWVudCkuZXhwZWN0SnNvbihQYXltZW50KS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKFxyXG4gICAgICAgICAgICBcIi9QYXltZW50c1wiLFxyXG4gICAgICAgICAgICBgL09yZGVycy8ke29yZGVySWR9YFxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFBheW1lbnRzKGZpbHRlcj86IHsgdGVybWluYWxJZD86IG51bWJlciwgcG9pbnRPZlNhbGVJZD86IG51bWJlciwgYWNjb3VudElkPzogbnVtYmVyLCBmcm9tPzogRGF0ZVRpbWUsIHRvPzogRGF0ZVRpbWUgfSkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChcIi9QYXltZW50c1wiLCBmaWx0ZXIpLmV4cGVjdEpzb25BcnJheShQYXltZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIb3VybHlTdGF0cyhmaWx0ZXI6IHsgeWVhcjogbnVtYmVyLCB0ZXJtaW5hbElkPzogbnVtYmVyLCBwb2ludE9mU2FsZUlkPzogbnVtYmVyIH0pIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5nZXQoXCIvU3RhdHMvSG91cmx5XCIsIGZpbHRlcikuZXhwZWN0SnNvbkFycmF5KE9yZGVyU3RhdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFsYXJtRmVlZChmZWVkOiB7IG5hbWU6IHN0cmluZywgc3Vic2NyaWJlckVtYWlsPzogc3RyaW5nIH0pIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5wb3N0KFwiL0FsYXJtcy9GZWVkc1wiKS53aXRoSnNvbihmZWVkKS5leHBlY3RKc29uKEFsYXJtRmVlZCkub25TZW50KHRoaXMuaW52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBbGFybUZlZWRzKCkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChcIi9BbGFybXMvRmVlZHNcIikuZXhwZWN0SnNvbkFycmF5KEFsYXJtRmVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxhcm1GZWVkKGFsYXJtRmVlZElkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5nZXQoYC9BbGFybXMvRmVlZHMvJHthbGFybUZlZWRJZH1gKS5leHBlY3RKc29uKEFsYXJtRmVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWxhcm1GZWVkKGFsYXJtRmVlZElkOiBudW1iZXIsIHBhdGNoOiBPcGVyYXRpb25bXSkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLnBhdGNoKGAvQWxhcm1zL0ZlZWRzLyR7YWxhcm1GZWVkSWR9YCkud2l0aEpzb24ocGF0Y2gpLmV4cGVjdEpzb24oQWxhcm1GZWVkKS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUFsYXJtRmVlZChhbGFybUZlZWRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAuZGVsZXRlKGAvQWxhcm1zL0ZlZWRzLyR7YWxhcm1GZWVkSWR9YCkub25TZW50KHRoaXMuaW52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbGFybUV2ZW50KGFsYXJtRmVlZElkOiBudW1iZXIsIGV2ZW50OiB7IHRlcm1pbmFsSWQ6IG51bWJlciwgcG9pbnRPZlNhbGVJZDogbnVtYmVyLCB9KSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucG9zdChgL0FsYXJtcy9GZWVkcy8ke2FsYXJtRmVlZElkfS9FdmVudHNgKS53aXRoSnNvbihldmVudCkuZXhwZWN0SnNvbihBbGFybUV2ZW50KS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKFxyXG4gICAgICAgICAgICBcIi9BbGFybXMvRXZlbnRzL1BlbmRpbmdcIlxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFBlbmRpbmdBbGFybUV2ZW50cyhmaWx0ZXI/OiB7IHRlcm1pbmFsSWQ/OiBudW1iZXIsIHBvaW50T2ZTYWxlSWQ/OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmdldChcIi9BbGFybXMvRXZlbnRzL1BlbmRpbmdcIiwgZmlsdGVyKS5leHBlY3RKc29uQXJyYXkoQWxhcm1FdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsQWxhcm1FdmVudChhbGFybUV2ZW50SWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBIdHRwLmRlbGV0ZShgL0FsYXJtcy9FdmVudHMvJHthbGFybUV2ZW50SWR9YCkuZXhwZWN0SnNvbihBbGFybUV2ZW50KS5vblNlbnQodGhpcy5pbnZhbGlkYXRlKFxyXG4gICAgICAgICAgICBcIi9BbGFybXMvRXZlbnRzL1BlbmRpbmdcIlxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFjY291bnQoYWNjb3VudDogeyBudW1iZXI6IG51bWJlcjsgbmFtZTogc3RyaW5nLCBtYXhDcmVkaXQ6IEJpZyB9KSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAucG9zdChcIi9BY2NvdW50c1wiKS53aXRoSnNvbihhY2NvdW50KS5leHBlY3RKc29uKEFjY291bnQpLm9uU2VudCh0aGlzLmludmFsaWRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQWNjb3VudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAuZ2V0KFwiL0FjY291bnRzXCIpLmV4cGVjdEpzb25BcnJheShBY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2NvdW50KGFjY291bnRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAuZ2V0KGAvQWNjb3VudHMvJHthY2NvdW50SWR9YCkuZXhwZWN0SnNvbihBY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBY2NvdW50KGFjY291bnRJZDogbnVtYmVyLCBwYXRjaDogT3BlcmF0aW9uW10pIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5wYXRjaChgL0FjY291bnRzLyR7YWNjb3VudElkfWApLndpdGhKc29uKHBhdGNoKS5leHBlY3RKc29uKEFjY291bnQpLm9uU2VudCh0aGlzLmludmFsaWRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBbGxBY2NvdW50cygpIHtcclxuICAgICAgICByZXR1cm4gSHR0cC5wb3N0KFwiL0FjY291bnRzL1Jlc2V0XCIpLm9uU2VudCh0aGlzLmludmFsaWRhdGUoXHJcbiAgICAgICAgICAgIC9cXC9BY2NvdW50cy9cclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBY2NvdW50KGFjY291bnRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEh0dHAuZGVsZXRlKGAvQWNjb3VudHMvJHthY2NvdW50SWR9YCkub25TZW50KHRoaXMuaW52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludmFsaWRhdGUoLi4uYWRkaXRpb25hbEZpbHRlcnM6IChzdHJpbmcgfCBSZWdFeHApW10pIHtcclxuICAgICAgICByZXR1cm4gKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gcmVzcG9uc2UucmF3UmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0gW3VybCwgLi4uYWRkaXRpb25hbEZpbHRlcnNdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvKC4qKVxcL1xcZCskLy5leGVjKHVybCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVycy5wdXNoKG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVzdGVyLmludmFsaWRhdGUoZmlsdGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcInVyLWh0dHBcIiB7XHJcbiAgICBpbnRlcmZhY2UgSHR0cEJ1aWxkZXJPZlQ8VD4ge1xyXG4gICAgICAgIGJ5cGFzc0NhY2hlKCk6IEh0dHBCdWlsZGVyT2ZUPFQ+O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBieXBhc3NDYWNoZTxUPih0aGlzOiBIdHRwQnVpbGRlck9mVDxUPikge1xyXG4gICAgdGhpcy5tZXNzYWdlLnVybCA9IFF1ZXJ5U3RyaW5nLmFwcGVuZCh0aGlzLm1lc3NhZ2UudXJsLCB7IGJ5cGFzc0NhY2hlOiBudWxsIH0pO1xyXG4gICAgdGhpcy5hZGRIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwibm8tY2FjaGVcIik7XHJcbiAgICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuSHR0cEJ1aWxkZXJPZlQucHJvdG90eXBlLmJ5cGFzc0NhY2hlID0gYnlwYXNzQ2FjaGU7IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcclxuaW1wb3J0IHsganNvblByb3BlcnR5IH0gZnJvbSBcInVyLWpzb25cIjtcclxuaW1wb3J0IHsgZGF0ZVRpbWVDb252ZXJ0ZXIgfSBmcm9tIFwiLi9jb252ZXJ0ZXJzL2RhdGUtdGltZS1jb252ZXJ0ZXJcIjtcclxuaW1wb3J0IHsgYmlnQ29udmVydGVyIH0gZnJvbSBcIi4vY29udmVydGVycy9iaWctY29udmVydGVyXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgUGF5bWVudE1ldGhvZCB9IGZyb20gXCIuL3BheW1lbnRcIjtcclxuXHJcbmNsYXNzIFBheW1lbnRTdGF0cyB7XHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIG1ldGhvZCE6IFBheW1lbnRNZXRob2Q7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBwYXltZW50cyE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KHsgY29udmVydGVyOiBiaWdDb252ZXJ0ZXIgfSlcclxuICAgIHRvdGFsITogQmlnO1xyXG59XHJcblxyXG5jbGFzcyBQcm9kdWN0U3RhdHMge1xyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBwcm9kdWN0SWQhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBwcm9kdWN0TmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIG9yZGVycyE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIHF1YW50aXR5ITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGJpZ0NvbnZlcnRlciB9KVxyXG4gICAgdG90YWwhOiBCaWc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlclN0YXRzIHtcclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGRhdGVUaW1lQ29udmVydGVyIH0pXHJcbiAgICBwZXJpb2RTdGFydCE6IERhdGVUaW1lO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgb3JkZXJzITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGJpZ0NvbnZlcnRlciB9KVxyXG4gICAgdG90YWwhOiBCaWc7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSh7dHlwZTogUGF5bWVudFN0YXRzfSlcclxuICAgIHBheW1lbnRzITogUGF5bWVudFN0YXRzW107XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSh7dHlwZTogUHJvZHVjdFN0YXRzfSlcclxuICAgIHByb2R1Y3RzITogUHJvZHVjdFN0YXRzW107XHJcbn0iLCJpbXBvcnQgeyBqc29uUHJvcGVydHkgfSBmcm9tIFwidXItanNvblwiO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xyXG5pbXBvcnQgeyBkYXRlVGltZUNvbnZlcnRlciB9IGZyb20gXCIuL2NvbnZlcnRlcnMvZGF0ZS10aW1lLWNvbnZlcnRlclwiO1xyXG5pbXBvcnQgeyBiaWdDb252ZXJ0ZXIgfSBmcm9tIFwiLi9jb252ZXJ0ZXJzL2JpZy1jb252ZXJ0ZXJcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSBcIi4vcGF5bWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyTGluZSB7XHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIGlkITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgb3JkZXJJZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBub3RlPzogc3RyaW5nO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgcHJvZHVjdElkPzogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgcXVhbnRpdHkhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSh7IGNvbnZlcnRlcjogYmlnQ29udmVydGVyIH0pXHJcbiAgICB0b3RhbCE6IEJpZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyIHtcclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgaWQhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBwb2ludE9mU2FsZUlkITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgdGVybWluYWxJZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KHsgdHlwZTogT3JkZXJMaW5lIH0pXHJcbiAgICBsaW5lczogT3JkZXJMaW5lW10gPSBbXTtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KHsgdHlwZTogUGF5bWVudCB9KVxyXG4gICAgcGF5bWVudHM6IFBheW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGRhdGVUaW1lQ29udmVydGVyIH0pXHJcbiAgICBjcmVhdGVkITogRGF0ZVRpbWU7XHJcblxyXG4gICAgZ2V0IHRvdGFsUXVhbnRpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZXMucmVkdWNlKChjdXJyZW50LCBsaW5lKSA9PiBjdXJyZW50ICsgbGluZS5xdWFudGl0eSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvdGFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVzLnJlZHVjZSgoY3VycmVudCwgbGluZSkgPT4gY3VycmVudC5hZGQobGluZS50b3RhbCksIG5ldyBCaWcoMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3RhbFBhaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF5bWVudHMucmVkdWNlKChjdXJyZW50LCBwYXltZW50KSA9PiBjdXJyZW50LmFkZChwYXltZW50LmFtb3VudCksIG5ldyBCaWcoMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbW91bnREdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWwuc3ViKHRoaXMudG90YWxQYWlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGpzb25Qcm9wZXJ0eSB9IGZyb20gXCJ1ci1qc29uXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgYmlnQ29udmVydGVyIH0gZnJvbSBcIi4vY29udmVydGVycy9iaWctY29udmVydGVyXCI7XHJcbmltcG9ydCB7IGRhdGVUaW1lQ29udmVydGVyIH0gZnJvbSBcIi4vY29udmVydGVycy9kYXRlLXRpbWUtY29udmVydGVyXCI7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBQYXltZW50TWV0aG9kID0gXCJjYXJkXCIgfCBcImNhc2hcIiB8IFwiYWNjb3VudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBheW1lbnQge1xyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBpZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIG9yZGVySWQhOiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBtZXRob2QhOiBQYXltZW50TWV0aG9kO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoeyBjb252ZXJ0ZXI6IGJpZ0NvbnZlcnRlciB9KVxyXG4gICAgYW1vdW50ITogQmlnO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgdHJhbnNhY3Rpb25OdW1iZXI/OiBzdHJpbmc7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBhY2NvdW50SWQ/OiBudW1iZXI7XHJcblxyXG4gICAgQGpzb25Qcm9wZXJ0eSh7IGNvbnZlcnRlcjogZGF0ZVRpbWVDb252ZXJ0ZXIgfSlcclxuICAgIGNyZWF0ZWQhOiBEYXRlVGltZTtcclxufSIsImltcG9ydCB7IGpzb25Qcm9wZXJ0eSB9IGZyb20gXCJ1ci1qc29uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRPZlNhbGUge1xyXG4gICAgQGpzb25Qcm9wZXJ0eSgpXHJcbiAgICBpZCE6IG51bWJlcjtcclxuXHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBqc29uUHJvcGVydHkgfSBmcm9tIFwidXItanNvblwiXHJcbmltcG9ydCBCaWcsIHsgfSBmcm9tIFwiYmlnLmpzXCJcclxuaW1wb3J0IHsgYmlnQ29udmVydGVyIH0gZnJvbSBcIi4vY29udmVydGVycy9iaWctY29udmVydGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdCB7XHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIGlkITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgbmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBAanNvblByb3BlcnR5KHsgY29udmVydGVyOiBiaWdDb252ZXJ0ZXIgfSlcclxuICAgIHByaWNlITogQmlnO1xyXG59IiwiaW1wb3J0IHsganNvblByb3BlcnR5IH0gZnJvbSBcInVyLWpzb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbCB7XHJcbiAgICBAanNvblByb3BlcnR5KClcclxuICAgIGlkITogbnVtYmVyO1xyXG5cclxuICAgIEBqc29uUHJvcGVydHkoKVxyXG4gICAgbmFtZSE6IHN0cmluZztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=