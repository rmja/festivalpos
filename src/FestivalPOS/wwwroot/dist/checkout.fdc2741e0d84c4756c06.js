(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout"],{

/***/ "./node_modules/ts-loader/index.js?!./src/checkout/card-callback.ts":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/checkout/card-callback.ts ***!
  \************************************************************************/
/*! exports provided: CardCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCallback", function() { return CardCallback; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_3__);
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




var CardCallback = /** @class */ (function () {
    function CardCallback(api) {
        this.api = api;
    }
    CardCallback.prototype.canActivate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, amount, payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = Number(params.orderId);
                        amount = new big_js__WEBPACK_IMPORTED_MODULE_3__["Big"](params.amount);
                        debugger;
                        if (!(params["smp-status"] === "success")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.createPayment(orderId, {
                                method: "card",
                                amount: amount,
                                transactionNumber: params["smp-tx-code"]
                            }).transfer()];
                    case 1:
                        payment = _a.sent();
                        return [2 /*return*/, new aurelia_router__WEBPACK_IMPORTED_MODULE_1__["RedirectToRoute"]("receipt", {
                                orderId: orderId,
                                paymentId: payment.id,
                            }, {
                                replace: true
                            })];
                    case 2: return [2 /*return*/, new aurelia_router__WEBPACK_IMPORTED_MODULE_1__["RedirectToRoute"]("card-error", {
                            orderId: orderId,
                            cause: params["smp-failure-cause"],
                            message: params["smp-message"]
                        }, {
                            replace: true
                        })];
                }
            });
        });
    };
    CardCallback = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["noView"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_2__["Api"]])
    ], CardCallback);
    return CardCallback;
}());



/***/ }),

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

/***/ "@fortawesome/free-solid-svg-icons/faBackspace":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faBackspace.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'backspace';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f55a';
var svgPathData = 'M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faBackspace = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faCheck":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'check';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f00c';
var svgPathData = 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCheck = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "async!checkout/card-callback":
/*!***************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=checkout!./src/checkout/card-callback.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./card-callback.ts */ "./node_modules/ts-loader/index.js?!./src/checkout/card-callback.ts"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!checkout/card-error":
/*!************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=checkout!./src/checkout/card-error.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./card-error.ts */ "checkout/card-error"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!checkout/cash-payment":
/*!**************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=checkout!./src/checkout/cash-payment.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./cash-payment.ts */ "checkout/cash-payment"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!checkout/receipt":
/*!*********************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=checkout!./src/checkout/receipt.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./receipt.ts */ "checkout/receipt"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "checkout/card-error":
/*!*********************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/checkout/card-error.ts ***!
  \*********************************************************************/
/*! exports provided: CardError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardError", function() { return CardError; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
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


var CardError = /** @class */ (function () {
    function CardError(api) {
        this.api = api;
    }
    CardError.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.orderId = Number(params.orderId);
                        this.cause = params.cause;
                        this.message = params.message;
                        return [4 /*yield*/, this.api.getOrderById(this.orderId).transfer()];
                    case 1:
                        order = _a.sent();
                        this.total = order.total;
                        return [2 /*return*/];
                }
            });
        });
    };
    CardError = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_0__["Api"]])
    ], CardError);
    return CardError;
}());



/***/ }),

/***/ "checkout/card-error.html":
/*!**************************************!*\
  !*** ./src/checkout/card-error.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <h1 class=\"text-danger\">Betalingsfejl</h1>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Total</h3>\r\n        <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Ordrenr.</h3>\r\n        <h3 class=\"col text-right\">${orderId}</h3>\r\n    </div>\r\n\r\n    <h4>${cause}</h4>\r\n    <p>${message}</p>\r\n\r\n    <pay-button class=\"fixed-buttom\" order-id.bind=\"orderId\"></pay-button>\r\n</template>";

/***/ }),

/***/ "checkout/cash-payment":
/*!***********************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/checkout/cash-payment.ts ***!
  \***********************************************************************/
/*! exports provided: CashPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPayment", function() { return CashPayment; });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "./node_modules/aurelia-binding/dist/native-modules/aurelia-binding.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keys */ "./src/keys.ts");
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






