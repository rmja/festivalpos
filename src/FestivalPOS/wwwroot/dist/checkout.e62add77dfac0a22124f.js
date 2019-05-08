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

/***/ "@fortawesome/free-solid-svg-icons/faCreditCard":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'credit-card';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f09d';
var svgPathData = 'M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z';

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

exports.faCreditCard = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faFileInvoiceDollar":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faFileInvoiceDollar.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'file-invoice-dollar';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f571';
var svgPathData = 'M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z';

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

exports.faFileInvoiceDollar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faMoneyBillAlt":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faMoneyBillAlt.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'money-bill-alt';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f3d1';
var svgPathData = 'M352 288h-16v-88c0-4.42-3.58-8-8-8h-13.58c-4.74 0-9.37 1.4-13.31 4.03l-15.33 10.22a7.994 7.994 0 0 0-2.22 11.09l8.88 13.31a7.994 7.994 0 0 0 11.09 2.22l.47-.31V288h-16c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h64c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 192c-53.02 0-96-50.15-96-112 0-61.86 42.98-112 96-112s96 50.14 96 112c0 61.87-43 112-96 112zm272 32h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z';

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

exports.faMoneyBillAlt = exports.definition;
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

/***/ "async!checkout/account-payment":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=checkout!./src/checkout/account-payment.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./account-payment.ts */ "checkout/account-payment"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

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

/***/ "checkout/account-payment":
/*!**************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/checkout/account-payment.ts ***!
  \**************************************************************************/
/*! exports provided: AccountPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPayment", function() { return AccountPayment; });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../keys */ "./src/keys.ts");
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





var AccountPayment = /** @class */ (function () {
    function AccountPayment(api, router) {
        this.api = api;
        this.router = router;
        this.keyup = this.keyup.bind(this);
    }
    Object.defineProperty(AccountPayment.prototype, "accountName", {
        get: function () {
            if (this.account) {
                return this.account.name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountPayment.prototype, "remainingCredit", {
        get: function () {
            if (this.account) {
                return this.account.remainingCredit;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountPayment.prototype, "remainingCreditClass", {
        get: function () {
            if (this.account) {
                if (this.account.remainingCredit.gte(this.total)) {
                    return "text-success";
                }
                else {
                    return "text-danger";
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountPayment.prototype, "canSubmit", {
        get: function () {
            return this.account && this.remainingCredit && this.remainingCredit.gte(this.total);
        },
        enumerable: true,
        configurable: true
    });
    AccountPayment.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        orderId = Number(params.orderId);
                        _a = this;
                        return [4 /*yield*/, this.api.getOrderById(orderId).transfer()];
                    case 1:
                        _a.order = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.api.getAllAccounts().transfer()];
                    case 2:
                        _b.accounts = _c.sent();
                        this.total = this.order.total;
                        this.accountNumber = new big_js__WEBPACK_IMPORTED_MODULE_0__["Big"](0);
                        document.addEventListener("keyup", this.keyup);
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPayment.prototype.deactivate = function () {
        document.removeEventListener("keyup", this.keyup);
    };
    AccountPayment.prototype.keyup = function (event) {
        if (event.key >= "0" && event.key <= "9") {
            var digit = Number(event.key);
            this.pushKey(digit);
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_4__["COMMA"]) {
            this.pushKey("00");
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_4__["BACKSPACE"]) {
            this.backspace();
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_4__["ENTER"]) {
            return this.submit();
        }
        else if (event.key === _keys__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"]) {
            return this.cancel();
        }
    };
    AccountPayment.prototype.backspace = function () {
        this.accountNumber = this.accountNumber.div(10).round(0, 0 /* RoundDown */);
    };
    AccountPayment.prototype.pushKey = function (value) {
        if (value === "00") {
            this.accountNumber = this.accountNumber.mul(100);
        }
        else {
            this.accountNumber = this.accountNumber.mul(10).add(new big_js__WEBPACK_IMPORTED_MODULE_0__["Big"](value));
        }
    };
    AccountPayment.prototype.cancel = function () {
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
    AccountPayment.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.canSubmit) {
                            return [2 /*return*/];
                        }
                        if (!this.account) {
                            throw new Error();
                        }
                        return [4 /*yield*/, this.api.createPayment(this.order.id, {
                                method: "account",
                                amount: this.total,
                                accountId: this.account.id
                            }).transfer()];
                    case 1:
                        payment = _a.sent();
                        this.router.navigateToRoute("receipt", {
                            orderId: payment.orderId,
                            paymentId: payment.id
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPayment.prototype.accountNumberChanged = function () {
        var number = parseInt(this.accountNumber.toFixed(0));
        this.account = this.accounts.find(function (x) { return x.number === number; });
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["observable"])(),
        __metadata("design:type", big_js__WEBPACK_IMPORTED_MODULE_0__["Big"])
    ], AccountPayment.prototype, "accountNumber", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])("account"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AccountPayment.prototype, "accountName", null);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])("account"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AccountPayment.prototype, "remainingCredit", null);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])("account"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AccountPayment.prototype, "remainingCreditClass", null);
    AccountPayment = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_2__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountPayment);
    return AccountPayment;
}());



/***/ }),

/***/ "checkout/account-payment.html":
/*!*******************************************!*\
  !*** ./src/checkout/account-payment.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <form submit.delegate=\"submit()\">\r\n        <div class=\"row\">\r\n            <h3 class=\"col text-muted\">Total</h3>\r\n            <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h6 class=\"col-12 text-center text-muted\">Kontonummer</h6>\r\n            <h1 class=\"offset-2 col-8 text-center\">${accountNumber}</h1>\r\n            <button class=\"col-2 btn btn-light\" click.delegate=\"backspace()\"><require from=\"@fortawesome/free-solid-svg-icons/faCheck\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBackspace\"></require><font-awesome-icon icon.bind=\"'backspace' & fontawesome\" size=\"2x\"></font-awesome-icon></button>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col-12 text-center\">${accountName || 'Ikke fundet'}</h4>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col text-muted\">Kredit</h4>\r\n            <h4 class=\"col text-right ${remainingCreditClass}\">${remainingCredit | money} kr.</h4>\r\n        </div>\r\n        \r\n        <div class=\"fixed-bottom keypad\">\r\n            <div class=\"row no-gutters\">\r\n                <div repeat.for=\"number of [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0]\" class=\"col-4\">\r\n                    <button type=\"button\" class=\"btn btn-light\" click.delegate=\"pushKey(number)\">\r\n                        <h5>${number}</h5>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-block fixed-bottom\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg col-4\" click.delegate=\"cancel()\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n            <button type=\"submit\" class=\"btn btn-success btn-lg col-8\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'check' & fontawesome\"></font-awesome-icon> Udfør</button>\r\n        </div>\r\n    </form>\r\n</template>";

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
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _sumup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sumup */ "./src/sumup.ts");
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
    function CardError(api, sumup, router, appRouter) {
        this.api = api;
        this.sumup = sumup;
        this.router = router;
        this.appRouter = appRouter;
    }
    CardError.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.orderId = Number(params.orderId);
                        this.cause = params.cause;
                        this.message = params.message;
                        _a = this;
                        return [4 /*yield*/, this.api.getOrderById(this.orderId).transfer()];
                    case 1:
                        _a.order = _b.sent();
                        this.total = this.order.total;
                        return [2 /*return*/];
                }
            });
        });
    };
    CardError.prototype.cancelOrder = function () {
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
                        this.appRouter.navigateToRoute("sale");
                        return [2 /*return*/];
                }
            });
        });
    };
    CardError.prototype.doConfirm = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(method === "card")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sumup.redirectToApp(this.order)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.router.navigateToRoute(method, {
                            orderId: this.order.id
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CardError = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_0__["Api"], _sumup__WEBPACK_IMPORTED_MODULE_3__["Sumup"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["AppRouter"]])
    ], CardError);
    return CardError;
}());



