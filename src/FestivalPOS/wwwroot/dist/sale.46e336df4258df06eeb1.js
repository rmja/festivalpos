(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sale"],{

/***/ "./src/keys.ts":
/*!*********************!*\
  !*** ./src/keys.ts ***!
  \*********************/
/*! exports provided: COMMA, ENTER, ESCAPE, BACKSPACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
var COMMA = ",";
var ENTER = "Enter";
var ESCAPE = "Escape";
var BACKSPACE = "Backspace";


/***/ }),

/***/ "sale/alarms":
/*!****************************!*\
  !*** ./src/sale/alarms.ts ***!
  \****************************/
/*! exports provided: Alarms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alarms", function() { return Alarms; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
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



var Alarms = /** @class */ (function () {
    function Alarms(api) {
        this.api = api;
    }
    Alarms.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, events, _i, events_1, event_1, _b, _c, feed;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAlarmFeeds().transfer()];
                    case 1:
                        _a.feeds = _d.sent();
                        return [4 /*yield*/, this.api.getAllPendingAlarmEvents({ pointOfSaleId: this.state.pointOfSaleId }).bypassCache().transfer()];
                    case 2:
                        events = _d.sent();
                        if (events.length) {
                            for (_i = 0, events_1 = events; _i < events_1.length; _i++) {
                                event_1 = events_1[_i];
                                for (_b = 0, _c = this.feeds; _b < _c.length; _b++) {
                                    feed = _c[_b];
                                    if (feed.id === event_1.alarmFeedId) {
                                        feed.pendingEvent = event_1;
                                        break;
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Alarms.prototype.raise = function (feed) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = feed;
                        return [4 /*yield*/, this.api.createAlarmEvent(feed.id, {
                                terminalId: this.state.terminalId,
                                pointOfSaleId: this.state.pointOfSaleId,
                            }).transfer()];
                    case 1:
                        _a.pendingEvent = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Alarms = __decorate([
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_2__["connectTo"])({
            selector: function (store) { return store.state; },
            setup: "activate"
        }),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], Alarms);
    return Alarms;
}());



/***/ }),

/***/ "sale/alarms.html":
/*!******************************!*\
  !*** ./src/sale/alarms.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <div if.bind=\"feeds.length\" class=\"card-deck\">\r\n        <div repeat.for=\"feed of feeds\" class=\"card\">\r\n            <div class=\"card-body\">\r\n                <button if.bind=\"feed.pendingEvent\" class=\"btn btn-danger btn-block\">\r\n                    <h6>${feed.name}</h6>\r\n                    <small>${feed.pendingEvent.terminalName}, ${feed.pendingEvent.pointOfSaleName} afventer hjælp</small>\r\n                </button>\r\n                <button else class=\"btn btn-success btn-block\" click.delegate=\"raise(feed)\">\r\n                    <h6>${feed.name}</h6>\r\n                    <small>Send besked</small>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <empty-hint else>\r\n        Der er ikke opsat nogen alarmer\r\n    </empty-hint>\r\n</template>";

/***/ }),

/***/ "sale/cart":
/*!**************************!*\
  !*** ./src/sale/cart.ts ***!
  \**************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cart = /** @class */ (function () {
    function Cart() {
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
        this.delete = Object(aurelia_store__WEBPACK_IMPORTED_MODULE_1__["dispatchify"])(_state__WEBPACK_IMPORTED_MODULE_2__["removeOrderLine"]);
        this.clear = Object(aurelia_store__WEBPACK_IMPORTED_MODULE_1__["dispatchify"])(_state__WEBPACK_IMPORTED_MODULE_2__["resetOrder"]);
    }
    Object.defineProperty(Cart.prototype, "orderLines", {
        get: function () {
            return this.state.orderLines;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["computedFrom"])("state"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], Cart.prototype, "orderLines", null);
    Cart = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_1__["connectTo"])()
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "sale/cart.html":
/*!****************************!*\
  !*** ./src/sale/cart.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"./pay-button\"></require>\r\n\r\n    <template if.bind=\"orderLines.length\">\r\n        <table class=\"table\">\r\n            <tr repeat.for=\"line of orderLines\">\r\n                <td>${line.quantity}</td>\r\n                <td style=\"width: 100%\">${line.name || 'Engangsbeløb'}</td>\r\n                <td class=\"text-right\" style=\"width: 5em\">${line.total | money}</td>\r\n                <td><button class=\"btn btn-sm btn-danger\" click.delegate=\"delete($index)\"><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon></button></td>\r\n            </tr>\r\n        </table>\r\n\r\n        <button type=\"reset\" class=\"btn btn-danger btn-block\" click.delegate=\"clear()\"><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon> Slet alt</button>\r\n    </template>\r\n    <empty-hint else icon.bind=\"faShoppingCart\">\r\n        Kurven er tom\r\n    </empty-hint>\r\n\r\n    <pay-button class=\"fixed-bottom\"></pay-button>\r\n</template>";

/***/ }),