var CashPayment = /** @class */ (function () {
    function CashPayment(api, router) {
        this.api = api;
        this.router = router;
        this.keyup = this.keyup.bind(this);
    }
    Object.defineProperty(CashPayment.prototype, "change", {
        get: function () {
            return this.received.gte(this.amountDue) ? this.received.minus(this.amountDue) : new big_js__WEBPACK_IMPORTED_MODULE_0___default.a(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CashPayment.prototype, "canSubmit", {
        get: function () {
            return this.amountDue.gt(0) && this.received.gte(this.amountDue);
        },
        enumerable: true,
        configurable: true
    });
    CashPayment.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orderId = Number(params.orderId);
                        _a = this;
                        return [4 /*yield*/, this.api.getOrderById(orderId).transfer()];
                    case 1:
                        _a.order = _b.sent();
                        this.total = this.order.total;
                        this.amountDue = this.order.amountDue;
                        this.received = new big_js__WEBPACK_IMPORTED_MODULE_0___default.a(0);
                        document.addEventListener("keyup", this.keyup);
                        return [2 /*return*/];
                }
            });
        });
    };
    CashPayment.prototype.deactivate = function () {
        document.removeEventListener("keyup", this.keyup);
    };
    CashPayment.prototype.keyup = function (event) {
        if (event.key >= "0" && event.key <= "9") {
            var digit = Number(event.key);
            this.pushKey(digit);
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_5__["COMMA"]) {
            this.pushKey("00");
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_5__["BACKSPACE"]) {
            this.backspace();
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_5__["ENTER"]) {
            return this.submit();
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
            return this.cancel();
        }
    };
    CashPayment.prototype.backspace = function () {
        this.received = this.received.div(10).round(2, 0 /* RoundDown */);
    };
    CashPayment.prototype.pushKey = function (value) {
        if (value === "00") {
            this.received = this.received.mul(100);
        }
        else {
            this.received = this.received.mul(10).add(new big_js__WEBPACK_IMPORTED_MODULE_0___default.a(value).div(100));
        }
    };
    CashPayment.prototype.exactAmount = function () {
        this.received = this.amountDue.plus(0);
    };
    CashPayment.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.deleteOrder(this.order.id)];
                    case 1:
                        _a.sent();
                        this.router.navigate("/sale");
                        return [2 /*return*/];
                }
            });
        });
    };
    CashPayment.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.canSubmit) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.api.createPayment(this.order.id, {
                                method: "cash",
                                amount: this.amountDue
                            }).transfer()];
                    case 1:
                        payment = _a.sent();
                        this.router.navigateToRoute("receipt", {
                            orderId: payment.orderId,
                            paymentId: payment.id,
                            change: this.received.minus(payment.amount).toFixed(2)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])("received"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CashPayment.prototype, "change", null);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])("received"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CashPayment.prototype, "canSubmit", null);
    CashPayment = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CashPayment);
    return CashPayment;
}());



/***/ }),

/***/ "checkout/cash-payment.html":
/*!****************************************!*\
  !*** ./src/checkout/cash-payment.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <form submit.delegate=\"submit()\">\r\n        <div class=\"row\">\r\n            <h3 class=\"col text-muted\">Total</h3>\r\n            <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\" if.bind=\"amountDue.neq(total)\">\r\n            <h3 class=\"col text-muted\">Til betaling</h3>\r\n            <h3 class=\"col text-right\">${amountDue | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col text-muted\">Tilbage</h4>\r\n            <h4 class=\"col text-right\">${change | money} kr.</h4>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <h6 class=\"col-12 text-center text-muted\">Modtaget kontant</h6>\r\n            <h1 class=\"offset-2 col-8 text-center\">${received | money} kr.</h1>\r\n            <button class=\"col-2 btn btn-light\" click.delegate=\"backspace()\"><require from=\"@fortawesome/free-solid-svg-icons/faCheck\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBackspace\"></require><font-awesome-icon icon.bind=\"'backspace' & fontawesome\" size=\"2x\"></font-awesome-icon></button>\r\n        </div>\r\n        \r\n        <div class=\"fixed-bottom\" style=\"padding-bottom: 100px\">\r\n            <div class=\"row no-gutters\">\r\n                <div repeat.for=\"number of [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0]\" class=\"col-4\">\r\n                    <button type=\"button\" class=\"btn btn-keypad btn-light\" click.delegate=\"pushKey(number)\">\r\n                        <h5>${number}</h5>\r\n                    </button>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <button type=\"button\" class=\"btn btn-keypad btn-light\" click.delegate=\"exactAmount()\">\r\n                        <h5>=</h5>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-block fixed-bottom\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg col-4\" click.delegate=\"cancel()\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n            <button type=\"submit\" class=\"btn btn-success btn-lg col-8\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'check' & fontawesome\"></font-awesome-icon> Udfør</button>\r\n        </div>\r\n    </form>\r\n</template>";

/***/ }),