/***/ }),

/***/ "checkout/card-error.html":
/*!**************************************!*\
  !*** ./src/checkout/card-error.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"../sale/pay-button\"></require>\r\n    <h1 class=\"text-danger\">Betalingsfejl</h1>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Total</h3>\r\n        <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Ordrenr.</h3>\r\n        <h3 class=\"col text-right\">${orderId}</h3>\r\n    </div>\r\n\r\n    <h4>${cause}</h4>\r\n    <p>${message}</p>\r\n\r\n    <div class=\"btn-group btn-block fixed-bottom\">\r\n        <button class=\"btn btn-danger btn-lg\" click.delegate=\"cancelOrder()\"><require from=\"@fortawesome/free-solid-svg-icons/faMoneyBillAlt\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCreditCard\"></require><require from=\"@fortawesome/free-solid-svg-icons/faFileInvoiceDollar\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('account')\"><font-awesome-icon icon.bind=\"'file-invoice-dollar' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('card')\"><font-awesome-icon icon.bind=\"'credit-card' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('cash')\"><font-awesome-icon icon.bind=\"'money-bill-alt' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n    </div>\r\n</template>";

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

module.exports = "<template>\r\n    <form submit.delegate=\"submit()\">\r\n        <div class=\"row\">\r\n            <h3 class=\"col text-muted\">Total</h3>\r\n            <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\" if.bind=\"amountDue.neq(total)\">\r\n            <h3 class=\"col text-muted\">Til betaling</h3>\r\n            <h3 class=\"col text-right\">${amountDue | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col text-muted\">Tilbage</h4>\r\n            <h4 class=\"col text-right\">${change | money} kr.</h4>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <h6 class=\"col-12 text-center text-muted\">Modtaget kontant</h6>\r\n            <h1 class=\"offset-2 col-8 text-center\">${received | money} kr.</h1>\r\n            <button class=\"col-2 btn btn-light\" click.delegate=\"backspace()\"><require from=\"@fortawesome/free-solid-svg-icons/faCheck\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBackspace\"></require><font-awesome-icon icon.bind=\"'backspace' & fontawesome\" size=\"2x\"></font-awesome-icon></button>\r\n        </div>\r\n        \r\n        <div class=\"fixed-bottom keypad\">\r\n            <div class=\"row no-gutters\">\r\n                <div repeat.for=\"number of [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0]\" class=\"col-4\">\r\n                    <button type=\"button\" class=\"btn btn-light keypad-btn\" click.delegate=\"pushKey(number)\">\r\n                        <h5>${number}</h5>\r\n                    </button>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <button type=\"button\" class=\"btn btn-light keypad-btn\" click.delegate=\"exactAmount()\">\r\n                        <h5>=</h5>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-block fixed-bottom\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg col-4\" click.delegate=\"cancel()\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n            <button type=\"submit\" class=\"btn btn-success btn-lg col-8\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'check' & fontawesome\"></font-awesome-icon> Udfør</button>\r\n        </div>\r\n    </form>\r\n</template>";

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
    { route: "orders/:orderId/pay/account", name: "account", moduleId: './account-payment' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmlsZUludm9pY2VEb2xsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1vbmV5QmlsbEFsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2FjY291bnQtcGF5bWVudC50cz9mMmM4Iiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXJkLWNhbGxiYWNrLnRzPzZjNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2NhcmQtZXJyb3IudHM/Y2NiMSIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FzaC1wYXltZW50LnRzPzQzZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JlY2VpcHQudHM/ODZjMiIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvYWNjb3VudC1wYXltZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9hY2NvdW50LXBheW1lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1lcnJvci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXNoLXBheW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2Nhc2gtcGF5bWVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yZWNlaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yZWNlaXB0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvcm91dGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNOO0FBQ3BCO0FBQ0E7QUFJN0I7SUFDSSxzQkFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDNUIsQ0FBQztJQUVLLGtDQUFXLEdBQWpCLFVBQWtCLE1BQWlFOzs7Ozs7d0JBQ3pFLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNqQyxNQUFNLEdBQUcsSUFBSSwwQ0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFFbEMsT0FBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsR0FBbEMsd0JBQWtDO3dCQUNsQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Z0NBQ2xELE1BQU0sRUFBRSxNQUFNO2dDQUNkLE1BQU0sRUFBRSxNQUFNO2dDQUNkLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7NkJBQzNDLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUpQLE9BQU8sR0FBRyxTQUlIO3dCQUViLHNCQUFPLElBQUksOERBQWUsQ0FBQyxTQUFTLEVBQUU7Z0NBQ2xDLE9BQU8s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LEtBQUssRUFBRSw2Q0FBNkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUE0QyxFQUFFO0NBQ3BJLENBQUM7QUFHRjtJQUFBO0lBSUEsQ0FBQztJQUhHLHdDQUFlLEdBQWYsVUFBZ0IsTUFBMkI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBSFEsY0FBYztRQUQxQixvRUFBVSxFQUFFO09BQ0EsY0FBYyxDQUkxQjtJQUFELHFCQUFDO0NBQUE7QUFKMEI7Ozs7Ozs7Ozs7OztBQ2QzQiwwTSIsImZpbGUiOiJjaGVja291dC5lNjJhZGQ3N2RmYWMwYTIyMTI0Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vVmlldywgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdFRvUm91dGUgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5Abm9WaWV3KClcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FyZENhbGxiYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShwYXJhbXM6IHsgb3JkZXJJZDogc3RyaW5nLCBhbW91bnQ6IHN0cmluZyB9ICYgU3VtVXBDYWxsYmFja1BhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IG9yZGVySWQgPSBOdW1iZXIocGFyYW1zLm9yZGVySWQpO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IG5ldyBCaWcocGFyYW1zLmFtb3VudCk7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXNbXCJzbXAtc3RhdHVzXCJdID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlUGF5bWVudChvcmRlcklkLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiY2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbk51bWJlcjogcGFyYW1zW1wic21wLXR4LWNvZGVcIl1cclxuICAgICAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RUb1JvdXRlKFwicmVjZWlwdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkOiBvcmRlcklkLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudElkOiBwYXltZW50LmlkLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdFRvUm91dGUoXCJjYXJkLWVycm9yXCIsIHtcclxuICAgICAgICAgICAgICAgIG9yZGVySWQ6IG9yZGVySWQsXHJcbiAgICAgICAgICAgICAgICBjYXVzZTogcGFyYW1zW1wic21wLWZhaWx1cmUtY2F1c2VcIl0sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBwYXJhbXNbXCJzbXAtbWVzc2FnZVwiXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudHlwZSBTdW1VcENhbGxiYWNrUGFyYW1zID0gU3VtVXBTdWNjZXNzQ2FsbGJhY2tQYXJhbXMgfCBTdW1VcEZhaWx1cmVDYWxsYmFja1BhcmFtcztcclxuXHJcbmludGVyZmFjZSBTdW1VcFN1Y2Nlc3NDYWxsYmFja1BhcmFtcyB7XHJcbiAgICBcInNtcC1zdGF0dXNcIjogXCJzdWNjZXNzXCI7XHJcbiAgICBcInNtcC1tZXNzYWdlXCI6IHN0cmluZztcclxuICAgIFwic21wLXJlY2VpcHQtc2VudFwiOiBcInRydWVcIiB8IFwiZmFsc2VcIjtcclxuICAgIFwic21wLXR4LWNvZGVcIjogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3VtVXBGYWlsdXJlQ2FsbGJhY2tQYXJhbXMge1xyXG4gICAgXCJzbXAtc3RhdHVzXCI6IFwiZmFpbGVkXCI7XHJcbiAgICBcInNtcC1mYWlsdXJlLWNhdXNlXCI6IHN0cmluZztcclxuICAgIFwic21wLW1lc3NhZ2VcIjogc3RyaW5nO1xyXG4gICAgXCJzbXAtcmVjZWlwdC1zZW50XCI6IFwidHJ1ZVwiIHwgXCJmYWxzZVwiO1xyXG4gICAgXCJzbXAtdHgtY29kZVwiOiBzdHJpbmc7XHJcbn0iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2JhY2tzcGFjZSc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjU1YSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTU3NiA2NEgyMDUuMjZBNjMuOTcgNjMuOTcgMCAwIDAgMTYwIDgyLjc1TDkuMzcgMjMzLjM3Yy0xMi41IDEyLjUtMTIuNSAzMi43NiAwIDQ1LjI1TDE2MCA0MjkuMjVjMTIgMTIgMjguMjggMTguNzUgNDUuMjUgMTguNzVINTc2YzM1LjM1IDAgNjQtMjguNjUgNjQtNjRWMTI4YzAtMzUuMzUtMjguNjUtNjQtNjQtNjR6bS04NC42OSAyNTQuMDZjNi4yNSA2LjI1IDYuMjUgMTYuMzggMCAyMi42M2wtMjIuNjIgMjIuNjJjLTYuMjUgNi4yNS0xNi4zOCA2LjI1LTIyLjYzIDBMMzg0IDMwMS4yNWwtNjIuMDYgNjIuMDZjLTYuMjUgNi4yNS0xNi4zOCA2LjI1LTIyLjYzIDBsLTIyLjYyLTIyLjYyYy02LjI1LTYuMjUtNi4yNS0xNi4zOCAwLTIyLjYzTDMzOC43NSAyNTZsLTYyLjA2LTYyLjA2Yy02LjI1LTYuMjUtNi4yNS0xNi4zOCAwLTIyLjYzbDIyLjYyLTIyLjYyYzYuMjUtNi4yNSAxNi4zOC02LjI1IDIyLjYzIDBMMzg0IDIxMC43NWw2Mi4wNi02Mi4wNmM2LjI1LTYuMjUgMTYuMzgtNi4yNSAyMi42MyAwbDIyLjYyIDIyLjYyYzYuMjUgNi4yNSA2LjI1IDE2LjM4IDAgMjIuNjNMNDI5LjI1IDI1Nmw2Mi4wNiA2Mi4wNnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFCYWNrc3BhY2UgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnY2hlY2snO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGMnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDaGVjayA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjcmVkaXQtY2FyZCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA5ZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTAgNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQ4MGMyNi41IDAgNDgtMjEuNSA0OC00OFYyNTZIMHYxNzZ6bTE5Mi02OGMwLTYuNiA1LjQtMTIgMTItMTJoMTM2YzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJIMjA0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0tMTI4IDBjMC02LjYgNS40LTEyIDEyLTEyaDcyYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTU3NiA4MHY0OEgwVjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDcmVkaXRDYXJkID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2ZpbGUtaW52b2ljZS1kb2xsYXInO1xudmFyIHdpZHRoID0gMzg0O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2Y1NzEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNzcgMTA1TDI3OS4xIDdjLTQuNS00LjUtMTAuNi03LTE3LTdIMjU2djEyOGgxMjh2LTYuMWMwLTYuMy0yLjUtMTIuNC03LTE2Ljl6bS0xNTMgMzFWMEgyNEMxMC43IDAgMCAxMC43IDAgMjR2NDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYxNjBIMjQ4Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNHpNNjQgNzJjMC00LjQyIDMuNTgtOCA4LThoODBjNC40MiAwIDggMy41OCA4IDh2MTZjMCA0LjQyLTMuNTggOC04IDhINzJjLTQuNDIgMC04LTMuNTgtOC04Vjcyem0wIDgwdi0xNmMwLTQuNDIgMy41OC04IDgtOGg4MGM0LjQyIDAgOCAzLjU4IDggOHYxNmMwIDQuNDItMy41OCA4LTggOEg3MmMtNC40MiAwLTgtMy41OC04LTh6bTE0NCAyNjMuODhWNDQwYzAgNC40Mi0zLjU4IDgtOCA4aC0xNmMtNC40MiAwLTgtMy41OC04LTh2LTI0LjI5Yy0xMS4yOS0uNTgtMjIuMjctNC41Mi0zMS4zNy0xMS4zNS0zLjktMi45My00LjEtOC43Ny0uNTctMTIuMTRsMTEuNzUtMTEuMjFjMi43Ny0yLjY0IDYuODktMi43NiAxMC4xMy0uNzMgMy44NyAyLjQyIDguMjYgMy43MiAxMi44MiAzLjcyaDI4LjExYzYuNSAwIDExLjgtNS45MiAxMS44LTEzLjE5IDAtNS45NS0zLjYxLTExLjE5LTguNzctMTIuNzNsLTQ1LTEzLjVjLTE4LjU5LTUuNTgtMzEuNTgtMjMuNDItMzEuNTgtNDMuMzkgMC0yNC41MiAxOS4wNS00NC40NCA0Mi42Ny00NS4wN1YyMzJjMC00LjQyIDMuNTgtOCA4LThoMTZjNC40MiAwIDggMy41OCA4IDh2MjQuMjljMTEuMjkuNTggMjIuMjcgNC41MSAzMS4zNyAxMS4zNSAzLjkgMi45MyA0LjEgOC43Ny41NyAxMi4xNGwtMTEuNzUgMTEuMjFjLTIuNzcgMi42NC02Ljg5IDIuNzYtMTAuMTMuNzMtMy44Ny0yLjQzLTguMjYtMy43Mi0xMi44Mi0zLjcyaC0yOC4xMWMtNi41IDAtMTEuOCA1LjkyLTExLjggMTMuMTkgMCA1Ljk1IDMuNjEgMTEuMTkgOC43NyAxMi43M2w0NSAxMy41YzE4LjU5IDUuNTggMzEuNTggMjMuNDIgMzEuNTggNDMuMzkgMCAyNC41My0xOS4wNSA0NC40NC00Mi42NyA0NS4wN3onO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFGaWxlSW52b2ljZURvbGxhciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdtb25leS1iaWxsLWFsdCc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjNkMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM1MiAyODhoLTE2di04OGMwLTQuNDItMy41OC04LTgtOGgtMTMuNThjLTQuNzQgMC05LjM3IDEuNC0xMy4zMSA0LjAzbC0xNS4zMyAxMC4yMmE3Ljk5NCA3Ljk5NCAwIDAgMC0yLjIyIDExLjA5bDguODggMTMuMzFhNy45OTQgNy45OTQgMCAwIDAgMTEuMDkgMi4yMmwuNDctLjMxVjI4OGgtMTZjLTQuNDIgMC04IDMuNTgtOCA4djE2YzAgNC40MiAzLjU4IDggOCA4aDY0YzQuNDIgMCA4LTMuNTggOC04di0xNmMwLTQuNDItMy41OC04LTgtOHpNNjA4IDY0SDMyQzE0LjMzIDY0IDAgNzguMzMgMCA5NnYzMjBjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg1NzZjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMlY5NmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyek00OCA0MDB2LTY0YzM1LjM1IDAgNjQgMjguNjUgNjQgNjRINDh6bTAtMjI0di02NGg2NGMwIDM1LjM1LTI4LjY1IDY0LTY0IDY0em0yNzIgMTkyYy01My4wMiAwLTk2LTUwLjE1LTk2LTExMiAwLTYxLjg2IDQyLjk4LTExMiA5Ni0xMTJzOTYgNTAuMTQgOTYgMTEyYzAgNjEuODctNDMgMTEyLTk2IDExMnptMjcyIDMyaC02NGMwLTM1LjM1IDI4LjY1LTY0IDY0LTY0djY0em0wLTIyNGMtMzUuMzUgMC02NC0yOC42NS02NC02NGg2NHY2NHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFNb25leUJpbGxBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndGltZXMnO1xudmFyIHdpZHRoID0gMzUyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFUaW1lcyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2FjY291bnQtcGF5bWVudC50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2NhcmQtY2FsbGJhY2sudHNcIikpO1xuXHR9LCBcImNoZWNrb3V0XCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jYXJkLWVycm9yLnRzXCIpKTtcblx0fSwgXCJjaGVja291dFwiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY2FzaC1wYXltZW50LnRzXCIpKTtcblx0fSwgXCJjaGVja291dFwiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vcmVjZWlwdC50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwiaW1wb3J0IHsgQmlnLCBSb3VuZGluZ01vZGUgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QsIG9ic2VydmFibGUsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4uL2FwaS9hY2NvdW50XCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vYXBpL29yZGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBEaWdpdCwgRU5URVIsIEVTQ0FQRSwgQ09NTUEsIEJBQ0tTUEFDRSB9IGZyb20gXCIuLi9rZXlzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50UGF5bWVudCB7XHJcbiAgICBwcml2YXRlIG9yZGVyITogT3JkZXI7XHJcbiAgICBwcml2YXRlIGFjY291bnRzITogQWNjb3VudFtdO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50PzogQWNjb3VudDtcclxuICAgIHRvdGFsITogQmlnO1xyXG4gICAgQG9ic2VydmFibGUoKSBhY2NvdW50TnVtYmVyITogQmlnO1xyXG5cclxuICAgIEBjb21wdXRlZEZyb20obmFtZW9mPEFjY291bnRQYXltZW50Pih4ID0+IHguYWNjb3VudCkpXHJcbiAgICBnZXQgYWNjb3VudE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50Lm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBjb21wdXRlZEZyb20obmFtZW9mPEFjY291bnRQYXltZW50Pih4ID0+IHguYWNjb3VudCkpXHJcbiAgICBnZXQgcmVtYWluaW5nQ3JlZGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudC5yZW1haW5pbmdDcmVkaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBjb21wdXRlZEZyb20obmFtZW9mPEFjY291bnRQYXltZW50Pih4ID0+IHguYWNjb3VudCkpXHJcbiAgICBnZXQgcmVtYWluaW5nQ3JlZGl0Q2xhc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY2NvdW50LnJlbWFpbmluZ0NyZWRpdC5ndGUodGhpcy50b3RhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRleHQtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGV4dC1kYW5nZXJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnQgJiYgdGhpcy5yZW1haW5pbmdDcmVkaXQgJiYgdGhpcy5yZW1haW5pbmdDcmVkaXQuZ3RlKHRoaXMudG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBvcmRlcklkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIGNvbnN0IG9yZGVySWQgPSBOdW1iZXIocGFyYW1zLm9yZGVySWQpO1xyXG4gICAgICAgIHRoaXMub3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5nZXRPcmRlckJ5SWQob3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWNjb3VudHMoKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5vcmRlci50b3RhbDtcclxuICAgICAgICB0aGlzLmFjY291bnROdW1iZXIgPSBuZXcgQmlnKDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPj0gXCIwXCIgJiYgZXZlbnQua2V5IDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gTnVtYmVyKGV2ZW50LmtleSkgYXMgRGlnaXQ7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShkaWdpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQ09NTUEpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KFwiMDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQkFDS1NQQUNFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3NwYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRU5URVIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50TnVtYmVyID0gdGhpcy5hY2NvdW50TnVtYmVyLmRpdigxMCkucm91bmQoMCwgUm91bmRpbmdNb2RlLlJvdW5kRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEtleSh2YWx1ZTogRGlnaXQgfCBcIjAwXCIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiMDBcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROdW1iZXIgPSB0aGlzLmFjY291bnROdW1iZXIubXVsKDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnROdW1iZXIgPSB0aGlzLmFjY291bnROdW1iZXIubXVsKDEwKS5hZGQobmV3IEJpZyh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlT3JkZXIodGhpcy5vcmRlci5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TdWJtaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlUGF5bWVudCh0aGlzLm9yZGVyLmlkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgIGFtb3VudDogdGhpcy50b3RhbCxcclxuICAgICAgICAgICAgYWNjb3VudElkOiB0aGlzLmFjY291bnQuaWRcclxuICAgICAgICB9KS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJyZWNlaXB0XCIsIHtcclxuICAgICAgICAgICAgb3JkZXJJZDogcGF5bWVudC5vcmRlcklkLFxyXG4gICAgICAgICAgICBwYXltZW50SWQ6IHBheW1lbnQuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWNjb3VudE51bWJlckNoYW5nZWQoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQodGhpcy5hY2NvdW50TnVtYmVyLnRvRml4ZWQoMCkpO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IHRoaXMuYWNjb3VudHMuZmluZCh4ID0+IHgubnVtYmVyID09PSBudW1iZXIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPlRvdGFsPC9oMz5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke3RvdGFsIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXIgdGV4dC1tdXRlZFxcXCI+S29udG9udW1tZXI8L2g2PlxcclxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwib2Zmc2V0LTIgY29sLTggdGV4dC1jZW50ZXJcXFwiPiR7YWNjb3VudE51bWJlcn08L2gxPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNvbC0yIGJ0biBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJiYWNrc3BhY2UoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2tcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUJhY2tzcGFjZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidiYWNrc3BhY2UnICYgZm9udGF3ZXNvbWVcXFwiIHNpemU9XFxcIjJ4XFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj4ke2FjY291bnROYW1lIHx8ICdJa2tlIGZ1bmRldCd9PC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5LcmVkaXQ8L2g0PlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHQgJHtyZW1haW5pbmdDcmVkaXRDbGFzc31cXFwiPiR7cmVtYWluaW5nQ3JlZGl0IHwgbW9uZXl9IGtyLjwvaDQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZml4ZWQtYm90dG9tIGtleXBhZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG5vLWd1dHRlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcIm51bWJlciBvZiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgJzAwJywgMF1cXFwiIGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJwdXNoS2V5KG51bWJlcilcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4ke251bWJlcn08L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tbGcgY29sLTRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjYW5jZWwoKVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RpbWVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBGb3J0cnlkPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnIGNvbC04XFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuU3VibWl0XFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInY2hlY2snICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IFVkZsO4cjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIsIFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBTdW11cCB9IGZyb20gXCIuLi9zdW11cFwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FyZEVycm9yIHtcclxuICAgIHByaXZhdGUgb3JkZXIhOiBPcmRlcjtcclxuICAgIG9yZGVySWQhOiBudW1iZXI7XHJcbiAgICBjYXVzZSE6IHN0cmluZztcclxuICAgIG1lc3NhZ2UhOiBzdHJpbmc7XHJcbiAgICB0b3RhbCE6IEJpZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHN1bXVwOiBTdW11cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhcHBSb3V0ZXI6IEFwcFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBvcmRlcklkOiBzdHJpbmcsIGNhdXNlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5vcmRlcklkID0gTnVtYmVyKHBhcmFtcy5vcmRlcklkKTtcclxuICAgICAgICB0aGlzLmNhdXNlID0gcGFyYW1zLmNhdXNlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm9yZGVyID0gYXdhaXQgdGhpcy5hcGkuZ2V0T3JkZXJCeUlkKHRoaXMub3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5vcmRlci50b3RhbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWxPcmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3JkZXJJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZU9yZGVyKHRoaXMub3JkZXJJZCkuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwUm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcInNhbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZG9Db25maXJtKG1ldGhvZDogXCJjYXJkXCIgfCBcImNhc2hcIiB8IFwiYWNjb3VudFwiKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJjYXJkXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdW11cC5yZWRpcmVjdFRvQXBwKHRoaXMub3JkZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShtZXRob2QsIHtcclxuICAgICAgICAgICAgICAgIG9yZGVySWQ6IHRoaXMub3JkZXIuaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJlcXVpcmUgZnJvbT1cXFwiLi4vc2FsZS9wYXktYnV0dG9uXFxcIj48L3JlcXVpcmU+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPkJldGFsaW5nc2Zlamw8L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPk9yZHJlbnIuPC9oMz5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7b3JkZXJJZH08L2gzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGg0PiR7Y2F1c2V9PC9oND5cXHJcXG4gICAgPHA+JHttZXNzYWdlfTwvcD5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiY2FuY2VsT3JkZXIoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTW9uZXlCaWxsQWx0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZpbGVJbnZvaWNlRG9sbGFyXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEZvcnRyeWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkb0NvbmZpcm0oJ2FjY291bnQnKVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2ZpbGUtaW52b2ljZS1kb2xsYXInICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnY2FyZCcpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInY3JlZGl0LWNhcmQnICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnY2FzaCcpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInbW9uZXktYmlsbC1hbHQnICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCBCaWcsIHsgUm91bmRpbmdNb2RlIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9hcGkvb3JkZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IERpZ2l0LCBFTlRFUiwgRVNDQVBFLCBDT01NQSwgQkFDS1NQQUNFIH0gZnJvbSBcIi4uL2tleXNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENhc2hQYXltZW50IHtcclxuICAgIHByaXZhdGUgb3JkZXIhOiBPcmRlcjtcclxuICAgIHRvdGFsITogQmlnO1xyXG4gICAgYW1vdW50RHVlITogQmlnO1xyXG4gICAgcmVjZWl2ZWQhOiBCaWc7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShuYW1lb2Y8Q2FzaFBheW1lbnQ+KHggPT4geC5yZWNlaXZlZCkpXHJcbiAgICBnZXQgY2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlY2VpdmVkLmd0ZSh0aGlzLmFtb3VudER1ZSkgPyB0aGlzLnJlY2VpdmVkLm1pbnVzKHRoaXMuYW1vdW50RHVlKSA6IG5ldyBCaWcoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShuYW1lb2Y8Q2FzaFBheW1lbnQ+KHggPT4geC5yZWNlaXZlZCkpXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudER1ZS5ndCgwKSAmJiB0aGlzLnJlY2VpdmVkLmd0ZSh0aGlzLmFtb3VudER1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7b3JkZXJJZDogc3RyaW5nfSkge1xyXG4gICAgICAgIGNvbnN0IG9yZGVySWQgPSBOdW1iZXIocGFyYW1zLm9yZGVySWQpO1xyXG4gICAgICAgIHRoaXMub3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5nZXRPcmRlckJ5SWQob3JkZXJJZCkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMub3JkZXIudG90YWw7XHJcbiAgICAgICAgdGhpcy5hbW91bnREdWUgPSB0aGlzLm9yZGVyLmFtb3VudER1ZTtcclxuICAgICAgICB0aGlzLnJlY2VpdmVkID0gbmV3IEJpZygwKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID49IFwiMFwiICYmIGV2ZW50LmtleSA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkaWdpdCA9IE51bWJlcihldmVudC5rZXkpIGFzIERpZ2l0O1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hLZXkoZGlnaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IENPTU1BKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShcIjAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IEJBQ0tTUEFDRSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tzcGFjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IEVTQ0FQRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja3NwYWNlKCkge1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSB0aGlzLnJlY2VpdmVkLmRpdigxMCkucm91bmQoMiwgUm91bmRpbmdNb2RlLlJvdW5kRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEtleSh2YWx1ZTogRGlnaXQgfCBcIjAwXCIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiMDBcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVkID0gdGhpcy5yZWNlaXZlZC5tdWwoMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWQgPSB0aGlzLnJlY2VpdmVkLm11bCgxMCkuYWRkKG5ldyBCaWcodmFsdWUpLmRpdigxMDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhhY3RBbW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMuYW1vdW50RHVlLnBsdXMoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuY2VsKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZU9yZGVyKHRoaXMub3JkZXIuaWQpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIi9zYWxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU3VibWl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVQYXltZW50KHRoaXMub3JkZXIuaWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcImNhc2hcIixcclxuICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudER1ZVxyXG4gICAgICAgIH0pLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcInJlY2VpcHRcIiwge1xyXG4gICAgICAgICAgICBvcmRlcklkOiBwYXltZW50Lm9yZGVySWQsXHJcbiAgICAgICAgICAgIHBheW1lbnRJZDogcGF5bWVudC5pZCxcclxuICAgICAgICAgICAgY2hhbmdlOiB0aGlzLnJlY2VpdmVkLm1pbnVzKHBheW1lbnQuYW1vdW50KS50b0ZpeGVkKDIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7dG90YWwgfCBtb25leX0ga3IuPC9oMz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBpZi5iaW5kPVxcXCJhbW91bnREdWUubmVxKHRvdGFsKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsIGJldGFsaW5nPC9oMz5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke2Ftb3VudER1ZSB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPlRpbGJhZ2U8L2g0PlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7Y2hhbmdlIHwgbW9uZXl9IGtyLjwvaDQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXIgdGV4dC1tdXRlZFxcXCI+TW9kdGFnZXQga29udGFudDwvaDY+XFxyXFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJvZmZzZXQtMiBjb2wtOCB0ZXh0LWNlbnRlclxcXCI+JHtyZWNlaXZlZCB8IG1vbmV5fSBrci48L2gxPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNvbC0yIGJ0biBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJiYWNrc3BhY2UoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2tcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUJhY2tzcGFjZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidiYWNrc3BhY2UnICYgZm9udGF3ZXNvbWVcXFwiIHNpemU9XFxcIjJ4XFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpeGVkLWJvdHRvbSBrZXlwYWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBuby1ndXR0ZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiByZXBlYXQuZm9yPVxcXCJudW1iZXIgb2YgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksICcwMCcsIDBdXFxcIiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0IGtleXBhZC1idG5cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJwdXNoS2V5KG51bWJlcilcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4ke251bWJlcn08L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQga2V5cGFkLWJ0blxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImV4YWN0QW1vdW50KClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT49PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnIGNvbC00XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiY2FuY2VsKClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aW1lcycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gRm9ydHJ5ZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZyBjb2wtOFxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NoZWNrJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBVZGbDuHI8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tIFwiLi4vYXBpL3BheW1lbnRcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuaW50ZXJmYWNlIFBhcmFtcyB7IG9yZGVySWQ6IHN0cmluZywgcGF5bWVudElkOiBzdHJpbmcsIGNoYW5nZT86IHN0cmluZyB9O1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FzaFJlY2VpcHQge1xyXG4gICAgcHJpdmF0ZSBwYXltZW50ITogUGF5bWVudFxyXG4gICAgb3JkZXJJZCE6IG51bWJlcjtcclxuICAgIHRvdGFsITogQmlnO1xyXG4gICAgY2hhbmdlPzogQmlnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKHBhcmFtczogUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5vcmRlcklkID0gTnVtYmVyKHBhcmFtcy5vcmRlcklkKTtcclxuICAgICAgICBjb25zdCBwYXltZW50SWQgPSBOdW1iZXIocGFyYW1zLnBheW1lbnRJZCk7XHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5nZXRPcmRlckJ5SWQodGhpcy5vcmRlcklkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBvcmRlci5wYXltZW50cy5maW5kKHggPT4geC5pZCA9PT0gcGF5bWVudElkKTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXltZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGF5bWVudCA9IHBheW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiBQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5wYXltZW50LmFtb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy5jaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgQmlnKHBhcmFtcy5jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCIvc2FsZVwiKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkt2aXR0ZXJpbmc8L2gxPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+T3JkcmVuci48L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHtvcmRlcklkfTwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8aHI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5Ub3RhbDwvaDM+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke3RvdGFsIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9XFxcImNoYW5nZVxcXCI+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5UaWxiYWdlPC9oND5cXHJcXG4gICAgICAgIDxoNCBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7Y2hhbmdlIHwgbW9uZXl9IGtyLjwvaDQ+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNvbXBsZXRlKClcXFwiPlVkZsO4cnQ8L2J1dHRvbj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJDb25maWd1cmF0aW9uLCBSb3V0ZXIsIE5hdmlnYXRpb25JbnN0cnVjdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLXBhbFwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBbXHJcbiAgICB7IHJvdXRlOiBcIm9yZGVycy86b3JkZXJJZC9wYXkvY2FyZFwiLCBuYW1lOiBcImNhcmRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Nhc2gtcGF5bWVudFwiLCBcImNoZWNrb3V0XCIpIH0sIC8vIFRPRE9cclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9jYXJkLWNhbGxiYWNrXCIsIG5hbWU6IFwiY2FyZC1jYWxsYmFja1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY2FyZC1jYWxsYmFja1wiLCBcImNoZWNrb3V0XCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcIm9yZGVycy86b3JkZXJJZC9wYXkvY2FyZC1lcnJvclwiLCBuYW1lOiBcImNhcmQtZXJyb3JcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcmQtZXJyb3JcIiwgXCJjaGVja291dFwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2Nhc2hcIiwgbmFtZTogXCJjYXNoXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXNoLXBheW1lbnRcIiwgXCJjaGVja291dFwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2FjY291bnRcIiwgbmFtZTogXCJhY2NvdW50XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9hY2NvdW50LXBheW1lbnRcIiwgXCJjaGVja291dFwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5bWVudHMvOnBheW1lbnRJZC9yZWNlaXB0XCIsIG5hbWU6IFwicmVjZWlwdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vcmVjZWlwdFwiLCBcImNoZWNrb3V0XCIpIH0sXHJcbl07XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBDaGVja291dFJvdXRlciB7XHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmtcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6IDU2cHhcXFwiPjwvbmF2PlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==