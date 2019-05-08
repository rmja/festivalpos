(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings"],{

/***/ "./node_modules/ts-loader/index.js?!./src/settings/accounts/create.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/accounts/create.ts ***!
  \**************************************************************************/
/*! exports provided: CreateAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccount", function() { return CreateAccount; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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




var CreateAccount = /** @class */ (function () {
    function CreateAccount(api, router) {
        this.api = api;
        this.router = router;
        this.number = 0;
        this.name = "";
        this.maxCredit = "0";
    }
    Object.defineProperty(CreateAccount.prototype, "canSubmit", {
        get: function () {
            var _this = this;
            return this.number > 0 && !!this.name.length && this.accounts && this.accounts.findIndex(function (x) { return x.number === _this.number; }) === -1;
        },
        enumerable: true,
        configurable: true
    });
    CreateAccount.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAccounts().transfer()];
                    case 1:
                        _a.accounts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateAccount.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.createAccount({ number: this.number, name: this.name, maxCredit: new big_js__WEBPACK_IMPORTED_MODULE_3__["Big"](this.maxCredit) }).transfer()];
                    case 1:
                        account = _a.sent();
                        this.router.navigateToRoute("details", {
                            accountId: account.id
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateAccount = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["useView"])("./edit.html"),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateAccount);
    return CreateAccount;
}());



/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./src/settings/alarms/create.ts":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/alarms/create.ts ***!
  \************************************************************************/
/*! exports provided: CreateAlarmFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAlarmFeed", function() { return CreateAlarmFeed; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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



var CreateAlarmFeed = /** @class */ (function () {
    function CreateAlarmFeed(api, router) {
        this.api = api;
        this.router = router;
        this.name = "";
    }
    Object.defineProperty(CreateAlarmFeed.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    CreateAlarmFeed.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.createAlarmFeed({ name: this.name }).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateAlarmFeed = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["useView"])("./edit.html"),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateAlarmFeed);
    return CreateAlarmFeed;
}());



/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./src/settings/pointofsales/create.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/pointofsales/create.ts ***!
  \******************************************************************************/
/*! exports provided: CreatePointOfSale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePointOfSale", function() { return CreatePointOfSale; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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



var CreatePointOfSale = /** @class */ (function () {
    function CreatePointOfSale(api, router) {
        this.api = api;
        this.router = router;
        this.name = "";
    }
    Object.defineProperty(CreatePointOfSale.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    CreatePointOfSale.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.createPointOfSale({ name: this.name }).transfer()];
                    case 1:
                        pos = _a.sent();
                        this.router.navigateToRoute("details", {
                            pointOfSaleId: pos.id
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreatePointOfSale = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["useView"])("./edit.html"),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreatePointOfSale);
    return CreatePointOfSale;
}());



/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./src/settings/products/create.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/products/create.ts ***!
  \**************************************************************************/
/*! exports provided: CreateProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProduct", function() { return CreateProduct; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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




var CreateProduct = /** @class */ (function () {
    function CreateProduct(api, router) {
        this.api = api;
        this.router = router;
        this.name = "";
        this.price = "0";
    }
    Object.defineProperty(CreateProduct.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    CreateProduct.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.createProduct({ name: this.name, price: new big_js__WEBPACK_IMPORTED_MODULE_2__["Big"](this.price) }).transfer()];
                    case 1:
                        product = _a.sent();
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateProduct = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["useView"])("./edit.html"),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_0__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateProduct);
    return CreateProduct;
}());



/***/ }),

/***/ "./src/move-before.ts":
/*!****************************!*\
  !*** ./src/move-before.ts ***!
  \****************************/
/*! exports provided: moveBefore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBefore", function() { return moveBefore; });
function moveBefore(array, itemMatcherFn, siblingMatcherFn) {
    var removedItem = remove(array, itemMatcherFn);
    var nextIndex = array.findIndex(siblingMatcherFn);
    var items = removedItem ? [removedItem] : [];
    array.splice.apply(array, [nextIndex >= 0 ? nextIndex : array.length, 0].concat(items));
}
function remove(array, matcherFn) {
    var index = array.findIndex(matcherFn);
    if (index >= 0) {
        return array.splice(index, 1)[0];
    }
}


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faEdit":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faEdit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'edit';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f044';
var svgPathData = 'M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z';

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

exports.faEdit = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faList":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faList.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'list';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f03a';
var svgPathData = 'M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z';

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

exports.faList = exports.definition;
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

/***/ "settings/accounts/details":
/*!***************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/accounts/details.ts ***!
  \***************************************************************************/
/*! exports provided: AccountDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetails", function() { return AccountDetails; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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



var AccountDetails = /** @class */ (function () {
    function AccountDetails(api, router) {
        this.api = api;
        this.router = router;
    }
    AccountDetails.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.accountId = Number(params.accountId);
                        _a = this;
                        return [4 /*yield*/, this.api.getAccount(this.accountId).transfer()];
                    case 1:
                        _a.account = _b.sent();
                        this.name = this.account.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountDetails.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Skal kontoen slettes?")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.deleteAccount(this.account.id).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AccountDetails.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigateToRoute("list");
                return [2 /*return*/];
            });
        });
    };
    AccountDetails = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountDetails);
    return AccountDetails;
}());



/***/ }),

/***/ "settings/accounts/details.html":
/*!********************************************!*\
  !*** ./src/settings/accounts/details.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"list\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><require from=\"@fortawesome/free-solid-svg-icons/faEdit\"></require><require from=\"@fortawesome/free-solid-svg-icons/faList\"></require><font-awesome-icon icon.bind=\"'list' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"route:edit; params.bind: { accountId }\" class=\"nav-link\"><font-awesome-icon icon.bind=\"'edit' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a href click.delegate=\"delete()\" class=\"nav-link text-danger\"><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <h1>${name}</h1>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/accounts/edit":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/accounts/edit.ts ***!
  \************************************************************************/
/*! exports provided: EditAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccount", function() { return EditAccount; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ur-jsonpatch */ "./node_modules/ur-jsonpatch/dist/esm/index.js");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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