/***/ "checkout/receipt":
/*!******************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/checkout/receipt.ts ***!
  \******************************************************************/
/*! exports provided: CashReceipt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashReceipt", function() { return CashReceipt; });
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
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




;
var CashReceipt = /** @class */ (function () {
    function CashReceipt(api, router) {
        this.api = api;
        this.router = router;
        this.keyup = this.keyup.bind(this);
    }
    CashReceipt.prototype.canActivate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var paymentId, order, payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.orderId = Number(params.orderId);
                        paymentId = Number(params.paymentId);
                        return [4 /*yield*/, this.api.getOrderById(this.orderId).transfer()];
                    case 1:
                        order = _a.sent();
                        payment = order.payments.find(function (x) { return x.id === paymentId; });
                        if (!payment) {
                            return [2 /*return*/, false];
                        }
                        this.payment = payment;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CashReceipt.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.total = this.payment.amount;
                if (params.change) {
                    this.change = new big_js__WEBPACK_IMPORTED_MODULE_2__["Big"](params.change);
                }
                addEventListener("keyup", this.keyup);
                return [2 /*return*/];
            });
        });
    };
    CashReceipt.prototype.deactivate = function () {
        removeEventListener("keyup", this.keyup);
    };
    CashReceipt.prototype.keyup = function (event) {
        if (event.keyCode === 13) {
            return this.complete();
        }
    };
    CashReceipt.prototype.complete = function () {
        this.router.navigate("/sale");
    };
    CashReceipt = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_3__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], CashReceipt);
    return CashReceipt;
}());



/***/ }),

/***/ "checkout/receipt.html":
/*!***********************************!*\
  !*** ./src/checkout/receipt.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <h1 class=\"text-center\">Kvittering</h1>\r\n\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Ordrenr.</h3>\r\n        <h3 class=\"col text-right\">${orderId}</h3>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Total</h3>\r\n        <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n    </div>\r\n    <div class=\"row\" if.bind=\"change\">\r\n        <h4 class=\"col text-muted\">Tilbage</h4>\r\n        <h4 class=\"col text-right\">${change | money} kr.</h4>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block fixed-bottom\" click.delegate=\"complete()\">Udført</button>\r\n</template>";

/***/ }),

/***/ "checkout/router":
/*!*****************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/checkout/router.ts ***!
  \*****************************************************************/
/*! exports provided: CheckoutRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRouter", function() { return CheckoutRouter; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { route: "orders/:orderId/pay/card", name: "card", moduleId: './cash-payment' },
    { route: "orders/:orderId/pay/card-callback", name: "card-callback", moduleId: './card-callback' },
    { route: "orders/:orderId/pay/card-error", name: "card-error", moduleId: './card-error' },
    { route: "orders/:orderId/pay/cash", name: "cash", moduleId: './cash-payment' },
    { route: "orders/:orderId/pay/account", name: "account", moduleId: aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].moduleName("./account-, ", checkout, "payment") },
    { route: "orders/:orderId/payments/:paymentId/receipt", name: "receipt", moduleId: './receipt' },
];
var CheckoutRouter = /** @class */ (function () {
    function CheckoutRouter() {
    }
    CheckoutRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    CheckoutRouter = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"])()
    ], CheckoutRouter);
    return CheckoutRouter;
}());