/***/ "sale/misc":
/*!**************************!*\
  !*** ./src/sale/misc.ts ***!
  \**************************/
/*! exports provided: Misc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Misc", function() { return Misc; });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../keys */ "./src/keys.ts");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-binding */ "./node_modules/aurelia-binding/dist/native-modules/aurelia-binding.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
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






var Misc = /** @class */ (function () {
    function Misc(store) {
        this.store = store;
        this.keyup = this.keyup.bind(this);
    }
    Object.defineProperty(Misc.prototype, "amount", {
        get: function () {
            if (this.state) {
                return this.state.currentMiscOrderLine.total;
            }
        },
        enumerable: true,
        configurable: true
    });
    Misc.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAmount(new big_js__WEBPACK_IMPORTED_MODULE_0__["Big"](0))];
                    case 1:
                        _a.sent();
                        document.addEventListener("keyup", this.keyup);
                        return [2 /*return*/];
                }
            });
        });
    };
    Misc.prototype.deactivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.state.currentMiscOrderLine.total.eq(0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pushLine()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        document.removeEventListener("keyup", this.keyup);
                        return [2 /*return*/];
                }
            });
        });
    };
    Misc.prototype.keyup = function (event) {
        if (event.key >= "0" && event.key <= "9") {
            var digit = Number(event.key);
            this.pushKey(digit);
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_3__["COMMA"]) {
            this.pushKey("00");
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_3__["BACKSPACE"]) {
            this.backspace();
        }
    };
    Misc.prototype.backspace = function () {
        return this.setAmount(this.state.currentMiscOrderLine.total.div(10).round(2, 0 /* RoundDown */));
    };
    Misc.prototype.pushKey = function (value) {
        return value === "00"
            ? this.setAmount(this.state.currentMiscOrderLine.total.mul(100))
            : this.setAmount(this.state.currentMiscOrderLine.total.mul(10).add(new big_js__WEBPACK_IMPORTED_MODULE_0__["Big"](value).div(100)));
    };
    Misc.prototype.pushLine = function () {
        return this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["addCurrentMiscOrderLine"]);
    };
    Misc.prototype.setAmount = function (amount) {
        return this.amount && this.amount.eq(amount)
            ? Promise.resolve()
            : this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["updateCurrentMisc"], amount);
    };
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_4__["computedFrom"])("state"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Misc.prototype, "amount", null);
    Misc = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_5__["autoinject"])(),
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_1__["connectTo"])(),
        __metadata("design:paramtypes", [aurelia_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], Misc);
    return Misc;
}());



/***/ }),

/***/ "sale/misc.html":
/*!****************************!*\
  !*** ./src/sale/misc.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"./pay-button\"></require>\r\n\r\n    <div class=\"row\">\r\n        <h1 class=\"offset-2 col-8 text-center\">${amount | money} kr.</h1>\r\n        <button class=\"col-2 btn btn-light\" click.delegate=\"backspace()\"><require from=\"@fortawesome/free-solid-svg-icons/faCartPlus\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBackspace\"></require><font-awesome-icon icon.bind=\"'backspace' & fontawesome\" size=\"2x\"></font-awesome-icon></button>\r\n    </div>\r\n    \r\n    <div class=\"fixed-bottom\" style=\"padding-bottom: 100px\">\r\n        <div class=\"row no-gutters\">\r\n            <div repeat.for=\"number of [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0]\" class=\"col-4\">\r\n                <button type=\"button\" class=\"btn btn-keypad btn-light\" click.delegate=\"pushKey(number)\">\r\n                    <h5>${number}</h5>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <button type=\"button\" class=\"btn btn-keypad btn-light\" click.delegate=\"pushLine()\" disabled.bind=\"amount.eq(0)\"><font-awesome-icon icon.bind=\"'cart-plus' & fontawesome\"></font-awesome-icon></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <pay-button class=\"fixed-bottom\" confirm.call=\"pushLine()\"></pay-button>\r\n</template>";

/***/ }),

/***/ "sale/pay-button":
/*!********************************!*\
  !*** ./src/sale/pay-button.ts ***!
  \********************************/
