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

/***/ "@fortawesome/free-solid-svg-icons/faTimes":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

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

exports.faTimes = exports.definition;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2NhcmQtY2FsbGJhY2sudHM/NmM1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1lcnJvci50cz9jY2IxIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXNoLXBheW1lbnQudHM/NDNlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvcmVjZWlwdC50cz84NmMyIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXJkLWVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXJkLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2Nhc2gtcGF5bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FzaC1wYXltZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JlY2VpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JlY2VpcHQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yb3V0ZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFRLEVBQUUsZ0JBQWlELEVBQUU7SUFDaEgsRUFBRSxLQUFLLEVBQUUsbUNBQW1DLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsaUJBQWtELEVBQUU7SUFDbkksRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsY0FBK0MsRUFBRTtJQUMxSCxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBaUQsRUFBRTtJQUNoSCxFQUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxvREFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLFVBQVEsV0FBUyxDQUFDLEVBQUU7SUFDekgsRUFBRSxLQUFLLEVBQUUsNkNBQTZDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBNEMsRUFBRTtDQUNwSSxDQUFDO0FBR0Y7SUFBQTtJQUlBLENBQUM7SUFIRyx3Q0FBZSxHQUFmLFVBQWdCLE1BQTJCO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUhRLGNBQWM7UUFEMUIsb0VBQVUsRUFBRTtPQUNBLGNBQWMsQ0FJMUI7SUFBRCxxQkFBQztDQUFBO0FBSjBCOzs7Ozs7Ozs7Ozs7QUNkM0IsME0iLCJmaWxlIjoiY2hlY2tvdXQuMjQ3M2ZlYzFiODMxYTY5MThhNWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub1ZpZXcsIGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3RUb1JvdXRlIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuQG5vVmlldygpXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENhcmRDYWxsYmFjayB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUocGFyYW1zOiB7IG9yZGVySWQ6IHN0cmluZywgYW1vdW50OiBzdHJpbmcgfSAmIFN1bVVwQ2FsbGJhY2tQYXJhbXMpIHtcclxuICAgICAgICBjb25zdCBvcmRlcklkID0gTnVtYmVyKHBhcmFtcy5vcmRlcklkKTtcclxuICAgICAgICBjb25zdCBhbW91bnQgPSBuZXcgQmlnKHBhcmFtcy5hbW91bnQpO1xyXG5cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtc1tcInNtcC1zdGF0dXNcIl0gPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVQYXltZW50KG9yZGVySWQsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJjYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uTnVtYmVyOiBwYXJhbXNbXCJzbXAtdHgtY29kZVwiXVxyXG4gICAgICAgICAgICB9KS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdFRvUm91dGUoXCJyZWNlaXB0XCIsIHtcclxuICAgICAgICAgICAgICAgIG9yZGVySWQ6IG9yZGVySWQsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50SWQ6IHBheW1lbnQuaWQsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0VG9Sb3V0ZShcImNhcmQtZXJyb3JcIiwge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogb3JkZXJJZCxcclxuICAgICAgICAgICAgICAgIGNhdXNlOiBwYXJhbXNbXCJzbXAtZmFpbHVyZS1jYXVzZVwiXSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHBhcmFtc1tcInNtcC1tZXNzYWdlXCJdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIFN1bVVwQ2FsbGJhY2tQYXJhbXMgPSBTdW1VcFN1Y2Nlc3NDYWxsYmFja1BhcmFtcyB8IFN1bVVwRmFpbHVyZUNhbGxiYWNrUGFyYW1zO1xyXG5cclxuaW50ZXJmYWNlIFN1bVVwU3VjY2Vzc0NhbGxiYWNrUGFyYW1zIHtcclxuICAgIFwic21wLXN0YXR1c1wiOiBcInN1Y2Nlc3NcIjtcclxuICAgIFwic21wLW1lc3NhZ2VcIjogc3RyaW5nO1xyXG4gICAgXCJzbXAtcmVjZWlwdC1zZW50XCI6IFwidHJ1ZVwiIHwgXCJmYWxzZVwiO1xyXG4gICAgXCJzbXAtdHgtY29kZVwiOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdW1VcEZhaWx1cmVDYWxsYmFja1BhcmFtcyB7XHJcbiAgICBcInNtcC1zdGF0dXNcIjogXCJmYWlsZWRcIjtcclxuICAgIFwic21wLWZhaWx1cmUtY2F1c2VcIjogc3RyaW5nO1xyXG4gICAgXCJzbXAtbWVzc2FnZVwiOiBzdHJpbmc7XHJcbiAgICBcInNtcC1yZWNlaXB0LXNlbnRcIjogXCJ0cnVlXCIgfCBcImZhbHNlXCI7XHJcbiAgICBcInNtcC10eC1jb2RlXCI6IHN0cmluZztcclxufSIsImV4cG9ydCB0eXBlIERpZ2l0ID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOTtcclxuZXhwb3J0IGNvbnN0IENPTU1BID0gXCIsXCI7XHJcbmV4cG9ydCBjb25zdCBFTlRFUiA9IFwiRW50ZXJcIjtcclxuZXhwb3J0IGNvbnN0IEVTQ0FQRSA9IFwiRXNjYXBlXCI7XHJcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0UgPSBcIkJhY2tzcGFjZVwiOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnYmFja3NwYWNlJztcbnZhciB3aWR0aCA9IDY0MDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNTVhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTc2IDY0SDIwNS4yNkE2My45NyA2My45NyAwIDAgMCAxNjAgODIuNzVMOS4zNyAyMzMuMzdjLTEyLjUgMTIuNS0xMi41IDMyLjc2IDAgNDUuMjVMMTYwIDQyOS4yNWMxMiAxMiAyOC4yOCAxOC43NSA0NS4yNSAxOC43NUg1NzZjMzUuMzUgMCA2NC0yOC42NSA2NC02NFYxMjhjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTg0LjY5IDI1NC4wNmM2LjI1IDYuMjUgNi4yNSAxNi4zOCAwIDIyLjYzbC0yMi42MiAyMi42MmMtNi4yNSA2LjI1LTE2LjM4IDYuMjUtMjIuNjMgMEwzODQgMzAxLjI1bC02Mi4wNiA2Mi4wNmMtNi4yNSA2LjI1LTE2LjM4IDYuMjUtMjIuNjMgMGwtMjIuNjItMjIuNjJjLTYuMjUtNi4yNS02LjI1LTE2LjM4IDAtMjIuNjNMMzM4Ljc1IDI1NmwtNjIuMDYtNjIuMDZjLTYuMjUtNi4yNS02LjI1LTE2LjM4IDAtMjIuNjNsMjIuNjItMjIuNjJjNi4yNS02LjI1IDE2LjM4LTYuMjUgMjIuNjMgMEwzODQgMjEwLjc1bDYyLjA2LTYyLjA2YzYuMjUtNi4yNSAxNi4zOC02LjI1IDIyLjYzIDBsMjIuNjIgMjIuNjJjNi4yNSA2LjI1IDYuMjUgMTYuMzggMCAyMi42M0w0MjkuMjUgMjU2bDYyLjA2IDYyLjA2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUJhY2tzcGFjZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjaGVjayc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwYyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNoZWNrID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3RpbWVzJztcbnZhciB3aWR0aCA9IDM1MjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDBkJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVGltZXMgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jYXJkLWNhbGxiYWNrLnRzXCIpKTtcblx0fSwgXCJjaGVja291dFwiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY2FyZC1lcnJvci50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2Nhc2gtcGF5bWVudC50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL3JlY2VpcHQudHNcIikpO1xuXHR9LCBcImNoZWNrb3V0XCIpO1xufSIsImltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBDYXJkRXJyb3Ige1xyXG4gICAgb3JkZXJJZCE6IG51bWJlcjtcclxuICAgIGNhdXNlITogc3RyaW5nO1xyXG4gICAgbWVzc2FnZSE6IHN0cmluZztcclxuICAgIHRvdGFsITogQmlnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgb3JkZXJJZDogc3RyaW5nLCBjYXVzZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMub3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5jYXVzZSA9IHBhcmFtcy5jYXVzZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5nZXRPcmRlckJ5SWQodGhpcy5vcmRlcklkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSBvcmRlci50b3RhbDtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPkJldGFsaW5nc2Zlamw8L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPk9yZHJlbnIuPC9oMz5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7b3JkZXJJZH08L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGg0PiR7Y2F1c2V9PC9oND5cXHJcXG4gICAgPHA+JHttZXNzYWdlfTwvcD5cXHJcXG5cXHJcXG4gICAgPHBheS1idXR0b24gY2xhc3M9XFxcImZpeGVkLWJ1dHRvbVxcXCIgb3JkZXItaWQuYmluZD1cXFwib3JkZXJJZFxcXCI+PC9wYXktYnV0dG9uPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IEJpZywgeyBSb3VuZGluZ01vZGUgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlnaXQsIEVOVEVSLCBFU0NBUEUsIENPTU1BLCBCQUNLU1BBQ0UgfSBmcm9tIFwiLi4va2V5c1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FzaFBheW1lbnQge1xyXG4gICAgcHJpdmF0ZSBvcmRlciE6IE9yZGVyO1xyXG4gICAgdG90YWwhOiBCaWc7XHJcbiAgICBhbW91bnREdWUhOiBCaWc7XHJcbiAgICByZWNlaXZlZCE6IEJpZztcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKG5hbWVvZjxDYXNoUGF5bWVudD4oeCA9PiB4LnJlY2VpdmVkKSlcclxuICAgIGdldCBjaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjZWl2ZWQuZ3RlKHRoaXMuYW1vdW50RHVlKSA/IHRoaXMucmVjZWl2ZWQubWludXModGhpcy5hbW91bnREdWUpIDogbmV3IEJpZygwKTtcclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKG5hbWVvZjxDYXNoUGF5bWVudD4oeCA9PiB4LnJlY2VpdmVkKSlcclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50RHVlLmd0KDApICYmIHRoaXMucmVjZWl2ZWQuZ3RlKHRoaXMuYW1vdW50RHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHtvcmRlcklkOiBzdHJpbmd9KSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IGF3YWl0IHRoaXMuYXBpLmdldE9yZGVyQnlJZChvcmRlcklkKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5vcmRlci50b3RhbDtcclxuICAgICAgICB0aGlzLmFtb3VudER1ZSA9IHRoaXMub3JkZXIuYW1vdW50RHVlO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSBuZXcgQmlnKDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPj0gXCIwXCIgJiYgZXZlbnQua2V5IDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gTnVtYmVyKGV2ZW50LmtleSkgYXMgRGlnaXQ7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShkaWdpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQ09NTUEpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KFwiMDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQkFDS1NQQUNFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3NwYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRU5URVIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMucmVjZWl2ZWQuZGl2KDEwKS5yb3VuZCgyLCBSb3VuZGluZ01vZGUuUm91bmREb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoS2V5KHZhbHVlOiBEaWdpdCB8IFwiMDBcIikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCIwMFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWQgPSB0aGlzLnJlY2VpdmVkLm11bCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMucmVjZWl2ZWQubXVsKDEwKS5hZGQobmV3IEJpZyh2YWx1ZSkuZGl2KDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGFjdEFtb3VudCgpIHtcclxuICAgICAgICB0aGlzLnJlY2VpdmVkID0gdGhpcy5hbW91bnREdWUucGx1cygwKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlT3JkZXIodGhpcy5vcmRlci5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TdWJtaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVBheW1lbnQodGhpcy5vcmRlci5pZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiY2FzaFwiLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50RHVlXHJcbiAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwicmVjZWlwdFwiLCB7XHJcbiAgICAgICAgICAgIG9yZGVySWQ6IHBheW1lbnQub3JkZXJJZCxcclxuICAgICAgICAgICAgcGF5bWVudElkOiBwYXltZW50LmlkLFxyXG4gICAgICAgICAgICBjaGFuZ2U6IHRoaXMucmVjZWl2ZWQubWludXMocGF5bWVudC5hbW91bnQpLnRvRml4ZWQoMilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5Ub3RhbDwvaDM+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9XFxcImFtb3VudER1ZS5uZXEodG90YWwpXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5UaWwgYmV0YWxpbmc8L2gzPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7YW1vdW50RHVlIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDQ+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHtjaGFuZ2UgfCBtb25leX0ga3IuPC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXFxcIj5Nb2R0YWdldCBrb250YW50PC9oNj5cXHJcXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm9mZnNldC0yIGNvbC04IHRleHQtY2VudGVyXFxcIj4ke3JlY2VpdmVkIHwgbW9uZXl9IGtyLjwvaDE+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29sLTIgYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImJhY2tzcGFjZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2JhY2tzcGFjZScgJiBmb250YXdlc29tZVxcXCIgc2l6ZT1cXFwiMnhcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZml4ZWQtYm90dG9tXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDEwMHB4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbm8tZ3V0dGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwibnVtYmVyIG9mIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAnMDAnLCAwXVxcXCIgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1rZXlwYWQgYnRuLWxpZ2h0XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwicHVzaEtleShudW1iZXIpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+JHtudW1iZXJ9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWtleXBhZCBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJleGFjdEFtb3VudCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+PTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1sZyBjb2wtNFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNhbmNlbCgpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEZvcnRyeWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tbGcgY29sLThcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjaGVjaycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gVWRmw7hyPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSBcIi4uL2FwaS9wYXltZW50XCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbmludGVyZmFjZSBQYXJhbXMgeyBvcmRlcklkOiBzdHJpbmcsIHBheW1lbnRJZDogc3RyaW5nLCBjaGFuZ2U/OiBzdHJpbmcgfTtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENhc2hSZWNlaXB0IHtcclxuICAgIHByaXZhdGUgcGF5bWVudCE6IFBheW1lbnRcclxuICAgIG9yZGVySWQhOiBudW1iZXI7XHJcbiAgICB0b3RhbCE6IEJpZztcclxuICAgIGNoYW5nZT86IEJpZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShwYXJhbXM6IFBhcmFtcykge1xyXG4gICAgICAgIHRoaXMub3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudElkID0gTnVtYmVyKHBhcmFtcy5wYXltZW50SWQpO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuZ2V0T3JkZXJCeUlkKHRoaXMub3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gb3JkZXIucGF5bWVudHMuZmluZCh4ID0+IHguaWQgPT09IHBheW1lbnRJZCk7XHJcblxyXG4gICAgICAgIGlmICghcGF5bWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBheW1lbnQgPSBwYXltZW50O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucGF5bWVudC5hbW91bnQ7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMuY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEJpZyhwYXJhbXMuY2hhbmdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5Ldml0dGVyaW5nPC9oMT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPk9yZHJlbnIuPC9oMz5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7b3JkZXJJZH08L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGhyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBpZi5iaW5kPVxcXCJjaGFuZ2VcXFwiPlxcclxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDQ+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke2NoYW5nZSB8IG1vbmV5fSBrci48L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjb21wbGV0ZSgpXFxcIj5VZGbDuHJ0PC9idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyLCBOYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2NhcmRcIiwgbmFtZTogXCJjYXJkXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXNoLXBheW1lbnRcIiwgXCJjaGVja291dFwiKSB9LCAvLyBUT0RPXHJcbiAgICB7IHJvdXRlOiBcIm9yZGVycy86b3JkZXJJZC9wYXkvY2FyZC1jYWxsYmFja1wiLCBuYW1lOiBcImNhcmQtY2FsbGJhY2tcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcmQtY2FsbGJhY2tcIiwgXCJjaGVja291dFwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2NhcmQtZXJyb3JcIiwgbmFtZTogXCJjYXJkLWVycm9yXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXJkLWVycm9yXCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9jYXNoXCIsIG5hbWU6IFwiY2FzaFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY2FzaC1wYXltZW50XCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9hY2NvdW50XCIsIG5hbWU6IFwiYWNjb3VudFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vYWNjb3VudC0sIFwiY2hlY2tvdXRcInBheW1lbnRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheW1lbnRzLzpwYXltZW50SWQvcmVjZWlwdFwiLCBuYW1lOiBcInJlY2VpcHRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3JlY2VpcHRcIiwgXCJjaGVja291dFwiKSB9LFxyXG5dO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRSb3V0ZXIge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy5tYXAocm91dGVzKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiA1NnB4XFxcIj48L25hdj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=