/***/ }),

/***/ "checkout/router.html":
/*!**********************************!*\
  !*** ./src/checkout/router.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <nav class=\"navbar navbar-dark bg-dark\" style=\"height: 56px\"></nav>\r\n    <page-body>\r\n        <router-view></router-view>\r\n    </page-body>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1jYWxsYmFjay50cz82YzVkIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXJkLWVycm9yLnRzP2NjYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2Nhc2gtcGF5bWVudC50cz80M2VlIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yZWNlaXB0LnRzPzg2YzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2NhcmQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2NhcmQtZXJyb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FzaC1wYXltZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXNoLXBheW1lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvcmVjZWlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvcmVjZWlwdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JvdXRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDTjtBQUNwQjtBQUNBO0FBSTdCO0lBQ0ksc0JBQW9CLEdBQVE7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RCxFQUFFO0lBQ2hILEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLG9EQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsVUFBUSxXQUFTLENBQUMsRUFBRTtJQUN6SCxFQUFFLEtBQUssRUFBRSw2Q0FBNkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUE0QyxFQUFFO0NBQ3BJLENBQUM7QUFHRjtJQUFBO0lBSUEsQ0FBQztJQUhHLHdDQUFlLEdBQWYsVUFBZ0IsTUFBMkI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBSFEsY0FBYztRQUQxQixvRUFBVSxFQUFFO09BQ0EsY0FBYyxDQUkxQjtJQUFELHFCQUFDO0NBQUE7QUFKMEI7Ozs7Ozs7Ozs7OztBQ2QzQiwwTSIsImZpbGUiOiJjaGVja291dC5mZGMyNzQxZTBkODRjNDc1NmMwNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vVmlldywgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdFRvUm91dGUgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5Abm9WaWV3KClcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FyZENhbGxiYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShwYXJhbXM6IHsgb3JkZXJJZDogc3RyaW5nLCBhbW91bnQ6IHN0cmluZyB9ICYgU3VtVXBDYWxsYmFja1BhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IG9yZGVySWQgPSBOdW1iZXIocGFyYW1zLm9yZGVySWQpO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IG5ldyBCaWcocGFyYW1zLmFtb3VudCk7XHJcblxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zW1wic21wLXN0YXR1c1wiXSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVBheW1lbnQob3JkZXJJZCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcImNhcmRcIixcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25OdW1iZXI6IHBhcmFtc1tcInNtcC10eC1jb2RlXCJdXHJcbiAgICAgICAgICAgIH0pLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0VG9Sb3V0ZShcInJlY2VpcHRcIiwge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogb3JkZXJJZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRJZDogcGF5bWVudC5pZCxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RUb1JvdXRlKFwiY2FyZC1lcnJvclwiLCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkOiBvcmRlcklkLFxyXG4gICAgICAgICAgICAgICAgY2F1c2U6IHBhcmFtc1tcInNtcC1mYWlsdXJlLWNhdXNlXCJdLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcGFyYW1zW1wic21wLW1lc3NhZ2VcIl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgU3VtVXBDYWxsYmFja1BhcmFtcyA9IFN1bVVwU3VjY2Vzc0NhbGxiYWNrUGFyYW1zIHwgU3VtVXBGYWlsdXJlQ2FsbGJhY2tQYXJhbXM7XHJcblxyXG5pbnRlcmZhY2UgU3VtVXBTdWNjZXNzQ2FsbGJhY2tQYXJhbXMge1xyXG4gICAgXCJzbXAtc3RhdHVzXCI6IFwic3VjY2Vzc1wiO1xyXG4gICAgXCJzbXAtbWVzc2FnZVwiOiBzdHJpbmc7XHJcbiAgICBcInNtcC1yZWNlaXB0LXNlbnRcIjogXCJ0cnVlXCIgfCBcImZhbHNlXCI7XHJcbiAgICBcInNtcC10eC1jb2RlXCI6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFN1bVVwRmFpbHVyZUNhbGxiYWNrUGFyYW1zIHtcclxuICAgIFwic21wLXN0YXR1c1wiOiBcImZhaWxlZFwiO1xyXG4gICAgXCJzbXAtZmFpbHVyZS1jYXVzZVwiOiBzdHJpbmc7XHJcbiAgICBcInNtcC1tZXNzYWdlXCI6IHN0cmluZztcclxuICAgIFwic21wLXJlY2VpcHQtc2VudFwiOiBcInRydWVcIiB8IFwiZmFsc2VcIjtcclxuICAgIFwic21wLXR4LWNvZGVcIjogc3RyaW5nO1xyXG59IiwiZXhwb3J0IHR5cGUgRGlnaXQgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5O1xyXG5leHBvcnQgY29uc3QgQ09NTUEgPSBcIixcIjtcclxuZXhwb3J0IGNvbnN0IEVOVEVSID0gXCJFbnRlclwiO1xyXG5leHBvcnQgY29uc3QgRVNDQVBFID0gXCJFc2NhcGVcIjtcclxuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRSA9IFwiQmFja3NwYWNlXCI7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdiYWNrc3BhY2UnO1xudmFyIHdpZHRoID0gNjQwO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2Y1NWEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ001NzYgNjRIMjA1LjI2QTYzLjk3IDYzLjk3IDAgMCAwIDE2MCA4Mi43NUw5LjM3IDIzMy4zN2MtMTIuNSAxMi41LTEyLjUgMzIuNzYgMCA0NS4yNUwxNjAgNDI5LjI1YzEyIDEyIDI4LjI4IDE4Ljc1IDQ1LjI1IDE4Ljc1SDU3NmMzNS4zNSAwIDY0LTI4LjY1IDY0LTY0VjEyOGMwLTM1LjM1LTI4LjY1LTY0LTY0LTY0em0tODQuNjkgMjU0LjA2YzYuMjUgNi4yNSA2LjI1IDE2LjM4IDAgMjIuNjNsLTIyLjYyIDIyLjYyYy02LjI1IDYuMjUtMTYuMzggNi4yNS0yMi42MyAwTDM4NCAzMDEuMjVsLTYyLjA2IDYyLjA2Yy02LjI1IDYuMjUtMTYuMzggNi4yNS0yMi42MyAwbC0yMi42Mi0yMi42MmMtNi4yNS02LjI1LTYuMjUtMTYuMzggMC0yMi42M0wzMzguNzUgMjU2bC02Mi4wNi02Mi4wNmMtNi4yNS02LjI1LTYuMjUtMTYuMzggMC0yMi42M2wyMi42Mi0yMi42MmM2LjI1LTYuMjUgMTYuMzgtNi4yNSAyMi42MyAwTDM4NCAyMTAuNzVsNjIuMDYtNjIuMDZjNi4yNS02LjI1IDE2LjM4LTYuMjUgMjIuNjMgMGwyMi42MiAyMi42MmM2LjI1IDYuMjUgNi4yNSAxNi4zOCAwIDIyLjYzTDQyOS4yNSAyNTZsNjIuMDYgNjIuMDZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQmFja3NwYWNlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NoZWNrJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDBjJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2hlY2sgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jYXJkLWNhbGxiYWNrLnRzXCIpKTtcblx0fSwgXCJjaGVja291dFwiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY2FyZC1lcnJvci50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2Nhc2gtcGF5bWVudC50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL3JlY2VpcHQudHNcIikpO1xuXHR9LCBcImNoZWNrb3V0XCIpO1xufSIsImltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBDYXJkRXJyb3Ige1xyXG4gICAgb3JkZXJJZCE6IG51bWJlcjtcclxuICAgIGNhdXNlITogc3RyaW5nO1xyXG4gICAgbWVzc2FnZSE6IHN0cmluZztcclxuICAgIHRvdGFsITogQmlnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgb3JkZXJJZDogc3RyaW5nLCBjYXVzZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMub3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5jYXVzZSA9IHBhcmFtcy5jYXVzZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5nZXRPcmRlckJ5SWQodGhpcy5vcmRlcklkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSBvcmRlci50b3RhbDtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPkJldGFsaW5nc2Zlamw8L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPk9yZHJlbnIuPC9oMz5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7b3JkZXJJZH08L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGg0PiR7Y2F1c2V9PC9oND5cXHJcXG4gICAgPHA+JHttZXNzYWdlfTwvcD5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJ1dHRvbVxcXCIgb3JkZXItaWQuYmluZD1cXFwib3JkZXJJZFxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IEJpZywgeyBSb3VuZGluZ01vZGUgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlnaXQsIEVOVEVSLCBFU0NBUEUsIENPTU1BLCBCQUNLU1BBQ0UgfSBmcm9tIFwiLi4va2V5c1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FzaFBheW1lbnQge1xyXG4gICAgcHJpdmF0ZSBvcmRlciE6IE9yZGVyO1xyXG4gICAgdG90YWwhOiBCaWc7XHJcbiAgICBhbW91bnREdWUhOiBCaWc7XHJcbiAgICByZWNlaXZlZCE6IEJpZztcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKG5hbWVvZjxDYXNoUGF5bWVudD4oeCA9PiB4LnJlY2VpdmVkKSlcclxuICAgIGdldCBjaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjZWl2ZWQuZ3RlKHRoaXMuYW1vdW50RHVlKSA/IHRoaXMucmVjZWl2ZWQubWludXModGhpcy5hbW91bnREdWUpIDogbmV3IEJpZygwKTtcclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKG5hbWVvZjxDYXNoUGF5bWVudD4oeCA9PiB4LnJlY2VpdmVkKSlcclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50RHVlLmd0KDApICYmIHRoaXMucmVjZWl2ZWQuZ3RlKHRoaXMuYW1vdW50RHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHtvcmRlcklkOiBzdHJpbmd9KSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IGF3YWl0IHRoaXMuYXBpLmdldE9yZGVyQnlJZChvcmRlcklkKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5vcmRlci50b3RhbDtcclxuICAgICAgICB0aGlzLmFtb3VudER1ZSA9IHRoaXMub3JkZXIuYW1vdW50RHVlO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSBuZXcgQmlnKDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPj0gXCIwXCIgJiYgZXZlbnQua2V5IDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gTnVtYmVyKGV2ZW50LmtleSkgYXMgRGlnaXQ7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShkaWdpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQ09NTUEpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KFwiMDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQkFDS1NQQUNFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3NwYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRU5URVIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMucmVjZWl2ZWQuZGl2KDEwKS5yb3VuZCgyLCBSb3VuZGluZ01vZGUuUm91bmREb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoS2V5KHZhbHVlOiBEaWdpdCB8IFwiMDBcIikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCIwMFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWQgPSB0aGlzLnJlY2VpdmVkLm11bCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMucmVjZWl2ZWQubXVsKDEwKS5hZGQobmV3IEJpZyh2YWx1ZSkuZGl2KDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGFjdEFtb3VudCgpIHtcclxuICAgICAgICB0aGlzLnJlY2VpdmVkID0gdGhpcy5hbW91bnREdWUucGx1cygwKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlT3JkZXIodGhpcy5vcmRlci5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TdWJtaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVBheW1lbnQodGhpcy5vcmRlci5pZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiY2FzaFwiLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50RHVlXHJcbiAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwicmVjZWlwdFwiLCB7XHJcbiAgICAgICAgICAgIG9yZGVySWQ6IHBheW1lbnQub3JkZXJJZCxcclxuICAgICAgICAgICAgcGF5bWVudElkOiBwYXltZW50LmlkLFxyXG4gICAgICAgICAgICBjaGFuZ2U6IHRoaXMucmVjZWl2ZWQubWludXMocGF5bWVudC5hbW91bnQpLnRvRml4ZWQoMilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5Ub3RhbDwvaDM+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9XFxcImFtb3VudER1ZS5uZXEodG90YWwpXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5UaWwgYmV0YWxpbmc8L2gzPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7YW1vdW50RHVlIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDQ+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHtjaGFuZ2UgfCBtb25leX0ga3IuPC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXFxcIj5Nb2R0YWdldCBrb250YW50PC9oNj5cXHJcXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm9mZnNldC0yIGNvbC04IHRleHQtY2VudGVyXFxcIj4ke3JlY2VpdmVkIHwgbW9uZXl9IGtyLjwvaDE+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29sLTIgYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImJhY2tzcGFjZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2JhY2tzcGFjZScgJiBmb250YXdlc29tZVxcXCIgc2l6ZT1cXFwiMnhcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZml4ZWQtYm90dG9tXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDEwMHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbm8tZ3V0dGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwibnVtYmVyIG9mIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAnMDAnLCAwXVxcXCIgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1rZXlwYWQgYnRuLWxpZ2h0XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwicHVzaEtleShudW1iZXIpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+JHtudW1iZXJ9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWtleXBhZCBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJleGFjdEFtb3VudCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+PTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1sZyBjb2wtNFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNhbmNlbCgpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEZvcnRyeWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tbGcgY29sLThcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjaGVjaycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gVWRmw7hyPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSBcIi4uL2FwaS9wYXltZW50XCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbmludGVyZmFjZSBQYXJhbXMgeyBvcmRlcklkOiBzdHJpbmcsIHBheW1lbnRJZDogc3RyaW5nLCBjaGFuZ2U/OiBzdHJpbmcgfTtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENhc2hSZWNlaXB0IHtcclxuICAgIHByaXZhdGUgcGF5bWVudCE6IFBheW1lbnRcclxuICAgIG9yZGVySWQhOiBudW1iZXI7XHJcbiAgICB0b3RhbCE6IEJpZztcclxuICAgIGNoYW5nZT86IEJpZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShwYXJhbXM6IFBhcmFtcykge1xyXG4gICAgICAgIHRoaXMub3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudElkID0gTnVtYmVyKHBhcmFtcy5wYXltZW50SWQpO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuZ2V0T3JkZXJCeUlkKHRoaXMub3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gb3JkZXIucGF5bWVudHMuZmluZCh4ID0+IHguaWQgPT09IHBheW1lbnRJZCk7XHJcblxyXG4gICAgICAgIGlmICghcGF5bWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBheW1lbnQgPSBwYXltZW50O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucGF5bWVudC5hbW91bnQ7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMuY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEJpZyhwYXJhbXMuY2hhbmdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5Ldml0dGVyaW5nPC9oMT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPk9yZHJlbnIuPC9oMz5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7b3JkZXJJZH08L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGhyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBpZi5iaW5kPVxcXCJjaGFuZ2VcXFwiPlxcclxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDQ+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke2NoYW5nZSB8IG1vbmV5fSBrci48L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjb21wbGV0ZSgpXFxcIj5VZGbDuHJ0PC9idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyLCBOYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2NhcmRcIiwgbmFtZTogXCJjYXJkXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXNoLXBheW1lbnRcIiwgXCJjaGVja291dFwiKSB9LCAvLyBUT0RPXHJcbiAgICB7IHJvdXRlOiBcIm9yZGVycy86b3JkZXJJZC9wYXkvY2FyZC1jYWxsYmFja1wiLCBuYW1lOiBcImNhcmQtY2FsbGJhY2tcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcmQtY2FsbGJhY2tcIiwgXCJjaGVja291dFwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2NhcmQtZXJyb3JcIiwgbmFtZTogXCJjYXJkLWVycm9yXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXJkLWVycm9yXCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9jYXNoXCIsIG5hbWU6IFwiY2FzaFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY2FzaC1wYXltZW50XCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9hY2NvdW50XCIsIG5hbWU6IFwiYWNjb3VudFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vYWNjb3VudC0sIFwiY2hlY2tvdXRcInBheW1lbnRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheW1lbnRzLzpwYXltZW50SWQvcmVjZWlwdFwiLCBuYW1lOiBcInJlY2VpcHRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3JlY2VpcHRcIiwgXCJjaGVja291dFwiKSB9LFxyXG5dO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRSb3V0ZXIge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy5tYXAocm91dGVzKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiA1NnB4XFxcIj48L25hdj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=