var EditAccount = /** @class */ (function () {
    function EditAccount(api, router) {
        this.api = api;
        this.router = router;
    }
    Object.defineProperty(EditAccount.prototype, "canSubmit", {
        get: function () {
            var _this = this;
            return this.number > 0 && !!this.name.length && this.accounts.findIndex(function (x) { return x.id !== _this.accountId && x.number === _this.number; }) === -1;
        },
        enumerable: true,
        configurable: true
    });
    EditAccount.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var account, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.accountId = Number(params.accountId);
                        return [4 /*yield*/, this.api.getAccount(this.accountId).transfer()];
                    case 1:
                        account = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAccounts().transfer()];
                    case 2:
                        _a.accounts = _b.sent();
                        this.number = account.number;
                        this.name = account.name;
                        this.maxCredit = account.maxCredit;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAccount.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patch = new ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__["Patch"]()
                            .replace(function (x) { return x.number; }, this.number)
                            .replace(function (x) { return x.name; }, this.name)
                            .replace(function (x) { return x.maxCredit; }, this.maxCredit);
                        return [4 /*yield*/, this.api.updateAccount(this.accountId, patch.operations).transfer()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("details", { accountId: this.accountId });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAccount = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditAccount);
    return EditAccount;
}());



/***/ }),

/***/ "settings/accounts/edit.html":
/*!*****************************************!*\
  !*** ./src/settings/accounts/edit.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar></top-navbar>\r\n    <page-body>\r\n        <form submit.delegate=\"submit()\">\r\n            <div class=\"form-group\">\r\n                <label>Nummer</label>\r\n                <input type=\"number\" class=\"form-control\" value.bind=\"number | number\" step=\"1\" placeholder=\"Nummer\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Navn</label>\r\n                <input type=\"text\" class=\"form-control\" value.bind=\"name\" placeholder=\"Navn\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Kreditmaks</label>\r\n                <input type=\"number\" class=\"form-control\" value.bind=\"maxCredit\" placeholder=\"Kreditmaks\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\" disabled.bind=\"!canSubmit\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/accounts/list":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/accounts/list.ts ***!
  \************************************************************************/
/*! exports provided: AccountsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsList", function() { return AccountsList; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
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


var AccountsList = /** @class */ (function () {
    function AccountsList(api) {
        this.api = api;
    }
    AccountsList.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAccounts().transfer()];
                    case 1:
                        _a.accounts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountsList.prototype.resetCredit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(prompt("Skal resterende kredit sættes til maks kredit for alle konti? Skriv 'JA' for at bekræfte") === "JA")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.api.resetAllAccounts().send()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAccounts().transfer()];
                    case 2:
                        _a.accounts = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountsList = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], AccountsList);
    return AccountsList;
}());



/***/ }),

/***/ "settings/accounts/list.html":
/*!*****************************************!*\
  !*** ./src/settings/accounts/list.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"create\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faArrowRight\"></require><require from=\"@fortawesome/free-solid-svg-icons/faPlus\"></require><font-awesome-icon icon.bind=\"'plus' & fontawesome\"></font-awesome-icon></a>                \r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <div if.bind=\"accounts.length\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <th>&#x2116;</th>\r\n                    <th>Navn</th>\r\n                    <th>Maks</th>\r\n                    <th></th>\r\n                </thead>\r\n                <tr repeat.for=\"account of accounts\">\r\n                    <td>${account.number}</td>\r\n                    <td style=\"width: 100%\">${account.name}</td>\r\n                    <td class=\"text-right\" style=\"white-space: nowrap\">${account.maxCredit | money} kr.</td>\r\n                    <td>\r\n                        <a route-href=\"route: details; params.bind: { accountId: account.id }\" class=\"btn btn-light btn-sm\"><font-awesome-icon icon.bind=\"'arrow-right' & fontawesome\"></font-awesome-icon></a>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <button class=\"btn btn-warning btn-block\" click.delegate=\"resetCredit()\">Sæt alle konti til kreditmaks</button>\r\n        </div>\r\n        <empty-hint else>\r\n            Der er ingen konti\r\n        </empty-hint>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/alarms/edit":
/*!**********************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/alarms/edit.ts ***!
  \**********************************************************************/
/*! exports provided: EditAlarm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAlarm", function() { return EditAlarm; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ur-jsonpatch */ "./node_modules/ur-jsonpatch/dist/esm/index.js");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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




var EditAlarm = /** @class */ (function () {
    function EditAlarm(api, router) {
        this.api = api;
        this.router = router;
    }
    Object.defineProperty(EditAlarm.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    EditAlarm.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var feed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alarmFeedId = Number(params.alarmFeedId);
                        return [4 /*yield*/, this.api.getAlarmFeed(this.alarmFeedId).transfer()];
                    case 1:
                        feed = _a.sent();
                        this.name = feed.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAlarm.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Skal alarmen slettes?")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.deleteAlarmFeed(this.alarmFeedId).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditAlarm.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patch = new ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__["Patch"]()
                            .replace(function (x) { return x.name; }, this.name);
                        return [4 /*yield*/, this.api.updateAlarmFeed(this.alarmFeedId, patch.operations).transfer()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAlarm = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditAlarm);
    return EditAlarm;
}());



/***/ }),

/***/ "settings/alarms/edit.html":
/*!***************************************!*\
  !*** ./src/settings/alarms/edit.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\" if.bind=\"delete\">\r\n                <a href click.delegate=\"delete()\" class=\"nav-link text-danger\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <form submit.delegate=\"submit()\">\r\n            <div class=\"form-group\">\r\n                <label>Navn</label>\r\n                <input type=\"text\" class=\"form-control\" value.bind=\"name\" placeholder=\"Navn\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/alarms/list":
/*!**********************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/alarms/list.ts ***!
  \**********************************************************************/
/*! exports provided: AlarmsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmsList", function() { return AlarmsList; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
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


var AlarmsList = /** @class */ (function () {
    function AlarmsList(api) {
        this.api = api;
    }
    AlarmsList.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAlarmFeeds().transfer()];
                    case 1:
                        _a.feeds = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlarmsList = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], AlarmsList);
    return AlarmsList;
}());



/***/ }),

/***/ "settings/alarms/list.html":
/*!***************************************!*\
  !*** ./src/settings/alarms/list.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"create\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faArrowRight\"></require><require from=\"@fortawesome/free-solid-svg-icons/faPlus\"></require><font-awesome-icon icon.bind=\"'plus' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <table class=\"table\" if.bind=\"feeds.length\">\r\n            <tr repeat.for=\"feed of feeds\">\r\n                <td style=\"width: 100%\">${feed.name}</td>\r\n                <td>\r\n                    <a route-href=\"route: edit; params.bind: { alarmFeedId: feed.id }\" class=\"btn btn-light btn-sm\"><font-awesome-icon icon.bind=\"'arrow-right' & fontawesome\"></font-awesome-icon></a>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <empty-hint else>\r\n            Der er ingen alarmer opsat, klik <a route-href=\"create\">her</a> for at oprette den første.\r\n        </empty-hint>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/pointofsales/add-product-dialog":
/*!*********************************************************!*\
  !*** ./src/settings/pointofsales/add-product-dialog.ts ***!
  \*********************************************************/