/*! exports provided: PayButtonCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayButtonCustomElement", function() { return PayButtonCustomElement; });
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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





var PayButtonCustomElement = /** @class */ (function () {
    function PayButtonCustomElement(api, store, router) {
        this.api = api;
        this.store = store;
        this.router = router;
    }
    Object.defineProperty(PayButtonCustomElement.prototype, "total", {
        get: function () {
            if (this.state) {
                return Object(_state__WEBPACK_IMPORTED_MODULE_1__["getOrderTotal"])(this.state);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PayButtonCustomElement.prototype, "canConfirm", {
        get: function () {
            if (this.state) {
                return this.orderId || Object(_state__WEBPACK_IMPORTED_MODULE_1__["getOrderQuantityTotal"])(this.state) > 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    PayButtonCustomElement.prototype.cancelOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.orderId) {
                            throw new Error();
                        }
                        return [4 /*yield*/, this.api.deleteOrder(this.orderId).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("products");
                        return [2 /*return*/];
                }
            });
        });
    };
    PayButtonCustomElement.prototype.doConfirm = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var order, pos, affiliateKey, appId, total, title, callbackUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.canConfirm) {
                            return [2 /*return*/];
                        }
                        if (!this.confirm) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.resolve(this.confirm())];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.orderId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.api.getOrderById(this.orderId).transfer()];
                    case 3:
                        order = _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.api.createOrder({
                            terminalId: this.state.terminalId,
                            pointOfSaleId: this.state.pointOfSaleId,
                            lines: this.state.orderLines
                        }).transfer()];
                    case 5:
                        order = _a.sent();
                        return [4 /*yield*/, this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_1__["resetOrder"])];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(method === "card")) return [3 /*break*/, 9];
                        debugger;
                        return [4 /*yield*/, this.api.getPointOfSale(order.pointOfSaleId).transfer()];
                    case 8:
                        pos = _a.sent();
                        affiliateKey = "7ca84f17-84a5-4140-8df6-6ebeed8540fc";
                        appId = "com.rmja.festivalpos";
                        total = order.amountDue.toFixed(2);
                        title = "Kajfest " + pos.name;
                        callbackUrl = window.location.origin + "/#/checkout/orders/" + order.id + "/pay/card-callback?amount=" + order.amountDue;
                        // window.location.href = `sumupmerchant://pay/1.0?affiliate-key=${affiliateKey}&app-id=${appId}&total=${total}&currency=DKK&title=${title}&callback=${callbackUrl}`;
                        if (confirm("Debug?")) {
                            if (confirm("Success?")) {
                                window.location.href = callbackUrl + "&smp-status=success&smp-tx-code=123abc";
                            }
                            else {
                                window.location.href = callbackUrl + "&smp-status=failed&smp-failure-cause=testfejl&smp-message=fejlbesked&smp-tx-code=123abc";
                            }
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        this.router.navigate("/checkout/orders/" + order.id + "/pay/" + method);
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["bindable"])(),
        __metadata("design:type", Number)
    ], PayButtonCustomElement.prototype, "orderId", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["bindable"])(),
        __metadata("design:type", Function)
    ], PayButtonCustomElement.prototype, "confirm", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["computedFrom"])("state"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PayButtonCustomElement.prototype, "total", null);
    PayButtonCustomElement = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["autoinject"])(),
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_0__["connectTo"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["Api"], aurelia_store__WEBPACK_IMPORTED_MODULE_0__["Store"], aurelia_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PayButtonCustomElement);
    return PayButtonCustomElement;
}());



/***/ }),

/***/ "sale/pay-button.html":
/*!**********************************!*\
  !*** ./src/sale/pay-button.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <div class=\"btn-group btn-block\">\r\n        <button class=\"btn btn-danger btn-lg\" if.bind=\"orderId\" click.delegate=\"cancelOrder()\"><require from=\"@fortawesome/free-solid-svg-icons/faMoneyBillAlt\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCreditCard\"></require><require from=\"@fortawesome/free-solid-svg-icons/faFileInvoiceDollar\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n        <button class=\"btn btn-primary btn-lg\" else style=\"width: 7em\" disabled=\"true\">${total | money} kr.</button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('account')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'file-invoice-dollar' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('card')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'credit-card' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('cash')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'money-bill-alt' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n    </div>\r\n</template>";

/***/ }),

/***/ "sale/products":
/*!******************************!*\
  !*** ./src/sale/products.ts ***!
  \******************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
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




var Products = /** @class */ (function () {
    function Products(api, store) {
        this.api = api;
        this.store = store;
    }
    Products.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getProductsByPointOfSaleId(this.state.pointOfSaleId).transfer()];
                    case 1:
                        _a.products = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.addToCart = function (product) {
        return this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["addProductOrderLine"], product);
    };
    Products = __decorate([
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_3__["connectTo"])({
            selector: function (store) { return store.state; },
            setup: "activate"
        }),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], Products);
    return Products;
}());



/***/ }),

