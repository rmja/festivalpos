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

/***/ }),

/***/ "statistics/dashboard":
/*!**********************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/statistics/dashboard.ts ***!
  \**********************************************************************/
/*! exports provided: StatisticsDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsDashboard", function() { return StatisticsDashboard; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
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



var StatisticsDashboard = /** @class */ (function () {
    function StatisticsDashboard(api) {
        this.api = api;
        this.fetch = this.fetch.bind(this);
    }
    StatisticsDashboard.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.year = Number(params.year) || luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().year;
                        _a = this;
                        return [4 /*yield*/, this.api.getAllPointOfSales().transfer()];
                    case 1:
                        _a.posStats = _b.sent();
                        return [4 /*yield*/, this.fetch()];
                    case 2:
                        _b.sent();
                        this.timerHandle = setInterval(this.fetch, 10000);
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsDashboard.prototype.deactivate = function () {
        clearInterval(this.timerHandle);
    };
    StatisticsDashboard.prototype.fetch = function () {
        var _this = this;
        var promises = [
            this.api.getHourlyStats({ year: this.year }).bypassCache().transfer().then(function (result) { return _this.hourStats = result; })
        ].concat(this.posStats.map(function (pos) { return _this.api.getHourlyStats({ year: _this.year, pointOfSaleId: pos.id }).bypassCache().transfer().then(function (result) { return pos.hourStats = result; }); }));
        return Promise.all(promises);
    };
    StatisticsDashboard = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], StatisticsDashboard);
    return StatisticsDashboard;
}());



/***/ }),

/***/ "statistics/dashboard.html":
/*!***************************************!*\
  !*** ./src/statistics/dashboard.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"./stats-widget\"></require>\r\n    <h2>Salgsstatistik</h2>\r\n    <div class=\"row\">\r\n        <stats-widget class=\"col-12\" value.bind=\"hourStats\"></stats-widget>\r\n    </div>\r\n    <h2>Salgsstedsstatistik</h2>\r\n    <div repeat.for=\"pos of posStats\" class=\"row\">\r\n        <stats-widget class=\"col-12\" title.bind=\"pos.name\" value.bind=\"pos.hourStats\"></stats-widget>\r\n    </div>\r\n</template>";

/***/ }),

/***/ "statistics/stats-widget":
/*!****************************************!*\
  !*** ./src/statistics/stats-widget.ts ***!
  \****************************************/
/*! exports provided: StatsWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsWidget", function() { return StatsWidget; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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


var icons = {
    "card": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCreditCard"],
    "cash": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMoneyBillAlt"],
    "account": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFileInvoiceDollar"]
};
var StatsWidget = /** @class */ (function () {
    function StatsWidget() {
    }
    StatsWidget.prototype.getPaymentMethodIcon = function (method) {
        return icons[method];
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindable"])({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindingMode"].oneTime }),
        __metadata("design:type", String)
    ], StatsWidget.prototype, "title", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindable"])(),
        __metadata("design:type", Object)
    ], StatsWidget.prototype, "value", void 0);
    return StatsWidget;
}());



/***/ }),

