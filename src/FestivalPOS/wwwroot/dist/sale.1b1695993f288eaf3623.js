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
/*!**************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=alarms!./src/sale/alarms.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.all(/*! require.ensure | alarms */[__webpack_require__.e("vendors~alarms~sale~settings"), __webpack_require__.e("vendors~alarms"), __webpack_require__.e("accounts~alarms~checkout~sale~settings~setup"), __webpack_require__.e("alarms")]).then((function(require) {
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
                return Object(_state__WEBPACK_IMPORTED_MODULE_1__["getOrderQuantityTotal"])(this.state) > 0;
            }
        },
        enumerable: true,
        configurable: true
    });
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

module.exports = "<template>\r\n    <div class=\"btn-group btn-block\">\r\n        <button class=\"btn btn-primary btn-lg\" style=\"width: 7em\" disabled=\"true\">${total | money} kr.</button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('account')\" disabled.bind=\"!canConfirm\"><require from=\"@fortawesome/free-solid-svg-icons/faMoneyBillAlt\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCreditCard\"></require><require from=\"@fortawesome/free-solid-svg-icons/faFileInvoiceDollar\"></require><font-awesome-icon icon.bind=\"'file-invoice-dollar' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('card')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'credit-card' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('cash')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'money-bill-alt' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n    </div>\r\n</template>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9hbGFybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvY2FydC50cz81Y2JhIiwid2VicGFjazovLy8uL3NyYy9zYWxlL21pc2MudHM/NzQ2MSIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9wcm9kdWN0cy50cz80YjUwIiwid2VicGFjazovLy8uL3NyYy9zYWxlL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvY2FydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL21pc2MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvbWlzYy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3BheS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcGF5LWJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3JvdXRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN0QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEIsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7QUNKckM7QUFDQSxDQUFDLDBQQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsc0VBQTZEO0FBQzFFLEVBQUUsZ0VBQVc7QUFDYixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLGtFQUEyRDtBQUN4RSxFQUFFLGdFQUFTO0FBQ1gsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxrRUFBMkQ7QUFDeEUsRUFBRSxnRUFBUztBQUNYLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsMEVBQStEO0FBQzVFLEVBQUUsZ0VBQVM7QUFDWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNkQ7QUFDTjtBQUNPO0FBRUs7QUFJbkU7SUFGQTtRQUlJLG1CQUFjLEdBQUcsZ0ZBQWMsQ0FBQztRQUVoQyxXQUFNLEdBQUcsaUVBQVcsQ0FBQyxzREFBZSxDQUFDLENBQUM7UUFDdEMsVUFBSyxHQUFHLGlFQUFXLENBQUMsaURBQVUsQ0FBQyxDQUFDO0lBTXBDLENBQUM7SUFIRyxzQkFBSSw0QkFBVTthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUZEO1FBREMsc0VBQVksQ0FBQyxPQUFPLENBQUM7OzswQ0FHckI7SUFWUSxJQUFJO1FBRmhCLG9FQUFVLEVBQUU7UUFDWiwrREFBUyxFQUFFO09BQ0MsSUFBSSxDQVdoQjtJQUFELFdBQUM7Q0FBQTtBQVhnQjs7Ozs7Ozs7Ozs7O0FDUmpCLG9QQUFvUCxjQUFjLHFEQUFxRCw0QkFBNEIseUVBQXlFLG1CQUFtQiwydkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXBZO0FBQ007QUFDNEI7QUFDM0I7QUFDSDtBQUNBO0FBSS9DO0lBVUksY0FBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFSRCxzQkFBSSx3QkFBTTthQUFWO1lBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDaEQ7UUFDTCxDQUFDOzs7T0FBQTtJQU1LLHVCQUFRLEdBQWQ7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLDBDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O3dCQUFoQyxTQUFnQyxDQUFDO3dCQUVqQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7S0FDbEQ7SUFFSyx5QkFBVSxHQUFoQjs7Ozs7NkJBQ1EsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQTVDLHdCQUE0Qzt3QkFDNUMscUJBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTs7d0JBQXJCLFNBQXFCLENBQUM7Ozt3QkFHMUIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0tBQ3JEO0lBRU8sb0JBQUssR0FBYixVQUFjLEtBQW9CO1FBQzlCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDdEMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQVUsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO2FBQ0ksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLDJDQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjthQUNJLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSywrQ0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFRCx3QkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxvQkFBeUIsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVEsS0FBbUI7UUFDdkIsT0FBTyxLQUFLLEtBQUssSUFBSTtZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLDBDQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsOERBQXVCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sd0JBQVMsR0FBakIsVUFBa0IsTUFBVztRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx3REFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBdkREO1FBREMsb0VBQVksQ0FBQyxPQUFPLENBQUM7OztzQ0FLckI7SUFSUSxJQUFJO1FBRmhCLG9FQUFVLEVBQUU7UUFDWiwrREFBUyxFQUFFO3lDQVdtQixtREFBSztPQVZ2QixJQUFJLENBNERoQjtJQUFELFdBQUM7Q0FBQTtBQTVEZ0I7Ozs7Ozs7Ozs7OztBQ1RqQixtS0FBbUssZUFBZSx3c0JBQXdzQixPQUFPLGdlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaDFCO0FBQ2tDO0FBQ1o7QUFDMUM7QUFDVztBQUt4QztJQWlCSSxnQ0FBb0IsR0FBUSxFQUFVLEtBQW1CLEVBQVUsTUFBYztRQUE3RCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDakYsQ0FBQztJQWJELHNCQUFJLHlDQUFLO2FBQVQ7WUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyw0REFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVU7YUFBZDtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLG9FQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDOzs7T0FBQTtJQUtLLDBDQUFTLEdBQWYsVUFBZ0IsTUFBbUM7Ozs7Ozt3QkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLHNCQUFPO3lCQUNWOzZCQUVHLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7d0JBQ1oscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O3dCQUFyQyxTQUFxQyxDQUFDOzs7NkJBS3RDLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7d0JBQ0oscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQTVELEtBQUssR0FBRyxTQUFvRCxDQUFDOzs0QkFHckQscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7NEJBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7NEJBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7NEJBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7eUJBQy9CLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUpiLEtBQUssR0FBRyxTQUlLLENBQUM7d0JBRWQscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsaURBQVUsQ0FBQzs7d0JBQXJDLFNBQXFDLENBQUM7Ozs2QkFHdEMsT0FBTSxLQUFLLE1BQU0sR0FBakIsd0JBQWlCO3dCQUNqQixRQUFRLENBQUM7d0JBQ0cscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQW5FLEdBQUcsR0FBRyxTQUE2RDt3QkFJbkUsWUFBWSxHQUFHLHNDQUFzQyxDQUFDO3dCQUN0RCxLQUFLLEdBQUcsc0JBQXNCLENBQUM7d0JBQy9CLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsS0FBSyxHQUFHLGFBQVcsR0FBRyxDQUFDLElBQU0sQ0FBQzt3QkFFOUIsV0FBVyxHQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSwyQkFBc0IsS0FBSyxDQUFDLEVBQUUsa0NBQTZCLEtBQUssQ0FBQyxTQUFXLENBQUM7d0JBRTFILHFLQUFxSzt3QkFFckssSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQ25CLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dDQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBTSxXQUFXLDJDQUF3QyxDQUFDOzZCQUNqRjtpQ0FDSTtnQ0FDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBTSxXQUFXLDRGQUF5RixDQUFDOzZCQUNsSTt5QkFDSjs7O3dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHNCQUFvQixLQUFLLENBQUMsRUFBRSxhQUFRLE1BQVEsQ0FBQyxDQUFDOzs7Ozs7S0FFMUU7SUFwRVc7UUFBWCxrRUFBUSxFQUFFOzsyREFBc0M7SUFHakQ7UUFEQyxzRUFBWSxDQUFDLE9BQU8sQ0FBQzs7O3VEQUtyQjtJQVRRLHNCQUFzQjtRQUZsQyxvRUFBVSxFQUFFO1FBQ1osK0RBQVMsRUFBRTt5Q0FrQmlCLHdDQUFHLEVBQWlCLG1EQUFLLEVBQXlCLHFEQUFNO09BakJ4RSxzQkFBc0IsQ0F1RWxDO0lBQUQsNkJBQUM7Q0FBQTtBQXZFa0M7Ozs7Ozs7Ozs7OztBQ1RuQyxxS0FBcUssY0FBYyx5OUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXBJO0FBQ2xCO0FBRXlCO0FBQ0w7QUFPakQ7SUFJSSxrQkFBb0IsR0FBUSxFQUFVLEtBQW1CO1FBQXJDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO0lBQ3pELENBQUM7SUFFSywyQkFBUSxHQUFkOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBOUYsR0FBSyxRQUFRLEdBQUcsU0FBOEUsQ0FBQzs7Ozs7S0FDbEc7SUFFRCw0QkFBUyxHQUFULFVBQVUsT0FBeUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQywwREFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBYlEsUUFBUTtRQUxwQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7WUFDOUIsS0FBSyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztRQUNELG9FQUFVLEVBQUU7eUNBS2dCLHdDQUFHLEVBQWlCLG1EQUFLO09BSnpDLFFBQVEsQ0FjcEI7SUFBRCxlQUFDO0NBQUE7QUFkb0I7Ozs7Ozs7Ozs7OztBQ1hyQiw4U0FBOFMsaUJBQWlCLDBRQUEwUSxhQUFhLHdKQUF3SixlQUFlLHlCQUF5QixpQ0FBaUMsYUFBYSw0SkFBNEosY0FBYyx3UDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzNUI7QUFDNUM7QUFDc0I7QUFDSTtBQUN2QjtBQUUxQyxJQUFNLE1BQU0sR0FBa0I7SUFDMUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQXlDLEVBQUU7SUFDeEYsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQXlDLEVBQUU7SUFDcEYsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQXFDLEVBQUU7SUFDaEYsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQXFDLEVBQUU7Q0FDbkYsQ0FBQztBQU9GO0lBQUE7SUFxQkEsQ0FBQztJQWpCRyxzQkFBSSxxQ0FBYTthQUFqQjtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLG9FQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QztRQUNMLENBQUM7OztPQUFBO0lBRUQsb0NBQWUsR0FBZixVQUFnQixNQUEyQjtRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLHNEQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSw4REFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWhCRDtRQURDLHNFQUFZLENBQUMsT0FBTyxDQUFDOzs7bURBS3JCO0lBUlEsVUFBVTtRQUx0QixvRUFBVSxFQUFFO1FBQ1osK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXO1lBQzlCLEtBQUssRUFBRSxhQUFhO1NBQ3ZCLENBQUM7T0FDVyxVQUFVLENBcUJ0QjtJQUFELGlCQUFDO0NBQUE7QUFyQnNCOzs7Ozs7Ozs7Ozs7QUNsQnZCLGs0Q0FBazRDLGdCQUFnQixjQUFjLHdOIiwiZmlsZSI6InNhbGUuMWIxNjk1OTkzZjI4OGVhZjM2MjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBEaWdpdCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDk7XHJcbmV4cG9ydCBjb25zdCBDT01NQSA9IFwiLFwiO1xyXG5leHBvcnQgY29uc3QgRU5URVIgPSBcIkVudGVyXCI7XHJcbmV4cG9ydCBjb25zdCBFU0NBUEUgPSBcIkVzY2FwZVwiO1xyXG5leHBvcnQgY29uc3QgQkFDS1NQQUNFID0gXCJCYWNrc3BhY2VcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vYWxhcm1zLnRzXCIpKTtcblx0fSwgXCJhbGFybXNcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2NhcnQudHNcIikpO1xuXHR9LCBcInNhbGVcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL21pc2MudHNcIikpO1xuXHR9LCBcInNhbGVcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL3Byb2R1Y3RzLnRzXCIpKTtcblx0fSwgXCJzYWxlXCIpO1xufSIsImltcG9ydCB7IGF1dG9pbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG8sIGRpc3BhdGNoaWZ5IH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUsIHJlbW92ZU9yZGVyTGluZSwgcmVzZXRPcmRlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY29ubmVjdFRvKClcclxuZXhwb3J0IGNsYXNzIENhcnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgZmFTaG9wcGluZ0NhcnQgPSBmYVNob3BwaW5nQ2FydDtcclxuXHJcbiAgICBkZWxldGUgPSBkaXNwYXRjaGlmeShyZW1vdmVPcmRlckxpbmUpO1xyXG4gICAgY2xlYXIgPSBkaXNwYXRjaGlmeShyZXNldE9yZGVyKTtcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKFwic3RhdGVcIilcclxuICAgIGdldCBvcmRlckxpbmVzKCk6IE9yZGVyTGluZVZpZXdNb2RlbFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcmRlckxpbmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT3JkZXJMaW5lVmlld01vZGVsIHtcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgdG90YWw6IEJpZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyZXF1aXJlIGZyb209XFxcIi4vcGF5LWJ1dHRvblxcXCI+PC9yZXF1aXJlPlxcclxcblxcclxcbiAgICA8dGVtcGxhdGUgaWYuYmluZD1cXFwib3JkZXJMaW5lcy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImxpbmUgb2Ygb3JkZXJMaW5lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD4ke2xpbmUucXVhbnRpdHl9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtsaW5lLm5hbWUgfHwgJ0VuZ2FuZ3NiZWzDuGInfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcIndpZHRoOiA1ZW1cXFwiPiR7bGluZS50b3RhbCB8IG1vbmV5fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoJGluZGV4KVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJyZXNldFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNsZWFyKClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gU2xldCBhbHQ8L2J1dHRvbj5cXHJcXG4gICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZSBpY29uLmJpbmQ9XFxcImZhU2hvcHBpbmdDYXJ0XFxcIj5cXHJcXG4gICAgICAgIEt1cnZlbiBlciB0b21cXHJcXG4gICAgPC9lbXB0eS1oaW50PlxcclxcblxcclxcbiAgICA8cGF5LWJ1dHRvbiBjbGFzcz1cXFwiZml4ZWQtYm90dG9tXFxcIj48L3BheS1idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBCaWcsIFJvdW5kaW5nTW9kZSB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvLCBTdG9yZSB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlLCB1cGRhdGVDdXJyZW50TWlzYywgYWRkQ3VycmVudE1pc2NPcmRlckxpbmUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgRGlnaXQsIENPTU1BLCBCQUNLU1BBQ0UgfSBmcm9tIFwiLi4va2V5c1wiO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGNvbm5lY3RUbygpXHJcbmV4cG9ydCBjbGFzcyBNaXNjIHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIFxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgYW1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4pIHtcclxuICAgICAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QW1vdW50KG5ldyBCaWcoMCkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwuZXEoMCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoTGluZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID49IFwiMFwiICYmIGV2ZW50LmtleSA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkaWdpdCA9IE51bWJlcihldmVudC5rZXkpIGFzIERpZ2l0O1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hLZXkoZGlnaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IENPTU1BKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShcIjAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IEJBQ0tTUEFDRSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tzcGFjZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0QW1vdW50KHRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwuZGl2KDEwKS5yb3VuZCgyLCBSb3VuZGluZ01vZGUuUm91bmREb3duKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEtleSh2YWx1ZTogRGlnaXQgfCBcIjAwXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IFwiMDBcIlxyXG4gICAgICAgICAgICA/IHRoaXMuc2V0QW1vdW50KHRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwubXVsKDEwMCkpXHJcbiAgICAgICAgICAgIDogdGhpcy5zZXRBbW91bnQodGhpcy5zdGF0ZS5jdXJyZW50TWlzY09yZGVyTGluZS50b3RhbC5tdWwoMTApLmFkZChuZXcgQmlnKHZhbHVlKS5kaXYoMTAwKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hMaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKGFkZEN1cnJlbnRNaXNjT3JkZXJMaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFtb3VudChhbW91bnQ6IEJpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudCAmJiB0aGlzLmFtb3VudC5lcShhbW91bnQpXHJcbiAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgOiB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUN1cnJlbnRNaXNjLCBhbW91bnQpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJlcXVpcmUgZnJvbT1cXFwiLi9wYXktYnV0dG9uXFxcIj48L3JlcXVpcmU+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcIm9mZnNldC0yIGNvbC04IHRleHQtY2VudGVyXFxcIj4ke2Ftb3VudCB8IG1vbmV5fSBrci48L2gxPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29sLTIgYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImJhY2tzcGFjZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYXJ0UGx1c1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUJhY2tzcGFjZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidiYWNrc3BhY2UnICYgZm9udGF3ZXNvbWVcXFwiIHNpemU9XFxcIjJ4XFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAxMDBweFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbm8tZ3V0dGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiByZXBlYXQuZm9yPVxcXCJudW1iZXIgb2YgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksICcwMCcsIDBdXFxcIiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4ta2V5cGFkIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcInB1c2hLZXkobnVtYmVyKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDU+JHtudW1iZXJ9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4ta2V5cGFkIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcInB1c2hMaW5lKClcXFwiIGRpc2FibGVkLmJpbmQ9XFxcImFtb3VudC5lcSgwKVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NhcnQtcGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCIgY29uZmlybS5jYWxsPVxcXCJwdXNoTGluZSgpXFxcIj48L3BheS1idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBjb25uZWN0VG8sIFN0b3JlIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUsIGdldE9yZGVyVG90YWwsIGdldE9yZGVyUXVhbnRpdHlUb3RhbCwgcmVzZXRPcmRlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZyb20sIGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY29ubmVjdFRvKClcclxuZXhwb3J0IGNsYXNzIFBheUJ1dHRvbkN1c3RvbUVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgQGJpbmRhYmxlKCkgY29uZmlybT86ICgpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIEBjb21wdXRlZEZyb20oXCJzdGF0ZVwiKVxyXG4gICAgZ2V0IHRvdGFsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRPcmRlclRvdGFsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FuQ29uZmlybSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpID4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZG9Db25maXJtKG1ldGhvZDogXCJjYXJkXCIgfCBcImNhc2hcIiB8IFwiYWNjb3VudFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNvbmZpcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUodGhpcy5jb25maXJtKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9yZGVyOiBPcmRlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3JkZXJJZCkge1xyXG4gICAgICAgICAgICBvcmRlciA9IGF3YWl0IHRoaXMuYXBpLmdldE9yZGVyQnlJZCh0aGlzLm9yZGVySWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvcmRlciA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZU9yZGVyKHtcclxuICAgICAgICAgICAgICAgIHRlcm1pbmFsSWQ6IHRoaXMuc3RhdGUudGVybWluYWxJZCxcclxuICAgICAgICAgICAgICAgIHBvaW50T2ZTYWxlSWQ6IHRoaXMuc3RhdGUucG9pbnRPZlNhbGVJZCxcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB0aGlzLnN0YXRlLm9yZGVyTGluZXNcclxuICAgICAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmUuZGlzcGF0Y2gocmVzZXRPcmRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSBcImNhcmRcIikge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gYXdhaXQgdGhpcy5hcGkuZ2V0UG9pbnRPZlNhbGUob3JkZXIucG9pbnRPZlNhbGVJZCkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEV4YW1wbGU6IDxhIGhyZWY9XCJzdW11cG1lcmNoYW50Oi8vcGF5LzEuMD9hZmZpbGlhdGUta2V5PTdjYTg0ZjE3LTg0YTUtNDE0MC04ZGY2LTZlYmVlZDg1NDBmYyZhcHAtaWQ9Y29tLmV4YW1wbGUubXlhcHAmdG90YWw9MS4yMyZjdXJyZW5jeT1FVVImdGl0bGU9VGF4aSBSaWRlJnJlY2VpcHQtbW9iaWxlcGhvbmU9KzM1MzEyMzQ1Njc4OTAmcmVjZWlwdC1lbWFpbD1jdXN0b21lckBtYWlsLmNvbSZjYWxsYmFjaz1odHRwOi8vZXhhbXBsZS5jb20vbXlhcHAvbXljYWxsYmFja1wiPlN0YXJ0IFN1bVVwIFBheW1lbnQ8L2E+XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZmZpbGlhdGVLZXkgPSBcIjdjYTg0ZjE3LTg0YTUtNDE0MC04ZGY2LTZlYmVlZDg1NDBmY1wiO1xyXG4gICAgICAgICAgICBjb25zdCBhcHBJZCA9IFwiY29tLnJtamEuZmVzdGl2YWxwb3NcIjtcclxuICAgICAgICAgICAgY29uc3QgdG90YWwgPSBvcmRlci5hbW91bnREdWUudG9GaXhlZCgyKTsgLy8gSGFzIFwiLlwiIGFzIGRlY2ltYWwgc2VwYXJhdG9yXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYEthamZlc3QgJHtwb3MubmFtZX1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8jL2NoZWNrb3V0L29yZGVycy8ke29yZGVyLmlkfS9wYXkvY2FyZC1jYWxsYmFjaz9hbW91bnQ9JHtvcmRlci5hbW91bnREdWV9YDtcclxuXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYHN1bXVwbWVyY2hhbnQ6Ly9wYXkvMS4wP2FmZmlsaWF0ZS1rZXk9JHthZmZpbGlhdGVLZXl9JmFwcC1pZD0ke2FwcElkfSZ0b3RhbD0ke3RvdGFsfSZjdXJyZW5jeT1ES0smdGl0bGU9JHt0aXRsZX0mY2FsbGJhY2s9JHtjYWxsYmFja1VybH1gO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJEZWJ1Zz9cIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKFwiU3VjY2Vzcz9cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2NhbGxiYWNrVXJsfSZzbXAtc3RhdHVzPXN1Y2Nlc3Mmc21wLXR4LWNvZGU9MTIzYWJjYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7Y2FsbGJhY2tVcmx9JnNtcC1zdGF0dXM9ZmFpbGVkJnNtcC1mYWlsdXJlLWNhdXNlPXRlc3RmZWpsJnNtcC1tZXNzYWdlPWZlamxiZXNrZWQmc21wLXR4LWNvZGU9MTIzYWJjYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGAvY2hlY2tvdXQvb3JkZXJzLyR7b3JkZXIuaWR9L3BheS8ke21ldGhvZH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogN2VtXFxcIiBkaXNhYmxlZD1cXFwidHJ1ZVxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkb0NvbmZpcm0oJ2FjY291bnQnKVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhbkNvbmZpcm1cXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1vbmV5QmlsbEFsdFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGaWxlSW52b2ljZURvbGxhclxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidmaWxlLWludm9pY2UtZG9sbGFyJyAmIGZvbnRhd2Vzb21lXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkb0NvbmZpcm0oJ2NhcmQnKVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhbkNvbmZpcm1cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjcmVkaXQtY2FyZCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdjYXNoJylcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5Db25maXJtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInbW9uZXktYmlsbC1hbHQnICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgQmlnIGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgU3RhdGUsIGFkZFByb2R1Y3RPcmRlckxpbmUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgU3RvcmUsIGNvbm5lY3RUbyB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcblxyXG5AY29ubmVjdFRvKHtcclxuICAgIHNlbGVjdG9yOiBzdG9yZSA9PiBzdG9yZS5zdGF0ZSxcclxuICAgIHNldHVwOiBcImFjdGl2YXRlXCJcclxufSlcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdHMge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgcHJvZHVjdHMhOiBQcm9kdWN0Vmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+KSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGF3YWl0IHRoaXMuYXBpLmdldFByb2R1Y3RzQnlQb2ludE9mU2FsZUlkKHRoaXMuc3RhdGUucG9pbnRPZlNhbGVJZCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0NhcnQocHJvZHVjdDogUHJvZHVjdFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3RPcmRlckxpbmUsIHByb2R1Y3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdFZpZXdNb2RlbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpY2U6IEJpZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyZXF1aXJlIGZyb209XFxcIi4vcGF5LWJ1dHRvblxcXCI+PC9yZXF1aXJlPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9XFxcInByb2R1Y3RzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcInByb2R1Y3Qgb2YgcHJvZHVjdHNcXFwiIGNsYXNzPVxcXCJjb2wtNCBjb2wtc20tMyBjb2wtbWQtMlxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXhcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTsgY3Vyc29yOiBwb2ludGVyO1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImFkZFRvQ2FydChwcm9kdWN0KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpZi5iaW5kPVxcXCIkaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBzcmM9XFxcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMFxcXCI+JHtwcm9kdWN0Lm5hbWV9PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBlbHNlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXJcXFwiPjxzdHJvbmc+JHtwcm9kdWN0Lm5hbWV9PC9zdHJvbmc+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMFxcXCI+PHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj4ke3Byb2R1Y3QucHJpY2V9PC9zbWFsbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgIERlciBlciBpbmdlbiBwcm9kdWt0ZXIgdGlsa255dHRldCBzYWxnc3N0ZWRldFxcclxcbiAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuXFxyXFxuICAgIDxwYXktYnV0dG9uIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiPjwvcGF5LWJ1dHRvbj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJDb25maWd1cmF0aW9uLCBSZWRpcmVjdFRvUm91dGUgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBnZXRPcmRlclF1YW50aXR5VG90YWwsIGlzU2V0dXAgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiYWxhcm1zXCIsIG5hbWU6IFwiYWxhcm1zXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9hbGFybXNcIiwgXCJhbGFybXNcIikgfSxcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwicHJvZHVjdHNcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3Byb2R1Y3RzXCIsIFwic2FsZVwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJtaXNjXCIsIG5hbWU6IFwibWlzY1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbWlzY1wiLCBcInNhbGVcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY2FydFwiLCBuYW1lOiBcImNhcnRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcnRcIiwgXCJzYWxlXCIpIH0sXHJcbl07XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oe1xyXG4gICAgc2VsZWN0b3I6IHN0b3JlID0+IHN0b3JlLnN0YXRlLFxyXG4gICAgc2V0dXA6IFwiY2FuQWN0aXZhdGVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FsZVJvdXRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgdG90YWxRdWFudGl0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICghaXNTZXR1cCh0aGlzLnN0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0VG9Sb3V0ZShcInNldHVwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImFsYXJtc1xcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0NhcnRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYWxjdWxhdG9yXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGhcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFCdWxsaG9yblxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIididWxsaG9ybicgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInByb2R1Y3RzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcIm1pc2NcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NhbGN1bGF0b3InICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjYXJ0XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhLWxheWVycyBmYS1md1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3Nob3BwaW5nLWNhcnQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhLWxheWVycy1jb3VudGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpUb21hdG87IHpvb206IDE1MCVcXFwiPiR7dG90YWxRdWFudGl0eX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==