/***/ "sale/products.html":
/*!********************************!*\
  !*** ./src/sale/products.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"./pay-button\"></require>\r\n\r\n    <div class=\"row\" if.bind=\"products.length\">\r\n        <div repeat.for=\"product of products\" class=\"col-4 col-sm-3 col-md-2\" style=\"display: flex\">\r\n            <div class=\"card\" style=\"width: 100%; cursor: pointer;\" click.delegate=\"addToCart(product)\">\r\n                <template if.bind=\"$index\">\r\n                    <img class=\"card-img-top\" src=\"https://via.placeholder.com/150\">\r\n                    <div class=\"card-body text-center\" style=\"padding: 0\">${product.name}</div>\r\n                </template>\r\n                <template else>\r\n                    <div class=\"card-body text-center\" style=\"padding: 0; display: flex; justify-content: center; align-items: center\"><strong>${product.name}</strong></div>\r\n                </template>\r\n                <div class=\"card-footer text-center\" style=\"padding: 0\"><small class=\"text-muted\">${product.price}</small></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <empty-hint else>\r\n        Der er ingen produkter tilknyttet salgsstedet\r\n    </empty-hint>\r\n\r\n    <pay-button class=\"fixed-bottom\"></pay-button>\r\n</template>";

/***/ }),

/***/ "sale/router":
/*!*************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/sale/router.ts ***!
  \*************************************************************/
/*! exports provided: SaleRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleRouter", function() { return SaleRouter; });
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    { route: "alarms", name: "alarms", moduleId: './alarms' },
    { route: "", name: "products", moduleId: './products' },
    { route: "misc", name: "misc", moduleId: './misc' },
    { route: "cart", name: "cart", moduleId: './cart' },
];
var SaleRouter = /** @class */ (function () {
    function SaleRouter() {
    }
    Object.defineProperty(SaleRouter.prototype, "totalQuantity", {
        get: function () {
            if (this.state) {
                return Object(_state__WEBPACK_IMPORTED_MODULE_3__["getOrderQuantityTotal"])(this.state);
            }
        },
        enumerable: true,
        configurable: true
    });
    SaleRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    SaleRouter.prototype.canActivate = function () {
        if (!Object(_state__WEBPACK_IMPORTED_MODULE_3__["isSetup"])(this.state)) {
            return new aurelia_router__WEBPACK_IMPORTED_MODULE_0__["RedirectToRoute"]("setup");
        }
        return true;
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["computedFrom"])("state"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SaleRouter.prototype, "totalQuantity", null);
    SaleRouter = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["autoinject"])(),
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_4__["connectTo"])({
            selector: function (store) { return store.state; },
            setup: "canActivate"
        })
    ], SaleRouter);
    return SaleRouter;
}());



/***/ }),