/***/ "statistics/stats-widget.html":
/*!******************************************!*\
  !*** ./src/statistics/stats-widget.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" if.bind=\"title\">${title}</div>\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-sm\">\r\n                <tr repeat.for=\"hour of value\">\r\n                    <td>${hour.periodStart | dateTime}</td>\r\n                    <td>${hour.orders}</td>\r\n                    <td class=\"text-right\">${hour.total | money}</td>\r\n                    <td>\r\n                        <div repeat.for=\"stats of hour.payments\">\r\n                            <font-awesome-icon icon.bind=\"getPaymentMethodIcon(stats.method)\" fixed-width=\"true\"></font-awesome-icon>\r\n                            ${stats.payments}/${stats.total | money}\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div repeat.for=\"stats of hour.products\">\r\n                            ${stats.productName} ${stats.quantity}/${stats.total | money}\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmUtYmVmb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9jcmVhdGUudHM/Mzk2NCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvZGV0YWlscy50cz9lMDkyIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9lZGl0LnRzPzg3NzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2xpc3QudHM/YTE2YiIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2NyZWF0ZS50cz8xMmVhIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvZWRpdC50cz8yNDc2Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvbGlzdC50cz84ZTVlIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvY3JlYXRlLnRzPzQ1ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9kZXRhaWxzLnRzP2FiNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9lZGl0LnRzPzJjYmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9saXN0LnRzP2RhZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2NyZWF0ZS50cz9mYjI3Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9lZGl0LnRzPzkzODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2xpc3QudHM/ZTcxYSIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvdGVybWluYWxzL2NyZWF0ZS50cz9kNzQ0Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy90ZXJtaW5hbHMvZWRpdC50cz9iOWM4Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy90ZXJtaW5hbHMvbGlzdC50cz81NjA4Iiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9kZXRhaWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9kZXRhaWxzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL3JvdXRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hbGFybXMvZWRpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWxhcm1zL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FsYXJtcy9yb3V0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2FkZC1wcm9kdWN0LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2FkZC1wcm9kdWN0LWRpYWxvZy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2RldGFpbHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcG9pbnRvZnNhbGVzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3BvaW50b2ZzYWxlcy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wb2ludG9mc2FsZXMvcm91dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL3JvdXRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy90ZXJtaW5hbHMvZWRpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvdGVybWluYWxzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvdGVybWluYWxzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Rlcm1pbmFscy9yb3V0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGlzdGljcy9kYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpc3RpY3MvZGFzaGJvYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpc3RpY3Mvc3RhdHMtd2lkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aXN0aWNzL3N0YXRzLXdpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDeEI7QUFDUTtBQUNYO0FBSzdCO0lBVUksdUJBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnBELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsY0FBUyxHQUFHLEdBQUcsQ0FBQztJQU9oQixDQUFDO0lBTEQsc0JBQUksb0NBQVM7YUFBYjtZQUFBLGlCQUVDO1lBREcsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsTUFBTSxFQUF4QixD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QU0sOEtBQThLLDRCQUE0QixtQ0FBbUMsWUFBWSx3REFBd0QsbUJBQW1CLHVSQUF1UixlQUFlLEdBQUcsb0JBQW9CLG9NQUFvTSxrQkFBa0IsR0FBRyxlQUFlLEdBQUcsb0JBQW9CLGlLIiwiZmlsZSI6InNldHRpbmdzLmY4MzAzNzM3OTU3YjFhNWM3YzJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgdXNlVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi4vLi4vYXBpL2FjY291bnRcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQHVzZVZpZXcoXCIuL2VkaXQuaHRtbFwiKVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWNjb3VudCB7XHJcbiAgICBwcml2YXRlIGFjY291bnRzITogQWNjb3VudFtdO1xyXG4gICAgbnVtYmVyID0gMDtcclxuICAgIG5hbWUgPSBcIlwiO1xyXG4gICAgbWF4Q3JlZGl0ID0gXCIwXCI7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXIgPiAwICYmICEhdGhpcy5uYW1lLmxlbmd0aCAmJiB0aGlzLmFjY291bnRzICYmIHRoaXMuYWNjb3VudHMuZmluZEluZGV4KHggPT4geC5udW1iZXIgPT09IHRoaXMubnVtYmVyKSA9PT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVBY2NvdW50KHsgbnVtYmVyOiB0aGlzLm51bWJlciwgbmFtZTogdGhpcy5uYW1lLCBtYXhDcmVkaXQ6IG5ldyBCaWcodGhpcy5tYXhDcmVkaXQpIH0pLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwiZGV0YWlsc1wiLCB7XHJcbiAgICAgICAgICAgIGFjY291bnRJZDogYWNjb3VudC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgYXV0b2luamVjdCwgdXNlVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AdXNlVmlldyhcIi4vZWRpdC5odG1sXCIpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVBbGFybUZlZWQge1xyXG4gICAgbmFtZSA9IFwiXCI7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkuY3JlYXRlQWxhcm1GZWVkKHsgbmFtZTogdGhpcy5uYW1lIH0pLnNlbmQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgYXV0b2luamVjdCwgdXNlVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AdXNlVmlldyhcIi4vZWRpdC5odG1sXCIpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb2ludE9mU2FsZSB7XHJcbiAgICBuYW1lID0gXCJcIjtcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVQb2ludE9mU2FsZSh7IG5hbWU6IHRoaXMubmFtZSB9KS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImRldGFpbHNcIiwge1xyXG4gICAgICAgICAgICBwb2ludE9mU2FsZUlkOiBwb3MuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgdXNlVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AdXNlVmlldyhcIi4vZWRpdC5odG1sXCIpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVQcm9kdWN0IHtcclxuICAgIG5hbWUgPSBcIlwiO1xyXG4gICAgcHJpY2UgPSBcIjBcIjtcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlUHJvZHVjdCh7IG5hbWU6IHRoaXMubmFtZSwgcHJpY2U6IG5ldyBCaWcodGhpcy5wcmljZSkgfSkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgYXV0b2luamVjdCwgdXNlVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AdXNlVmlldyhcIi4vZWRpdC5odG1sXCIpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVUZXJtaW5hbCB7XHJcbiAgICBuYW1lID0gXCJcIjtcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB0ZXJtaW5hbCA9IGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVRlcm1pbmFsKHsgbmFtZTogdGhpcy5uYW1lIH0pLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb3ZlQmVmb3JlPFQ+KGFycmF5OiBUW10sIGl0ZW1NYXRjaGVyRm46IChpdGVtOiBUKSA9PiBib29sZWFuLCBzaWJsaW5nTWF0Y2hlckZuOiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgY29uc3QgcmVtb3ZlZEl0ZW0gPSByZW1vdmUoYXJyYXksIGl0ZW1NYXRjaGVyRm4pO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYXJyYXkuZmluZEluZGV4KHNpYmxpbmdNYXRjaGVyRm4pO1xyXG4gICAgY29uc3QgaXRlbXMgPSByZW1vdmVkSXRlbSA/IFtyZW1vdmVkSXRlbV0gOiBbXTtcclxuICAgIGFycmF5LnNwbGljZShuZXh0SW5kZXggPj0gMCA/IG5leHRJbmRleCA6IGFycmF5Lmxlbmd0aCwgMCwgLi4uaXRlbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmU8VD4oYXJyYXk6IFRbXSwgbWF0Y2hlckZuOiAoaXRlbTogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5maW5kSW5kZXgobWF0Y2hlckZuKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnNwbGljZShpbmRleCwgMSlbMF07XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY3JlYXRlLnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vZGV0YWlscy50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2VkaXQudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9saXN0LnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vY3JlYXRlLnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vZWRpdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2xpc3QudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jcmVhdGUudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9kZXRhaWxzLnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vZWRpdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2xpc3QudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9jcmVhdGUudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9lZGl0LnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vbGlzdC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2NyZWF0ZS50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2VkaXQudHNcIikpO1xuXHR9LCBcInNldHRpbmdzXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9saXN0LnRzXCIpKTtcblx0fSwgXCJzZXR0aW5nc1wiKTtcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUG9pbnRPZlNhbGUgfSBmcm9tIFwiLi4vLi4vYXBpL3BvaW50LW9mLXNhbGVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50RGV0YWlscyB7XHJcbiAgICBwcml2YXRlIGFjY291bnQhOiBQb2ludE9mU2FsZTtcclxuICAgIGFjY291bnRJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBhY2NvdW50SWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBOdW1iZXIocGFyYW1zLmFjY291bnRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGF3YWl0IHRoaXMuYXBpLmdldEFjY291bnQodGhpcy5hY2NvdW50SWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5hY2NvdW50Lm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiU2thbCBrb250b2VuIHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZUFjY291bnQodGhpcy5hY2NvdW50LmlkKS5zZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJsaXN0XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRWRpdFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUxpc3RcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInbGlzdCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwicm91dGU6ZWRpdDsgcGFyYW1zLmJpbmQ6IHsgYWNjb3VudElkIH1cXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2VkaXQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xpY2suZGVsZWdhdGU9XFxcImRlbGV0ZSgpXFxcIiBjbGFzcz1cXFwibmF2LWxpbmsgdGV4dC1kYW5nZXJcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxoMT4ke25hbWV9PC9oMT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUGF0Y2ggfSBmcm9tIFwidXItanNvbnBhdGNoXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4uLy4uL2FwaS9hY2NvdW50XCI7XHJcbmltcG9ydCB7QmlnfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0QWNjb3VudCB7XHJcbiAgICBwcml2YXRlIGFjY291bnRJZCE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYWNjb3VudHMhOiBBY2NvdW50W107XHJcbiAgICBudW1iZXIhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG4gICAgbWF4Q3JlZGl0ITogQmlnO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyID4gMCAmJiAhIXRoaXMubmFtZS5sZW5ndGggJiYgdGhpcy5hY2NvdW50cy5maW5kSW5kZXgoeCA9PiB4LmlkICE9PSB0aGlzLmFjY291bnRJZCAmJiB4Lm51bWJlciA9PT0gdGhpcy5udW1iZXIpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IGFjY291bnRJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IE51bWJlcihwYXJhbXMuYWNjb3VudElkKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWNjb3VudCh0aGlzLmFjY291bnRJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWNjb3VudHMoKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gYWNjb3VudC5udW1iZXI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gYWNjb3VudC5uYW1lO1xyXG4gICAgICAgIHRoaXMubWF4Q3JlZGl0ID0gYWNjb3VudC5tYXhDcmVkaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGNoID0gbmV3IFBhdGNoPEFjY291bnQ+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm51bWJlciwgdGhpcy5udW1iZXIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5uYW1lLCB0aGlzLm5hbWUpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5tYXhDcmVkaXQsIHRoaXMubWF4Q3JlZGl0KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlQWNjb3VudCh0aGlzLmFjY291bnRJZCwgcGF0Y2gub3BlcmF0aW9ucykudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJkZXRhaWxzXCIsIHsgYWNjb3VudElkOiB0aGlzLmFjY291bnRJZCB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPjwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TnVtbWVyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibnVtYmVyIHwgbnVtYmVyXFxcIiBzdGVwPVxcXCIxXFxcIiBwbGFjZWhvbGRlcj1cXFwiTnVtbWVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hdm48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hdm5cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+S3JlZGl0bWFrczwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm1heENyZWRpdFxcXCIgcGxhY2Vob2xkZXI9XFxcIktyZWRpdG1ha3NcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50c0xpc3Qge1xyXG4gICAgYWNjb3VudHMhOiBBY2NvdW50Vmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVzZXRDcmVkaXQoKSB7XHJcbiAgICAgICAgaWYgKHByb21wdChcIlNrYWwgcmVzdGVyZW5kZSBrcmVkaXQgc8OmdHRlcyB0aWwgbWFrcyBrcmVkaXQgZm9yIGFsbGUga29udGk/IFNrcml2ICdKQScgZm9yIGF0IGJla3LDpmZ0ZVwiKSA9PT0gXCJKQVwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLnJlc2V0QWxsQWNjb3VudHMoKS5zZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQWNjb3VudFZpZXdNb2RlbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbnVtYmVyOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImNyZWF0ZVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd1JpZ2h0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1c1xcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidwbHVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxkaXYgaWYuYmluZD1cXFwiYWNjb3VudHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPiYjeDIxMTY7PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYXZuPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5NYWtzPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwiYWNjb3VudCBvZiBhY2NvdW50c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHthY2NvdW50Lm51bWJlcn08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHthY2NvdW50Lm5hbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcIndoaXRlLXNwYWNlOiBub3dyYXBcXFwiPiR7YWNjb3VudC5tYXhDcmVkaXQgfCBtb25leX0ga3IuPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogZGV0YWlsczsgcGFyYW1zLmJpbmQ6IHsgYWNjb3VudElkOiBhY2NvdW50LmlkIH1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2Fycm93LXJpZ2h0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90YWJsZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwicmVzZXRDcmVkaXQoKVxcXCI+U8OmdCBhbGxlIGtvbnRpIHRpbCBrcmVkaXRtYWtzPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxlbXB0eS1oaW50IGVsc2U+XFxyXFxuICAgICAgICAgICAgRGVyIGVyIGluZ2VuIGtvbnRpXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwibGlzdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbGlzdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcImNyZWF0ZVwiLCBuYW1lOiBcImNyZWF0ZVwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY3JlYXRlXCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiOmFjY291bnRJZFwiLCBuYW1lOiBcImRldGFpbHNcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2RldGFpbHNcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6YWNjb3VudElkL2VkaXRcIiwgbmFtZTogXCJlZGl0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9lZGl0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRzUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFsYXJtRmVlZCB9IGZyb20gXCIuLi8uLi9hcGkvYWxhcm1zXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0QWxhcm0ge1xyXG4gICAgcHJpdmF0ZSBhbGFybUZlZWRJZCE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgYWxhcm1GZWVkSWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5hbGFybUZlZWRJZCA9IE51bWJlcihwYXJhbXMuYWxhcm1GZWVkSWQpO1xyXG4gICAgICAgIGNvbnN0IGZlZWQgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGFybUZlZWQodGhpcy5hbGFybUZlZWRJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmZWVkLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiU2thbCBhbGFybWVuIHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZUFsYXJtRmVlZCh0aGlzLmFsYXJtRmVlZElkKS5zZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwYXRjaCA9IG5ldyBQYXRjaDxBbGFybUZlZWQ+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZUFsYXJtRmVlZCh0aGlzLmFsYXJtRmVlZElkLCBwYXRjaC5vcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgaWYuYmluZD1cXFwiZGVsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKClcXFwiIGNsYXNzPVxcXCJuYXYtbGluayB0ZXh0LWRhbmdlclxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RyYXNoJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYXZuPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXZuXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuU3VibWl0XFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBbGFybXNMaXN0IHtcclxuICAgIGZlZWRzITogQWxhcm1GZWVkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuZmVlZHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBbGFybUZlZWRzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEFsYXJtRmVlZCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIGlmLmJpbmQ9XFxcImZlZWRzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImZlZWQgb2YgZmVlZHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke2ZlZWQubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogZWRpdDsgcGFyYW1zLmJpbmQ6IHsgYWxhcm1GZWVkSWQ6IGZlZWQuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4gYWxhcm1lciBvcHNhdCwga2xpayA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiPmhlcjwvYT4gZm9yIGF0IG9wcmV0dGUgZGVuIGbDuHJzdGUuXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwibGlzdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbGlzdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcImNyZWF0ZVwiLCBuYW1lOiBcImNyZWF0ZVwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY3JlYXRlXCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiOmFsYXJtRmVlZElkL2VkaXRcIiwgbmFtZTogXCJlZGl0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9lZGl0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNsYXNzIEFsYXJtc1JvdXRlciB7XHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3LCBQTEFURk9STSwgdmlld1N0cmF0ZWd5IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9hcGkvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBEaWFsb2dDb250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtZGlhbG9nXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwic2V0dGluZ3MvcG9pbnRvZnNhbGVzL2FkZC1wcm9kdWN0LWRpYWxvZy5odG1sXCIpXHJcbmV4cG9ydCBjbGFzcyBBZGRQcm9kdWN0RGlhbG9nIHtcclxuICAgIHByb2R1Y3RzITogUHJvZHVjdFZpZXdNb2RlbFtdO1xyXG4gICAgcHJvZHVjdCE6IFByb2R1Y3RWaWV3TW9kZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLCBwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFByb2R1Y3RzKCkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gdGhpcy5wcm9kdWN0c1swXTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5vayh0aGlzLnByb2R1Y3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdFZpZXdNb2RlbCBleHRlbmRzIFByb2R1Y3Qge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICA8dXgtZGlhbG9nPlxcclxcbiAgICAgICAgICAgIDx1eC1kaWFsb2ctaGVhZGVyPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiY2xvc2UoKVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIFRpbGbDuGogcHJvZHVrdFxcclxcbiAgICAgICAgICAgIDwvdXgtZGlhbG9nLWhlYWRlcj5cXHJcXG4gICAgICAgICAgICA8dXgtZGlhbG9nLWJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwicHJvZHVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHJlcGVhdC5mb3I9XFxcInByb2R1Y3Qgb2YgcHJvZHVjdHNcXFwiIG1vZGVsLmJpbmQ9XFxcInByb2R1Y3RcXFwiPiR7cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L3V4LWRpYWxvZy1ib2R5PlxcclxcbiAgICAgICAgICAgIDx1eC1kaWFsb2ctZm9vdGVyPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+VGlsZsO4ajwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvdXgtZGlhbG9nLWZvb3Rlcj5cXHJcXG4gICAgICAgIDwvdXgtZGlhbG9nPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCJhdXJlbGlhLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2FwaS9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IGRpZmYgfSBmcm9tIFwidXItanNvbnBhdGNoXCI7XHJcbmltcG9ydCB7IFBvaW50T2ZTYWxlIH0gZnJvbSBcIi4uLy4uL2FwaS9wb2ludC1vZi1zYWxlXCI7XHJcbmltcG9ydCB7IG1vdmVCZWZvcmUgfSBmcm9tIFwiLi4vLi4vbW92ZS1iZWZvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFkZFByb2R1Y3REaWFsb2cgfSBmcm9tIFwiLi9hZGQtcHJvZHVjdC1kaWFsb2dcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBvaW50T2ZTYWxlRGV0YWlscyB7XHJcbiAgICBwcml2YXRlIHBvaW50T2ZTYWxlITogUG9pbnRPZlNhbGU7XHJcbiAgICBwb2ludE9mU2FsZUlkITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3RzITogUHJvZHVjdFtdO1xyXG4gICAgcHJvZHVjdHMhOiBQcm9kdWN0Vmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgcG9pbnRPZlNhbGVJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLnBvaW50T2ZTYWxlSWQgPSBOdW1iZXIocGFyYW1zLnBvaW50T2ZTYWxlSWQpO1xyXG5cclxuICAgICAgICB0aGlzLnBvaW50T2ZTYWxlID0gYXdhaXQgdGhpcy5hcGkuZ2V0UG9pbnRPZlNhbGUodGhpcy5wb2ludE9mU2FsZUlkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucG9pbnRPZlNhbGUubmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9kdWN0cyA9IGF3YWl0IHRoaXMuYXBpLmdldFByb2R1Y3RzQnlQb2ludE9mU2FsZUlkKHRoaXMucG9pbnRPZlNhbGVJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gWy4uLnRoaXMuY3VycmVudFByb2R1Y3RzXTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJTa2FsIHNhbGdzc3RlZGV0IHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZVBvaW50T2ZTYWxlKHRoaXMucG9pbnRPZlNhbGUuaWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRkUHJvZHVjdCgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRpYWxvZy5vcGVuKHsgdmlld01vZGVsOiBBZGRQcm9kdWN0RGlhbG9nIH0pLndoZW5DbG9zZWQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSByZXN1bHQub3V0cHV0IGFzIFByb2R1Y3Q7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvZHVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1Ecm9wcGVkKGl0ZW1FbGVtZW50OiBIVE1MRWxlbWVudCwgc2libGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvZHVjdHNbTnVtYmVyKGl0ZW1FbGVtZW50LmRhdGFzZXQuaW5kZXgpXTtcclxuICAgICAgICBjb25zdCBzaWJsaW5nID0gc2libGluZ0VsZW1lbnQgPyB0aGlzLnByb2R1Y3RzW051bWJlcihzaWJsaW5nRWxlbWVudC5kYXRhc2V0LmluZGV4KV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgbW92ZUJlZm9yZSh0aGlzLnByb2R1Y3RzLCB4ID0+IHggPT09IGl0ZW0sIHggPT4geCA9PT0gc2libGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbnMgPSBkaWZmKHRoaXMuY3VycmVudFByb2R1Y3RzLCB0aGlzLnByb2R1Y3RzKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS51cGRhdGVQcm9kdWN0c0J5UG9pbnRPZlNhbGVJZCh0aGlzLnBvaW50T2ZTYWxlLmlkLCBvcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cztcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdFZpZXdNb2RlbCBleHRlbmRzIFByb2R1Y3Qge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwibGlzdFxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFZGl0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTGlzdFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidsaXN0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTplZGl0OyBwYXJhbXMuYmluZDogeyBwb2ludE9mU2FsZUlkIH1cXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2VkaXQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xpY2suZGVsZWdhdGU9XFxcImRlbGV0ZSgpXFxcIiBjbGFzcz1cXFwibmF2LWxpbmsgdGV4dC1kYW5nZXJcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxoMT4ke25hbWV9PC9oMT5cXHJcXG5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0XFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiYWRkUHJvZHVjdCgpXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5Qcm9kdWt0ZXI8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIiBpZi5iaW5kPVxcXCJwcm9kdWN0cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRyYWd1bGEtYW5kLWRyb3AgZHJvcC1mbi5jYWxsPVxcXCJpdGVtRHJvcHBlZChpdGVtLCBzaWJsaW5nKVxcXCI+PC9kcmFndWxhLWFuZC1kcm9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJkcmFnLXNvdXJjZSBkcm9wLXRhcmdldFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJwcm9kdWN0IG9mIHByb2R1Y3RzXFxcIiBkYXRhLWluZGV4LmJpbmQ9XFxcIiRpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke3Byb2R1Y3QubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgY2xpY2suZGVsZWdhdGU9XFxcInJlbW92ZVByb2R1Y3QoJGluZGV4KVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RpbWVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBGamVybjwvYnV0dG9uPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiIGVsc2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICBEZXIgZXIgaW5nZW4gcHJvZHVrdGVyIHRpbGtueXR0ZXQgc2FsZ3NzdGVkZXRcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3NhdmUnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEdlbTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQb2ludE9mU2FsZSB9IGZyb20gXCIuLi8uLi9hcGkvcG9pbnQtb2Ytc2FsZVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UG9pbnRPZlNhbGUge1xyXG4gICAgcHJpdmF0ZSBwb2ludE9mU2FsZUlkITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyBwb2ludE9mU2FsZUlkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRPZlNhbGVJZCA9IE51bWJlcihwYXJhbXMucG9pbnRPZlNhbGVJZCk7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYXdhaXQgdGhpcy5hcGkuZ2V0UG9pbnRPZlNhbGUodGhpcy5wb2ludE9mU2FsZUlkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHBvcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwYXRjaCA9IG5ldyBQYXRjaDxQb2ludE9mU2FsZT4oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubmFtZSwgdGhpcy5uYW1lKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlUG9pbnRPZlNhbGUodGhpcy5wb2ludE9mU2FsZUlkLCBwYXRjaC5vcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImRldGFpbHNcIiwgeyBwb2ludE9mU2FsZUlkOiB0aGlzLnBvaW50T2ZTYWxlSWQgfSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hdm48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hdm5cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQb2ludE9mU2FsZXNMaXN0IHtcclxuICAgIHBvaW50T2ZTYWxlcyE6IFBvaW50T2ZTYWxlVmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnRPZlNhbGVzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUG9pbnRPZlNhbGVzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFBvaW50T2ZTYWxlVmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImNyZWF0ZVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd1JpZ2h0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1c1xcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidwbHVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIGlmLmJpbmQ9XFxcInBvaW50T2ZTYWxlcy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJwb3Mgb2YgcG9pbnRPZlNhbGVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtwb3MubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogZGV0YWlsczsgcGFyYW1zLmJpbmQ6IHsgcG9pbnRPZlNhbGVJZDogcG9zLmlkIH1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2Fycm93LXJpZ2h0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxlbXB0eS1oaW50IGVsc2U+XFxyXFxuICAgICAgICAgICAgRGVyIGVyIGluZ2VuIHNhbGdzc3RlZGVyXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwibGlzdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbGlzdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcImNyZWF0ZVwiLCBuYW1lOiBcImNyZWF0ZVwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY3JlYXRlXCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiOnBvaW50T2ZTYWxlSWRcIiwgbmFtZTogXCJkZXRhaWxzXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9kZXRhaWxzXCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiOnBvaW50T2ZTYWxlSWQvZWRpdFwiLCBuYW1lOiBcImVkaXRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2VkaXRcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG5dXHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRPZlNhbGVzUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2R1Y3Qge1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0SWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG4gICAgcHJpY2UhOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm5hbWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgcHJvZHVjdElkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKHBhcmFtcy5wcm9kdWN0SWQpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0aGlzLmFwaS5nZXRQcm9kdWN0KHRoaXMucHJvZHVjdElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIlNrYWwgcHJvZHVrdGV0IHNsZXR0ZXM/XCIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpLmRlbGV0ZVByb2R1Y3QodGhpcy5wcm9kdWN0SWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGNoID0gbmV3IFBhdGNoPFByb2R1Y3Q+KClcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4LnByaWNlLCBuZXcgQmlnKHRoaXMucHJpY2UpKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkudXBkYXRlUHJvZHVjdCh0aGlzLnByb2R1Y3RJZCwgcGF0Y2gub3BlcmF0aW9ucykudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJsaXN0XCIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIGlmLmJpbmQ9XFxcImRlbGV0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWYgY2xpY2suZGVsZWdhdGU9XFxcImRlbGV0ZSgpXFxcIiBjbGFzcz1cXFwibmF2LWxpbmsgdGV4dC1kYW5nZXJcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIid0cmFzaCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF2bjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF2blxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5QcmlzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwicHJpY2VcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMC4wMVxcXCIgcGxhY2Vob2xkZXI9XFxcIlByaXNcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCJhdXJlbGlhLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdCB7XHJcbiAgICBwcm9kdWN0cyE6IFByb2R1Y3RWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIGRpYWxvZzogRGlhbG9nU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQcm9kdWN0cygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcmljZTogQmlnO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIncGx1cycgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+ICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBpZi5iaW5kPVxcXCJwcm9kdWN0cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+TmF2bjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+U2FsZ3NwcmlzPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcInByb2R1Y3Qgb2YgcHJvZHVjdHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+QmlsbGVkZTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7cHJvZHVjdC5uYW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+JHtwcm9kdWN0LnByaWNlIHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBlZGl0OyBwYXJhbXMuYmluZDogeyBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4gcHJvZHVrdGVyXFxyXFxuICAgICAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwibGlzdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbGlzdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcImNyZWF0ZVwiLCBuYW1lOiBcImNyZWF0ZVwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vY3JlYXRlXCIsIFwic2V0dGluZ3NcIikgfSxcclxuICAgIHsgcm91dGU6IFwiOnByb2R1Y3RJZC9lZGl0XCIsIG5hbWU6IFwiZWRpdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZWRpdFwiLCBcInNldHRpbmdzXCIpIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c1JvdXRlciB7XHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUGF0Y2ggfSBmcm9tIFwidXItanNvbnBhdGNoXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBUZXJtaW5hbCB9IGZyb20gXCIuLi8uLi9hcGkvdGVybWluYWxcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEVkaXRUZXJtaW5hbCB7XHJcbiAgICBwcml2YXRlIHRlcm1pbmFsSWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IHRlcm1pbmFsSWQ6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbElkID0gTnVtYmVyKHBhcmFtcy50ZXJtaW5hbElkKTtcclxuICAgICAgICBjb25zdCB0ZXJtaW5hbCA9IGF3YWl0IHRoaXMuYXBpLmdldFRlcm1pbmFsKHRoaXMudGVybWluYWxJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0ZXJtaW5hbC5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIlNrYWwgdGVybWluYWxlbiBzbGV0dGVzP1wiKSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVUZXJtaW5hbCh0aGlzLnRlcm1pbmFsSWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGNoID0gbmV3IFBhdGNoPFRlcm1pbmFsPigpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5uYW1lLCB0aGlzLm5hbWUpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS51cGRhdGVUZXJtaW5hbCh0aGlzLnRlcm1pbmFsSWQsIHBhdGNoLm9wZXJhdGlvbnMpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiBpZi5iaW5kPVxcXCJkZWxldGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoKVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rIHRleHQtZGFuZ2VyXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hdm48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hdm5cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5TdWJtaXRcXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFRlcm1pbmFsc0xpc3Qge1xyXG4gICAgdGVybWluYWxzITogVGVybWluYWxWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxUZXJtaW5hbHMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVybWluYWxWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwiY3JlYXRlXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUFycm93UmlnaHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3BsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgaWYuYmluZD1cXFwidGVybWluYWxzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcInRlcm1pbmFsIG9mIHRlcm1pbmFsc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPiR7dGVybWluYWwubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogZWRpdDsgcGFyYW1zLmJpbmQ6IHsgdGVybWluYWxJZDogdGVybWluYWwuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4gdGVybWluYWxlclxcclxcbiAgICAgICAgPC9lbXB0eS1oaW50PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBbXHJcbiAgICB7IHJvdXRlOiBcIlwiLCBuYW1lOiBcImxpc3RcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2xpc3RcIiwgXCJzZXR0aW5nc1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCJjcmVhdGVcIiwgbmFtZTogXCJjcmVhdGVcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2NyZWF0ZVwiLCBcInNldHRpbmdzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcIjp0ZXJtaW5hbElkL2VkaXRcIiwgbmFtZTogXCJlZGl0XCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9lZGl0XCIsIFwic2V0dGluZ3NcIikgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlcm1pbmFsc1JvdXRlciB7XHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0Rhc2hib2FyZCB7XHJcbiAgICBwcml2YXRlIHRpbWVySGFuZGxlITogYW55O1xyXG4gICAgeWVhciE6IG51bWJlcjtcclxuXHJcbiAgICBob3VyU3RhdHM/OiBTdGF0c1ZpZXdNb2RlbFtdO1xyXG4gICAgcG9zU3RhdHMhOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgaG91clN0YXRzPzogU3RhdHNWaWV3TW9kZWxbXVxyXG4gICAgfVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgICAgICB0aGlzLmZldGNoID0gdGhpcy5mZXRjaC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogeyB5ZWFyPzogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLnllYXIgPSBOdW1iZXIocGFyYW1zLnllYXIpIHx8IERhdGVUaW1lLmxvY2FsKCkueWVhcjtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NTdGF0cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFBvaW50T2ZTYWxlcygpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVySGFuZGxlID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaCwgMTAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZldGNoKCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmFwaS5nZXRIb3VybHlTdGF0cyh7IHllYXI6IHRoaXMueWVhciB9KS5ieXBhc3NDYWNoZSgpLnRyYW5zZmVyKCkudGhlbihyZXN1bHQgPT4gdGhpcy5ob3VyU3RhdHMgPSByZXN1bHQpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnBvc1N0YXRzLm1hcChwb3MgPT4gdGhpcy5hcGkuZ2V0SG91cmx5U3RhdHMoeyB5ZWFyOiB0aGlzLnllYXIsIHBvaW50T2ZTYWxlSWQ6IHBvcy5pZCB9KS5ieXBhc3NDYWNoZSgpLnRyYW5zZmVyKCkudGhlbihyZXN1bHQgPT4gcG9zLmhvdXJTdGF0cyA9IHJlc3VsdCkpXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0c1ZpZXdNb2RlbCB7XHJcbiAgICBwZXJpb2RTdGFydDogRGF0ZVRpbWU7XHJcbiAgICBvcmRlcnM6IG51bWJlcjtcclxuICAgIHRvdGFsOiBCaWc7XHJcbiAgICBwYXltZW50czoge1xyXG4gICAgICAgIG1ldGhvZDogXCJjYXJkXCIgfCBcImNhc2hcIiB8IFwiYWNjb3VudFwiXHJcbiAgICAgICAgcGF5bWVudHM6IG51bWJlcjtcclxuICAgICAgICB0b3RhbDogQmlnO1xyXG4gICAgfVtdO1xyXG4gICAgcHJvZHVjdHM6IHtcclxuICAgICAgICBwcm9kdWN0SWQ6IG51bWJlcjtcclxuICAgICAgICBwcm9kdWN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIG9yZGVyczogbnVtYmVyO1xyXG4gICAgICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWw6IEJpZztcclxuICAgIH1bXTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxyZXF1aXJlIGZyb209XFxcIi4vc3RhdHMtd2lkZ2V0XFxcIj48L3JlcXVpcmU+XFxyXFxuICAgIDxoMj5TYWxnc3N0YXRpc3RpazwvaDI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHMtd2lkZ2V0IGNsYXNzPVxcXCJjb2wtMTJcXFwiIHZhbHVlLmJpbmQ9XFxcImhvdXJTdGF0c1xcXCI+PC9zdGF0cy13aWRnZXQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8aDI+U2FsZ3NzdGVkc3N0YXRpc3RpazwvaDI+XFxyXFxuICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwicG9zIG9mIHBvc1N0YXRzXFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxzdGF0cy13aWRnZXQgY2xhc3M9XFxcImNvbC0xMlxcXCIgdGl0bGUuYmluZD1cXFwicG9zLm5hbWVcXFwiIHZhbHVlLmJpbmQ9XFxcInBvcy5ob3VyU3RhdHNcXFwiPjwvc3RhdHMtd2lkZ2V0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IFBheW1lbnRNZXRob2QgfSBmcm9tIFwiLi4vYXBpL3BheW1lbnRcIjtcclxuaW1wb3J0IHsgZmFDcmVkaXRDYXJkLCBmYU1vbmV5QmlsbEFsdCwgSWNvbkRlZmluaXRpb24sIGZhRmlsZUludm9pY2VEb2xsYXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTdGF0c1ZpZXdNb2RlbCB9IGZyb20gXCIuL2Rhc2hib2FyZFwiO1xyXG5cclxuY29uc3QgaWNvbnM6IHtbaWQgaW4gUGF5bWVudE1ldGhvZF06IEljb25EZWZpbml0aW9ufSA9IHtcclxuICAgIFwiY2FyZFwiOiBmYUNyZWRpdENhcmQsXHJcbiAgICBcImNhc2hcIjogZmFNb25leUJpbGxBbHQsXHJcbiAgICBcImFjY291bnRcIjogZmFGaWxlSW52b2ljZURvbGxhclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdHNXaWRnZXQge1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lIH0pIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKCkgdmFsdWUhOiBTdGF0c1ZpZXdNb2RlbDtcclxuXHJcbiAgICBnZXRQYXltZW50TWV0aG9kSWNvbihtZXRob2Q6IFBheW1lbnRNZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gaWNvbnNbbWV0aG9kXTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiIGlmLmJpbmQ9XFxcInRpdGxlXFxcIj4ke3RpdGxlfTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImhvdXIgb2YgdmFsdWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aG91ci5wZXJpb2RTdGFydCB8IGRhdGVUaW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtob3VyLm9yZGVyc308L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ke2hvdXIudG90YWwgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwic3RhdHMgb2YgaG91ci5wYXltZW50c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcImdldFBheW1lbnRNZXRob2RJY29uKHN0YXRzLm1ldGhvZClcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0YXRzLnBheW1lbnRzfS8ke3N0YXRzLnRvdGFsIHwgbW9uZXl9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwic3RhdHMgb2YgaG91ci5wcm9kdWN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3RhdHMucHJvZHVjdE5hbWV9ICR7c3RhdHMucXVhbnRpdHl9LyR7c3RhdHMudG90YWwgfCBtb25leX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=