/*! exports provided: AddProductDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductDialog", function() { return AddProductDialog; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dialog */ "aurelia-dialog");
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



var AddProductDialog = /** @class */ (function () {
    function AddProductDialog(controller, api) {
        this.controller = controller;
        this.api = api;
    }
    AddProductDialog.prototype.canActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllProducts().transfer()];
                    case 1:
                        _a.products = _b.sent();
                        return [2 /*return*/, !!this.products.length];
                }
            });
        });
    };
    AddProductDialog.prototype.activate = function () {
        this.product = this.products[0];
    };
    AddProductDialog.prototype.close = function () {
        this.controller.cancel();
    };
    AddProductDialog.prototype.submit = function () {
        this.controller.ok(this.product);
    };
    AddProductDialog = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["useView"])("settings/pointofsales/add-product-dialog.html"),
        __metadata("design:paramtypes", [aurelia_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogController"], _api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], AddProductDialog);
    return AddProductDialog;
}());



/***/ }),

/***/ "settings/pointofsales/add-product-dialog.html":
/*!***********************************************************!*\
  !*** ./src/settings/pointofsales/add-product-dialog.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <form submit.delegate=\"submit()\">\r\n        <ux-dialog>\r\n            <ux-dialog-header>\r\n                <button type=\"button\" class=\"close\" click.delegate=\"close()\"><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon></button>\r\n                Tilføj produkt\r\n            </ux-dialog-header>\r\n            <ux-dialog-body>\r\n                <select class=\"form-control\" value.bind=\"product\">\r\n                    <option repeat.for=\"product of products\" model.bind=\"product\">${product.name}</option>\r\n                </select>\r\n            </ux-dialog-body>\r\n            <ux-dialog-footer>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Tilføj</button>\r\n            </ux-dialog-footer>\r\n        </ux-dialog>\r\n    </form>\r\n</template>";

/***/ }),

/***/ "settings/pointofsales/details":
/*!*******************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/pointofsales/details.ts ***!
  \*******************************************************************************/
/*! exports provided: PointOfSaleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfSaleDetails", function() { return PointOfSaleDetails; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dialog */ "aurelia-dialog");
/* harmony import */ var ur_jsonpatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ur-jsonpatch */ "./node_modules/ur-jsonpatch/dist/esm/index.js");
/* harmony import */ var _move_before__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../move-before */ "./src/move-before.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _add_product_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product-dialog */ "settings/pointofsales/add-product-dialog");
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







var PointOfSaleDetails = /** @class */ (function () {
    function PointOfSaleDetails(api, router, dialog) {
        this.api = api;
        this.router = router;
        this.dialog = dialog;
    }
    PointOfSaleDetails.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.pointOfSaleId = Number(params.pointOfSaleId);
                        _a = this;
                        return [4 /*yield*/, this.api.getPointOfSale(this.pointOfSaleId).transfer()];
                    case 1:
                        _a.pointOfSale = _c.sent();
                        this.name = this.pointOfSale.name;
                        _b = this;
                        return [4 /*yield*/, this.api.getProductsByPointOfSaleId(this.pointOfSaleId).transfer()];
                    case 2:
                        _b.currentProducts = _c.sent();
                        this.products = this.currentProducts.slice();
                        return [2 /*return*/];
                }
            });
        });
    };
    PointOfSaleDetails.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Skal salgsstedet slettes?")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.deletePointOfSale(this.pointOfSale.id).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PointOfSaleDetails.prototype.addProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialog.open({ viewModel: _add_product_dialog__WEBPACK_IMPORTED_MODULE_6__["AddProductDialog"] }).whenClosed()];
                    case 1:
                        result = _a.sent();
                        if (!result.wasCancelled) {
                            product = result.output;
                            this.products.push(product);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PointOfSaleDetails.prototype.removeProduct = function (index) {
        this.products.splice(index, 1);
    };
    PointOfSaleDetails.prototype.itemDropped = function (itemElement, siblingElement) {
        var item = this.products[Number(itemElement.dataset.index)];
        var sibling = siblingElement ? this.products[Number(siblingElement.dataset.index)] : undefined;
        Object(_move_before__WEBPACK_IMPORTED_MODULE_4__["moveBefore"])(this.products, function (x) { return x === item; }, function (x) { return x === sibling; });
    };
    PointOfSaleDetails.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var operations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operations = Object(ur_jsonpatch__WEBPACK_IMPORTED_MODULE_3__["diff"])(this.currentProducts, this.products);
                        return [4 /*yield*/, this.api.updateProductsByPointOfSaleId(this.pointOfSale.id, operations).transfer()];
                    case 1:
                        _a.sent();
                        this.currentProducts = this.products;
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    PointOfSaleDetails = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_5__["Router"], aurelia_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], PointOfSaleDetails);
    return PointOfSaleDetails;
}());



/***/ }),

/***/ "settings/pointofsales/details.html":
/*!************************************************!*\
  !*** ./src/settings/pointofsales/details.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"list\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><require from=\"@fortawesome/free-solid-svg-icons/faPlus\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><require from=\"@fortawesome/free-solid-svg-icons/faEdit\"></require><require from=\"@fortawesome/free-solid-svg-icons/faList\"></require><font-awesome-icon icon.bind=\"'list' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"route:edit; params.bind: { pointOfSaleId }\" class=\"nav-link\"><font-awesome-icon icon.bind=\"'edit' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a href click.delegate=\"delete()\" class=\"nav-link text-danger\"><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <h1>${name}</h1>\r\n\r\n        <form submit.delegate=\"submit()\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"btn btn-secondary float-right\" click.delegate=\"addProduct()\"><font-awesome-icon icon.bind=\"'plus' & fontawesome\"></font-awesome-icon></button>\r\n                    <h4>Produkter</h4>\r\n                </div>\r\n                <div class=\"card-body\" if.bind=\"products.length\">\r\n                    <dragula-and-drop drop-fn.call=\"itemDropped(item, sibling)\"></dragula-and-drop>\r\n                    <table class=\"table\">\r\n                        <tbody class=\"drag-source drop-target\">\r\n                            <tr repeat.for=\"product of products\" data-index.bind=\"$index\">\r\n                                <td style=\"width: 100%\">${product.name}</td>\r\n                                <td style=\"white-space: nowrap\"><button type=\"button\" class=\"btn btn-danger btn-sm\" click.delegate=\"removeProduct($index)\"><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Fjern</button></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"card-body\" else>\r\n                    Der er ingen produkter tilknyttet salgsstedet\r\n                </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\"><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/pointofsales/edit":
/*!****************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/pointofsales/edit.ts ***!
  \****************************************************************************/
