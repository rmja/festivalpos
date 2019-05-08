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

/***/ "./node_modules/ts-loader/index.js?!./src/settings/terminals/create.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/terminals/create.ts ***!
  \***************************************************************************/
/*! exports provided: CreateTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTerminal", function() { return CreateTerminal; });
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



var CreateTerminal = /** @class */ (function () {
    function CreateTerminal(api, router) {
        this.api = api;
        this.router = router;
        this.name = "";
    }
    Object.defineProperty(CreateTerminal.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    CreateTerminal.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.createTerminal({ name: this.name }).transfer()];
                    case 1:
                        terminal = _a.sent();
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTerminal = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["useView"])("./edit.html"),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateTerminal);
    return CreateTerminal;
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

/***/ "async!settings/accounts/create":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/accounts/create.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./create.ts */ "./node_modules/ts-loader/index.js?!./src/settings/accounts/create.ts"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/accounts/details":
/*!******************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/accounts/details.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./details.ts */ "settings/accounts/details"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/accounts/edit":
/*!***************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/accounts/edit.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./edit.ts */ "settings/accounts/edit"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/accounts/list":
/*!***************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/accounts/list.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./list.ts */ "settings/accounts/list"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/alarms/create":
/*!***************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/alarms/create.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./create.ts */ "./node_modules/ts-loader/index.js?!./src/settings/alarms/create.ts"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/alarms/edit":
/*!*************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/alarms/edit.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./edit.ts */ "settings/alarms/edit"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/alarms/list":
/*!*************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/alarms/list.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./list.ts */ "settings/alarms/list"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/pointofsales/create":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/pointofsales/create.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./create.ts */ "./node_modules/ts-loader/index.js?!./src/settings/pointofsales/create.ts"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/pointofsales/details":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/pointofsales/details.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./details.ts */ "settings/pointofsales/details"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/pointofsales/edit":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/pointofsales/edit.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./edit.ts */ "settings/pointofsales/edit"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/pointofsales/list":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/pointofsales/list.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./list.ts */ "settings/pointofsales/list"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/products/create":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/products/create.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./create.ts */ "./node_modules/ts-loader/index.js?!./src/settings/products/create.ts"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/products/edit":
/*!***************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/products/edit.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./edit.ts */ "settings/products/edit"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/products/list":
/*!***************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/products/list.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./list.ts */ "settings/products/list"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/terminals/create":
/*!******************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/terminals/create.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./create.ts */ "./node_modules/ts-loader/index.js?!./src/settings/terminals/create.ts"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/terminals/edit":
/*!****************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/terminals/edit.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./edit.ts */ "settings/terminals/edit"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!settings/terminals/list":
/*!****************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/settings/terminals/list.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../../node_modules/ts-loader??ref--4!./list.ts */ "settings/terminals/list"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

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

/***/ "settings/accounts/router":
/*!**************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/accounts/router.ts ***!
  \**************************************************************************/
/*! exports provided: AccountsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRouter", function() { return AccountsRouter; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

var routes = [
    { route: "", name: "list", moduleId: './list' },
    { route: "create", name: "create", moduleId: './create' },
    { route: ":accountId", name: "details", moduleId: './details' },
    { route: ":accountId/edit", name: "edit", moduleId: './edit' },
];
var AccountsRouter = /** @class */ (function () {
    function AccountsRouter() {
    }
    AccountsRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return AccountsRouter;
}());



/***/ }),

/***/ "settings/accounts/router.html":
/*!*******************************************!*\
  !*** ./src/settings/accounts/router.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>";

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

/***/ "settings/alarms/router":
/*!************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/alarms/router.ts ***!
  \************************************************************************/
/*! exports provided: AlarmsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmsRouter", function() { return AlarmsRouter; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

var routes = [
    { route: "", name: "list", moduleId: './list' },
    { route: "create", name: "create", moduleId: './create' },
    { route: ":alarmFeedId/edit", name: "edit", moduleId: './edit' },
];
var AlarmsRouter = /** @class */ (function () {
    function AlarmsRouter() {
    }
    AlarmsRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return AlarmsRouter;
}());



/***/ }),

/***/ "settings/alarms/router.html":
/*!*****************************************!*\
  !*** ./src/settings/alarms/router.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>";

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

/***/ "settings/pointofsales/router":
/*!******************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/pointofsales/router.ts ***!
  \******************************************************************************/
/*! exports provided: PointOfSalesRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfSalesRouter", function() { return PointOfSalesRouter; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

var routes = [
    { route: "", name: "list", moduleId: './list' },
    { route: "create", name: "create", moduleId: './create' },
    { route: ":pointOfSaleId", name: "details", moduleId: './details' },
    { route: ":pointOfSaleId/edit", name: "edit", moduleId: './edit' },
];
var PointOfSalesRouter = /** @class */ (function () {
    function PointOfSalesRouter() {
    }
    PointOfSalesRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return PointOfSalesRouter;
}());



/***/ }),

/***/ "settings/pointofsales/router.html":
/*!***********************************************!*\
  !*** ./src/settings/pointofsales/router.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>";

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

/***/ }),

/***/ "settings/products/router":
/*!**************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/products/router.ts ***!
  \**************************************************************************/
/*! exports provided: ProductsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRouter", function() { return ProductsRouter; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

var routes = [
    { route: "", name: "list", moduleId: './list' },
    { route: "create", name: "create", moduleId: './create' },
    { route: ":productId/edit", name: "edit", moduleId: './edit' },
];
var ProductsRouter = /** @class */ (function () {
    function ProductsRouter() {
    }
    ProductsRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return ProductsRouter;
}());



/***/ }),

/***/ "settings/products/router.html":
/*!*******************************************!*\
  !*** ./src/settings/products/router.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>";

/***/ }),

/***/ "settings/terminals/edit":
/*!*************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/terminals/edit.ts ***!
  \*************************************************************************/
/*! exports provided: EditTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTerminal", function() { return EditTerminal; });
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




var EditTerminal = /** @class */ (function () {
    function EditTerminal(api, router) {
        this.api = api;
        this.router = router;
    }
    Object.defineProperty(EditTerminal.prototype, "canSubmit", {
        get: function () {
            return !!this.name.length;
        },
        enumerable: true,
        configurable: true
    });
    EditTerminal.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.terminalId = Number(params.terminalId);
                        return [4 /*yield*/, this.api.getTerminal(this.terminalId).transfer()];
                    case 1:
                        terminal = _a.sent();
                        this.name = terminal.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTerminal.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Skal terminalen slettes?")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.deleteTerminal(this.terminalId).send()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditTerminal.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patch = new ur_jsonpatch__WEBPACK_IMPORTED_MODULE_2__["Patch"]()
                            .replace(function (x) { return x.name; }, this.name);
                        return [4 /*yield*/, this.api.updateTerminal(this.terminalId, patch.operations).transfer()];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("list");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTerminal = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], aurelia_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditTerminal);
    return EditTerminal;
}());



/***/ }),

/***/ "settings/terminals/edit.html":
/*!******************************************!*\
  !*** ./src/settings/terminals/edit.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\" if.bind=\"delete\">\r\n                <a href click.delegate=\"delete()\" class=\"nav-link text-danger\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><require from=\"@fortawesome/free-solid-svg-icons/faTrash\"></require><font-awesome-icon icon.bind=\"'trash' & fontawesome\"></font-awesome-icon></a>\r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <form submit.delegate=\"submit()\">\r\n            <div class=\"form-group\">\r\n                <label>Navn</label>\r\n                <input type=\"text\" class=\"form-control\" value.bind=\"name\" placeholder=\"Navn\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\" disabled.bind=\"!canSubmit\"><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/terminals/list":
/*!*************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/terminals/list.ts ***!
  \*************************************************************************/
