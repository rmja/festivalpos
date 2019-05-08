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

/***/ "./src/sumup.ts":
/*!**********************!*\
  !*** ./src/sumup.ts ***!
  \**********************/
/*! exports provided: Sumup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sumup", function() { return Sumup; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api/index.ts");
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


var Sumup = /** @class */ (function () {
    function Sumup(api) {
        this.api = api;
    }
    Sumup.prototype.redirectToApp = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var pos, affiliateKey, appId, total, title, callbackUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getPointOfSale(order.pointOfSaleId).transfer()];
                    case 1:
                        pos = _a.sent();
                        affiliateKey = "7ca84f17-84a5-4140-8df6-6ebeed8540fc";
                        appId = "com.rmja.festivalpos";
                        total = order.amountDue.toFixed(2);
                        title = "Kajfest " + pos.name;
                        callbackUrl = window.location.origin + "/#/checkout/orders/" + order.id + "/pay/card-callback?amount=" + order.amountDue;
                        if (confirm("Debug?")) {
                            if (confirm("Success?")) {
                                window.location.href = callbackUrl + "&smp-status=success&smp-tx-code=123abc";
                            }
                            else {
                                window.location.href = callbackUrl + "&smp-status=failed&smp-failure-cause=testfejl&smp-message=fejlbesked&smp-tx-code=123abc";
                            }
                        }
                        else {
                            window.location.href = "sumupmerchant://pay/1.0?affiliate-key=" + affiliateKey + "&app-id=" + appId + "&total=" + total + "&currency=DKK&title=" + title + "&callback=" + callbackUrl;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Sumup = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], Sumup);
    return Sumup;
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

/***/ "@fortawesome/free-solid-svg-icons/faCheckCircle":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCheckCircle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'check-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f058';
var svgPathData = 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z';

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

exports.faCheckCircle = exports.definition;
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

/***/ "@fortawesome/free-solid-svg-icons/faTimesCircle":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimesCircle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f057';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z';

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

exports.faTimesCircle = exports.definition;
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

module.exports = "<template>\r\n    <form submit.delegate=\"submit()\">\r\n        <div class=\"row\">\r\n            <h3 class=\"col text-muted\">Total</h3>\r\n            <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h6 class=\"col-12 text-center text-muted\">Kontonummer</h6>\r\n            <h1 class=\"offset-2 col-8 text-center\">${accountNumber}</h1>\r\n            <button class=\"col-2 btn btn-light\" click.delegate=\"backspace()\"><require from=\"@fortawesome/free-solid-svg-icons/faCheck\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBackspace\"></require><font-awesome-icon icon.bind=\"'backspace' & fontawesome\" size=\"2x\"></font-awesome-icon></button>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col-12 text-center\">${accountName || 'Ikke fundet'}</h4>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col text-muted\">Kredit</h4>\r\n            <h4 class=\"col text-right ${remainingCreditClass}\">${remainingCredit | money} kr.</h4>\r\n        </div>\r\n        \r\n        <div class=\"keypad row no-gutters\">\r\n            <div repeat.for=\"number of [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0]\" class=\"col-4\">\r\n                <button type=\"button\" class=\"btn btn-light\" click.delegate=\"pushKey(number)\">\r\n                    <h5>${number}</h5>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-block fixed-bottom\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg col-4\" click.delegate=\"cancel()\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n            <button type=\"submit\" class=\"btn btn-success btn-lg col-8\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'check' & fontawesome\"></font-awesome-icon> Udfør</button>\r\n        </div>\r\n    </form>\r\n</template>";

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

module.exports = "<template>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Total</h3>\r\n        <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Ordrenr.</h3>\r\n        <h3 class=\"col text-right\">${orderId}</h3>\r\n    </div>\r\n\r\n    <div class=\"text-center\">\r\n        <require from=\"@fortawesome/free-solid-svg-icons/faMoneyBillAlt\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCreditCard\"></require><require from=\"@fortawesome/free-solid-svg-icons/faFileInvoiceDollar\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimesCircle\"></require><font-awesome-icon icon.bind=\"'times-circle' & fontawesome\" class=\"text-danger\" size=\"8x\"></font-awesome-icon>\r\n    </div>\r\n\r\n    <h4>${cause}</h4>\r\n    <p>${message}</p>\r\n\r\n    <div class=\"btn-group btn-block fixed-bottom\">\r\n        <button class=\"btn btn-danger btn-lg\" click.delegate=\"cancelOrder()\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('account')\"><font-awesome-icon icon.bind=\"'file-invoice-dollar' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('card')\"><font-awesome-icon icon.bind=\"'credit-card' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('cash')\"><font-awesome-icon icon.bind=\"'money-bill-alt' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n    </div>\r\n</template>";

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