/*! exports provided: EditPointOfSale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPointOfSale", function() { return EditPointOfSale; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ur-jsonpatch */ "./node_modules/ur-jsonpatch/dist/esm/index.js");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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




var EditPointOfSale = /** @class */ (function () {
    function EditPointOfSale(api, router) {
        this.api = api;
        this.router = router;
    }
    Object.defineProperty(EditPointOfSale.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    EditPointOfSale.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var pos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pointOfSaleId = Number(params.pointOfSaleId);
                        return [4 /*yield*/, this.api.getPointOfSale(this.pointOfSaleId).transfer()];
                    case 1:
                        pos = _a.sent();
                        this.name = pos.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPointOfSale.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patch = new ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__["Patch"]()
                            .replace(function (x) { return x.name; }, this.name);
                        return [4 /*yield*/, this.api.updatePointOfSale(this.pointOfSaleId, patch.operations).transfer()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("details", { pointOfSaleId: this.pointOfSaleId });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPointOfSale = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditPointOfSale);
    return EditPointOfSale;
}());



/***/ }),

/***/ "settings/pointofsales/edit.html":
/*!*********************************************!*\
  !*** ./src/settings/pointofsales/edit.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar></top-navbar>\r\n    <page-body>\r\n        <form submit.delegate=\"submit()\">\r\n            <div class=\"form-group\">\r\n                <label>Navn</label>\r\n                <input type=\"text\" class=\"form-control\" value.bind=\"name\" placeholder=\"Navn\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\" disabled.bind=\"!canSubmit\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/pointofsales/list":
/*!****************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/pointofsales/list.ts ***!
  \****************************************************************************/
/*! exports provided: PointOfSalesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfSalesList", function() { return PointOfSalesList; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
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


var PointOfSalesList = /** @class */ (function () {
    function PointOfSalesList(api) {
        this.api = api;
    }
    PointOfSalesList.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllPointOfSales().transfer()];
                    case 1:
                        _a.pointOfSales = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PointOfSalesList = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], PointOfSalesList);
    return PointOfSalesList;
}());



/***/ }),

/***/ "settings/pointofsales/list.html":
/*!*********************************************!*\
  !*** ./src/settings/pointofsales/list.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"create\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faArrowRight\"></require><require from=\"@fortawesome/free-solid-svg-icons/faPlus\"></require><font-awesome-icon icon.bind=\"'plus' & fontawesome\"></font-awesome-icon></a>                \r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <table class=\"table\" if.bind=\"pointOfSales.length\">\r\n            <tr repeat.for=\"pos of pointOfSales\">\r\n                <td style=\"width: 100%\">${pos.name}</td>\r\n                <td>\r\n                    <a route-href=\"route: details; params.bind: { pointOfSaleId: pos.id }\" class=\"btn btn-light btn-sm\"><font-awesome-icon icon.bind=\"'arrow-right' & fontawesome\"></font-awesome-icon></a>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <empty-hint else>\r\n            Der er ingen salgssteder\r\n        </empty-hint>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/products/edit":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/products/edit.ts ***!
  \************************************************************************/
/*! exports provided: EditProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProduct", function() { return EditProduct; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ur-jsonpatch */ "./node_modules/ur-jsonpatch/dist/esm/index.js");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
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





var EditProduct = /** @class */ (function () {
    function EditProduct(api, router) {
        this.api = api;
        this.router = router;
    }
    Object.defineProperty(EditProduct.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    EditProduct.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productId = Number(params.productId);
                        return [4 /*yield*/, this.api.getProduct(this.productId).transfer()];
                    case 1:
                        product = _a.sent();
                        this.name = product.name;
                        this.price = product.price.toFixed(2);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProduct.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Skal produktet slettes?")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.deleteProduct(this.productId).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProduct.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patch = new ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__["Patch"]()
                            .replace(function (x) { return x.name; }, this.name)
                            .replace(function (x) { return x.price; }, new big_js__WEBPACK_IMPORTED_MODULE_4__["Big"](this.price));
                        return [4 /*yield*/, this.api.updateProduct(this.productId, patch.operations).transfer()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProduct = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditProduct);
    return EditProduct;
}());



/***/ }),

/***/ "settings/products/edit.html":
/*!*****************************************!*\
  !*** ./src/settings/products/edit.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\" if.bind=\"delete\">\r\n                <a href click.delegate=\"delete()\" class=\"nav-link text-danger\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <form submit.delegate=\"submit()\">\r\n            <div class=\"form-group\">\r\n                <label>Navn</label>\r\n                <input type=\"text\" class=\"form-control\" value.bind=\"name\" placeholder=\"Navn\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Pris</label>\r\n                <input type=\"number\" class=\"form-control\" value.bind=\"price\" min=\"0\" step=\"0.01\" placeholder=\"Pris\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/products/list":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/products/list.ts ***!
  \************************************************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dialog */ "aurelia-dialog");
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



