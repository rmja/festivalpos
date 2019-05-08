(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sale"],{

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
                        this.updateQuantity();
                        return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.addToCart = function (product) {
        return this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["addProductOrderLine"], product);
    };
    Products.prototype.stateChanged = function () {
        if (this.products) {
            this.updateQuantity();
        }
    };
    Products.prototype.updateQuantity = function () {
        var _loop_1 = function (product) {
            product.qty = this_1.state.orderLines.filter(function (x) { return x.productId === product.id; }).reduce(function (sum, line) { return sum + line.quantity; }, 0);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            _loop_1(product);
        }
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

module.exports = "<template>\r\n    <require from=\"./pay-button\"></require>\r\n\r\n    <style>\r\n        .product-badge {\r\n            position: absolute;\r\n            top: 5px;\r\n            right: 5px;\r\n            font-size: 100%;\r\n        }\r\n    </style>\r\n\r\n    <div class=\"row\" if.bind=\"products.length\">\r\n        <div repeat.for=\"product of products\" class=\"col-4 col-sm-3 col-md-2\" style=\"display: flex\">\r\n            <div class=\"card div-link\" style=\"width: 100%\" click.delegate=\"addToCart(product)\">\r\n                    <span class=\"badge badge-info product-badge\" show.bind=\"product.qty\">${product.qty}</span>\r\n                <template if.bind=\"$index\">\r\n                    <img class=\"card-img-top\" src=\"https://via.placeholder.com/150\">\r\n                    <div class=\"card-body text-center\" style=\"padding: 0\">${product.name}</div>\r\n                </template>\r\n                <template else>\r\n                    <div class=\"card-body text-center\" style=\"padding: 0; display: flex; justify-content: center; align-items: center\"><strong>${product.name}</strong></div>\r\n                </template>\r\n                <div class=\"card-footer text-center\" style=\"padding: 0\"><small class=\"text-muted\">${product.price}</small></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <empty-hint else>\r\n        Der er ingen produkter tilknyttet salgsstedet\r\n    </empty-hint>\r\n\r\n    <pay-button class=\"fixed-bottom\"></pay-button>\r\n</template>";

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

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"alarms\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faShoppingCart\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCalculator\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTh\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBullhorn\"></require><font-awesome-icon icon.bind=\"'bullhorn' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"products\" class=\"nav-link\"><font-awesome-icon icon.bind=\"'th' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"misc\" class=\"nav-link\"><font-awesome-icon icon.bind=\"'calculator' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"cart\" class=\"nav-link\">\r\n                    <span class=\"fa-layers fa-fw\">\r\n                        <font-awesome-icon icon.bind=\"'shopping-cart' & fontawesome\"></font-awesome-icon>\r\n                        <span class=\"fa-layers-counter\" style=\"background:Tomato; zoom: 190%\">${totalQuantity}</span>\r\n                    </span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <router-view></router-view>\r\n    </page-body>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9hbGFybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvY2FydC50cz81Y2JhIiwid2VicGFjazovLy8uL3NyYy9zYWxlL21pc2MudHM/NzQ2MSIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9wcm9kdWN0cy50cz80YjUwIiwid2VicGFjazovLy8uL3NyYy9zYWxlL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvY2FydC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL21pc2MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvbWlzYy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3JvdXRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBQywwUEFBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLHNFQUE2RDtBQUMxRSxFQUFFLGdFQUFXO0FBQ2IsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxrRUFBMkQ7QUFDeEUsRUFBRSxnRUFBUztBQUNYLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsa0VBQTJEO0FBQ3hFLEVBQUUsZ0VBQVM7QUFDWCxDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLDBFQUErRDtBQUM1RSxFQUFFLGdFQUFTO0FBQ1gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjZEO0FBQ047QUFDTztBQUVLO0FBSW5FO0lBRkE7UUFJSSxtQkFBYyxHQUFHLGdGQUFjLENBQUM7UUFF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LE9BQU8sQ0FBQzs7O21EQUtyQjtJQVJRLFVBQVU7UUFMdEIsb0VBQVUsRUFBRTtRQUNaLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVztZQUM5QixLQUFLLEVBQUUsYUFBYTtTQUN2QixDQUFDO09BQ1csVUFBVSxDQXFCdEI7SUFBRCxpQkFBQztDQUFBO0FBckJzQjs7Ozs7Ozs7Ozs7O0FDbEJ2QixrNENBQWs0QyxnQkFBZ0IsY0FBYyx3TiIsImZpbGUiOiJzYWxlLmY3Mjc3Mjk5NmY4Yzg5OWNmMmZkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2FsYXJtcy50c1wiKSk7XG5cdH0sIFwiYWxhcm1zXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jYXJ0LnRzXCIpKTtcblx0fSwgXCJzYWxlXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9taXNjLnRzXCIpKTtcblx0fSwgXCJzYWxlXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9wcm9kdWN0cy50c1wiKSk7XG5cdH0sIFwic2FsZVwiKTtcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvLCBkaXNwYXRjaGlmeSB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlLCByZW1vdmVPcmRlckxpbmUsIHJlc2V0T3JkZXIgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGNvbm5lY3RUbygpXHJcbmV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIGZhU2hvcHBpbmdDYXJ0ID0gZmFTaG9wcGluZ0NhcnQ7XHJcblxyXG4gICAgZGVsZXRlID0gZGlzcGF0Y2hpZnkocmVtb3ZlT3JkZXJMaW5lKTtcclxuICAgIGNsZWFyID0gZGlzcGF0Y2hpZnkocmVzZXRPcmRlcik7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgb3JkZXJMaW5lcygpOiBPcmRlckxpbmVWaWV3TW9kZWxbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3JkZXJMaW5lcztcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9yZGVyTGluZVZpZXdNb2RlbCB7XHJcbiAgICBxdWFudGl0eTogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHRvdGFsOiBCaWc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cmVxdWlyZSBmcm9tPVxcXCIuL3BheS1idXR0b25cXFwiPjwvcmVxdWlyZT5cXHJcXG5cXHJcXG4gICAgPHRlbXBsYXRlIGlmLmJpbmQ9XFxcIm9yZGVyTGluZXMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJsaW5lIG9mIG9yZGVyTGluZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+JHtsaW5lLnF1YW50aXR5fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7bGluZS5uYW1lIHx8ICdFbmdhbmdzYmVsw7hiJ308L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNWVtXFxcIj4ke2xpbmUudG90YWwgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKCRpbmRleClcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwicmVzZXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjbGVhcigpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IFNsZXQgYWx0PC9idXR0b24+XFxyXFxuICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDxlbXB0eS1oaW50IGVsc2UgaWNvbi5iaW5kPVxcXCJmYVNob3BwaW5nQ2FydFxcXCI+XFxyXFxuICAgICAgICBLdXJ2ZW4gZXIgdG9tXFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJvdHRvbVxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgQmlnLCBSb3VuZGluZ01vZGUgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUbywgU3RvcmUgfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgdXBkYXRlQ3VycmVudE1pc2MsIGFkZEN1cnJlbnRNaXNjT3JkZXJMaW5lIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IERpZ2l0LCBDT01NQSwgQkFDS1NQQUNFIH0gZnJvbSBcIi4uL2tleXNcIjtcclxuaW1wb3J0IHsgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oKVxyXG5leHBvcnQgY2xhc3MgTWlzYyB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICBcclxuICAgIEBjb21wdXRlZEZyb20oXCJzdGF0ZVwiKVxyXG4gICAgZ2V0IGFtb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TWlzY09yZGVyTGluZS50b3RhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+KSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldEFtb3VudChuZXcgQmlnKDApKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsLmVxKDApKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaExpbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA+PSBcIjBcIiAmJiBldmVudC5rZXkgPD0gXCI5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlnaXQgPSBOdW1iZXIoZXZlbnQua2V5KSBhcyBEaWdpdDtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KGRpZ2l0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBDT01NQSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hLZXkoXCIwMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBCQUNLU1BBQ0UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrc3BhY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja3NwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldEFtb3VudCh0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsLmRpdigxMCkucm91bmQoMiwgUm91bmRpbmdNb2RlLlJvdW5kRG93bikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hLZXkodmFsdWU6IERpZ2l0IHwgXCIwMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBcIjAwXCJcclxuICAgICAgICAgICAgPyB0aGlzLnNldEFtb3VudCh0aGlzLnN0YXRlLmN1cnJlbnRNaXNjT3JkZXJMaW5lLnRvdGFsLm11bCgxMDApKVxyXG4gICAgICAgICAgICA6IHRoaXMuc2V0QW1vdW50KHRoaXMuc3RhdGUuY3VycmVudE1pc2NPcmRlckxpbmUudG90YWwubXVsKDEwKS5hZGQobmV3IEJpZyh2YWx1ZSkuZGl2KDEwMCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTGluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChhZGRDdXJyZW50TWlzY09yZGVyTGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbW91bnQoYW1vdW50OiBCaWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQgJiYgdGhpcy5hbW91bnQuZXEoYW1vdW50KVxyXG4gICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5zdG9yZS5kaXNwYXRjaCh1cGRhdGVDdXJyZW50TWlzYywgYW1vdW50KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyZXF1aXJlIGZyb209XFxcIi4vcGF5LWJ1dHRvblxcXCI+PC9yZXF1aXJlPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJvZmZzZXQtMiBjb2wtOCB0ZXh0LWNlbnRlclxcXCI+JHthbW91bnQgfCBtb25leX0ga3IuPC9oMT5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNvbC0yIGJ0biBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJiYWNrc3BhY2UoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2FydFBsdXNcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFCYWNrc3BhY2VcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYmFja3NwYWNlJyAmIGZvbnRhd2Vzb21lXFxcIiBzaXplPVxcXCIyeFxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIFxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMTAwcHhcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG5vLWd1dHRlcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwibnVtYmVyIG9mIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAnMDAnLCAwXVxcXCIgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWtleXBhZCBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJwdXNoS2V5KG51bWJlcilcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1PiR7bnVtYmVyfTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWtleXBhZCBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJwdXNoTGluZSgpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCJhbW91bnQuZXEoMClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjYXJ0LXBsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxwYXktYnV0dG9uIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIGNvbmZpcm0uY2FsbD1cXFwicHVzaExpbmUoKVxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7QmlnfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBhZGRQcm9kdWN0T3JkZXJMaW5lIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IFN0b3JlLCBjb25uZWN0VG8gfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5cclxuQGNvbm5lY3RUbyh7XHJcbiAgICBzZWxlY3Rvcjogc3RvcmUgPT4gc3RvcmUuc3RhdGUsXHJcbiAgICBzZXR1cDogXCJhY3RpdmF0ZVwiXHJcbn0pXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzIHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuICAgIHByb2R1Y3RzITogUHJvZHVjdFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRQcm9kdWN0c0J5UG9pbnRPZlNhbGVJZCh0aGlzLnN0YXRlLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWFudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvQ2FydChwcm9kdWN0OiBQcm9kdWN0Vmlld01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdE9yZGVyTGluZSwgcHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVhbnRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVRdWFudGl0eSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5wcm9kdWN0cykge1xyXG4gICAgICAgICAgICBwcm9kdWN0LnF0eSA9IHRoaXMuc3RhdGUub3JkZXJMaW5lcy5maWx0ZXIoeCA9PiB4LnByb2R1Y3RJZCA9PT0gcHJvZHVjdC5pZCkucmVkdWNlKChzdW0sIGxpbmUpID0+IHN1bSArIGxpbmUucXVhbnRpdHksIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByaWNlOiBCaWc7XHJcbiAgICBxdHk/OiBudW1iZXI7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cmVxdWlyZSBmcm9tPVxcXCIuL3BheS1idXR0b25cXFwiPjwvcmVxdWlyZT5cXHJcXG5cXHJcXG4gICAgPHN0eWxlPlxcclxcbiAgICAgICAgLnByb2R1Y3QtYmFkZ2Uge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDVweDtcXHJcXG4gICAgICAgICAgICByaWdodDogNXB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgPC9zdHlsZT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBpZi5iaW5kPVxcXCJwcm9kdWN0cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPGRpdiByZXBlYXQuZm9yPVxcXCJwcm9kdWN0IG9mIHByb2R1Y3RzXFxcIiBjbGFzcz1cXFwiY29sLTQgY29sLXNtLTMgY29sLW1kLTJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGRpdi1saW5rXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJhZGRUb0NhcnQocHJvZHVjdClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWluZm8gcHJvZHVjdC1iYWRnZVxcXCIgc2hvdy5iaW5kPVxcXCJwcm9kdWN0LnF0eVxcXCI+JHtwcm9kdWN0LnF0eX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpZi5iaW5kPVxcXCIkaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBzcmM9XFxcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMFxcXCI+JHtwcm9kdWN0Lm5hbWV9PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBlbHNlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXJcXFwiPjxzdHJvbmc+JHtwcm9kdWN0Lm5hbWV9PC9zdHJvbmc+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMFxcXCI+PHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj4ke3Byb2R1Y3QucHJpY2V9PC9zbWFsbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgIERlciBlciBpbmdlbiBwcm9kdWt0ZXIgdGlsa255dHRldCBzYWxnc3N0ZWRldFxcclxcbiAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuXFxyXFxuICAgIDxwYXktYnV0dG9uIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiPjwvcGF5LWJ1dHRvbj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJDb25maWd1cmF0aW9uLCBSZWRpcmVjdFRvUm91dGUgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBnZXRPcmRlclF1YW50aXR5VG90YWwsIGlzU2V0dXAgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiYWxhcm1zXCIsIG5hbWU6IFwiYWxhcm1zXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9hbGFybXNcIiwgXCJhbGFybXNcIikgfSxcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwicHJvZHVjdHNcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3Byb2R1Y3RzXCIsIFwic2FsZVwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJtaXNjXCIsIG5hbWU6IFwibWlzY1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbWlzY1wiLCBcInNhbGVcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY2FydFwiLCBuYW1lOiBcImNhcnRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcnRcIiwgXCJzYWxlXCIpIH0sXHJcbl07XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oe1xyXG4gICAgc2VsZWN0b3I6IHN0b3JlID0+IHN0b3JlLnN0YXRlLFxyXG4gICAgc2V0dXA6IFwiY2FuQWN0aXZhdGVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FsZVJvdXRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgdG90YWxRdWFudGl0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICghaXNTZXR1cCh0aGlzLnN0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0VG9Sb3V0ZShcInNldHVwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImFsYXJtc1xcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0NhcnRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDYWxjdWxhdG9yXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGhcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFCdWxsaG9yblxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIididWxsaG9ybicgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInByb2R1Y3RzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcIm1pc2NcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NhbGN1bGF0b3InICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjYXJ0XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhLWxheWVycyBmYS1md1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3Nob3BwaW5nLWNhcnQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhLWxheWVycy1jb3VudGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpUb21hdG87IHpvb206IDE5MCVcXFwiPiR7dG90YWxRdWFudGl0eX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==