/*! exports provided: TerminalsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalsList", function() { return TerminalsList; });
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


var TerminalsList = /** @class */ (function () {
    function TerminalsList(api) {
        this.api = api;
    }
    TerminalsList.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllTerminals().transfer()];
                    case 1:
                        _a.terminals = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TerminalsList = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], TerminalsList);
    return TerminalsList;
}());



/***/ }),

/***/ "settings/terminals/list.html":
/*!******************************************!*\
  !*** ./src/settings/terminals/list.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a route-href=\"create\" class=\"nav-link\"><require from=\"@fortawesome/free-solid-svg-icons/faArrowRight\"></require><require from=\"@fortawesome/free-solid-svg-icons/faPlus\"></require><font-awesome-icon icon.bind=\"'plus' & fontawesome\"></font-awesome-icon></a>                \r\n            </li>\r\n        </ul>\r\n    </top-navbar>\r\n    <page-body>\r\n        <table class=\"table\" if.bind=\"terminals.length\">\r\n            <tr repeat.for=\"terminal of terminals\">\r\n                <td style=\"width: 100%\">${terminal.name}</td>\r\n                <td>\r\n                    <a route-href=\"route: edit; params.bind: { terminalId: terminal.id }\" class=\"btn btn-light btn-sm\"><font-awesome-icon icon.bind=\"'arrow-right' & fontawesome\"></font-awesome-icon></a>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <empty-hint else>\r\n            Der er ingen terminaler\r\n        </empty-hint>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "settings/terminals/router":
/*!***************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/settings/terminals/router.ts ***!
  \***************************************************************************/
/*! exports provided: TerminalsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalsRouter", function() { return TerminalsRouter; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

var routes = [
    { route: "", name: "list", moduleId: './list' },
    { route: "create", name: "create", moduleId: './create' },
    { route: ":terminalId/edit", name: "edit", moduleId: './edit' },
];
var TerminalsRouter = /** @class */ (function () {
    function TerminalsRouter() {
    }
    TerminalsRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return TerminalsRouter;
}());



/***/ }),