var ProductList = /** @class */ (function () {
    function ProductList(api, dialog) {
        this.api = api;
        this.dialog = dialog;
    }
    ProductList.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllProducts().transfer()];
                    case 1:
                        _a.products = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductList = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "settings/products/list.html":
/*!*****************************************!*\
  !*** ./src/settings/products/list.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"create\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faArrowRight\"></require><require from=\"@fortawesome/free-solid-svg-icons/faPlus\"></require><font-awesome-icon icon.bind=\"'plus' & fontawesome\"></font-awesome-icon></a>                \r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <table class=\"table\" if.bind=\"products.length\">\r\n            <thead>\r\n                <tr>\r\n                    <th></th>\r\n                    <th>Navn</th>\r\n                    <th>Salgspris</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tr repeat.for=\"product of products\">\r\n                <td>Billede</td>\r\n                <td style=\"width: 100%\">${product.name}</td>\r\n                <td class=\"text-right\">${product.price | money}</td>\r\n                <td class=\"text-right\">\r\n                    <a route-href=\"route: edit; params.bind: { productId: product.id }\" class=\"btn btn-light btn-sm\"><font-awesome-icon icon.bind=\"'arrow-right' & fontawesome\"></font-awesome-icon></a>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <empty-hint else>\r\n            Der er ingen produkter\r\n        </empty-hint>\r\n    </page-body>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmUtYmVmb3JlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9lZGl0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2xpc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvYWRkLXByb2R1Y3QtZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvYWRkLXByb2R1Y3QtZGlhbG9nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9kZXRhaWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvZWRpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvbGlzdC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDeEI7QUFDUTtBQUNYO0FBSzdCO0lBVUksdUJBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnBELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsY0FBUyxHQUFHLEdB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ZTtBQUkvQztJQUdJLHFCQUFvQixHQUFRLEVBQVUsTUFBcUI7UUFBdkMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDM0QsQ0FBQztJQUVLLDhCQUFRLEdBQWQ7Ozs7Ozt3QkFDSSxTQUFJO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFOzt3QkFBMUQsR0FBSyxRQUFRLEdBQUcsU0FBMEMsQ0FBQzs7Ozs7S0FDOUQ7SUFSUSxXQUFXO1FBRHZCLG9FQUFVLEVBQUU7eUNBSWdCLHdDQUFHLEVBQWtCLDREQUFhO09BSGxELFdBQVcsQ0FTdkI7SUFBRCxrQkFBQztDQUFBO0FBVHVCOzs7Ozs7Ozs7Ozs7QUNOeEIsbTdCQUFtN0IsYUFBYSxvREFBb0Qsc0JBQXNCLHNHQUFzRyxlQUFlLHdCQUF3QiwwVCIsImZpbGUiOiJzZXR0aW5ncy4yZDQ4NTIzMDY1ZGY2OGUxYTY0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIHVzZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4uLy4uL2FwaS9hY2NvdW50XCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUFjY291bnQge1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50cyE6IEFjY291bnRbXTtcclxuICAgIG51bWJlciA9IDA7XHJcbiAgICBuYW1lID0gXCJcIjtcclxuICAgIG1heENyZWRpdCA9IFwiMFwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyID4gMCAmJiAhIXRoaXMubmFtZS5sZW5ndGggJiYgdGhpcy5hY2NvdW50cyAmJiB0aGlzLmFjY291bnRzLmZpbmRJbmRleCh4ID0+IHgubnVtYmVyID09PSB0aGlzLm51bWJlcikgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWNjb3VudHMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlQWNjb3VudCh7IG51bWJlcjogdGhpcy5udW1iZXIsIG5hbWU6IHRoaXMubmFtZSwgbWF4Q3JlZGl0OiBuZXcgQmlnKHRoaXMubWF4Q3JlZGl0KSB9KS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImRldGFpbHNcIiwge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnQuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGF1dG9pbmplY3QsIHVzZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQHVzZVZpZXcoXCIuL2VkaXQuaHRtbFwiKVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWxhcm1GZWVkIHtcclxuICAgIG5hbWUgPSBcIlwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLmNyZWF0ZUFsYXJtRmVlZCh7IG5hbWU6IHRoaXMubmFtZSB9KS5zZW5kKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGF1dG9pbmplY3QsIHVzZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQHVzZVZpZXcoXCIuL2VkaXQuaHRtbFwiKVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9pbnRPZlNhbGUge1xyXG4gICAgbmFtZSA9IFwiXCI7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlUG9pbnRPZlNhbGUoeyBuYW1lOiB0aGlzLm5hbWUgfSkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJkZXRhaWxzXCIsIHtcclxuICAgICAgICAgICAgcG9pbnRPZlNhbGVJZDogcG9zLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QsIHVzZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQHVzZVZpZXcoXCIuL2VkaXQuaHRtbFwiKVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlUHJvZHVjdCB7XHJcbiAgICBuYW1lID0gXCJcIjtcclxuICAgIHByaWNlID0gXCIwXCI7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVByb2R1Y3QoeyBuYW1lOiB0aGlzLm5hbWUsIHByaWNlOiBuZXcgQmlnKHRoaXMucHJpY2UpIH0pLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb3ZlQmVmb3JlPFQ+KGFycmF5OiBUW10sIGl0ZW1NYXRjaGVyRm46IChpdGVtOiBUKSA9PiBib29sZWFuLCBzaWJsaW5nTWF0Y2hlckZuOiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgY29uc3QgcmVtb3ZlZEl0ZW0gPSByZW1vdmUoYXJyYXksIGl0ZW1NYXRjaGVyRm4pO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYXJyYXkuZmluZEluZGV4KHNpYmxpbmdNYXRjaGVyRm4pO1xyXG4gICAgY29uc3QgaXRlbXMgPSByZW1vdmVkSXRlbSA/IFtyZW1vdmVkSXRlbV0gOiBbXTtcclxuICAgIGFycmF5LnNwbGljZShuZXh0SW5kZXggPj0gMCA/IG5leHRJbmRleCA6IGFycmF5Lmxlbmd0aCwgMCwgLi4uaXRlbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmU8VD4oYXJyYXk6IFRbXSwgbWF0Y2hlckZuOiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5maW5kSW5kZXgobWF0Y2hlckZuKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnNwbGljZShpbmRleCwgMSlbMF07XHJcbiAgICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2VkaXQnO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwNDQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000MDIuNiA4My4ybDkwLjIgOTAuMmMzLjggMy44IDMuOCAxMCAwIDEzLjhMMjc0LjQgNDA1LjZsLTkyLjggMTAuM2MtMTIuNCAxLjQtMjIuOS05LjEtMjEuNS0yMS41bDEwLjMtOTIuOEwzODguOCA4My4yYzMuOC0zLjggMTAtMy44IDEzLjggMHptMTYyLTIyLjlsLTQ4LjgtNDguOGMtMTUuMi0xNS4yLTM5LjktMTUuMi01NS4yIDBsLTM1LjQgMzUuNGMtMy44IDMuOC0zLjggMTAgMCAxMy44bDkwLjIgOTAuMmMzLjggMy44IDEwIDMuOCAxMy44IDBsMzUuNC0zNS40YzE1LjItMTUuMyAxNS4yLTQwIDAtNTUuMnpNMzg0IDM0Ni4yVjQ0OEg2NFYxMjhoMjI5LjhjMy4yIDAgNi4yLTEuMyA4LjUtMy41bDQwLTQwYzcuNi03LjYgMi4yLTIwLjUtOC41LTIwLjVINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYzMDYuMmMwLTEwLjctMTIuOS0xNi0yMC41LTguNWwtNDAgNDBjLTIuMiAyLjMtMy41IDUuMy0zLjUgOC41eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUVkaXQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnbGlzdCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAzYSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTEyOCAxMTZWNzZjMC04LjgzNyA3LjE2My0xNiAxNi0xNmgzNTJjOC44MzcgMCAxNiA3LjE2MyAxNiAxNnY0MGMwIDguODM3LTcuMTYzIDE2LTE2IDE2SDE0NGMtOC44MzcgMC0xNi03LjE2My0xNi0xNnptMTYgMTc2aDM1MmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE0NGMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGgzNTJjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNDRjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnpNMTYgMTQ0aDY0YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNjRjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA0OCAwIDU1LjE2MyAwIDY0djY0YzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDY0YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTY0YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NjRjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNjRjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNjRjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY2NGMwIDguODM3IDcuMTYzIDE2IDE2IDE2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUxpc3QgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndGltZXMnO1xudmFyIHdpZHRoID0gMzUyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFUaW1lcyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFBvaW50T2ZTYWxlIH0gZnJvbSBcIi4uLy4uL2FwaS9wb2ludC1vZi1zYWxlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudERldGFpbHMge1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50ITogUG9pbnRPZlNhbGU7XHJcbiAgICBhY2NvdW50SWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgYWNjb3VudElkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gTnVtYmVyKHBhcmFtcy5hY2NvdW50SWQpO1xyXG5cclxuICAgICAgICB0aGlzLmFjY291bnQgPSBhd2FpdCB0aGlzLmFwaS5nZXRBY2NvdW50KHRoaXMuYWNjb3VudElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuYWNjb3VudC5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIlNrYWwga29udG9lbiBzbGV0dGVzP1wiKSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVBY2NvdW50KHRoaXMuYWNjb3VudC5pZCkuc2VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwibGlzdFxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUVkaXRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFMaXN0XFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2xpc3QnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOmVkaXQ7IHBhcmFtcy5iaW5kOiB7IGFjY291bnRJZCB9XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidlZGl0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoKVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rIHRleHQtZGFuZ2VyXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8aDE+JHtuYW1lfTwvaDE+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFBhdGNoIH0gZnJvbSBcInVyLWpzb25wYXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuLi8uLi9hcGkvYWNjb3VudFwiO1xyXG5pbXBvcnQge0JpZ30gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRWRpdEFjY291bnQge1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50SWQhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFjY291bnRzITogQWNjb3VudFtdO1xyXG4gICAgbnVtYmVyITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuICAgIG1heENyZWRpdCE6IEJpZztcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlciA+IDAgJiYgISF0aGlzLm5hbWUubGVuZ3RoICYmIHRoaXMuYWNjb3VudHMuZmluZEluZGV4KHggPT4geC5pZCAhPT0gdGhpcy5hY2NvdW50SWQgJiYgeC5udW1iZXIgPT09IHRoaXMubnVtYmVyKSA9PT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBhY2NvdW50SWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBOdW1iZXIocGFyYW1zLmFjY291bnRJZCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuYXBpLmdldEFjY291bnQodGhpcy5hY2NvdW50SWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm51bWJlciA9IGFjY291bnQubnVtYmVyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGFjY291bnQubmFtZTtcclxuICAgICAgICB0aGlzLm1heENyZWRpdCA9IGFjY291bnQubWF4Q3JlZGl0O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwYXRjaCA9IG5ldyBQYXRjaDxBY2NvdW50PigpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5udW1iZXIsIHRoaXMubnVtYmVyKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubmFtZSwgdGhpcy5uYW1lKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubWF4Q3JlZGl0LCB0aGlzLm1heENyZWRpdCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZUFjY291bnQodGhpcy5hY2NvdW50SWQsIHBhdGNoLm9wZXJhdGlvbnMpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwiZGV0YWlsc1wiLCB7IGFjY291bnRJZDogdGhpcy5hY2NvdW50SWQgfSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPk51bW1lcjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm51bWJlciB8IG51bWJlclxcXCIgc3RlcD1cXFwiMVxcXCIgcGxhY2Vob2xkZXI9XFxcIk51bW1lclxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYXZuPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXZuXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPktyZWRpdG1ha3M8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJtYXhDcmVkaXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJLcmVkaXRtYWtzXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuU3VibWl0XFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3NhdmUnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEdlbTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudHNMaXN0IHtcclxuICAgIGFjY291bnRzITogQWNjb3VudFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWNjb3VudHMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlc2V0Q3JlZGl0KCkge1xyXG4gICAgICAgIGlmIChwcm9tcHQoXCJTa2FsIHJlc3RlcmVuZGUga3JlZGl0IHPDpnR0ZXMgdGlsIG1ha3Mga3JlZGl0IGZvciBhbGxlIGtvbnRpPyBTa3JpdiAnSkEnIGZvciBhdCBiZWtyw6ZmdGVcIikgPT09IFwiSkFcIikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwaS5yZXNldEFsbEFjY291bnRzKCkuc2VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWNjb3VudHMoKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEFjY291bnRWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+ICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8ZGl2IGlmLmJpbmQ9XFxcImFjY291bnRzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD4mI3gyMTE2OzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+TmF2bjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+TWFrczwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImFjY291bnQgb2YgYWNjb3VudHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7YWNjb3VudC5udW1iZXJ9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7YWNjb3VudC5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke2FjY291bnQubWF4Q3JlZGl0IHwgbW9uZXl9IGtyLjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwicm91dGU6IGRldGFpbHM7IHBhcmFtcy5iaW5kOiB7IGFjY291bnRJZDogYWNjb3VudC5pZCB9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tc21cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidhcnJvdy1yaWdodCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1ibG9ja1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcInJlc2V0Q3JlZGl0KClcXFwiPlPDpnQgYWxsZSBrb250aSB0aWwga3JlZGl0bWFrczwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgICAgIERlciBlciBpbmdlbiBrb250aVxcclxcbiAgICAgICAgPC9lbXB0eS1oaW50PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFsYXJtRmVlZCB9IGZyb20gXCIuLi8uLi9hcGkvYWxhcm1zXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0QWxhcm0ge1xyXG4gICAgcHJpdmF0ZSBhbGFybUZlZWRJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgYWxhcm1GZWVkSWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5hbGFybUZlZWRJZCA9IE51bWJlcihwYXJhbXMuYWxhcm1GZWVkSWQpO1xyXG4gICAgICAgIGNvbnN0IGZlZWQgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGFybUZlZWQodGhpcy5hbGFybUZlZWRJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmZWVkLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiU2thbCBhbGFybWVuIHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZUFsYXJtRmVlZCh0aGlzLmFsYXJtRmVlZElkKS5zZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwYXRjaCA9IG5ldyBQYXRjaDxBbGFybUZlZWQ+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZUFsYXJtRmVlZCh0aGlzLmFsYXJtRmVlZElkLCBwYXRjaC5vcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgaWYuYmluZD1cXFwiZGVsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKClcXFwiIGNsYXNzPVxcXCJuYXYtbGluayB0ZXh0LWRhbmdlclxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RyYXNoJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYXZuPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXZuXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuU3VibWl0XFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBbGFybXNMaXN0IHtcclxuICAgIGZlZWRzITogQWxhcm1GZWVkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuZmVlZHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBbGFybUZlZWRzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEFsYXJtRmVlZCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIGlmLmJpbmQ9XFxcImZlZWRzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImZlZWQgb2YgZmVlZHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke2ZlZWQubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogZWRpdDsgcGFyYW1zLmJpbmQ6IHsgYWxhcm1GZWVkSWQ6IGZlZWQuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4gYWxhcm1lciBvcHNhdCwga2xpayA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiPmhlcjwvYT4gZm9yIGF0IG9wcmV0dGUgZGVuIGbDuHJzdGUuXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCwgdXNlVmlldywgUExBVEZPUk0sIHZpZXdTdHJhdGVneSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgRGlhbG9nQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLWRpYWxvZ1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AdXNlVmlldyhcInNldHRpbmdzL3BvaW50b2ZzYWxlcy9hZGQtcHJvZHVjdC1kaWFsb2cuaHRtbFwiKVxyXG5leHBvcnQgY2xhc3MgQWRkUHJvZHVjdERpYWxvZyB7XHJcbiAgICBwcm9kdWN0cyE6IFByb2R1Y3RWaWV3TW9kZWxbXTtcclxuICAgIHByb2R1Y3QhOiBQcm9kdWN0Vmlld01vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlciwgcHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQcm9kdWN0cygpLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAhIXRoaXMucHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHRoaXMucHJvZHVjdHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIub2sodGhpcy5wcm9kdWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RWaWV3TW9kZWwgZXh0ZW5kcyBQcm9kdWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPHV4LWRpYWxvZz5cXHJcXG4gICAgICAgICAgICA8dXgtZGlhbG9nLWhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNsb3NlKClcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RpbWVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICBUaWxmw7hqIHByb2R1a3RcXHJcXG4gICAgICAgICAgICA8L3V4LWRpYWxvZy1oZWFkZXI+XFxyXFxuICAgICAgICAgICAgPHV4LWRpYWxvZy1ib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcInByb2R1Y3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiByZXBlYXQuZm9yPVxcXCJwcm9kdWN0IG9mIHByb2R1Y3RzXFxcIiBtb2RlbC5iaW5kPVxcXCJwcm9kdWN0XFxcIj4ke3Byb2R1Y3QubmFtZX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC91eC1kaWFsb2ctYm9keT5cXHJcXG4gICAgICAgICAgICA8dXgtZGlhbG9nLWZvb3Rlcj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlRpbGbDuGo8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3V4LWRpYWxvZy1mb290ZXI+XFxyXFxuICAgICAgICA8L3V4LWRpYWxvZz5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiYXVyZWxpYS1kaWFsb2dcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9hcGkvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBkaWZmIH0gZnJvbSBcInVyLWpzb25wYXRjaFwiO1xyXG5pbXBvcnQgeyBQb2ludE9mU2FsZSB9IGZyb20gXCIuLi8uLi9hcGkvcG9pbnQtb2Ytc2FsZVwiO1xyXG5pbXBvcnQgeyBtb3ZlQmVmb3JlIH0gZnJvbSBcIi4uLy4uL21vdmUtYmVmb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBZGRQcm9kdWN0RGlhbG9nIH0gZnJvbSBcIi4vYWRkLXByb2R1Y3QtZGlhbG9nXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQb2ludE9mU2FsZURldGFpbHMge1xyXG4gICAgcHJpdmF0ZSBwb2ludE9mU2FsZSE6IFBvaW50T2ZTYWxlO1xyXG4gICAgcG9pbnRPZlNhbGVJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0cyE6IFByb2R1Y3RbXTtcclxuICAgIHByb2R1Y3RzITogUHJvZHVjdFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhbG9nOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IHBvaW50T2ZTYWxlSWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5wb2ludE9mU2FsZUlkID0gTnVtYmVyKHBhcmFtcy5wb2ludE9mU2FsZUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludE9mU2FsZSA9IGF3YWl0IHRoaXMuYXBpLmdldFBvaW50T2ZTYWxlKHRoaXMucG9pbnRPZlNhbGVJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnBvaW50T2ZTYWxlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZHVjdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRQcm9kdWN0c0J5UG9pbnRPZlNhbGVJZCh0aGlzLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFsuLi50aGlzLmN1cnJlbnRQcm9kdWN0c107XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiU2thbCBzYWxnc3N0ZWRldCBzbGV0dGVzP1wiKSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVQb2ludE9mU2FsZSh0aGlzLnBvaW50T2ZTYWxlLmlkKS5zZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZFByb2R1Y3QoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kaWFsb2cub3Blbih7IHZpZXdNb2RlbDogQWRkUHJvZHVjdERpYWxvZyB9KS53aGVuQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gcmVzdWx0Lm91dHB1dCBhcyBQcm9kdWN0O1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2R1Y3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtRHJvcHBlZChpdGVtRWxlbWVudDogSFRNTEVsZW1lbnQsIHNpYmxpbmdFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnByb2R1Y3RzW051bWJlcihpdGVtRWxlbWVudC5kYXRhc2V0LmluZGV4KV07XHJcbiAgICAgICAgY29uc3Qgc2libGluZyA9IHNpYmxpbmdFbGVtZW50ID8gdGhpcy5wcm9kdWN0c1tOdW1iZXIoc2libGluZ0VsZW1lbnQuZGF0YXNldC5pbmRleCldIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIG1vdmVCZWZvcmUodGhpcy5wcm9kdWN0cywgeCA9PiB4ID09PSBpdGVtLCB4ID0+IHggPT09IHNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBvcGVyYXRpb25zID0gZGlmZih0aGlzLmN1cnJlbnRQcm9kdWN0cywgdGhpcy5wcm9kdWN0cyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlUHJvZHVjdHNCeVBvaW50T2ZTYWxlSWQodGhpcy5wb2ludE9mU2FsZS5pZCwgb3BlcmF0aW9ucykudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RWaWV3TW9kZWwgZXh0ZW5kcyBQcm9kdWN0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImxpc3RcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1c1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRWRpdFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUxpc3RcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInbGlzdCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwicm91dGU6ZWRpdDsgcGFyYW1zLmJpbmQ6IHsgcG9pbnRPZlNhbGVJZCB9XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidlZGl0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoKVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rIHRleHQtZGFuZ2VyXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8aDE+JHtuYW1lfTwvaDE+XFxyXFxuXFxyXFxuICAgICAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1yaWdodFxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImFkZFByb2R1Y3QoKVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3BsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQ+UHJvZHVrdGVyPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgaWYuYmluZD1cXFwicHJvZHVjdHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkcmFndWxhLWFuZC1kcm9wIGRyb3AtZm4uY2FsbD1cXFwiaXRlbURyb3BwZWQoaXRlbSwgc2libGluZylcXFwiPjwvZHJhZ3VsYS1hbmQtZHJvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwiZHJhZy1zb3VyY2UgZHJvcC10YXJnZXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwicHJvZHVjdCBvZiBwcm9kdWN0c1xcXCIgZGF0YS1pbmRleC5iaW5kPVxcXCIkaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtwcm9kdWN0Lm5hbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2hpdGUtc3BhY2U6IG5vd3JhcFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJyZW1vdmVQcm9kdWN0KCRpbmRleClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aW1lcycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gRmplcm48L2J1dHRvbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIiBlbHNlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgRGVyIGVyIGluZ2VuIHByb2R1a3RlciB0aWxrbnl0dGV0IHNhbGdzc3RlZGV0XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUG9pbnRPZlNhbGUgfSBmcm9tIFwiLi4vLi4vYXBpL3BvaW50LW9mLXNhbGVcIjtcclxuaW1wb3J0IHsgUGF0Y2ggfSBmcm9tIFwidXItanNvbnBhdGNoXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFBvaW50T2ZTYWxlIHtcclxuICAgIHByaXZhdGUgcG9pbnRPZlNhbGVJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgcG9pbnRPZlNhbGVJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLnBvaW50T2ZTYWxlSWQgPSBOdW1iZXIocGFyYW1zLnBvaW50T2ZTYWxlSWQpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGF3YWl0IHRoaXMuYXBpLmdldFBvaW50T2ZTYWxlKHRoaXMucG9pbnRPZlNhbGVJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwb3MubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0Y2ggPSBuZXcgUGF0Y2g8UG9pbnRPZlNhbGU+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZVBvaW50T2ZTYWxlKHRoaXMucG9pbnRPZlNhbGVJZCwgcGF0Y2gub3BlcmF0aW9ucykudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJkZXRhaWxzXCIsIHsgcG9pbnRPZlNhbGVJZDogdGhpcy5wb2ludE9mU2FsZUlkIH0pO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+PC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYXZuPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXZuXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuU3VibWl0XFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3NhdmUnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEdlbTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUG9pbnRPZlNhbGVzTGlzdCB7XHJcbiAgICBwb2ludE9mU2FsZXMhOiBQb2ludE9mU2FsZVZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnBvaW50T2ZTYWxlcyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFBvaW50T2ZTYWxlcygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb2ludE9mU2FsZVZpZXdNb2RlbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+ICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBpZi5iaW5kPVxcXCJwb2ludE9mU2FsZXMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwicG9zIG9mIHBvaW50T2ZTYWxlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7cG9zLm5hbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwicm91dGU6IGRldGFpbHM7IHBhcmFtcy5iaW5kOiB7IHBvaW50T2ZTYWxlSWQ6IHBvcy5pZCB9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tc21cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidhcnJvdy1yaWdodCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgICAgIERlciBlciBpbmdlbiBzYWxnc3N0ZWRlclxcclxcbiAgICAgICAgPC9lbXB0eS1oaW50PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2R1Y3Qge1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0SWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG4gICAgcHJpY2UhOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgcHJvZHVjdElkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKHBhcmFtcy5wcm9kdWN0SWQpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0aGlzLmFwaS5nZXRQcm9kdWN0KHRoaXMucHJvZHVjdElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIlNrYWwgcHJvZHVrdGV0IHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZVByb2R1Y3QodGhpcy5wcm9kdWN0SWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGNoID0gbmV3IFBhdGNoPFByb2R1Y3Q+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4LnByaWNlLCBuZXcgQmlnKHRoaXMucHJpY2UpKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlUHJvZHVjdCh0aGlzLnByb2R1Y3RJZCwgcGF0Y2gub3BlcmF0aW9ucykudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIGlmLmJpbmQ9XFxcImRlbGV0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xpY2suZGVsZWdhdGU9XFxcImRlbGV0ZSgpXFxcIiBjbGFzcz1cXFwibmF2LWxpbmsgdGV4dC1kYW5nZXJcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF2bjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF2blxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5QcmlzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwicHJpY2VcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMC4wMVxcXCIgcGxhY2Vob2xkZXI9XFxcIlByaXNcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCJhdXJlbGlhLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdCB7XHJcbiAgICBwcm9kdWN0cyE6IFByb2R1Y3RWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIGRpYWxvZzogRGlhbG9nU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQcm9kdWN0cygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcmljZTogQmlnO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+ICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBpZi5iaW5kPVxcXCJwcm9kdWN0cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+TmF2bjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+U2FsZ3NwcmlzPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcInByb2R1Y3Qgb2YgcHJvZHVjdHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+QmlsbGVkZTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7cHJvZHVjdC5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+JHtwcm9kdWN0LnByaWNlIHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBlZGl0OyBwYXJhbXMuYmluZDogeyBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4gcHJvZHVrdGVyXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==