module.exports = "<template>\r\n    <form submit.delegate=\"submit()\">\r\n        <div class=\"row\">\r\n            <h3 class=\"col text-muted\">Total</h3>\r\n            <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\" if.bind=\"amountDue.neq(total)\">\r\n            <h3 class=\"col text-muted\">Til betaling</h3>\r\n            <h3 class=\"col text-right\">${amountDue | money} kr.</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <h4 class=\"col text-muted\">Tilbage</h4>\r\n            <h4 class=\"col text-right\">${change | money} kr.</h4>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <h6 class=\"col-12 text-center text-muted\">Modtaget kontant</h6>\r\n            <h1 class=\"offset-2 col-8 text-center\">${received | money} kr.</h1>\r\n            <button class=\"col-2 btn btn-light\" click.delegate=\"backspace()\"><require from=\"@fortawesome/free-solid-svg-icons/faCheck\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faBackspace\"></require><font-awesome-icon icon.bind=\"'backspace' & fontawesome\" size=\"2x\"></font-awesome-icon></button>\r\n        </div>\r\n        \r\n        <div class=\"keypad row no-gutters\">\r\n            <div repeat.for=\"number of [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0]\" class=\"col-4\">\r\n                <button type=\"button\" class=\"btn btn-light\" click.delegate=\"pushKey(number)\">\r\n                    <h5>${number}</h5>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <button type=\"button\" class=\"btn btn-light\" click.delegate=\"exactAmount()\">\r\n                    <h5>=</h5>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-block fixed-bottom\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg col-4\" click.delegate=\"cancel()\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fortryd</button>\r\n            <button type=\"submit\" class=\"btn btn-success btn-lg col-8\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'check' & fontawesome\"></font-awesome-icon> Udfør</button>\r\n        </div>\r\n    </form>\r\n</template>";

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Ordrenr.</h3>\r\n        <h3 class=\"col text-right\">${orderId}</h3>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <h3 class=\"col text-muted\">Total</h3>\r\n        <h3 class=\"col text-right\">${total | money} kr.</h3>\r\n    </div>\r\n    <div class=\"row\" if.bind=\"change\">\r\n        <h4 class=\"col text-muted\">Tilbage</h4>\r\n        <h4 class=\"col text-right\">${change | money} kr.</h4>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <require from=\"@fortawesome/free-solid-svg-icons/faCheckCircle\"></require><font-awesome-icon icon.bind=\"'check-circle' & fontawesome\" class=\"text-success\" size=\"8x\"></font-awesome-icon>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block fixed-bottom\" click.delegate=\"complete()\">Udført</button>\r\n</template>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VtdXAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUJhY2tzcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGaWxlSW52b2ljZURvbGxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTW9uZXlCaWxsQWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNDaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2FjY291bnQtcGF5bWVudC50cz9mMmM4Iiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXJkLWNhbGxiYWNrLnRzPzZjNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2NhcmQtZXJyb3IudHM/Y2NiMSIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FzaC1wYXltZW50LnRzPzQzZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JlY2VpcHQudHM/ODZjMiIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvYWNjb3VudC1wYXltZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9hY2NvdW50LXBheW1lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvY2FyZC1lcnJvci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9jYXNoLXBheW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L2Nhc2gtcGF5bWVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yZWNlaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jaGVja291dC9yZWNlaXB0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrb3V0L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tvdXQvcm91dGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNOO0FBQ3BCO0FBQ0E7QUFJN0I7SUFDSSxzQkFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDNUIsQ0FBQztJQUVLLGtDQUFXLEdBQWpCLFVBQWtCLE1BQWlFOzs7Ozs7d0JBQ3pFLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNqQyxNQUFNLEdBQUcsSUFBSSwwQ0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFFbEMsT0FBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsR0FBbEMsd0JBQWtDO3dCQUNsQixxQkFBTSxJQUFJLENB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7OztBQzVCQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyw0RkFBc0U7QUFDbkYsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsb0lBQW9FO0FBQ2pGLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLGtGQUFpRTtBQUM5RSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxzRkFBbUU7QUFDaEYsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsNEVBQThEO0FBQzNFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQzhCO0FBRTVDO0FBRVc7QUFDeUI7QUFHakU7SUFxQ0ksd0JBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQS9CRCxzQkFBSSx1Q0FBVzthQUFmO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDNUI7UUFDTCxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFlO2FBQW5CO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7YUFDdkM7UUFDTCxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGdEQUFvQjthQUF4QjtZQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzlDLE9BQU8sY0FBYyxDQUFDO2lCQUN6QjtxQkFDSTtvQkFDRCxPQUFPLGFBQWEsQ0FBQztpQkFDeEI7YUFDSjtRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RixDQUFDOzs7T0FBQTtJQU1LLGlDQUFRLEdBQWQsVUFBZSxNQUEyQjs7Ozs7O3dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdkMsU0FBSTt3QkFBUyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxHQUFLLEtBQUssR0FBRyxTQUErQyxDQUFDO3dCQUM3RCxTQUFJO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFOzt3QkFBMUQsR0FBSyxRQUFRLEdBQUcsU0FBMEMsQ0FBQzt3QkFFM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDBDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRWhDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztLQUNsRDtJQUVELG1DQUFVLEdBQVY7UUFDSSxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU8sOEJBQUssR0FBYixVQUFjLEtBQW9CO1FBQzlCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDdEMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQVUsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO2FBQ0ksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLDJDQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjthQUNJLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSywrQ0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjthQUNJLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSywyQ0FBSyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO2FBQ0ksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLDRDQUFNLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQXlCLENBQUM7SUFDckYsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxLQUFtQjtRQUN2QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRDthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSwwQ0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRUssK0JBQU0sR0FBWjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs7d0JBQXpDLFNBQXlDLENBQUM7d0JBRTFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztLQUNqQztJQUVLLCtCQUFNLEdBQVo7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs0QkFDakIsc0JBQU87eUJBQ1Y7d0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ2YsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO3lCQUNyQjt3QkFFZSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQ0FDeEQsTUFBTSxFQUFFLFNBQVM7Z0NBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSztnQ0FDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs2QkFDN0IsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBSlAsT0FBTyxHQUFHLFNBSUg7d0JBRWIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFOzRCQUNuQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87NEJBQ3hCLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTt5QkFDeEIsQ0FBQyxDQUFDOzs7OztLQUNOO0lBRVMsNkNBQW9CLEdBQTlCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBakhhO1FBQWIsb0VBQVUsRUFBRTtrQ0FBaUIsMENBQUc7eURBQUM7SUFHbEM7UUFEQyxzRUFBWSxXQUF3Qzs7O3FEQUtwRDtJQUdEO1FBREMsc0VBQVksV0FBd0M7Ozt5REFLcEQ7SUFHRDtRQURDLHNFQUFZLFdBQXdDOzs7OERBVXBEO0lBL0JRLGNBQWM7UUFEMUIsb0VBQVUsRUFBRTt5Q0FzQ2dCLHdDQUFHLEVBQWtCLHFEQUFNO09BckMzQyxjQUFjLENBdUgxQjtJQUFELHFCQUFDO0NBQUE7QUF2SDBCOzs7Ozs7Ozs7Ozs7QUNUM0IsNE1BQTRNLGNBQWMsaU1BQWlNLGNBQWMsd2ZBQXdmLDZCQUE2QiwySkFBMkoscUJBQXFCLEtBQUssd0JBQXdCLGdVQUFnVSxPQUFPLHdrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDcjdDO0FBQ2tCO0FBRUk7QUFDbEI7QUFHakM7SUFPSSxtQkFBb0IsR0FBUSxFQUFVLEtBQVksRUFBVSxNQUFjLEVBQVUsU0FBb0I7UUFBcEYsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUN4RyxDQUFDO0lBRUssNEJBQVEsR0FBZCxVQUFlLE1BQTJEOzs7Ozs7d0JBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBRTlCLFNBQUk7d0JBQVMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQWpFLEdBQUssS0FBSyxHQUFHLFNBQW9ELENBQUM7d0JBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Ozs7O0tBQ2pDO0lBRUssK0JBQVcsR0FBakI7Ozs7O3dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNmLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQzt5QkFDckI7d0JBRUQscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTs7d0JBQS9DLFNBQStDLENBQUM7d0JBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OztLQUMxQztJQUVLLDZCQUFTLEdBQWYsVUFBZ0IsTUFBbUM7Ozs7OzZCQUMzQyxPQUFNLEtBQUssTUFBTSxHQUFqQix3QkFBaUI7d0JBQ2pCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O3dCQUExQyxTQUEwQyxDQUFDOzs7d0JBRTNDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTs0QkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt5QkFDekIsQ0FBQyxDQUFDOzs7Ozs7S0FFVjtJQXBDUSxTQUFTO1FBRHJCLG9FQUFVLEVBQUU7eUNBUWdCLHdDQUFHLEVBQWlCLDRDQUFLLEVBQWtCLHFEQUFNLEVBQXFCLHdEQUFTO09BUC9GLFNBQVMsQ0FxQ3JCO0lBQUQsZ0JBQUM7Q0FBQTtBQXJDcUI7Ozs7Ozs7Ozs7OztBQ1J0QixxSkFBcUosY0FBYyxtSkFBbUosUUFBUSxzbEJBQXNsQixNQUFNLGtCQUFrQixRQUFRLHkzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBejRCO0FBQ0k7QUFDQTtBQUNsQjtBQUVXO0FBQ3lCO0FBR2pFO0lBZ0JJLHFCQUFvQixHQUFRLEVBQVUsTUFBYztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFYRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSw2Q0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksa0NBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBTUssOEJBQVEsR0FBZCxVQUFlLE1BQXlCOzs7Ozs7d0JBQzlCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2QyxTQUFJO3dCQUFTLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQTVELEdBQUssS0FBSyxHQUFHLFNBQStDLENBQUM7d0JBRTdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw2Q0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUUzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7S0FDbEQ7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLDJCQUFLLEdBQWIsVUFBYyxLQUFvQjtRQUM5QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ3RDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFVLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjthQUNJLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSywyQ0FBSyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7YUFDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssK0NBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7YUFDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssMkNBQUssRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjthQUNJLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyw0Q0FBTSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUF5QixDQUFDO0lBQzNFLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsS0FBbUI7UUFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7YUFDSTtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUssNEJBQU0sR0FBWjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs7d0JBQXpDLFNBQXlDLENBQUM7d0JBRTFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztLQUNqQztJQUVLLDRCQUFNLEdBQVo7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs0QkFDakIsc0JBQU87eUJBQ1Y7d0JBRWUscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0NBQ3hELE1BQU0sRUFBRSxNQUFNO2dDQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUzs2QkFDekIsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBSFAsT0FBTyxHQUFHLFNBR0g7d0JBRWIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFOzRCQUNuQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87NEJBQ3hCLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTs0QkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUN6RCxDQUFDLENBQUM7Ozs7O0tBQ047SUFyRkQ7UUFEQyxvRUFBWSxZQUFzQzs7OzZDQUdsRDtJQUdEO1FBREMsb0VBQVksWUFBc0M7OztnREFHbEQ7SUFkUSxXQUFXO1FBRHZCLG9FQUFVLEVBQUU7eUNBaUJnQix3Q0FBRyxFQUFrQixxREFBTTtPQWhCM0MsV0FBVyxDQTZGdkI7SUFBRCxrQkFBQztDQUFBO0FBN0Z1Qjs7Ozs7Ozs7Ozs7O0FDVHhCLDRNQUE0TSxjQUFjLHdNQUF3TSxrQkFBa0Isa0tBQWtLLGVBQWUsME1BQTBNLGlCQUFpQiwrc0JBQStzQixPQUFPLHV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTkrQztBQUNYO0FBQ0E7QUFFa0I7QUFFeUIsQ0FBQztBQUd6RTtJQU1JLHFCQUFvQixHQUFRLEVBQVUsTUFBYztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFSyxpQ0FBVyxHQUFqQixVQUFrQixNQUFjOzs7Ozs7d0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzdCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxLQUFLLEdBQUcsU0FBb0Q7d0JBQzVELE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQWxCLENBQWtCLENBQUMsQ0FBQzt3QkFFN0QsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDVixzQkFBTyxLQUFLLEVBQUM7eUJBQ2hCO3dCQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3dCQUN2QixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUVLLDhCQUFRLEdBQWQsVUFBZSxNQUFjOzs7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBRWpDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMENBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO2dCQUVELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7S0FDekM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sMkJBQUssR0FBYixVQUFjLEtBQW9CO1FBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE5Q1EsV0FBVztRQUR2QixvRUFBVSxFQUFFO3lDQU9nQix3Q0FBRyxFQUFrQixxREFBTTtPQU4zQyxXQUFXLENBK0N2QjtJQUFELGtCQUFDO0NBQUE7QUEvQ3VCOzs7Ozs7Ozs7Ozs7QUNUeEIsd0pBQXdKLFFBQVEsd0pBQXdKLGNBQWMscUtBQXFLLGVBQWUsK2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDbmQ7QUFDUTtBQUUvQyxJQUFNLE1BQU0sR0FBa0I7SUFDMUIsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZ0JBQWlELEVBQUU7SUFDaEgsRUFBRSxLQUFLLEVBQUUsbUNBQW1DLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsaUJBQWtELEVBQUU7SUFDbkksRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsY0FBK0MsRUFBRTtJQUMxSCxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBaUQsRUFBRTtJQUNoSCxFQUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxtQkFBb0QsRUFBRTtJQUN6SCxFQUFFLEtBQUssRUFBRSw2Q0FBNkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUE0QyxFQUFFO0NBQ3BJLENBQUM7QUFHRjtJQUFBO0lBSUEsQ0FBQztJQUhHLHdDQUFlLEdBQWYsVUFBZ0IsTUFBMkI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBSFEsY0FBYztRQUQxQixvRUFBVSxFQUFFO09BQ0EsY0FBYyxDQUkxQjtJQUFELHFCQUFDO0NBQUE7QUFKMEI7Ozs7Ozs7Ozs7OztBQ2QzQiwwTSIsImZpbGUiOiJjaGVja291dC40MzgzYmQwODU1MjBlOTFlMDBiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vVmlldywgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdFRvUm91dGUgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5Abm9WaWV3KClcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FyZENhbGxiYWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShwYXJhbXM6IHsgb3JkZXJJZDogc3RyaW5nLCBhbW91bnQ6IHN0cmluZyB9ICYgU3VtVXBDYWxsYmFja1BhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IG9yZGVySWQgPSBOdW1iZXIocGFyYW1zLm9yZGVySWQpO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IG5ldyBCaWcocGFyYW1zLmFtb3VudCk7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXNbXCJzbXAtc3RhdHVzXCJdID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlUGF5bWVudChvcmRlcklkLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiY2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbk51bWJlcjogcGFyYW1zW1wic21wLXR4LWNvZGVcIl1cclxuICAgICAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RUb1JvdXRlKFwicmVjZWlwdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkOiBvcmRlcklkLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudElkOiBwYXltZW50LmlkLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdFRvUm91dGUoXCJjYXJkLWVycm9yXCIsIHtcclxuICAgICAgICAgICAgICAgIG9yZGVySWQ6IG9yZGVySWQsXHJcbiAgICAgICAgICAgICAgICBjYXVzZTogcGFyYW1zW1wic21wLWZhaWx1cmUtY2F1c2VcIl0sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBwYXJhbXNbXCJzbXAtbWVzc2FnZVwiXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudHlwZSBTdW1VcENhbGxiYWNrUGFyYW1zID0gU3VtVXBTdWNjZXNzQ2FsbGJhY2tQYXJhbXMgfCBTdW1VcEZhaWx1cmVDYWxsYmFja1BhcmFtcztcclxuXHJcbmludGVyZmFjZSBTdW1VcFN1Y2Nlc3NDYWxsYmFja1BhcmFtcyB7XHJcbiAgICBcInNtcC1zdGF0dXNcIjogXCJzdWNjZXNzXCI7XHJcbiAgICBcInNtcC1tZXNzYWdlXCI6IHN0cmluZztcclxuICAgIFwic21wLXJlY2VpcHQtc2VudFwiOiBcInRydWVcIiB8IFwiZmFsc2VcIjtcclxuICAgIFwic21wLXR4LWNvZGVcIjogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3VtVXBGYWlsdXJlQ2FsbGJhY2tQYXJhbXMge1xyXG4gICAgXCJzbXAtc3RhdHVzXCI6IFwiZmFpbGVkXCI7XHJcbiAgICBcInNtcC1mYWlsdXJlLWNhdXNlXCI6IHN0cmluZztcclxuICAgIFwic21wLW1lc3NhZ2VcIjogc3RyaW5nO1xyXG4gICAgXCJzbXAtcmVjZWlwdC1zZW50XCI6IFwidHJ1ZVwiIHwgXCJmYWxzZVwiO1xyXG4gICAgXCJzbXAtdHgtY29kZVwiOiBzdHJpbmc7XHJcbn0iLCJleHBvcnQgdHlwZSBEaWdpdCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDk7XHJcbmV4cG9ydCBjb25zdCBDT01NQSA9IFwiLFwiO1xyXG5leHBvcnQgY29uc3QgRU5URVIgPSBcIkVudGVyXCI7XHJcbmV4cG9ydCBjb25zdCBFU0NBUEUgPSBcIkVzY2FwZVwiO1xyXG5leHBvcnQgY29uc3QgQkFDS1NQQUNFID0gXCJCYWNrc3BhY2VcIjsiLCJpbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuL2FwaS9vcmRlclwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuL2FwaVwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgU3VtdXAge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlZGlyZWN0VG9BcHAob3JkZXI6IE9yZGVyKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYXdhaXQgdGhpcy5hcGkuZ2V0UG9pbnRPZlNhbGUob3JkZXIucG9pbnRPZlNhbGVJZCkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgLy8gRXhhbXBsZTogPGEgaHJlZj1cInN1bXVwbWVyY2hhbnQ6Ly9wYXkvMS4wP2FmZmlsaWF0ZS1rZXk9N2NhODRmMTctODRhNS00MTQwLThkZjYtNmViZWVkODU0MGZjJmFwcC1pZD1jb20uZXhhbXBsZS5teWFwcCZ0b3RhbD0xLjIzJmN1cnJlbmN5PUVVUiZ0aXRsZT1UYXhpIFJpZGUmcmVjZWlwdC1tb2JpbGVwaG9uZT0rMzUzMTIzNDU2Nzg5MCZyZWNlaXB0LWVtYWlsPWN1c3RvbWVyQG1haWwuY29tJmNhbGxiYWNrPWh0dHA6Ly9leGFtcGxlLmNvbS9teWFwcC9teWNhbGxiYWNrXCI+U3RhcnQgU3VtVXAgUGF5bWVudDwvYT5cclxuXHJcbiAgICAgICAgY29uc3QgYWZmaWxpYXRlS2V5ID0gXCI3Y2E4NGYxNy04NGE1LTQxNDAtOGRmNi02ZWJlZWQ4NTQwZmNcIjtcclxuICAgICAgICBjb25zdCBhcHBJZCA9IFwiY29tLnJtamEuZmVzdGl2YWxwb3NcIjtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IG9yZGVyLmFtb3VudER1ZS50b0ZpeGVkKDIpOyAvLyBIYXMgXCIuXCIgYXMgZGVjaW1hbCBzZXBhcmF0b3JcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGBLYWpmZXN0ICR7cG9zLm5hbWV9YDtcclxuXHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8jL2NoZWNrb3V0L29yZGVycy8ke29yZGVyLmlkfS9wYXkvY2FyZC1jYWxsYmFjaz9hbW91bnQ9JHtvcmRlci5hbW91bnREdWV9YDtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJEZWJ1Zz9cIikpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJTdWNjZXNzP1wiKSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtjYWxsYmFja1VybH0mc21wLXN0YXR1cz1zdWNjZXNzJnNtcC10eC1jb2RlPTEyM2FiY2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2NhbGxiYWNrVXJsfSZzbXAtc3RhdHVzPWZhaWxlZCZzbXAtZmFpbHVyZS1jYXVzZT10ZXN0ZmVqbCZzbXAtbWVzc2FnZT1mZWpsYmVza2VkJnNtcC10eC1jb2RlPTEyM2FiY2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYHN1bXVwbWVyY2hhbnQ6Ly9wYXkvMS4wP2FmZmlsaWF0ZS1rZXk9JHthZmZpbGlhdGVLZXl9JmFwcC1pZD0ke2FwcElkfSZ0b3RhbD0ke3RvdGFsfSZjdXJyZW5jeT1ES0smdGl0bGU9JHt0aXRsZX0mY2FsbGJhY2s9JHtjYWxsYmFja1VybH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnYmFja3NwYWNlJztcbnZhciB3aWR0aCA9IDY0MDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNTVhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTc2IDY0SDIwNS4yNkE2My45NyA2My45NyAwIDAgMCAxNjAgODIuNzVMOS4zNyAyMzMuMzdjLTEyLjUgMTIuNS0xMi41IDMyLjc2IDAgNDUuMjVMMTYwIDQyOS4yNWMxMiAxMiAyOC4yOCAxOC43NSA0NS4yNSAxOC43NUg1NzZjMzUuMzUgMCA2NC0yOC42NSA2NC02NFYxMjhjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTg0LjY5IDI1NC4wNmM2LjI1IDYuMjUgNi4yNSAxNi4zOCAwIDIyLjYzbC0yMi42MiAyMi42MmMtNi4yNSA2LjI1LTE2LjM4IDYuMjUtMjIuNjMgMEwzODQgMzAxLjI1bC02Mi4wNiA2Mi4wNmMtNi4yNSA2LjI1LTE2LjM4IDYuMjUtMjIuNjMgMGwtMjIuNjItMjIuNjJjLTYuMjUtNi4yNS02LjI1LTE2LjM4IDAtMjIuNjNMMzM4Ljc1IDI1NmwtNjIuMDYtNjIuMDZjLTYuMjUtNi4yNS02LjI1LTE2LjM4IDAtMjIuNjNsMjIuNjItMjIuNjJjNi4yNS02LjI1IDE2LjM4LTYuMjUgMjIuNjMgMEwzODQgMjEwLjc1bDYyLjA2LTYyLjA2YzYuMjUtNi4yNSAxNi4zOC02LjI1IDIyLjYzIDBsMjIuNjIgMjIuNjJjNi4yNSA2LjI1IDYuMjUgMTYuMzggMCAyMi42M0w0MjkuMjUgMjU2bDYyLjA2IDYyLjA2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUJhY2tzcGFjZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjaGVjayc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwYyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNoZWNrID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NoZWNrLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA1OCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUwNCAyNTZjMCAxMzYuOTY3LTExMS4wMzMgMjQ4LTI0OCAyNDhTOCAzOTIuOTY3IDggMjU2IDExOS4wMzMgOCAyNTYgOHMyNDggMTExLjAzMyAyNDggMjQ4ek0yMjcuMzE0IDM4Ny4zMTRsMTg0LTE4NGM2LjI0OC02LjI0OCA2LjI0OC0xNi4zNzkgMC0yMi42MjdsLTIyLjYyNy0yMi42MjdjLTYuMjQ4LTYuMjQ5LTE2LjM3OS02LjI0OS0yMi42MjggMEwyMTYgMzA4LjExOGwtNzAuMDU5LTcwLjA1OWMtNi4yNDgtNi4yNDgtMTYuMzc5LTYuMjQ4LTIyLjYyOCAwbC0yMi42MjcgMjIuNjI3Yy02LjI0OCA2LjI0OC02LjI0OCAxNi4zNzkgMCAyMi42MjdsMTA0IDEwNGM2LjI0OSA2LjI0OSAxNi4zNzkgNi4yNDkgMjIuNjI4LjAwMXonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDaGVja0NpcmNsZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjcmVkaXQtY2FyZCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA5ZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTAgNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQ4MGMyNi41IDAgNDgtMjEuNSA0OC00OFYyNTZIMHYxNzZ6bTE5Mi02OGMwLTYuNiA1LjQtMTIgMTItMTJoMTM2YzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJIMjA0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0tMTI4IDBjMC02LjYgNS40LTEyIDEyLTEyaDcyYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTU3NiA4MHY0OEgwVjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDcmVkaXRDYXJkID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2ZpbGUtaW52b2ljZS1kb2xsYXInO1xudmFyIHdpZHRoID0gMzg0O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2Y1NzEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNzcgMTA1TDI3OS4xIDdjLTQuNS00LjUtMTAuNi03LTE3LTdIMjU2djEyOGgxMjh2LTYuMWMwLTYuMy0yLjUtMTIuNC03LTE2Ljl6bS0xNTMgMzFWMEgyNEMxMC43IDAgMCAxMC43IDAgMjR2NDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYxNjBIMjQ4Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNHpNNjQgNzJjMC00LjQyIDMuNTgtOCA4LThoODBjNC40MiAwIDggMy41OCA4IDh2MTZjMCA0LjQyLTMuNTggOC04IDhINzJjLTQuNDIgMC04LTMuNTgtOC04Vjcyem0wIDgwdi0xNmMwLTQuNDIgMy41OC04IDgtOGg4MGM0LjQyIDAgOCAzLjU4IDggOHYxNmMwIDQuNDItMy41OCA4LTggOEg3MmMtNC40MiAwLTgtMy41OC04LTh6bTE0NCAyNjMuODhWNDQwYzAgNC40Mi0zLjU4IDgtOCA4aC0xNmMtNC40MiAwLTgtMy41OC04LTh2LTI0LjI5Yy0xMS4yOS0uNTgtMjIuMjctNC41Mi0zMS4zNy0xMS4zNS0zLjktMi45My00LjEtOC43Ny0uNTctMTIuMTRsMTEuNzUtMTEuMjFjMi43Ny0yLjY0IDYuODktMi43NiAxMC4xMy0uNzMgMy44NyAyLjQyIDguMjYgMy43MiAxMi44MiAzLjcyaDI4LjExYzYuNSAwIDExLjgtNS45MiAxMS44LTEzLjE5IDAtNS45NS0zLjYxLTExLjE5LTguNzctMTIuNzNsLTQ1LTEzLjVjLTE4LjU5LTUuNTgtMzEuNTgtMjMuNDItMzEuNTgtNDMuMzkgMC0yNC41MiAxOS4wNS00NC40NCA0Mi42Ny00NS4wN1YyMzJjMC00LjQyIDMuNTgtOCA4LThoMTZjNC40MiAwIDggMy41OCA4IDh2MjQuMjljMTEuMjkuNTggMjIuMjcgNC41MSAzMS4zNyAxMS4zNSAzLjkgMi45MyA0LjEgOC43Ny41NyAxMi4xNGwtMTEuNzUgMTEuMjFjLTIuNzcgMi42NC02Ljg5IDIuNzYtMTAuMTMuNzMtMy44Ny0yLjQzLTguMjYtMy43Mi0xMi44Mi0zLjcyaC0yOC4xMWMtNi41IDAtMTEuOCA1LjkyLTExLjggMTMuMTkgMCA1Ljk1IDMuNjEgMTEuMTkgOC43NyAxMi43M2w0NSAxMy41YzE4LjU5IDUuNTggMzEuNTggMjMuNDIgMzEuNTggNDMuMzkgMCAyNC41My0xOS4wNSA0NC40NC00Mi42NyA0NS4wN3onO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFGaWxlSW52b2ljZURvbGxhciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdtb25leS1iaWxsLWFsdCc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjNkMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM1MiAyODhoLTE2di04OGMwLTQuNDItMy41OC04LTgtOGgtMTMuNThjLTQuNzQgMC05LjM3IDEuNC0xMy4zMSA0LjAzbC0xNS4zMyAxMC4yMmE3Ljk5NCA3Ljk5NCAwIDAgMC0yLjIyIDExLjA5bDguODggMTMuMzFhNy45OTQgNy45OTQgMCAwIDAgMTEuMDkgMi4yMmwuNDctLjMxVjI4OGgtMTZjLTQuNDIgMC04IDMuNTgtOCA4djE2YzAgNC40MiAzLjU4IDggOCA4aDY0YzQuNDIgMCA4LTMuNTggOC04di0xNmMwLTQuNDItMy41OC04LTgtOHpNNjA4IDY0SDMyQzE0LjMzIDY0IDAgNzguMzMgMCA5NnYzMjBjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg1NzZjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMlY5NmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyek00OCA0MDB2LTY0YzM1LjM1IDAgNjQgMjguNjUgNjQgNjRINDh6bTAtMjI0di02NGg2NGMwIDM1LjM1LTI4LjY1IDY0LTY0IDY0em0yNzIgMTkyYy01My4wMiAwLTk2LTUwLjE1LTk2LTExMiAwLTYxLjg2IDQyLjk4LTExMiA5Ni0xMTJzOTYgNTAuMTQgOTYgMTEyYzAgNjEuODctNDMgMTEyLTk2IDExMnptMjcyIDMyaC02NGMwLTM1LjM1IDI4LjY1LTY0IDY0LTY0djY0em0wLTIyNGMtMzUuMzUgMC02NC0yOC42NS02NC02NGg2NHY2NHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFNb25leUJpbGxBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndGltZXMnO1xudmFyIHdpZHRoID0gMzUyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFUaW1lcyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd0aW1lcy1jaXJjbGUnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwNTcnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMjEuNiAzMTMuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzM4IDM3Ny42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDMxMmwtNjUuMSA2NS42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMTM0LjQgMzM4Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjUuNi02NS02NS42LTY1LjFjLTQuNy00LjctNC43LTEyLjMgMC0xN2wzOS42LTM5LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDY1IDY1LjcgNjUuMS02NS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGwzOS42IDM5LjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMxMiAyNTZsNjUuNiA2NS4xeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVRpbWVzQ2lyY2xlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vYWNjb3VudC1wYXltZW50LnRzXCIpKTtcblx0fSwgXCJjaGVja291dFwiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY2FyZC1jYWxsYmFjay50c1wiKSk7XG5cdH0sIFwiY2hlY2tvdXRcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2NhcmQtZXJyb3IudHNcIikpO1xuXHR9LCBcImNoZWNrb3V0XCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jYXNoLXBheW1lbnQudHNcIikpO1xuXHR9LCBcImNoZWNrb3V0XCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9yZWNlaXB0LnRzXCIpKTtcblx0fSwgXCJjaGVja291dFwiKTtcbn0iLCJpbXBvcnQgeyBCaWcsIFJvdW5kaW5nTW9kZSB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgb2JzZXJ2YWJsZSwgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi4vYXBpL2FjY291bnRcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9hcGkvb3JkZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IERpZ2l0LCBFTlRFUiwgRVNDQVBFLCBDT01NQSwgQkFDS1NQQUNFIH0gZnJvbSBcIi4uL2tleXNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFjY291bnRQYXltZW50IHtcclxuICAgIHByaXZhdGUgb3JkZXIhOiBPcmRlcjtcclxuICAgIHByaXZhdGUgYWNjb3VudHMhOiBBY2NvdW50W107XHJcbiAgICBwcml2YXRlIGFjY291bnQ/OiBBY2NvdW50O1xyXG4gICAgdG90YWwhOiBCaWc7XHJcbiAgICBAb2JzZXJ2YWJsZSgpIGFjY291bnROdW1iZXIhOiBCaWc7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShuYW1lb2Y8QWNjb3VudFBheW1lbnQ+KHggPT4geC5hY2NvdW50KSlcclxuICAgIGdldCBhY2NvdW50TmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnQubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShuYW1lb2Y8QWNjb3VudFBheW1lbnQ+KHggPT4geC5hY2NvdW50KSlcclxuICAgIGdldCByZW1haW5pbmdDcmVkaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50LnJlbWFpbmluZ0NyZWRpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShuYW1lb2Y8QWNjb3VudFBheW1lbnQ+KHggPT4geC5hY2NvdW50KSlcclxuICAgIGdldCByZW1haW5pbmdDcmVkaXRDbGFzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY291bnQucmVtYWluaW5nQ3JlZGl0Lmd0ZSh0aGlzLnRvdGFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGV4dC1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0ZXh0LWRhbmdlclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudCAmJiB0aGlzLnJlbWFpbmluZ0NyZWRpdCAmJiB0aGlzLnJlbWFpbmluZ0NyZWRpdC5ndGUodGhpcy50b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IG9yZGVySWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IGF3YWl0IHRoaXMuYXBpLmdldE9yZGVyQnlJZChvcmRlcklkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLm9yZGVyLnRvdGFsO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudE51bWJlciA9IG5ldyBCaWcoMCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA+PSBcIjBcIiAmJiBldmVudC5rZXkgPD0gXCI5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlnaXQgPSBOdW1iZXIoZXZlbnQua2V5KSBhcyBEaWdpdDtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KGRpZ2l0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBDT01NQSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hLZXkoXCIwMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBCQUNLU1BBQ0UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrc3BhY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBFTlRFUikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBFU0NBUEUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2tzcGFjZSgpIHtcclxuICAgICAgICB0aGlzLmFjY291bnROdW1iZXIgPSB0aGlzLmFjY291bnROdW1iZXIuZGl2KDEwKS5yb3VuZCgwLCBSb3VuZGluZ01vZGUuUm91bmREb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoS2V5KHZhbHVlOiBEaWdpdCB8IFwiMDBcIikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCIwMFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE51bWJlciA9IHRoaXMuYWNjb3VudE51bWJlci5tdWwoMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudE51bWJlciA9IHRoaXMuYWNjb3VudE51bWJlci5tdWwoMTApLmFkZChuZXcgQmlnKHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbmNlbCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVPcmRlcih0aGlzLm9yZGVyLmlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCIvc2FsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN1Ym1pdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVQYXltZW50KHRoaXMub3JkZXIuaWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgYW1vdW50OiB0aGlzLnRvdGFsLFxyXG4gICAgICAgICAgICBhY2NvdW50SWQ6IHRoaXMuYWNjb3VudC5pZFxyXG4gICAgICAgIH0pLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcInJlY2VpcHRcIiwge1xyXG4gICAgICAgICAgICBvcmRlcklkOiBwYXltZW50Lm9yZGVySWQsXHJcbiAgICAgICAgICAgIHBheW1lbnRJZDogcGF5bWVudC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhY2NvdW50TnVtYmVyQ2hhbmdlZCgpIHtcclxuICAgICAgICBjb25zdCBudW1iZXIgPSBwYXJzZUludCh0aGlzLmFjY291bnROdW1iZXIudG9GaXhlZCgwKSk7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gdGhpcy5hY2NvdW50cy5maW5kKHggPT4geC5udW1iZXIgPT09IG51bWJlcik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VG90YWw8L2gzPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7dG90YWwgfCBtb25leX0ga3IuPC9oMz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXFxcIj5Lb250b251bW1lcjwvaDY+XFxyXFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJvZmZzZXQtMiBjb2wtOCB0ZXh0LWNlbnRlclxcXCI+JHthY2NvdW50TnVtYmVyfTwvaDE+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29sLTIgYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImJhY2tzcGFjZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2JhY2tzcGFjZScgJiBmb250YXdlc29tZVxcXCIgc2l6ZT1cXFwiMnhcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPiR7YWNjb3VudE5hbWUgfHwgJ0lra2UgZnVuZGV0J308L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPktyZWRpdDwvaDQ+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodCAke3JlbWFpbmluZ0NyZWRpdENsYXNzfVxcXCI+JHtyZW1haW5pbmdDcmVkaXQgfCBtb25leX0ga3IuPC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJrZXlwYWQgcm93IG5vLWd1dHRlcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwibnVtYmVyIG9mIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAnMDAnLCAwXVxcXCIgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwicHVzaEtleShudW1iZXIpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNT4ke251bWJlcn08L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnIGNvbC00XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiY2FuY2VsKClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aW1lcycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gRm9ydHJ5ZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZyBjb2wtOFxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NoZWNrJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBVZGbDuHI8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9hcGkvb3JkZXJcIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyLCBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3VtdXAgfSBmcm9tIFwiLi4vc3VtdXBcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENhcmRFcnJvciB7XHJcbiAgICBwcml2YXRlIG9yZGVyITogT3JkZXI7XHJcbiAgICBvcmRlcklkITogbnVtYmVyO1xyXG4gICAgY2F1c2UhOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlITogc3RyaW5nO1xyXG4gICAgdG90YWwhOiBCaWc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBzdW11cDogU3VtdXAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYXBwUm91dGVyOiBBcHBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgb3JkZXJJZDogc3RyaW5nLCBjYXVzZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMub3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5jYXVzZSA9IHBhcmFtcy5jYXVzZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmRlciA9IGF3YWl0IHRoaXMuYXBpLmdldE9yZGVyQnlJZCh0aGlzLm9yZGVySWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMub3JkZXIudG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yZGVySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVPcmRlcih0aGlzLm9yZGVySWQpLnNlbmQoKTtcclxuICAgICAgICB0aGlzLmFwcFJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJzYWxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRvQ29uZmlybShtZXRob2Q6IFwiY2FyZFwiIHwgXCJjYXNoXCIgfCBcImFjY291bnRcIikge1xyXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwiY2FyZFwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3VtdXAucmVkaXJlY3RUb0FwcCh0aGlzLm9yZGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUobWV0aG9kLCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkOiB0aGlzLm9yZGVyLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5Ub3RhbDwvaDM+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke3RvdGFsIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+T3JkcmVuci48L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHtvcmRlcklkfTwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNb25leUJpbGxBbHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmlsZUludm9pY2VEb2xsYXJcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzQ2lyY2xlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RpbWVzLWNpcmNsZScgJiBmb250YXdlc29tZVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiBzaXplPVxcXCI4eFxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxoND4ke2NhdXNlfTwvaDQ+XFxyXFxuICAgIDxwPiR7bWVzc2FnZX08L3A+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNhbmNlbE9yZGVyKClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aW1lcycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gRm9ydHJ5ZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnYWNjb3VudCcpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInZmlsZS1pbnZvaWNlLWRvbGxhcicgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdjYXJkJylcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjcmVkaXQtY2FyZCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdjYXNoJylcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidtb25leS1iaWxsLWFsdCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IEJpZywgeyBSb3VuZGluZ01vZGUgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlnaXQsIEVOVEVSLCBFU0NBUEUsIENPTU1BLCBCQUNLU1BBQ0UgfSBmcm9tIFwiLi4va2V5c1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2FzaFBheW1lbnQge1xyXG4gICAgcHJpdmF0ZSBvcmRlciE6IE9yZGVyO1xyXG4gICAgdG90YWwhOiBCaWc7XHJcbiAgICBhbW91bnREdWUhOiBCaWc7XHJcbiAgICByZWNlaXZlZCE6IEJpZztcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKG5hbWVvZjxDYXNoUGF5bWVudD4oeCA9PiB4LnJlY2VpdmVkKSlcclxuICAgIGdldCBjaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjZWl2ZWQuZ3RlKHRoaXMuYW1vdW50RHVlKSA/IHRoaXMucmVjZWl2ZWQubWludXModGhpcy5hbW91bnREdWUpIDogbmV3IEJpZygwKTtcclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKG5hbWVvZjxDYXNoUGF5bWVudD4oeCA9PiB4LnJlY2VpdmVkKSlcclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50RHVlLmd0KDApICYmIHRoaXMucmVjZWl2ZWQuZ3RlKHRoaXMuYW1vdW50RHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHtvcmRlcklkOiBzdHJpbmd9KSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IGF3YWl0IHRoaXMuYXBpLmdldE9yZGVyQnlJZChvcmRlcklkKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5vcmRlci50b3RhbDtcclxuICAgICAgICB0aGlzLmFtb3VudER1ZSA9IHRoaXMub3JkZXIuYW1vdW50RHVlO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZWQgPSBuZXcgQmlnKDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPj0gXCIwXCIgJiYgZXZlbnQua2V5IDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gTnVtYmVyKGV2ZW50LmtleSkgYXMgRGlnaXQ7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaEtleShkaWdpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQ09NTUEpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoS2V5KFwiMDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQkFDS1NQQUNFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3NwYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRU5URVIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMucmVjZWl2ZWQuZGl2KDEwKS5yb3VuZCgyLCBSb3VuZGluZ01vZGUuUm91bmREb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoS2V5KHZhbHVlOiBEaWdpdCB8IFwiMDBcIikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCIwMFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWQgPSB0aGlzLnJlY2VpdmVkLm11bCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHRoaXMucmVjZWl2ZWQubXVsKDEwKS5hZGQobmV3IEJpZyh2YWx1ZSkuZGl2KDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGFjdEFtb3VudCgpIHtcclxuICAgICAgICB0aGlzLnJlY2VpdmVkID0gdGhpcy5hbW91bnREdWUucGx1cygwKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlT3JkZXIodGhpcy5vcmRlci5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5TdWJtaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVBheW1lbnQodGhpcy5vcmRlci5pZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiY2FzaFwiLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50RHVlXHJcbiAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwicmVjZWlwdFwiLCB7XHJcbiAgICAgICAgICAgIG9yZGVySWQ6IHBheW1lbnQub3JkZXJJZCxcclxuICAgICAgICAgICAgcGF5bWVudElkOiBwYXltZW50LmlkLFxyXG4gICAgICAgICAgICBjaGFuZ2U6IHRoaXMucmVjZWl2ZWQubWludXMocGF5bWVudC5hbW91bnQpLnRvRml4ZWQoMilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5Ub3RhbDwvaDM+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHt0b3RhbCB8IG1vbmV5fSBrci48L2gzPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9XFxcImFtb3VudER1ZS5uZXEodG90YWwpXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5UaWwgYmV0YWxpbmc8L2gzPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7YW1vdW50RHVlIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDQ+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHtjaGFuZ2UgfCBtb25leX0ga3IuPC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXFxcIj5Nb2R0YWdldCBrb250YW50PC9oNj5cXHJcXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm9mZnNldC0yIGNvbC04IHRleHQtY2VudGVyXFxcIj4ke3JlY2VpdmVkIHwgbW9uZXl9IGtyLjwvaDE+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29sLTIgYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImJhY2tzcGFjZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQmFja3NwYWNlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2JhY2tzcGFjZScgJiBmb250YXdlc29tZVxcXCIgc2l6ZT1cXFwiMnhcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwia2V5cGFkIHJvdyBuby1ndXR0ZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcIm51bWJlciBvZiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgJzAwJywgMF1cXFwiIGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcInB1c2hLZXkobnVtYmVyKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDU+JHtudW1iZXJ9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJleGFjdEFtb3VudCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNT49PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1sZyBjb2wtNFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNhbmNlbCgpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEZvcnRyeWQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tbGcgY29sLThcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjaGVjaycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gVWRmw7hyPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSBcIi4uL2FwaS9wYXltZW50XCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbmludGVyZmFjZSBQYXJhbXMgeyBvcmRlcklkOiBzdHJpbmcsIHBheW1lbnRJZDogc3RyaW5nLCBjaGFuZ2U/OiBzdHJpbmcgfTtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENhc2hSZWNlaXB0IHtcclxuICAgIHByaXZhdGUgcGF5bWVudCE6IFBheW1lbnRcclxuICAgIG9yZGVySWQhOiBudW1iZXI7XHJcbiAgICB0b3RhbCE6IEJpZztcclxuICAgIGNoYW5nZT86IEJpZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZShwYXJhbXM6IFBhcmFtcykge1xyXG4gICAgICAgIHRoaXMub3JkZXJJZCA9IE51bWJlcihwYXJhbXMub3JkZXJJZCk7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudElkID0gTnVtYmVyKHBhcmFtcy5wYXltZW50SWQpO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuZ2V0T3JkZXJCeUlkKHRoaXMub3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gb3JkZXIucGF5bWVudHMuZmluZCh4ID0+IHguaWQgPT09IHBheW1lbnRJZCk7XHJcblxyXG4gICAgICAgIGlmICghcGF5bWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBheW1lbnQgPSBwYXltZW50O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucGF5bWVudC5hbW91bnQ7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMuY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEJpZyhwYXJhbXMuY2hhbmdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL3NhbGVcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+T3JkcmVuci48L2gzPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHtvcmRlcklkfTwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8aHI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5Ub3RhbDwvaDM+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke3RvdGFsIHwgbW9uZXl9IGtyLjwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9XFxcImNoYW5nZVxcXCI+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5UaWxiYWdlPC9oND5cXHJcXG4gICAgICAgIDxoNCBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7Y2hhbmdlIHwgbW9uZXl9IGtyLjwvaDQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja0NpcmNsZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidjaGVjay1jaXJjbGUnICYgZm9udGF3ZXNvbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXN1Y2Nlc3NcXFwiIHNpemU9XFxcIjh4XFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjb21wbGV0ZSgpXFxcIj5VZGbDuHJ0PC9idXR0b24+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyLCBOYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2NhcmRcIiwgbmFtZTogXCJjYXJkXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXNoLXBheW1lbnRcIiwgXCJjaGVja291dFwiKSB9LCAvLyBUT0RPXHJcbiAgICB7IHJvdXRlOiBcIm9yZGVycy86b3JkZXJJZC9wYXkvY2FyZC1jYWxsYmFja1wiLCBuYW1lOiBcImNhcmQtY2FsbGJhY2tcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NhcmQtY2FsbGJhY2tcIiwgXCJjaGVja291dFwiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJvcmRlcnMvOm9yZGVySWQvcGF5L2NhcmQtZXJyb3JcIiwgbmFtZTogXCJjYXJkLWVycm9yXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jYXJkLWVycm9yXCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9jYXNoXCIsIG5hbWU6IFwiY2FzaFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY2FzaC1wYXltZW50XCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheS9hY2NvdW50XCIsIG5hbWU6IFwiYWNjb3VudFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vYWNjb3VudC1wYXltZW50XCIsIFwiY2hlY2tvdXRcIikgfSxcclxuICAgIHsgcm91dGU6IFwib3JkZXJzLzpvcmRlcklkL3BheW1lbnRzLzpwYXltZW50SWQvcmVjZWlwdFwiLCBuYW1lOiBcInJlY2VpcHRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3JlY2VpcHRcIiwgXCJjaGVja291dFwiKSB9LFxyXG5dO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRSb3V0ZXIge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy5tYXAocm91dGVzKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiA1NnB4XFxcIj48L25hdj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=