/***/ "settings/terminals/router.html":
/*!********************************************!*\
  !*** ./src/settings/terminals/router.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmUtYmVmb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9jcmVhdGUudHM/Mzk2NCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvZGV0YWlscy50cz9lMDkyIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9lZGl0LnRzPzg3NzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2xpc3QudHM/YTE2YiIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2NyZWF0ZS50cz8xMmVhIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvZWRpdC50cz8yNDc2Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvbGlzdC50cz84ZTVlIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvY3JlYXRlLnRzPzQ1ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9kZXRhaWxzLnRzP2FiNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9lZGl0LnRzPzJjYmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9saXN0LnRzP2RhZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2NyZWF0ZS50cz9mYjI3Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9lZGl0LnRzPzkzODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2xpc3QudHM/ZTcxYSIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvdGVybWluYWxzL2NyZWF0ZS50cz9kNzQ0Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy90ZXJtaW5hbHMvZWRpdC50cz9iOWM4Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy90ZXJtaW5hbHMvbGlzdC50cz81NjA4Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9kZXRhaWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9kZXRhaWxzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL3JvdXRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvZWRpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9yb3V0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2FkZC1wcm9kdWN0LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2FkZC1wcm9kdWN0LWRpYWxvZy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2RldGFpbHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvcm91dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL3JvdXRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy90ZXJtaW5hbHMvZWRpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvdGVybWluYWxzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvdGVybWluYWxzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9yb3V0ZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ3hCO0FBQ1E7QUFDWDtBQUs3QjtJQVVJLHVCQUFvQixHQUFRLEVBQVUsTUFBYztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJwRCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxHQUFHLENBQUM7SUFPaEIsQ0FBQztJQUxELHNCQUFJLG9DQUFTO2FBQWI7WUFBQSxpQkFFQztZQURHLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLE1BQU0sRUFBeEIsQ0FBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25JLENBQUM7OztPQUFBO0lBS0ssZ0NBQVEsR0FBZDs7Ozs7O3dCQUNJLFNBQUk7d0JBQVkscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O3dCQUExRCxHQUFLLFFBQVEsR0FBRyxTQUEwQyxDQUFDOzs7OztLQUM5RDtJQUVLLDhCQUFNLEdBQVo7Ozs7OzRCQUNvQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLDBDQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUEvSCxPQUFPLEdBQUcsU0FBcUg7d0JBQ3JJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTs0QkFDbkMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO3lCQUN4QixDQUFDLENBQUM7Ozs7O0tBQ047SUF0QlEsYUFBYTtRQUZ6QixvRUFBVSxFQUFFO1FBQ1osaUVBQU8sQ0FBQyxhQUFhLENBQUM7eUNBV00sd0NBQUcsRUFBa0IscURBQU07T0FWM0MsYUFBYSxDQXVCekI7SUFBRCxvQkFBQztDQUFBO0FBdkJ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSOEI7QUFDeEI7QUFDUTtBQUl4QztJQU9JLHlCQUFvQixHQUFRLEVBQVUsTUFBYztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5wRCxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBT1YsQ0FBQztJQUxELHNCQUFJLHNDQUFTO2FBQWI7WUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUtLLGdDQUFNLEdBQVo7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFOzt3QkFBMUQsU0FBMEQsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQ3ZDO0lBYlEsZUFBZTtRQUYzQixvRUFBVSxFQUFFO1FBQ1osaUVBQU8sQ0FBQyxhQUFhLENBQUM7eUNBUU0sd0NBQUcsRUFBa0IscURBQU07T0FQM0MsZUFBZSxDQWMzQjtJQUFELHNCQUFDO0NBQUE7QUFkMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ3hCO0FBQ1E7QUFJeEM7SUFPSSwyQkFBb0IsR0FBUSxFQUFVLE1BQWM7UUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOcEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQU9WLENBQUM7SUFMRCxzQkFBSSx3Q0FBUzthQUFiO1lBQ0ksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLSyxrQ0FBTSxHQUFaOzs7Ozs0QkFDZ0IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUF0RSxHQUFHLEdBQUcsU0FBZ0U7d0JBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTs0QkFDbkMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFO3lCQUN4QixDQUFDLENBQUM7Ozs7O0tBQ047SUFmUSxpQkFBaUI7UUFGN0Isb0VBQVUsRUFBRTtRQUNaLGlFQUFPLENBQUMsYUFBYSxDQUFDO3lDQVFNLHdDQUFHLEVBQWtCLHFEQUFNO09BUDNDLGlCQUFpQixDQWdCN0I7SUFBRCx3QkFBQztDQUFBO0FBaEI2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05FO0FBQ3dCO0FBQzNCO0FBQ1c7QUFJeEM7SUFRSSx1QkFBb0IsR0FBUSxFQUFVLE1BQWM7UUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQcEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7SUFPWixDQUFDO0lBTEQsc0JBQUksb0NBQVM7YUFBYjtZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0ssOEJBQU0sR0FBWjs7Ozs7NEJBQ29CLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksMENBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQWxHLE9BQU8sR0FBRyxTQUF3Rjt3QkFDeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQ3ZDO0lBZFEsYUFBYTtRQUZ6QixvRUFBVSxFQUFFO1FBQ1osaUVBQU8sQ0FBQyxhQUFhLENBQUM7eUNBU00sd0NBQUcsRUFBa0IscURBQU07T0FSM0MsYUFBYSxDQWV6QjtJQUFELG9CQUFDO0NBQUE7QUFmeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDhCO0FBQ3hCO0FBQ1E7QUFJeEM7SUFPSSx3QkFBb0IsR0FBUSxFQUFVLE1BQWM7UUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOcEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQU9WLENBQUM7SUFMRCxzQkFBSSxxQ0FBUzthQUFiO1lBQ0ksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLSywrQkFBTSxHQUFaOzs7Ozs0QkFDcUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBeEUsUUFBUSxHQUFHLFNBQTZEO3dCQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDdkM7SUFiUSxjQUFjO1FBRjFCLG9FQUFVLEVBQUU7UUFDWixpRUFBTyxDQUFDLGFBQWEsQ0FBQzt5Q0FRTSx3Q0FBRyxFQUFrQixxREFBTTtPQVAzQyxjQUFjLENBYzFCO0lBQUQscUJBQUM7Q0FBQTtBQWQwQjs7Ozs7Ozs7Ozs7OztBQ04zQjtBQUFBO0FBQU8sU0FBUyxVQUFVLENBQUksS0FBVSxFQUFFLGFBQW1DLEVBQUUsZ0JBQXNDO0lBQ2pILElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxNQUFNLE9BQVosS0FBSyxHQUFRLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQUssS0FBSyxHQUFFO0FBQ3pFLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBSSxLQUFVLEVBQUUsU0FBK0I7SUFDMUQsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsa0lBQWdFO0FBQzdFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLHdGQUFpRTtBQUM5RSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxrRkFBOEQ7QUFDM0UsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsa0ZBQThEO0FBQzNFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLGdJQUFnRTtBQUM3RSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxnRkFBOEQ7QUFDM0UsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsZ0ZBQThEO0FBQzNFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLHNJQUFnRTtBQUM3RSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyw0RkFBaUU7QUFDOUUsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsc0ZBQThEO0FBQzNFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLHNGQUE4RDtBQUMzRSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxrSUFBZ0U7QUFDN0UsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsa0ZBQThEO0FBQzNFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLGtGQUE4RDtBQUMzRSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxtSUFBZ0U7QUFDN0UsRUFBRSxnRUFBYTtBQUNmLEM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsbUZBQThEO0FBQzNFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLG1GQUE4RDtBQUMzRSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0orQztBQUNmO0FBRVE7QUFHeEM7SUFLSSx3QkFBb0IsR0FBUSxFQUFVLE1BQWM7UUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEQsQ0FBQztJQUVLLGlDQUFRLEdBQWQsVUFBZSxNQUE2Qjs7Ozs7O3dCQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBRTFDLFNBQUk7d0JBQVcscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQW5FLEdBQUssT0FBTyxHQUFHLFNBQW9ELENBQUM7d0JBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7O0tBQ2pDO0lBRUssK0JBQU0sR0FBWjs7Ozs7NkJBQ1EsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQWhDLHdCQUFnQzt3QkFDaEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7O3dCQUFwRCxTQUFvRCxDQUFDO3dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0tBRTNDO0lBRUssK0JBQU0sR0FBWjs7O2dCQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7O0tBQ3ZDO0lBeEJRLGNBQWM7UUFEMUIsb0VBQVUsRUFBRTt5Q0FNZ0Isd0NBQUcsRUFBa0IscURBQU07T0FMM0MsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBO0FBekIwQjs7Ozs7Ozs7Ozs7O0FDTjNCLG1rQkFBbWtCLGVBQWUsWUFBWSxzYUFBc2EsS0FBSywwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMTlCO0FBQ2Y7QUFDSztBQUNHO0FBS3hDO0lBV0kscUJBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BELENBQUM7SUFMRCxzQkFBSSxrQ0FBUzthQUFiO1lBQUEsaUJBRUM7WUFERyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLE1BQU0sRUFBbkQsQ0FBbUQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdJLENBQUM7OztPQUFBO0lBS0ssOEJBQVEsR0FBZCxVQUFlLE1BQTZCOzs7Ozs7d0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDMUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQTlELE9BQU8sR0FBRyxTQUFvRDt3QkFDcEUsU0FBSTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQTFELEdBQUssUUFBUSxHQUFHLFNBQTBDLENBQUM7d0JBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7Ozs7O0tBQ3RDO0lBRUssNEJBQU0sR0FBWjs7Ozs7O3dCQUNVLEtBQUssR0FBRyxJQUFJLGtEQUFLLEVBQVc7NkJBQzdCLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sRUFBUixDQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQzs2QkFDbkMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUMvQixPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFL0MscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBekUsU0FBeUUsQ0FBQzt3QkFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDOzs7OztLQUN6RTtJQS9CUSxXQUFXO1FBRHZCLG9FQUFVLEVBQUU7eUNBWWdCLHdDQUFHLEVBQWtCLHFEQUFNO09BWDNDLFdBQVcsQ0FnQ3ZCO0lBQUQsa0JBQUM7Q0FBQTtBQWhDdUI7Ozs7Ozs7Ozs7OztBQ1J4Qix3bUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNmO0FBR2hDO0lBR0ksc0JBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzVCLENBQUM7SUFFSywrQkFBUSxHQUFkOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQTFELEdBQUssUUFBUSxHQUFHLFNBQTBDLENBQUM7Ozs7O0tBQzlEO0lBRUssa0NBQVcsR0FBakI7Ozs7Ozs2QkFDUSxPQUFNLENBQUMsMEZBQTBGLENBQUMsS0FBSyxJQUFJLEdBQTNHLHdCQUEyRzt3QkFDM0cscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksRUFBRTs7d0JBQXhDLFNBQXdDLENBQUM7d0JBQ3pDLFNBQUk7d0JBQVkscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O3dCQUExRCxHQUFLLFFBQVEsR0FBRyxTQUEwQyxDQUFDOzs7Ozs7S0FFbEU7SUFmUSxZQUFZO1FBRHhCLG9FQUFVLEVBQUU7eUNBSWdCLHdDQUFHO09BSG5CLFlBQVksQ0FnQnhCO0lBQUQsbUJBQUM7Q0FBQTtBQWhCd0I7Ozs7Ozs7Ozs7OztBQ0p6Qiwyb0JBQTJvQixxT0FBcU8sZUFBZSx5REFBeUQsYUFBYSxzRkFBc0YsMEJBQTBCLGdHQUFnRyxlQUFlLHdCQUF3QiwyZDs7Ozs7Ozs7Ozs7O0FDQTVyQztBQUFBO0FBQUE7QUFBNkM7QUFHN0MsSUFBTSxNQUFNLEdBQWtCO0lBQzFCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUF5QyxFQUFFO0lBQ2hGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUEyQyxFQUFFO0lBQzFGLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUE0QyxFQUFFO0lBQ2hHLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQXlDLEVBQUU7Q0FDbEc7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUhHLHdDQUFlLEdBQWYsVUFBZ0IsTUFBMkI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZEQsZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStDO0FBQ2Y7QUFDSztBQUNHO0FBSXhDO0lBUUksbUJBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BELENBQUM7SUFMRCxzQkFBSSxnQ0FBUzthQUFiO1lBQ0ksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLSyw0QkFBUSxHQUFkLFVBQWUsTUFBK0I7Ozs7Ozt3QkFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNqQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBL0QsSUFBSSxHQUFHLFNBQXdEO3dCQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7O0tBQ3pCO0lBRUssMEJBQU0sR0FBWjs7Ozs7NkJBQ1EsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQWhDLHdCQUFnQzt3QkFDaEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRTs7d0JBQXZELFNBQXVELENBQUM7d0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7S0FFM0M7SUFFSywwQkFBTSxHQUFaOzs7Ozs7d0JBQ1UsS0FBSyxHQUFHLElBQUksa0RBQUssRUFBYTs2QkFDL0IsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRXJDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQTdFLFNBQTZFLENBQUM7d0JBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OztLQUN2QztJQTlCUSxTQUFTO1FBRHJCLG9FQUFVLEVBQUU7eUNBU2dCLHdDQUFHLEVBQWtCLHFEQUFNO09BUjNDLFNBQVMsQ0ErQnJCO0lBQUQsZ0JBQUM7Q0FBQTtBQS9CcUI7Ozs7Ozs7Ozs7OztBQ1B0QixraEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNmO0FBR2hDO0lBR0ksb0JBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzVCLENBQUM7SUFFSyw2QkFBUSxHQUFkOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBUyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFOzt3QkFBekQsR0FBSyxLQUFLLEdBQUcsU0FBNEMsQ0FBQzs7Ozs7S0FDN0Q7SUFSUSxVQUFVO1FBRHRCLG9FQUFVLEVBQUU7eUNBSWdCLHdDQUFHO09BSG5CLFVBQVUsQ0FTdEI7SUFBRCxpQkFBQztDQUFBO0FBVHNCOzs7Ozs7Ozs7Ozs7QUNKdkIscW9CQUFxb0IsVUFBVSxpRkFBaUYsZUFBZSx1QkFBdUIsZ1k7Ozs7Ozs7Ozs7OztBQ0F0d0I7QUFBQTtBQUFBO0FBQTZDO0FBRzdDLElBQU0sTUFBTSxHQUFrQjtJQUMxQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBeUMsRUFBRTtJQUNoRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBMkMsRUFBRTtJQUMxRixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUF5QyxFQUFFO0NBQ3BHO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIRyxzQ0FBZSxHQUFmLFVBQWdCLE1BQTJCO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JELGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdGO0FBQ2hEO0FBRWtCO0FBSWxEO0lBSUksMEJBQW9CLFVBQTRCLEVBQVUsR0FBUTtRQUE5QyxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDbEUsQ0FBQztJQUVLLHNDQUFXLEdBQWpCOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQTFELEdBQUssUUFBUSxHQUFHLFNBQTBDLENBQUM7d0JBRTNELHNCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQzs7OztLQUNqQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF2QlEsZ0JBQWdCO1FBRjVCLG9FQUFVLEVBQUU7UUFDWixpRUFBTyxDQUFDLCtDQUErQyxDQUFDO3lDQUtyQiwrREFBZ0IsRUFBZSx3Q0FBRztPQUp6RCxnQkFBZ0IsQ0F3QjVCO0lBQUQsdUJBQUM7Q0FBQTtBQXhCNEI7Ozs7Ozs7Ozs7OztBQ1A3Qiw0bkJBQTRuQixhQUFhLHlSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExbEI7QUFDZjtBQUNlO0FBRVg7QUFFVztBQUNQO0FBQ2dCO0FBR3hEO0lBT0ksNEJBQW9CLEdBQVEsRUFBVSxNQUFjLEVBQVUsTUFBcUI7UUFBL0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQ25GLENBQUM7SUFFSyxxQ0FBUSxHQUFkLFVBQWUsTUFBaUM7Ozs7Ozt3QkFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUVsRCxTQUFJO3dCQUFlLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUEvRSxHQUFLLFdBQVcsR0FBRyxTQUE0RCxDQUFDO3dCQUNoRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO3dCQUNsQyxTQUFJO3dCQUFtQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUEvRixHQUFLLGVBQWUsR0FBRyxTQUF3RSxDQUFDO3dCQUNoRyxJQUFJLENBQUMsUUFBUSxHQUFPLElBQUksQ0FBQyxlQUFlLFFBQUMsQ0FBQzs7Ozs7S0FDN0M7SUFFSyxtQ0FBTSxHQUFaOzs7Ozs2QkFDUSxPQUFPLENBQUMsMkJBQTJCLENBQUMsRUFBcEMsd0JBQW9DO3dCQUNwQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFOzt3QkFBNUQsU0FBNEQsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7OztLQUUzQztJQUVLLHVDQUFVLEdBQWhCOzs7Ozs0QkFDbUIscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsb0VBQWdCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTs7d0JBQTdFLE1BQU0sR0FBRyxTQUFvRTt3QkFFbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7NEJBQ2hCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBaUIsQ0FBQzs0QkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQy9COzs7OztLQUNKO0lBRUQsMENBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksV0FBd0IsRUFBRSxjQUEyQjtRQUM3RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRywrREFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBQyxJQUFJLFFBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxFQUFFLFdBQUMsSUFBSSxRQUFDLEtBQUssT0FBTyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFSyxtQ0FBTSxHQUFaOzs7Ozs7d0JBQ1UsVUFBVSxHQUFHLHlEQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzdELHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBeEYsU0FBd0YsQ0FBQzt3QkFDekYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDdkM7SUFsRFEsa0JBQWtCO1FBRDlCLG9FQUFVLEVBQUU7eUNBUWdCLHdDQUFHLEVBQWtCLHFEQUFNLEVBQWtCLDREQUFhO09BUDFFLGtCQUFrQixDQW1EOUI7SUFBRCx5QkFBQztDQUFBO0FBbkQ4Qjs7Ozs7Ozs7Ozs7O0FDWC9CLG14QkFBbXhCLGVBQWUsZ0JBQWdCLHNhQUFzYSxLQUFLLGsyQkFBazJCLGFBQWEsaXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3aEU7QUFDZjtBQUVLO0FBQ0c7QUFHeEM7SUFRSSx5QkFBb0IsR0FBUSxFQUFVLE1BQWM7UUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEQsQ0FBQztJQUxELHNCQUFJLHNDQUFTO2FBQWI7WUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUtLLGtDQUFRLEdBQWQsVUFBZSxNQUFpQzs7Ozs7O3dCQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3RDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUFsRSxHQUFHLEdBQUcsU0FBNEQ7d0JBQ3hFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQzs7Ozs7S0FDeEI7SUFFSyxnQ0FBTSxHQUFaOzs7Ozs7d0JBQ1UsS0FBSyxHQUFHLElBQUksa0RBQUssRUFBZTs2QkFDakMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRXJDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBakYsU0FBaUYsQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDOzs7OztLQUNqRjtJQXZCUSxlQUFlO1FBRDNCLG9FQUFVLEVBQUU7eUNBU2dCLHdDQUFHLEVBQWtCLHFEQUFNO09BUjNDLGVBQWUsQ0F3QjNCO0lBQUQsc0JBQUM7Q0FBQTtBQXhCMkI7Ozs7Ozs7Ozs7OztBQ1A1Qix5cEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNmO0FBR2hDO0lBR0ksMEJBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzVCLENBQUM7SUFFSyxtQ0FBUSxHQUFkOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBZ0IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQWxFLEdBQUssWUFBWSxHQUFHLFNBQThDLENBQUM7Ozs7O0tBQ3RFO0lBUlEsZ0JBQWdCO1FBRDVCLG9FQUFVLEVBQUU7eUNBSWdCLHdDQUFHO09BSG5CLGdCQUFnQixDQVM1QjtJQUFELHVCQUFDO0NBQUE7QUFUNEI7Ozs7Ozs7Ozs7OztBQ0o3QixrcUJBQWtxQixTQUFTLG9GQUFvRixlQUFlLHdCQUF3Qiw0VDs7Ozs7Ozs7Ozs7O0FDQXR5QjtBQUFBO0FBQUE7QUFBNkM7QUFHN0MsSUFBTSxNQUFNLEdBQWtCO0lBQzFCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUF5QyxFQUFFO0lBQ2hGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUEyQyxFQUFFO0lBQzFGLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQTRDLEVBQUU7SUFDcEcsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBeUMsRUFBRTtDQUN0RztBQUVEO0lBQUE7SUFJQSxDQUFDO0lBSEcsNENBQWUsR0FBZixVQUFnQixNQUEyQjtRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkRCxnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNmO0FBQ0s7QUFDRztBQUVYO0FBRzdCO0lBU0kscUJBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BELENBQUM7SUFMRCxzQkFBSSxrQ0FBUzthQUFiO1lBQ0ksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLSyw4QkFBUSxHQUFkLFVBQWUsTUFBNkI7Ozs7Ozt3QkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMxQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBOUQsT0FBTyxHQUFHLFNBQW9EO3dCQUNwRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBQ3pDO0lBRUssNEJBQU0sR0FBWjs7Ozs7NkJBQ1EsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEVBQWxDLHdCQUFrQzt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRTs7d0JBQW5ELFNBQW1ELENBQUM7d0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7S0FFM0M7SUFFSyw0QkFBTSxHQUFaOzs7Ozs7d0JBQ1UsS0FBSyxHQUFHLElBQUksa0RBQUssRUFBVzs2QkFDN0IsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUMvQixPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxFQUFFLElBQUksMENBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFFaEQscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBekUsU0FBeUUsQ0FBQzt3QkFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQ3ZDO0lBakNRLFdBQVc7UUFEdkIsb0VBQVUsRUFBRTt5Q0FVZ0Isd0NBQUcsRUFBa0IscURBQU07T0FUM0MsV0FBVyxDQWtDdkI7SUFBRCxrQkFBQztDQUFBO0FBbEN1Qjs7Ozs7Ozs7Ozs7O0FDUnhCLDZ2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNmO0FBQ2U7QUFJL0M7SUFHSSxxQkFBb0IsR0FBUSxFQUFVLE1BQXFCO1FBQXZDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzNELENBQUM7SUFFSyw4QkFBUSxHQUFkOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQTFELEdBQUssUUFBUSxHQUFHLFNBQTBDLENBQUM7Ozs7O0tBQzlEO0lBUlEsV0FBVztRQUR2QixvRUFBVSxFQUFFO3lDQUlnQix3Q0FBRyxFQUFrQiw0REFBYTtPQUhsRCxXQUFXLENBU3ZCO0lBQUQsa0JBQUM7Q0FBQTtBQVR1Qjs7Ozs7Ozs7Ozs7O0FDTnhCLG03QkFBbTdCLGFBQWEsb0RBQW9ELHNCQUFzQixzR0FBc0csZUFBZSx3QkFBd0IsMFQ7Ozs7Ozs7Ozs7OztBQ0F2cEM7QUFBQTtBQUFBO0FBQTZDO0FBRzdDLElBQU0sTUFBTSxHQUFrQjtJQUMxQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBeUMsRUFBRTtJQUNoRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBMkMsRUFBRTtJQUMxRixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUF5QyxFQUFFO0NBQ2xHO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIRyx3Q0FBZSxHQUFmLFVBQWdCLE1BQTJCO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JELGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNmO0FBQ0s7QUFDRztBQUl4QztJQVFJLHNCQUFvQixHQUFRLEVBQVUsTUFBYztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwRCxDQUFDO0lBTEQsc0JBQUksbUNBQVM7YUFBYjtZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0ssK0JBQVEsR0FBZCxVQUFlLE1BQThCOzs7Ozs7d0JBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDM0IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQWpFLFFBQVEsR0FBRyxTQUFzRDt3QkFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOzs7OztLQUM3QjtJQUVLLDZCQUFNLEdBQVo7Ozs7OzZCQUNRLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUFuQyx3QkFBbUM7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUU7O3dCQUFyRCxTQUFxRCxDQUFDO3dCQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0tBRTNDO0lBRUssNkJBQU0sR0FBWjs7Ozs7O3dCQUNVLEtBQUssR0FBRyxJQUFJLGtEQUFLLEVBQVk7NkJBQzlCLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksRUFBTixDQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUVyQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUEzRSxTQUEyRSxDQUFDO3dCQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDdkM7SUE5QlEsWUFBWTtRQUR4QixvRUFBVSxFQUFFO3lDQVNnQix3Q0FBRyxFQUFrQixxREFBTTtPQVIzQyxZQUFZLENBK0J4QjtJQUFELG1CQUFDO0NBQUE7QUEvQndCOzs7Ozs7Ozs7Ozs7QUNQekIsa2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0M7QUFDZjtBQUdoQztJQUdJLHVCQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUM1QixDQUFDO0lBRUssZ0NBQVEsR0FBZDs7Ozs7O3dCQUNJLFNBQUk7d0JBQWEscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxHQUFLLFNBQVMsR0FBRyxTQUEyQyxDQUFDOzs7OztLQUNoRTtJQVJRLGFBQWE7UUFEekIsb0VBQVUsRUFBRTt5Q0FJZ0Isd0NBQUc7T0FIbkIsYUFBYSxDQVN6QjtJQUFELG9CQUFDO0NBQUE7QUFUeUI7Ozs7Ozs7Ozs7OztBQ0oxQixpcUJBQWlxQixjQUFjLGlGQUFpRixlQUFlLDBCQUEwQiwyVDs7Ozs7Ozs7Ozs7O0FDQXp5QjtBQUFBO0FBQUE7QUFBNkM7QUFHN0MsSUFBTSxNQUFNLEdBQWtCO0lBQzFCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUF5QyxFQUFFO0lBQ2hGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUEyQyxFQUFFO0lBQzFGLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQXlDLEVBQUU7Q0FDbkc7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUhHLHlDQUFlLEdBQWYsVUFBZ0IsTUFBMkI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDYkQsZ0YiLCJmaWxlIjoic2V0dGluZ3MuNWZhN2M3YjE2ODM3YTcwMjQ0N2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuLi8uLi9hcGkvYWNjb3VudFwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AdXNlVmlldyhcIi4vZWRpdC5odG1sXCIpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVBY2NvdW50IHtcclxuICAgIHByaXZhdGUgYWNjb3VudHMhOiBBY2NvdW50W107XHJcbiAgICBudW1iZXIgPSAwO1xyXG4gICAgbmFtZSA9IFwiXCI7XHJcbiAgICBtYXhDcmVkaXQgPSBcIjBcIjtcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlciA+IDAgJiYgISF0aGlzLm5hbWUubGVuZ3RoICYmIHRoaXMuYWNjb3VudHMgJiYgdGhpcy5hY2NvdW50cy5maW5kSW5kZXgoeCA9PiB4Lm51bWJlciA9PT0gdGhpcy5udW1iZXIpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZUFjY291bnQoeyBudW1iZXI6IHRoaXMubnVtYmVyLCBuYW1lOiB0aGlzLm5hbWUsIG1heENyZWRpdDogbmV3IEJpZyh0aGlzLm1heENyZWRpdCkgfSkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJkZXRhaWxzXCIsIHtcclxuICAgICAgICAgICAgYWNjb3VudElkOiBhY2NvdW50LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUFsYXJtRmVlZCB7XHJcbiAgICBuYW1lID0gXCJcIjtcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS5jcmVhdGVBbGFybUZlZWQoeyBuYW1lOiB0aGlzLm5hbWUgfSkuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVBvaW50T2ZTYWxlIHtcclxuICAgIG5hbWUgPSBcIlwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVBvaW50T2ZTYWxlKHsgbmFtZTogdGhpcy5uYW1lIH0pLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwiZGV0YWlsc1wiLCB7XHJcbiAgICAgICAgICAgIHBvaW50T2ZTYWxlSWQ6IHBvcy5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2R1Y3Qge1xyXG4gICAgbmFtZSA9IFwiXCI7XHJcbiAgICBwcmljZSA9IFwiMFwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVQcm9kdWN0KHsgbmFtZTogdGhpcy5uYW1lLCBwcmljZTogbmV3IEJpZyh0aGlzLnByaWNlKSB9KS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVRlcm1pbmFsIHtcclxuICAgIG5hbWUgPSBcIlwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHRlcm1pbmFsID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlVGVybWluYWwoeyBuYW1lOiB0aGlzLm5hbWUgfSkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1vdmVCZWZvcmU8VD4oYXJyYXk6IFRbXSwgaXRlbU1hdGNoZXJGbjogKGl0ZW06IFQpID0+IGJvb2xlYW4sIHNpYmxpbmdNYXRjaGVyRm46IChpdGVtOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICBjb25zdCByZW1vdmVkSXRlbSA9IHJlbW92ZShhcnJheSwgaXRlbU1hdGNoZXJGbik7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhcnJheS5maW5kSW5kZXgoc2libGluZ01hdGNoZXJGbik7XHJcbiAgICBjb25zdCBpdGVtcyA9IHJlbW92ZWRJdGVtID8gW3JlbW92ZWRJdGVtXSA6IFtdO1xyXG4gICAgYXJyYXkuc3BsaWNlKG5leHRJbmRleCA+PSAwID8gbmV4dEluZGV4IDogYXJyYXkubGVuZ3RoLCAwLCAuLi5pdGVtcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZTxUPihhcnJheTogVFtdLCBtYXRjaGVyRm46IChpdGVtOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmZpbmRJbmRleChtYXRjaGVyRm4pO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jcmVhdGUudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9kZXRhaWxzLnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vZWRpdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2xpc3QudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jcmVhdGUudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9lZGl0LnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vbGlzdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2NyZWF0ZS50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2RldGFpbHMudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9lZGl0LnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vbGlzdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2NyZWF0ZS50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2VkaXQudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9saXN0LnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY3JlYXRlLnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vZWRpdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2xpc3QudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQb2ludE9mU2FsZSB9IGZyb20gXCIuLi8uLi9hcGkvcG9pbnQtb2Ytc2FsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFjY291bnREZXRhaWxzIHtcclxuICAgIHByaXZhdGUgYWNjb3VudCE6IFBvaW50T2ZTYWxlO1xyXG4gICAgYWNjb3VudElkITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IGFjY291bnRJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IE51bWJlcihwYXJhbXMuYWNjb3VudElkKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWNjb3VudCh0aGlzLmFjY291bnRJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmFjY291bnQubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJTa2FsIGtvbnRvZW4gc2xldHRlcz9cIikpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlQWNjb3VudCh0aGlzLmFjY291bnQuaWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImxpc3RcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFZGl0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTGlzdFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidsaXN0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTplZGl0OyBwYXJhbXMuYmluZDogeyBhY2NvdW50SWQgfVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInZWRpdCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKClcXFwiIGNsYXNzPVxcXCJuYXYtbGluayB0ZXh0LWRhbmdlclxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RyYXNoJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGgxPiR7bmFtZX08L2gxPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi4vLi4vYXBpL2FjY291bnRcIjtcclxuaW1wb3J0IHtCaWd9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEVkaXRBY2NvdW50IHtcclxuICAgIHByaXZhdGUgYWNjb3VudElkITogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50cyE6IEFjY291bnRbXTtcclxuICAgIG51bWJlciE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcbiAgICBtYXhDcmVkaXQhOiBCaWc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXIgPiAwICYmICEhdGhpcy5uYW1lLmxlbmd0aCAmJiB0aGlzLmFjY291bnRzLmZpbmRJbmRleCh4ID0+IHguaWQgIT09IHRoaXMuYWNjb3VudElkICYmIHgubnVtYmVyID09PSB0aGlzLm51bWJlcikgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgYWNjb3VudElkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gTnVtYmVyKHBhcmFtcy5hY2NvdW50SWQpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmFwaS5nZXRBY2NvdW50KHRoaXMuYWNjb3VudElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBhY2NvdW50Lm51bWJlcjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBhY2NvdW50Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5tYXhDcmVkaXQgPSBhY2NvdW50Lm1heENyZWRpdDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0Y2ggPSBuZXcgUGF0Y2g8QWNjb3VudD4oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubnVtYmVyLCB0aGlzLm51bWJlcilcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm1heENyZWRpdCwgdGhpcy5tYXhDcmVkaXQpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS51cGRhdGVBY2NvdW50KHRoaXMuYWNjb3VudElkLCBwYXRjaC5vcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImRldGFpbHNcIiwgeyBhY2NvdW50SWQ6IHRoaXMuYWNjb3VudElkIH0pO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+PC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OdW1tZXI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJudW1iZXIgfCBudW1iZXJcXFwiIHN0ZXA9XFxcIjFcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW1tZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF2bjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF2blxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5LcmVkaXRtYWtzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibWF4Q3JlZGl0XFxcIiBwbGFjZWhvbGRlcj1cXFwiS3JlZGl0bWFrc1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFjY291bnRzTGlzdCB7XHJcbiAgICBhY2NvdW50cyE6IEFjY291bnRWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZXNldENyZWRpdCgpIHtcclxuICAgICAgICBpZiAocHJvbXB0KFwiU2thbCByZXN0ZXJlbmRlIGtyZWRpdCBzw6Z0dGVzIHRpbCBtYWtzIGtyZWRpdCBmb3IgYWxsZSBrb250aT8gU2tyaXYgJ0pBJyBmb3IgYXQgYmVrcsOmZnRlXCIpID09PSBcIkpBXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkucmVzZXRBbGxBY2NvdW50cygpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBY2NvdW50Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBudW1iZXI6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwiY3JlYXRlXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUFycm93UmlnaHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3BsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGRpdiBpZi5iaW5kPVxcXCJhY2NvdW50cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+JiN4MjExNjs8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hdm48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1ha3M8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJhY2NvdW50IG9mIGFjY291bnRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2FjY291bnQubnVtYmVyfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke2FjY291bnQubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwid2hpdGUtc3BhY2U6IG5vd3JhcFxcXCI+JHthY2NvdW50Lm1heENyZWRpdCB8IG1vbmV5fSBrci48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBkZXRhaWxzOyBwYXJhbXMuYmluZDogeyBhY2NvdW50SWQ6IGFjY291bnQuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJyZXNldENyZWRpdCgpXFxcIj5Tw6Z0IGFsbGUga29udGkgdGlsIGtyZWRpdG1ha3M8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4ga29udGlcXHJcXG4gICAgICAgIDwvZW1wdHktaGludD5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJcIiwgbmFtZTogXCJsaXN0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9saXN0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY3JlYXRlXCIsIG5hbWU6IFwiY3JlYXRlXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jcmVhdGVcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6YWNjb3VudElkXCIsIG5hbWU6IFwiZGV0YWlsc1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZGV0YWlsc1wiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcIjphY2NvdW50SWQvZWRpdFwiLCBuYW1lOiBcImVkaXRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2VkaXRcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG5dXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3VudHNSb3V0ZXIge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy5tYXAocm91dGVzKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFBhdGNoIH0gZnJvbSBcInVyLWpzb25wYXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWxhcm1GZWVkIH0gZnJvbSBcIi4uLy4uL2FwaS9hbGFybXNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEVkaXRBbGFybSB7XHJcbiAgICBwcml2YXRlIGFsYXJtRmVlZElkITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBhbGFybUZlZWRJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmFsYXJtRmVlZElkID0gTnVtYmVyKHBhcmFtcy5hbGFybUZlZWRJZCk7XHJcbiAgICAgICAgY29uc3QgZmVlZCA9IGF3YWl0IHRoaXMuYXBpLmdldEFsYXJtRmVlZCh0aGlzLmFsYXJtRmVlZElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGZlZWQubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJTa2FsIGFsYXJtZW4gc2xldHRlcz9cIikpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlQWxhcm1GZWVkKHRoaXMuYWxhcm1GZWVkSWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGNoID0gbmV3IFBhdGNoPEFsYXJtRmVlZD4oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubmFtZSwgdGhpcy5uYW1lKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlQWxhcm1GZWVkKHRoaXMuYWxhcm1GZWVkSWQsIHBhdGNoLm9wZXJhdGlvbnMpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiBpZi5iaW5kPVxcXCJkZWxldGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoKVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rIHRleHQtZGFuZ2VyXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hdm48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hdm5cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFsYXJtc0xpc3Qge1xyXG4gICAgZmVlZHMhOiBBbGFybUZlZWRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5mZWVkcyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFsYXJtRmVlZHMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQWxhcm1GZWVkIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImNyZWF0ZVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd1JpZ2h0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1c1xcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidwbHVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgaWYuYmluZD1cXFwiZmVlZHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwiZmVlZCBvZiBmZWVkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7ZmVlZC5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBlZGl0OyBwYXJhbXMuYmluZDogeyBhbGFybUZlZWRJZDogZmVlZC5pZCB9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tc21cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidhcnJvdy1yaWdodCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgICAgIERlciBlciBpbmdlbiBhbGFybWVyIG9wc2F0LCBrbGlrIDxhIHJvdXRlLWhyZWY9XFxcImNyZWF0ZVxcXCI+aGVyPC9hPiBmb3IgYXQgb3ByZXR0ZSBkZW4gZsO4cnN0ZS5cXHJcXG4gICAgICAgIDwvZW1wdHktaGludD5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJcIiwgbmFtZTogXCJsaXN0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9saXN0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY3JlYXRlXCIsIG5hbWU6IFwiY3JlYXRlXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jcmVhdGVcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6YWxhcm1GZWVkSWQvZWRpdFwiLCBuYW1lOiBcImVkaXRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2VkaXRcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG5dXHJcblxyXG5leHBvcnQgY2xhc3MgQWxhcm1zUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QsIHVzZVZpZXcsIFBMQVRGT1JNLCB2aWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2FwaS9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IERpYWxvZ0NvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS1kaWFsb2dcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQHVzZVZpZXcoXCJzZXR0aW5ncy9wb2ludG9mc2FsZXMvYWRkLXByb2R1Y3QtZGlhbG9nLmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIEFkZFByb2R1Y3REaWFsb2cge1xyXG4gICAgcHJvZHVjdHMhOiBQcm9kdWN0Vmlld01vZGVsW107XHJcbiAgICBwcm9kdWN0ITogUHJvZHVjdFZpZXdNb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXIsIHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUHJvZHVjdHMoKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gISF0aGlzLnByb2R1Y3RzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9rKHRoaXMucHJvZHVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0Vmlld01vZGVsIGV4dGVuZHMgUHJvZHVjdCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDx1eC1kaWFsb2c+XFxyXFxuICAgICAgICAgICAgPHV4LWRpYWxvZy1oZWFkZXI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjbG9zZSgpXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1xcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0aW1lcycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgVGlsZsO4aiBwcm9kdWt0XFxyXFxuICAgICAgICAgICAgPC91eC1kaWFsb2ctaGVhZGVyPlxcclxcbiAgICAgICAgICAgIDx1eC1kaWFsb2ctYm9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJwcm9kdWN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gcmVwZWF0LmZvcj1cXFwicHJvZHVjdCBvZiBwcm9kdWN0c1xcXCIgbW9kZWwuYmluZD1cXFwicHJvZHVjdFxcXCI+JHtwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvdXgtZGlhbG9nLWJvZHk+XFxyXFxuICAgICAgICAgICAgPHV4LWRpYWxvZy1mb290ZXI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5UaWxmw7hqPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC91eC1kaWFsb2ctZm9vdGVyPlxcclxcbiAgICAgICAgPC91eC1kaWFsb2c+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcImF1cmVsaWEtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgZGlmZiB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUG9pbnRPZlNhbGUgfSBmcm9tIFwiLi4vLi4vYXBpL3BvaW50LW9mLXNhbGVcIjtcclxuaW1wb3J0IHsgbW92ZUJlZm9yZSB9IGZyb20gXCIuLi8uLi9tb3ZlLWJlZm9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWRkUHJvZHVjdERpYWxvZyB9IGZyb20gXCIuL2FkZC1wcm9kdWN0LWRpYWxvZ1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUG9pbnRPZlNhbGVEZXRhaWxzIHtcclxuICAgIHByaXZhdGUgcG9pbnRPZlNhbGUhOiBQb2ludE9mU2FsZTtcclxuICAgIHBvaW50T2ZTYWxlSWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdHMhOiBQcm9kdWN0W107XHJcbiAgICBwcm9kdWN0cyE6IFByb2R1Y3RWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWxvZzogRGlhbG9nU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBwb2ludE9mU2FsZUlkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRPZlNhbGVJZCA9IE51bWJlcihwYXJhbXMucG9pbnRPZlNhbGVJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRPZlNhbGUgPSBhd2FpdCB0aGlzLmFwaS5nZXRQb2ludE9mU2FsZSh0aGlzLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludE9mU2FsZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2R1Y3RzID0gYXdhaXQgdGhpcy5hcGkuZ2V0UHJvZHVjdHNCeVBvaW50T2ZTYWxlSWQodGhpcy5wb2ludE9mU2FsZUlkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbLi4udGhpcy5jdXJyZW50UHJvZHVjdHNdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIlNrYWwgc2FsZ3NzdGVkZXQgc2xldHRlcz9cIikpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlUG9pbnRPZlNhbGUodGhpcy5wb2ludE9mU2FsZS5pZCkuc2VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRQcm9kdWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGlhbG9nLm9wZW4oeyB2aWV3TW9kZWw6IEFkZFByb2R1Y3REaWFsb2cgfSkud2hlbkNsb3NlZCgpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHJlc3VsdC5vdXRwdXQgYXMgUHJvZHVjdDtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9kdWN0KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbURyb3BwZWQoaXRlbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzaWJsaW5nRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9kdWN0c1tOdW1iZXIoaXRlbUVsZW1lbnQuZGF0YXNldC5pbmRleCldO1xyXG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBzaWJsaW5nRWxlbWVudCA/IHRoaXMucHJvZHVjdHNbTnVtYmVyKHNpYmxpbmdFbGVtZW50LmRhdGFzZXQuaW5kZXgpXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBtb3ZlQmVmb3JlKHRoaXMucHJvZHVjdHMsIHggPT4geCA9PT0gaXRlbSwgeCA9PiB4ID09PSBzaWJsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IGRpZmYodGhpcy5jdXJyZW50UHJvZHVjdHMsIHRoaXMucHJvZHVjdHMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZVByb2R1Y3RzQnlQb2ludE9mU2FsZUlkKHRoaXMucG9pbnRPZlNhbGUuaWQsIG9wZXJhdGlvbnMpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0Vmlld01vZGVsIGV4dGVuZHMgUHJvZHVjdCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJsaXN0XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1xcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUVkaXRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFMaXN0XFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2xpc3QnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOmVkaXQ7IHBhcmFtcy5iaW5kOiB7IHBvaW50T2ZTYWxlSWQgfVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInZWRpdCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKClcXFwiIGNsYXNzPVxcXCJuYXYtbGluayB0ZXh0LWRhbmdlclxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RyYXNoJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGgxPiR7bmFtZX08L2gxPlxcclxcblxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJhZGRQcm9kdWN0KClcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidwbHVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0PlByb2R1a3RlcjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIGlmLmJpbmQ9XFxcInByb2R1Y3RzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZHJhZ3VsYS1hbmQtZHJvcCBkcm9wLWZuLmNhbGw9XFxcIml0ZW1Ecm9wcGVkKGl0ZW0sIHNpYmxpbmcpXFxcIj48L2RyYWd1bGEtYW5kLWRyb3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XFxcImRyYWctc291cmNlIGRyb3AtdGFyZ2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcInByb2R1Y3Qgb2YgcHJvZHVjdHNcXFwiIGRhdGEtaW5kZXguYmluZD1cXFwiJGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7cHJvZHVjdC5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndoaXRlLXNwYWNlOiBub3dyYXBcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwicmVtb3ZlUHJvZHVjdCgkaW5kZXgpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEZqZXJuPC9idXR0b24+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCIgZWxzZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIERlciBlciBpbmdlbiBwcm9kdWt0ZXIgdGlsa255dHRldCBzYWxnc3N0ZWRldFxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFBvaW50T2ZTYWxlIH0gZnJvbSBcIi4uLy4uL2FwaS9wb2ludC1vZi1zYWxlXCI7XHJcbmltcG9ydCB7IFBhdGNoIH0gZnJvbSBcInVyLWpzb25wYXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEVkaXRQb2ludE9mU2FsZSB7XHJcbiAgICBwcml2YXRlIHBvaW50T2ZTYWxlSWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IHBvaW50T2ZTYWxlSWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5wb2ludE9mU2FsZUlkID0gTnVtYmVyKHBhcmFtcy5wb2ludE9mU2FsZUlkKTtcclxuICAgICAgICBjb25zdCBwb3MgPSBhd2FpdCB0aGlzLmFwaS5nZXRQb2ludE9mU2FsZSh0aGlzLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcG9zLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGNoID0gbmV3IFBhdGNoPFBvaW50T2ZTYWxlPigpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5uYW1lLCB0aGlzLm5hbWUpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS51cGRhdGVQb2ludE9mU2FsZSh0aGlzLnBvaW50T2ZTYWxlSWQsIHBhdGNoLm9wZXJhdGlvbnMpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwiZGV0YWlsc1wiLCB7IHBvaW50T2ZTYWxlSWQ6IHRoaXMucG9pbnRPZlNhbGVJZCB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPjwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF2bjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF2blxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBvaW50T2ZTYWxlc0xpc3Qge1xyXG4gICAgcG9pbnRPZlNhbGVzITogUG9pbnRPZlNhbGVWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludE9mU2FsZXMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQb2ludE9mU2FsZXMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRPZlNhbGVWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwiY3JlYXRlXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUFycm93UmlnaHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3BsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgaWYuYmluZD1cXFwicG9pbnRPZlNhbGVzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcInBvcyBvZiBwb2ludE9mU2FsZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke3Bvcy5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBkZXRhaWxzOyBwYXJhbXMuYmluZDogeyBwb2ludE9mU2FsZUlkOiBwb3MuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4gc2FsZ3NzdGVkZXJcXHJcXG4gICAgICAgIDwvZW1wdHktaGludD5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJcIiwgbmFtZTogXCJsaXN0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9saXN0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY3JlYXRlXCIsIG5hbWU6IFwiY3JlYXRlXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jcmVhdGVcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6cG9pbnRPZlNhbGVJZFwiLCBuYW1lOiBcImRldGFpbHNcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2RldGFpbHNcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6cG9pbnRPZlNhbGVJZC9lZGl0XCIsIG5hbWU6IFwiZWRpdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZWRpdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludE9mU2FsZXNSb3V0ZXIge1xyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy5tYXAocm91dGVzKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFBhdGNoIH0gZnJvbSBcInVyLWpzb25wYXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9hcGkvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZHVjdCB7XHJcbiAgICBwcml2YXRlIHByb2R1Y3RJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcbiAgICBwcmljZSE6IHN0cmluZztcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBwcm9kdWN0SWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBOdW1iZXIocGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHRoaXMuYXBpLmdldFByb2R1Y3QodGhpcy5wcm9kdWN0SWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiU2thbCBwcm9kdWt0ZXQgc2xldHRlcz9cIikpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlUHJvZHVjdCh0aGlzLnByb2R1Y3RJZCkuc2VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0Y2ggPSBuZXcgUGF0Y2g8UHJvZHVjdD4oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubmFtZSwgdGhpcy5uYW1lKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgucHJpY2UsIG5ldyBCaWcodGhpcy5wcmljZSkpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS51cGRhdGVQcm9kdWN0KHRoaXMucHJvZHVjdElkLCBwYXRjaC5vcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgaWYuYmluZD1cXFwiZGVsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKClcXFwiIGNsYXNzPVxcXCJuYXYtbGluayB0ZXh0LWRhbmdlclxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RyYXNoJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYXZuPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXZuXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByaXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJwcmljZVxcXCIgbWluPVxcXCIwXFxcIiBzdGVwPVxcXCIwLjAxXFxcIiBwbGFjZWhvbGRlcj1cXFwiUHJpc1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3NhdmUnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEdlbTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcImF1cmVsaWEtZGlhbG9nXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0IHtcclxuICAgIHByb2R1Y3RzITogUHJvZHVjdFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgZGlhbG9nOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFByb2R1Y3RzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByaWNlOiBCaWc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImNyZWF0ZVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd1JpZ2h0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1c1xcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidwbHVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIGlmLmJpbmQ9XFxcInByb2R1Y3RzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYXZuPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TYWxnc3ByaXM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwicHJvZHVjdCBvZiBwcm9kdWN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5CaWxsZWRlPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtwcm9kdWN0Lm5hbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ke3Byb2R1Y3QucHJpY2UgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwicm91dGU6IGVkaXQ7IHBhcmFtcy5iaW5kOiB7IHByb2R1Y3RJZDogcHJvZHVjdC5pZCB9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tc21cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidhcnJvdy1yaWdodCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgICAgIERlciBlciBpbmdlbiBwcm9kdWt0ZXJcXHJcXG4gICAgICAgIDwvZW1wdHktaGludD5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJcIiwgbmFtZTogXCJsaXN0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9saXN0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiY3JlYXRlXCIsIG5hbWU6IFwiY3JlYXRlXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9jcmVhdGVcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6cHJvZHVjdElkL2VkaXRcIiwgbmFtZTogXCJlZGl0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9lZGl0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IFRlcm1pbmFsIH0gZnJvbSBcIi4uLy4uL2FwaS90ZXJtaW5hbFwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFRlcm1pbmFsIHtcclxuICAgIHByaXZhdGUgdGVybWluYWxJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgdGVybWluYWxJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLnRlcm1pbmFsSWQgPSBOdW1iZXIocGFyYW1zLnRlcm1pbmFsSWQpO1xyXG4gICAgICAgIGNvbnN0IHRlcm1pbmFsID0gYXdhaXQgdGhpcy5hcGkuZ2V0VGVybWluYWwodGhpcy50ZXJtaW5hbElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRlcm1pbmFsLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiU2thbCB0ZXJtaW5hbGVuIHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZVRlcm1pbmFsKHRoaXMudGVybWluYWxJZCkuc2VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0Y2ggPSBuZXcgUGF0Y2g8VGVybWluYWw+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZVRlcm1pbmFsKHRoaXMudGVybWluYWxJZCwgcGF0Y2gub3BlcmF0aW9ucykudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIGlmLmJpbmQ9XFxcImRlbGV0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xpY2suZGVsZWdhdGU9XFxcImRlbGV0ZSgpXFxcIiBjbGFzcz1cXFwibmF2LWxpbmsgdGV4dC1kYW5nZXJcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF2bjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF2blxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3NhdmUnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEdlbTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgVGVybWluYWxzTGlzdCB7XHJcbiAgICB0ZXJtaW5hbHMhOiBUZXJtaW5hbFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnRlcm1pbmFscyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFRlcm1pbmFscygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXJtaW5hbFZpZXdNb2RlbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+ICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBpZi5iaW5kPVxcXCJ0ZXJtaW5hbHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwidGVybWluYWwgb2YgdGVybWluYWxzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHt0ZXJtaW5hbC5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBlZGl0OyBwYXJhbXMuYmluZDogeyB0ZXJtaW5hbElkOiB0ZXJtaW5hbC5pZCB9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tc21cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidhcnJvdy1yaWdodCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgICAgIERlciBlciBpbmdlbiB0ZXJtaW5hbGVyXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwibGlzdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbGlzdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcImNyZWF0ZVwiLCBuYW1lOiBcImNyZWF0ZVwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY3JlYXRlXCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiOnRlcm1pbmFsSWQvZWRpdFwiLCBuYW1lOiBcImVkaXRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2VkaXRcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG5dXHJcblxyXG5leHBvcnQgY2xhc3MgVGVybWluYWxzUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=