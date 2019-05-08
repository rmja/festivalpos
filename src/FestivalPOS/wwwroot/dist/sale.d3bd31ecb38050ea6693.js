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

/***/ "async!sale/alarms":
/*!************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=sale!./src/sale/alarms.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./alarms.ts */ "sale/alarms"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!sale/cart":
/*!**********************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=sale!./src/sale/cart.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./cart.ts */ "sale/cart"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!sale/misc":
/*!**********************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=sale!./src/sale/misc.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./misc.ts */ "sale/misc"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!sale/products":
/*!**************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=sale!./src/sale/products.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./products.ts */ "sale/products"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "sale/alarms":
/*!*************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/sale/alarms.ts ***!
  \*************************************************************/
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
/*!***********************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/sale/cart.ts ***!
  \***********************************************************/
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
/*!***********************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/sale/misc.ts ***!
  \***********************************************************/
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
/*!***************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/sale/products.ts ***!
  \***************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9hbGFybXMudHM/NzUyNCIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9jYXJ0LnRzPzVjYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvbWlzYy50cz83NDYxIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLnRzPzRiNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvYWxhcm1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL2FsYXJtcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvY2FydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL21pc2MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvbWlzYy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3BheS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcGF5LWJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3JvdXRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN0QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEIsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7QUNKckM7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsc0VBQTZEO0FBQzFFLEVBQUUsZ0VBQVM7QUFDWCxDOzs7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Ozs7QUNsQnZCLGs0Q0FBazRDLGdCQUFnQixjQUFjLHdOIiwiZmlsZSI6InNhbGUuZDNiZDMxZWNiMzgwNTBlYTY2OTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBEaWdpdCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDk7XHJcbmV4cG9ydCBjb25zdCBDT01NQSA9IFwiLFwiO1xyXG5leHBvcnQgY29uc3QgRU5URVIgPSBcIkVudGVyXCI7XHJcbmV4cG9ydCBjb25zdCBFU0NBUEUgPSBcIkVzY2FwZVwiO1xyXG5leHBvcnQgY29uc3QgQkFDS1NQQUNFID0gXCJCYWNrc3BhY2VcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vYWxhcm1zLnRzXCIpKTtcblx0fSwgXCJzYWxlXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jYXJ0LnRzXCIpKTtcblx0fSwgXCJzYWxlXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9taXNjLnRzXCIpKTtcblx0fSwgXCJzYWxlXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9wcm9kdWN0cy50c1wiKSk7XG5cdH0sIFwic2FsZVwiKTtcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuXHJcbkBjb25uZWN0VG8oe1xyXG4gICAgc2VsZWN0b3I6IHN0b3JlID0+IHN0b3JlLnN0YXRlLFxyXG4gICAgc2V0dXA6IFwiYWN0aXZhdGVcIlxyXG59KVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBbGFybXMge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgZmVlZHMhOiBBbGFybUZlZWRWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5mZWVkcyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFsYXJtRmVlZHMoKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFBlbmRpbmdBbGFybUV2ZW50cyh7IHBvaW50T2ZTYWxlSWQ6IHRoaXMuc3RhdGUucG9pbnRPZlNhbGVJZCB9KS5ieXBhc3NDYWNoZSgpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmVlZCBvZiB0aGlzLmZlZWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlZWQuaWQgPT09IGV2ZW50LmFsYXJtRmVlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZWQucGVuZGluZ0V2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByYWlzZShmZWVkOiBBbGFybUZlZWRWaWV3TW9kZWwpIHtcclxuICAgICAgICBmZWVkLnBlbmRpbmdFdmVudCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZUFsYXJtRXZlbnQoZmVlZC5pZCwge1xyXG4gICAgICAgICAgICB0ZXJtaW5hbElkOiB0aGlzLnN0YXRlLnRlcm1pbmFsSWQsXHJcbiAgICAgICAgICAgIHBvaW50T2ZTYWxlSWQ6IHRoaXMuc3RhdGUucG9pbnRPZlNhbGVJZCwgICAgICAgICAgICBcclxuICAgICAgICB9KS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQWxhcm1GZWVkVmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwZW5kaW5nRXZlbnQ/OiB7XHJcbiAgICAgICAgdGVybWluYWxOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcG9pbnRPZlNhbGVOYW1lOiBzdHJpbmdcclxuICAgIH07XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGlmLmJpbmQ9XFxcImZlZWRzLmxlbmd0aFxcXCIgY2xhc3M9XFxcImNhcmQtZGVja1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcImZlZWQgb2YgZmVlZHNcXFwiIGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlmLmJpbmQ9XFxcImZlZWQucGVuZGluZ0V2ZW50XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNj4ke2ZlZWQubmFtZX08L2g2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7ZmVlZC5wZW5kaW5nRXZlbnQudGVybWluYWxOYW1lfSwgJHtmZWVkLnBlbmRpbmdFdmVudC5wb2ludE9mU2FsZU5hbWV9IGFmdmVudGVyIGhqw6ZscDwvc21hbGw+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGVsc2UgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJyYWlzZShmZWVkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDY+JHtmZWVkLm5hbWV9PC9oNj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5TZW5kIGJlc2tlZDwvc21hbGw+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgRGVyIGVyIGlra2Ugb3BzYXQgbm9nZW4gYWxhcm1lclxcclxcbiAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvLCBkaXNwYXRjaGlmeSB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlLCByZW1vdmVPcmRlckxpbmUsIHJlc2V0T3JkZXIgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGNvbm5lY3RUbygpXHJcbmV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIGZhU2hvcHBpbmdDYXJ0ID0gZmFTaG9wcGluZ0NhcnQ7XHJcblxyXG4gICAgZGVsZXRlID0gZGlzcGF0Y2hpZnkocmVtb3ZlT3JkZXJMaW5lKTtcclxuICAgIGNsZWFyID0gZGlzcGF0Y2hpZnkocmVzZXRPcmRlcik7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgb3JkZXJMaW5lcygpOiBPcmRlckxpbmVWaWV3TW9kZWxbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3JkZXJMaW5lcztcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9yZGVyTGluZVZpZXdNb2RlbCB7XHJcbiAgICBxdWFudGl0eTogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHRvdGFsOiBCaWc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cmVxdWlyZSBmcm9tPVxcXCIuL3BheS1idXR0b25cXFwiPjwvcmVxdWlyZT5cXHJcXG5cXHJcXG4gICAgPHRlbXBsYXRlIGlmLmJpbmQ9XFxcIm9yZGVyTGluZXMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJsaW5lIG9mIG9yZGVyTGluZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+JHtsaW5lLnF1YW50aXR5fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7bGluZS5uYW1lIHx8ICdFbmdhbmdzYmVsw7hiJ308L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNWVtXFxcIj4ke2xpbmUudG90YWwgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKCRpbmRleClcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwicmVzZXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjbGVhcigpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IFNsZXQgYWx0PC9idXR0b24+XFxyXFxuICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDxlbXB0eS1oaW50IGVsc2UgaWNvbi5iaW5kPVxcXCJmYVNob3BwaW5nQ2FydFxcXCI+XFxyXFxuICAgICAgICBLdXJ2ZW4gZXIgdG9tXFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgQmlnLCBSb3VuZGluZ01vZGUgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUbywgU3RvcmUgfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgdXBkYXRlQ3VycmVudE1pc2MsIGFkZEN1cnJlbnRNaXNjT3JkZXJMaW5lIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IERpZ2l0LCBDT01NQSwgQkFDS1NQQUNFIH0gZnJvbSBcIi4uL2tleXNcIjtcclxuaW1wb3J0IHsgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oKVxyXG5leHBvcnQgY2xhc3MgTWlzYyB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICBcclxuICAgIEBjb21wdXRlZEZyb20oXCJzdGF0ZVwiKVxyXG4gICAgZ2V0IGFtb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TWlzY09yZGVyTGluZS50b3RhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+KSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldEFtb3VudChuZXcgQmlnKDApKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsLmVxKDApKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaExpbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA+PSBcIjBcIiAmJiBldmVudC5rZXkgPD0gXCI5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlnaXQgPSBOdW1iZXIoZXZlbnQua2V5KSBhcyBEaWdpdDtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KGRpZ2l0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBDT01NQSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hLZXkoXCIwMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBCQUNLU1BBQ0UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrc3BhY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja3NwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldEFtb3VudCh0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsLmRpdigxMCkucm91bmQoMiwgUm91bmRpbmdNb2RlLlJvdW5kRG93bikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hLZXkodmFsdWU6IERpZ2l0IHwgXCIwMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBcIjAwXCJcclxuICAgICAgICAgICAgPyB0aGlzLnNldEFtb3VudCh0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsLm11bCgxMDApKVxyXG4gICAgICAgICAgICA6IHRoaXMuc2V0QW1vdW50KHRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwubXVsKDEwKS5hZGQobmV3IEJpZyh2YWx1ZSkuZGl2KDEwMCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTGluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChhZGRDdXJyZW50TWlzY09yZGVyTGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbW91bnQoYW1vdW50OiBCaWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQgJiYgdGhpcy5hbW91bnQuZXEoYW1vdW50KVxyXG4gICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5zdG9yZS5kaXNwYXRjaCh1cGRhdGVDdXJyZW50TWlzYywgYW1vdW50KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyZXF1aXJlIGZyb209XFxcIi4vcGF5LWJ1dHRvblxcXCI+PC9yZXF1aXJlPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJvZmZzZXQtMiBjb2wtOCB0ZXh0LWNlbnRlclxcXCI+JHthbW91bnQgfCBtb25leX0ga3IuPC9oMT5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNvbC0yIGJ0biBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJiYWNrc3BhY2UoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2FydFBsdXNcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFCYWNrc3BhY2VcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYmFja3NwYWNlJyAmIGZvbnRhd2Vzb21lXFxcIiBzaXplPVxcXCIyeFxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIFxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMTAwcHhcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG5vLWd1dHRlcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwibnVtYmVyIG9mIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAnMDAnLCAwXVxcXCIgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWtleXBhZCBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJwdXNoS2V5KG51bWJlcilcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1PiR7bnVtYmVyfTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWtleXBhZCBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJwdXNoTGluZSgpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCJhbW91bnQuZXEoMClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjYXJ0LXBsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxwYXktYnV0dG9uIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIGNvbmZpcm0uY2FsbD1cXFwicHVzaExpbmUoKVxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgY29ubmVjdFRvLCBTdG9yZSB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBnZXRPcmRlclRvdGFsLCBnZXRPcmRlclF1YW50aXR5VG90YWwsIHJlc2V0T3JkZXIgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgY29tcHV0ZWRGcm9tLCBhdXRvaW5qZWN0LCBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9hcGkvb3JkZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGNvbm5lY3RUbygpXHJcbmV4cG9ydCBjbGFzcyBQYXlCdXR0b25DdXN0b21FbGVtZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIEBiaW5kYWJsZSgpIG9yZGVySWQ/OiBudW1iZXI7XHJcbiAgICBAYmluZGFibGUoKSBjb25maXJtPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgdG90YWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldE9yZGVyVG90YWwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5Db25maXJtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9yZGVySWQgfHwgZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpID4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yZGVySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVPcmRlcih0aGlzLm9yZGVySWQpLnNlbmQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJwcm9kdWN0c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkb0NvbmZpcm0obWV0aG9kOiBcImNhcmRcIiB8IFwiY2FzaFwiIHwgXCJhY2NvdW50XCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ29uZmlybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbmZpcm0oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcmRlcklkKSB7XHJcbiAgICAgICAgICAgIG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuZ2V0T3JkZXJCeUlkKHRoaXMub3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlT3JkZXIoe1xyXG4gICAgICAgICAgICAgICAgdGVybWluYWxJZDogdGhpcy5zdGF0ZS50ZXJtaW5hbElkLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgbGluZXM6IHRoaXMuc3RhdGUub3JkZXJMaW5lc1xyXG4gICAgICAgICAgICB9KS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yZS5kaXNwYXRjaChyZXNldE9yZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwiY2FyZFwiKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBhd2FpdCB0aGlzLmFwaS5nZXRQb2ludE9mU2FsZShvcmRlci5wb2ludE9mU2FsZUlkKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhhbXBsZTogPGEgaHJlZj1cInN1bXVwbWVyY2hhbnQ6Ly9wYXkvMS4wP2FmZmlsaWF0ZS1rZXk9N2NhODRmMTctODRhNS00MTQwLThkZjYtNmViZWVkODU0MGZjJmFwcC1pZD1jb20uZXhhbXBsZS5teWFwcCZ0b3RhbD0xLjIzJmN1cnJlbmN5PUVVUiZ0aXRsZT1UYXhpIFJpZGUmcmVjZWlwdC1tb2JpbGVwaG9uZT0rMzUzMTIzNDU2Nzg5MCZyZWNlaXB0LWVtYWlsPWN1c3RvbWVyQG1haWwuY29tJmNhbGxiYWNrPWh0dHA6Ly9leGFtcGxlLmNvbS9teWFwcC9teWNhbGxiYWNrXCI+U3RhcnQgU3VtVXAgUGF5bWVudDwvYT5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFmZmlsaWF0ZUtleSA9IFwiN2NhODRmMTctODRhNS00MTQwLThkZjYtNmViZWVkODU0MGZjXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcElkID0gXCJjb20ucm1qYS5mZXN0aXZhbHBvc1wiO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IG9yZGVyLmFtb3VudER1ZS50b0ZpeGVkKDIpOyAvLyBIYXMgXCIuXCIgYXMgZGVjaW1hbCBzZXBhcmF0b3JcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBgS2FqZmVzdCAke3Bvcy5uYW1lfWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LyMvY2hlY2tvdXQvb3JkZXJzLyR7b3JkZXIuaWR9L3BheS9jYXJkLWNhbGxiYWNrP2Ftb3VudD0ke29yZGVyLmFtb3VudER1ZX1gO1xyXG5cclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgc3VtdXBtZXJjaGFudDovL3BheS8xLjA/YWZmaWxpYXRlLWtleT0ke2FmZmlsaWF0ZUtleX0mYXBwLWlkPSR7YXBwSWR9JnRvdGFsPSR7dG90YWx9JmN1cnJlbmN5PURLSyZ0aXRsZT0ke3RpdGxlfSZjYWxsYmFjaz0ke2NhbGxiYWNrVXJsfWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkRlYnVnP1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJTdWNjZXNzP1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7Y2FsbGJhY2tVcmx9JnNtcC1zdGF0dXM9c3VjY2VzcyZzbXAtdHgtY29kZT0xMjNhYmNgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtjYWxsYmFja1VybH0mc21wLXN0YXR1cz1mYWlsZWQmc21wLWZhaWx1cmUtY2F1c2U9dGVzdGZlamwmc21wLW1lc3NhZ2U9ZmVqbGJlc2tlZCZzbXAtdHgtY29kZT0xMjNhYmNgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoYC9jaGVja291dC9vcmRlcnMvJHtvcmRlci5pZH0vcGF5LyR7bWV0aG9kfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnXFxcIiBpZi5iaW5kPVxcXCJvcmRlcklkXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiY2FuY2VsT3JkZXIoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTW9uZXlCaWxsQWx0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZpbGVJbnZvaWNlRG9sbGFyXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEZvcnRyeWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIGVsc2Ugc3R5bGU9XFxcIndpZHRoOiA3ZW1cXFwiIGRpc2FibGVkPVxcXCJ0cnVlXFxcIj4ke3RvdGFsIHwgbW9uZXl9IGtyLjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnYWNjb3VudCcpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuQ29uZmlybVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2ZpbGUtaW52b2ljZS1kb2xsYXInICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnY2FyZCcpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuQ29uZmlybVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NyZWRpdC1jYXJkJyAmIGZvbnRhd2Vzb21lXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkb0NvbmZpcm0oJ2Nhc2gnKVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhbkNvbmZpcm1cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidtb25leS1iaWxsLWFsdCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCBCaWcgZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgYWRkUHJvZHVjdE9yZGVyTGluZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSwgY29ubmVjdFRvIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuXHJcbkBjb25uZWN0VG8oe1xyXG4gICAgc2VsZWN0b3I6IHN0b3JlID0+IHN0b3JlLnN0YXRlLFxyXG4gICAgc2V0dXA6IFwiYWN0aXZhdGVcIlxyXG59KVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0cyB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICBwcm9kdWN0cyE6IFByb2R1Y3RWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4pIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gYXdhaXQgdGhpcy5hcGkuZ2V0UHJvZHVjdHNCeVBvaW50T2ZTYWxlSWQodGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvQ2FydChwcm9kdWN0OiBQcm9kdWN0Vmlld01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdE9yZGVyTGluZSwgcHJvZHVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcmljZTogQmlnO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJlcXVpcmUgZnJvbT1cXFwiLi9wYXktYnV0dG9uXFxcIj48L3JlcXVpcmU+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgaWYuYmluZD1cXFwicHJvZHVjdHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwicHJvZHVjdCBvZiBwcm9kdWN0c1xcXCIgY2xhc3M9XFxcImNvbC00IGNvbC1zbS0zIGNvbC1tZC0yXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogZmxleFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlOyBjdXJzb3I6IHBvaW50ZXI7XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiYWRkVG9DYXJ0KHByb2R1Y3QpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlmLmJpbmQ9XFxcIiRpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJjYXJkLWltZy10b3BcXFwiIHNyYz1cXFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAwXFxcIj4ke3Byb2R1Y3QubmFtZX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGVsc2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAwOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlclxcXCI+PHN0cm9uZz4ke3Byb2R1Y3QubmFtZX08L3N0cm9uZz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1jZW50ZXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAwXFxcIj48c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPiR7cHJvZHVjdC5wcmljZX08L3NtYWxsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgRGVyIGVyIGluZ2VuIHByb2R1a3RlciB0aWxrbnl0dGV0IHNhbGdzc3RlZGV0XFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24sIFJlZGlyZWN0VG9Sb3V0ZSB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLXBhbFwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU3RhdGUsIGdldE9yZGVyUXVhbnRpdHlUb3RhbCwgaXNTZXR1cCB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG8gfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJhbGFybXNcIiwgbmFtZTogXCJhbGFybXNcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2FsYXJtc1wiLCBcInNhbGVcIikgfSxcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwicHJvZHVjdHNcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3Byb2R1Y3RzXCIsIFwic2FsZVwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJtaXNjXCIsIG5hbWU6IFwibWlzY1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbWlzY1wiLCBcInNhbGVcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY2FydFwiLCBuYW1lOiBcImNhcnRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcnRcIiwgXCJzYWxlXCIpIH0sXHJcbl07XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oe1xyXG4gICAgc2VsZWN0b3I6IHN0b3JlID0+IHN0b3JlLnN0YXRlLFxyXG4gICAgc2V0dXA6IFwiY2FuQWN0aXZhdGVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FsZVJvdXRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgdG90YWxRdWFudGl0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICghaXNTZXR1cCh0aGlzLnN0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0VG9Sb3V0ZShcInNldHVwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImFsYXJtc1xcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0NhcnRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYWxjdWxhdG9yXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGhcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFCdWxsaG9yblxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIididWxsaG9ybicgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInByb2R1Y3RzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcIm1pc2NcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NhbGN1bGF0b3InICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjYXJ0XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhLWxheWVycyBmYS1md1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3Nob3BwaW5nLWNhcnQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhLWxheWVycy1jb3VudGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpUb21hdG87IHpvb206IDE1MCVcXFwiPiR7dG90YWxRdWFudGl0eX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==