/***/ "sale/router.html":
/*!******************************!*\
  !*** ./src/sale/router.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"alarms\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faShoppingCart\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCalculator\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTh\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBullhorn\"></require><font-awesome-icon icon.bind=\"'bullhorn' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"products\" class=\"nav-link\"><font-awesome-icon icon.bind=\"'th' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"misc\" class=\"nav-link\"><font-awesome-icon icon.bind=\"'calculator' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"cart\" class=\"nav-link\">\r\n                    <span class=\"fa-layers fa-fw\">\r\n                        <font-awesome-icon icon.bind=\"'shopping-cart' & fontawesome\"></font-awesome-icon>\r\n                        <span class=\"fa-layers-counter\" style=\"background:Tomato; zoom: 150%\">${totalQuantity}</span>\r\n                    </span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <router-view></router-view>\r\n    </page-body>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9hbGFybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvYWxhcm1zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvY2FydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9jYXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvbWlzYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9taXNjLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcGF5LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9wYXktYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcHJvZHVjdHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcm91dGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUN4QixJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlU7QUFDbEI7QUFDYTtBQVExQztJQUlJLGdCQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUM1QixDQUFDO0lBRUsseUJBQVEsR0FBZDs7Ozs7O3dCQUNJLFNBQUk7d0JBQVMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQXpELEdBQUssS0FB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QU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsc0RBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxJQUFJLDhEQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBaEJEO1FBREMsc0VBQVksQ0FBQyxPQUFPLENBQUM7OzttREFLckI7SUFSUSxVQUFVO1FBTHRCLG9FQUFVLEVBQUU7UUFDWiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7WUFDOUIsS0FBSyxFQUFFLGFBQWE7U0FDdkIsQ0FBQztPQUNXLFVBQVUsQ0FxQnRCO0lBQUQsaUJBQUM7Q0FBQTtBQXJCc0I7Ozs7Ozs7Ozs7OztBQ2xCdkIsazRDQUFrNEMsZ0JBQWdCLGNBQWMsd04iLCJmaWxlIjoic2FsZS40NmUzMzZkZjQyNThkZjA2ZWViMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIERpZ2l0ID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOTtcclxuZXhwb3J0IGNvbnN0IENPTU1BID0gXCIsXCI7XHJcbmV4cG9ydCBjb25zdCBFTlRFUiA9IFwiRW50ZXJcIjtcclxuZXhwb3J0IGNvbnN0IEVTQ0FQRSA9IFwiRXNjYXBlXCI7XHJcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0UgPSBcIkJhY2tzcGFjZVwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG8gfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5cclxuQGNvbm5lY3RUbyh7XHJcbiAgICBzZWxlY3Rvcjogc3RvcmUgPT4gc3RvcmUuc3RhdGUsXHJcbiAgICBzZXR1cDogXCJhY3RpdmF0ZVwiXHJcbn0pXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFsYXJtcyB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICBmZWVkcyE6IEFsYXJtRmVlZFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmZlZWRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWxhcm1GZWVkcygpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUGVuZGluZ0FsYXJtRXZlbnRzKHsgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkIH0pLmJ5cGFzc0NhY2hlKCkudHJhbnNmZXIoKTtcclxuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmZWVkIG9mIHRoaXMuZmVlZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmVlZC5pZCA9PT0gZXZlbnQuYWxhcm1GZWVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlZC5wZW5kaW5nRXZlbnQgPSBldmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJhaXNlKGZlZWQ6IEFsYXJtRmVlZFZpZXdNb2RlbCkge1xyXG4gICAgICAgIGZlZWQucGVuZGluZ0V2ZW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlQWxhcm1FdmVudChmZWVkLmlkLCB7XHJcbiAgICAgICAgICAgIHRlcm1pbmFsSWQ6IHRoaXMuc3RhdGUudGVybWluYWxJZCxcclxuICAgICAgICAgICAgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkLCAgICAgICAgICAgIFxyXG4gICAgICAgIH0pLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGFybUZlZWRWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBlbmRpbmdFdmVudD86IHtcclxuICAgICAgICB0ZXJtaW5hbE5hbWU6IHN0cmluZztcclxuICAgICAgICBwb2ludE9mU2FsZU5hbWU6IHN0cmluZ1xyXG4gICAgfTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgaWYuYmluZD1cXFwiZmVlZHMubGVuZ3RoXFxcIiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwiZmVlZCBvZiBmZWVkc1xcXCIgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWYuYmluZD1cXFwiZmVlZC5wZW5kaW5nRXZlbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg2PiR7ZmVlZC5uYW1lfTwvaDY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtmZWVkLnBlbmRpbmdFdmVudC50ZXJtaW5hbE5hbWV9LCAke2ZlZWQucGVuZGluZ0V2ZW50LnBvaW50T2ZTYWxlTmFtZX0gYWZ2ZW50ZXIgaGrDpmxwPC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gZWxzZSBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcInJhaXNlKGZlZWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNj4ke2ZlZWQubmFtZX08L2g2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlNlbmQgYmVza2VkPC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxlbXB0eS1oaW50IGVsc2U+XFxyXFxuICAgICAgICBEZXIgZXIgaWtrZSBvcHNhdCBub2dlbiBhbGFybWVyXFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG8sIGRpc3BhdGNoaWZ5IH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUsIHJlbW92ZU9yZGVyTGluZSwgcmVzZXRPcmRlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY29ubmVjdFRvKClcclxuZXhwb3J0IGNsYXNzIENhcnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgZmFTaG9wcGluZ0NhcnQgPSBmYVNob3BwaW5nQ2FydDtcclxuXHJcbiAgICBkZWxldGUgPSBkaXNwYXRjaGlmeShyZW1vdmVPcmRlckxpbmUpO1xyXG4gICAgY2xlYXIgPSBkaXNwYXRjaGlmeShyZXNldE9yZGVyKTtcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKFwic3RhdGVcIilcclxuICAgIGdldCBvcmRlckxpbmVzKCk6IE9yZGVyTGluZVZpZXdNb2RlbFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcmRlckxpbmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT3JkZXJMaW5lVmlld01vZGVsIHtcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgdG90YWw6IEJpZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyZXF1aXJlIGZyb209XFxcIi4vcGF5LWJ1dHRvblxcXCI+PC9yZXF1aXJlPlxcclxcblxcclxcbiAgICA8dGVtcGxhdGUgaWYuYmluZD1cXFwib3JkZXJMaW5lcy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImxpbmUgb2Ygb3JkZXJMaW5lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD4ke2xpbmUucXVhbnRpdHl9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtsaW5lLm5hbWUgfHwgJ0VuZ2FuZ3NiZWzDuGInfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcIndpZHRoOiA1ZW1cXFwiPiR7bGluZS50b3RhbCB8IG1vbmV5fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoJGluZGV4KVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJyZXNldFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNsZWFyKClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gU2xldCBhbHQ8L2J1dHRvbj5cXHJcXG4gICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZSBpY29uLmJpbmQ9XFxcImZhU2hvcHBpbmdDYXJ0XFxcIj5cXHJcXG4gICAgICAgIEt1cnZlbiBlciB0b21cXHJcXG4gICAgPC9lbXB0eS1oaW50PlxcclxcblxcclxcbiAgICA8cGF5LWJ1dHRvbiBjbGFzcz1cXFwiZml4ZWQtYm90dG9tXFxcIj48L3BheS1idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBCaWcsIFJvdW5kaW5nTW9kZSB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvLCBTdG9yZSB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlLCB1cGRhdGVDdXJyZW50TWlzYywgYWRkQ3VycmVudE1pc2NPcmRlckxpbmUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgRGlnaXQsIENPTU1BLCBCQUNLU1BBQ0UgfSBmcm9tIFwiLi4va2V5c1wiO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGNvbm5lY3RUbygpXHJcbmV4cG9ydCBjbGFzcyBNaXNjIHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIFxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgYW1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4pIHtcclxuICAgICAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QW1vdW50KG5ldyBCaWcoMCkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwuZXEoMCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoTGluZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID49IFwiMFwiICYmIGV2ZW50LmtleSA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkaWdpdCA9IE51bWJlcihldmVudC5rZXkpIGFzIERpZ2l0O1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hLZXkoZGlnaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IENPTU1BKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShcIjAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IEJBQ0tTUEFDRSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tzcGFjZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0QW1vdW50KHRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwuZGl2KDEwKS5yb3VuZCgyLCBSb3VuZGluZ01vZGUuUm91bmREb3duKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEtleSh2YWx1ZTogRGlnaXQgfCBcIjAwXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IFwiMDBcIlxyXG4gICAgICAgICAgICA/IHRoaXMuc2V0QW1vdW50KHRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwubXVsKDEwMCkpXHJcbiAgICAgICAgICAgIDogdGhpcy5zZXRBbW91bnQodGhpcy5zdGF0ZS5jdXJyZW50TWlzY09yZGVyTGluZS50b3RhbC5tdWwoMTApLmFkZChuZXcgQmlnKHZhbHVlKS5kaXYoMTAwKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hMaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKGFkZEN1cnJlbnRNaXNjT3JkZXJMaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFtb3VudChhbW91bnQ6IEJpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudCAmJiB0aGlzLmFtb3VudC5lcShhbW91bnQpXHJcbiAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgOiB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUN1cnJlbnRNaXNjLCBhbW91bnQpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJlcXVpcmUgZnJvbT1cXFwiLi9wYXktYnV0dG9uXFxcIj48L3JlcXVpcmU+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcIm9mZnNldC0yIGNvbC04IHRleHQtY2VudGVyXFxcIj4ke2Ftb3VudCB8IG1vbmV5fSBrci48L2gxPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29sLTIgYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImJhY2tzcGFjZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYXJ0UGx1c1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUJhY2tzcGFjZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidiYWNrc3BhY2UnICYgZm9udGF3ZXNvbWVcXFwiIHNpemU9XFxcIjJ4XFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxMDBweFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbm8tZ3V0dGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiByZXBlYXQuZm9yPVxcXCJudW1iZXIgb2YgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksICcwMCcsIDBdXFxcIiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4ta2V5cGFkIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcInB1c2hLZXkobnVtYmVyKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDU+JHtudW1iZXJ9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4ta2V5cGFkIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcInB1c2hMaW5lKClcXFwiIGRpc2FibGVkLmJpbmQ9XFxcImFtb3VudC5lcSgwKVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NhcnQtcGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCIgY29uZmlybS5jYWxsPVxcXCJwdXNoTGluZSgpXFxcIj48L3BheS1idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBjb25uZWN0VG8sIFN0b3JlIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUsIGdldE9yZGVyVG90YWwsIGdldE9yZGVyUXVhbnRpdHlUb3RhbCwgcmVzZXRPcmRlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZyb20sIGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY29ubmVjdFRvKClcclxuZXhwb3J0IGNsYXNzIFBheUJ1dHRvbkN1c3RvbUVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgQGJpbmRhYmxlKCkgb3JkZXJJZD86IG51bWJlcjtcclxuICAgIEBiaW5kYWJsZSgpIGNvbmZpcm0/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKFwic3RhdGVcIilcclxuICAgIGdldCB0b3RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJUb3RhbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJJZCB8fCBnZXRPcmRlclF1YW50aXR5VG90YWwodGhpcy5zdGF0ZSkgPiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWxPcmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3JkZXJJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZU9yZGVyKHRoaXMub3JkZXJJZCkuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcInByb2R1Y3RzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRvQ29uZmlybShtZXRob2Q6IFwiY2FyZFwiIHwgXCJjYXNoXCIgfCBcImFjY291bnRcIikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Db25maXJtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29uZmlybSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvcmRlcjogT3JkZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9yZGVySWQpIHtcclxuICAgICAgICAgICAgb3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5nZXRPcmRlckJ5SWQodGhpcy5vcmRlcklkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVPcmRlcih7XHJcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbElkOiB0aGlzLnN0YXRlLnRlcm1pbmFsSWQsXHJcbiAgICAgICAgICAgICAgICBwb2ludE9mU2FsZUlkOiB0aGlzLnN0YXRlLnBvaW50T2ZTYWxlSWQsXHJcbiAgICAgICAgICAgICAgICBsaW5lczogdGhpcy5zdGF0ZS5vcmRlckxpbmVzXHJcbiAgICAgICAgICAgIH0pLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0b3JlLmRpc3BhdGNoKHJlc2V0T3JkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJjYXJkXCIpIHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGF3YWl0IHRoaXMuYXBpLmdldFBvaW50T2ZTYWxlKG9yZGVyLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFeGFtcGxlOiA8YSBocmVmPVwic3VtdXBtZXJjaGFudDovL3BheS8xLjA/YWZmaWxpYXRlLWtleT03Y2E4NGYxNy04NGE1LTQxNDAtOGRmNi02ZWJlZWQ4NTQwZmMmYXBwLWlkPWNvbS5leGFtcGxlLm15YXBwJnRvdGFsPTEuMjMmY3VycmVuY3k9RVVSJnRpdGxlPVRheGkgUmlkZSZyZWNlaXB0LW1vYmlsZXBob25lPSszNTMxMjM0NTY3ODkwJnJlY2VpcHQtZW1haWw9Y3VzdG9tZXJAbWFpbC5jb20mY2FsbGJhY2s9aHR0cDovL2V4YW1wbGUuY29tL215YXBwL215Y2FsbGJhY2tcIj5TdGFydCBTdW1VcCBQYXltZW50PC9hPlxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWZmaWxpYXRlS2V5ID0gXCI3Y2E4NGYxNy04NGE1LTQxNDAtOGRmNi02ZWJlZWQ4NTQwZmNcIjtcclxuICAgICAgICAgICAgY29uc3QgYXBwSWQgPSBcImNvbS5ybWphLmZlc3RpdmFscG9zXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gb3JkZXIuYW1vdW50RHVlLnRvRml4ZWQoMik7IC8vIEhhcyBcIi5cIiBhcyBkZWNpbWFsIHNlcGFyYXRvclxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGBLYWpmZXN0ICR7cG9zLm5hbWV9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrVXJsID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vIy9jaGVja291dC9vcmRlcnMvJHtvcmRlci5pZH0vcGF5L2NhcmQtY2FsbGJhY2s/YW1vdW50PSR7b3JkZXIuYW1vdW50RHVlfWA7XHJcblxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBzdW11cG1lcmNoYW50Oi8vcGF5LzEuMD9hZmZpbGlhdGUta2V5PSR7YWZmaWxpYXRlS2V5fSZhcHAtaWQ9JHthcHBJZH0mdG90YWw9JHt0b3RhbH0mY3VycmVuY3k9REtLJnRpdGxlPSR7dGl0bGV9JmNhbGxiYWNrPSR7Y2FsbGJhY2tVcmx9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKFwiRGVidWc/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybShcIlN1Y2Nlc3M/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtjYWxsYmFja1VybH0mc21wLXN0YXR1cz1zdWNjZXNzJnNtcC10eC1jb2RlPTEyM2FiY2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2NhbGxiYWNrVXJsfSZzbXAtc3RhdHVzPWZhaWxlZCZzbXAtZmFpbHVyZS1jYXVzZT10ZXN0ZmVqbCZzbXAtbWVzc2FnZT1mZWpsYmVza2VkJnNtcC10eC1jb2RlPTEyM2FiY2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShgL2NoZWNrb3V0L29yZGVycy8ke29yZGVyLmlkfS9wYXkvJHttZXRob2R9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tbGdcXFwiIGlmLmJpbmQ9XFxcIm9yZGVySWRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjYW5jZWxPcmRlcigpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNb25leUJpbGxBbHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmlsZUludm9pY2VEb2xsYXJcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1xcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aW1lcycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gRm9ydHJ5ZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgZWxzZSBzdHlsZT1cXFwid2lkdGg6IDdlbVxcXCIgZGlzYWJsZWQ9XFxcInRydWVcXFwiPiR7dG90YWwgfCBtb25leX0ga3IuPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdhY2NvdW50JylcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5Db25maXJtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInZmlsZS1pbnZvaWNlLWRvbGxhcicgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdjYXJkJylcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5Db25maXJtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInY3JlZGl0LWNhcmQnICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnY2FzaCcpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuQ29uZmlybVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ21vbmV5LWJpbGwtYWx0JyAmIGZvbnRhd2Vzb21lXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IEJpZyBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBhZGRQcm9kdWN0T3JkZXJMaW5lIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IFN0b3JlLCBjb25uZWN0VG8gfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5cclxuQGNvbm5lY3RUbyh7XHJcbiAgICBzZWxlY3Rvcjogc3RvcmUgPT4gc3RvcmUuc3RhdGUsXHJcbiAgICBzZXR1cDogXCJhY3RpdmF0ZVwiXHJcbn0pXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzIHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIHByb2R1Y3RzITogUHJvZHVjdFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRQcm9kdWN0c0J5UG9pbnRPZlNhbGVJZCh0aGlzLnN0YXRlLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9DYXJ0KHByb2R1Y3Q6IFByb2R1Y3RWaWV3TW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChhZGRQcm9kdWN0T3JkZXJMaW5lLCBwcm9kdWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByaWNlOiBCaWc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cmVxdWlyZSBmcm9tPVxcXCIuL3BheS1idXR0b25cXFwiPjwvcmVxdWlyZT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBpZi5iaW5kPVxcXCJwcm9kdWN0cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPGRpdiByZXBlYXQuZm9yPVxcXCJwcm9kdWN0IG9mIHByb2R1Y3RzXFxcIiBjbGFzcz1cXFwiY29sLTQgY29sLXNtLTMgY29sLW1kLTJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7IGN1cnNvcjogcG9pbnRlcjtcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJhZGRUb0NhcnQocHJvZHVjdClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaWYuYmluZD1cXFwiJGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgc3JjPVxcXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDBcXFwiPiR7cHJvZHVjdC5uYW1lfTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgZWxzZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDA7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyXFxcIj48c3Ryb25nPiR7cHJvZHVjdC5uYW1lfTwvc3Ryb25nPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDBcXFwiPjxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+JHtwcm9kdWN0LnByaWNlfTwvc21hbGw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxlbXB0eS1oaW50IGVsc2U+XFxyXFxuICAgICAgICBEZXIgZXIgaW5nZW4gcHJvZHVrdGVyIHRpbGtueXR0ZXQgc2FsZ3NzdGVkZXRcXHJcXG4gICAgPC9lbXB0eS1oaW50PlxcclxcblxcclxcbiAgICA8cGF5LWJ1dHRvbiBjbGFzcz1cXFwiZml4ZWQtYm90dG9tXFxcIj48L3BheS1idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiwgUmVkaXJlY3RUb1JvdXRlIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSBcImF1cmVsaWEtcGFsXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgZ2V0T3JkZXJRdWFudGl0eVRvdGFsLCBpc1NldHVwIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUbyB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBbXHJcbiAgICB7IHJvdXRlOiBcImFsYXJtc1wiLCBuYW1lOiBcImFsYXJtc1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vYWxhcm1zXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcIlwiLCBuYW1lOiBcInByb2R1Y3RzXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9wcm9kdWN0c1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJtaXNjXCIsIG5hbWU6IFwibWlzY1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbWlzY1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJjYXJ0XCIsIG5hbWU6IFwiY2FydFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY2FydFwiKSB9LFxyXG5dO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY29ubmVjdFRvKHtcclxuICAgIHNlbGVjdG9yOiBzdG9yZSA9PiBzdG9yZS5zdGF0ZSxcclxuICAgIHNldHVwOiBcImNhbkFjdGl2YXRlXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbGVSb3V0ZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG5cclxuICAgIEBjb21wdXRlZEZyb20oXCJzdGF0ZVwiKVxyXG4gICAgZ2V0IHRvdGFsUXVhbnRpdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldE9yZGVyUXVhbnRpdHlUb3RhbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy5tYXAocm91dGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAoIWlzU2V0dXAodGhpcy5zdGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdFRvUm91dGUoXCJzZXR1cFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJhbGFybXNcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdDYXJ0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2FsY3VsYXRvclxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRoXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQnVsbGhvcm5cXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYnVsbGhvcm4nICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJwcm9kdWN0c1xcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGgnICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJtaXNjXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjYWxjdWxhdG9yJyAmIGZvbnRhd2Vzb21lXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwiY2FydFxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYS1sYXllcnMgZmEtZndcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzaG9wcGluZy1jYXJ0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYS1sYXllcnMtY291bnRlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6VG9tYXRvOyB6b29tOiAxNTAlXFxcIj4ke3RvdGFsUXVhbnRpdHl9PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=