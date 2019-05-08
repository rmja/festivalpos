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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9kZXRhaWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY2NvdW50cy9kZXRhaWxzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2VkaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjY291bnRzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvYWNjb3VudHMvbGlzdC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDeEI7QUFDUTtBQUNYO0FBSzdCO0lBVUksdUJBQW9CLEdBQVEsRUFBVSxNQUFjO1FBQWhDLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnBELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsY0FBUyxHQUFHLEdBQUcsQ0FBQztJQU9oQixDQUFDO0lBTEQsc0JBQUksb0NBQVM7YUFBYjtZQUFBLGlCQUVDO1lBREcsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsTUFBTSxFQUF4QixDQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkksQ0FBQzs7O09BQUE7SUFLSyxn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QnhCO0lBQUQsbUJBQUM7Q0FBQTtBQWhCd0I7Ozs7Ozs7Ozs7OztBQ0p6Qiwyb0JBQTJvQixxT0FBcU8sZUFBZSx5REFBeUQsYUFBYSxzRkFBc0YsMEJBQTBCLGdHQUFnRyxlQUFlLHdCQUF3QiwyZCIsImZpbGUiOiJzZXR0aW5ncy5iOWExZGNiYWQ2NzliMTU2MjM0ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIHVzZVZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4uLy4uL2FwaS9hY2NvdW50XCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUFjY291bnQge1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50cyE6IEFjY291bnRbXTtcclxuICAgIG51bWJlciA9IDA7XHJcbiAgICBuYW1lID0gXCJcIjtcclxuICAgIG1heENyZWRpdCA9IFwiMFwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyID4gMCAmJiAhIXRoaXMubmFtZS5sZW5ndGggJiYgdGhpcy5hY2NvdW50cyAmJiB0aGlzLmFjY291bnRzLmZpbmRJbmRleCh4ID0+IHgubnVtYmVyID09PSB0aGlzLm51bWJlcikgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWNjb3VudHMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlQWNjb3VudCh7IG51bWJlcjogdGhpcy5udW1iZXIsIG5hbWU6IHRoaXMubmFtZSwgbWF4Q3JlZGl0OiBuZXcgQmlnKHRoaXMubWF4Q3JlZGl0KSB9KS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImRldGFpbHNcIiwge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnQuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQb2ludE9mU2FsZSB9IGZyb20gXCIuLi8uLi9hcGkvcG9pbnQtb2Ytc2FsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFjY291bnREZXRhaWxzIHtcclxuICAgIHByaXZhdGUgYWNjb3VudCE6IFBvaW50T2ZTYWxlO1xyXG4gICAgYWNjb3VudElkITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IGFjY291bnRJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IE51bWJlcihwYXJhbXMuYWNjb3VudElkKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWNjb3VudCh0aGlzLmFjY291bnRJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmFjY291bnQubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJTa2FsIGtvbnRvZW4gc2xldHRlcz9cIikpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkuZGVsZXRlQWNjb3VudCh0aGlzLmFjY291bnQuaWQpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcImxpc3RcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFZGl0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTGlzdFxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidsaXN0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTplZGl0OyBwYXJhbXMuYmluZDogeyBhY2NvdW50SWQgfVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInZWRpdCcgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiZGVsZXRlKClcXFwiIGNsYXNzPVxcXCJuYXYtbGluayB0ZXh0LWRhbmdlclxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RyYXNoJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGgxPiR7bmFtZX08L2gxPlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBQYXRjaCB9IGZyb20gXCJ1ci1qc29ucGF0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi4vLi4vYXBpL2FjY291bnRcIjtcclxuaW1wb3J0IHtCaWd9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEVkaXRBY2NvdW50IHtcclxuICAgIHByaXZhdGUgYWNjb3VudElkITogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50cyE6IEFjY291bnRbXTtcclxuICAgIG51bWJlciE6IG51bWJlcjtcclxuICAgIG5hbWUhOiBzdHJpbmc7XHJcbiAgICBtYXhDcmVkaXQhOiBCaWc7XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXIgPiAwICYmICEhdGhpcy5uYW1lLmxlbmd0aCAmJiB0aGlzLmFjY291bnRzLmZpbmRJbmRleCh4ID0+IHguaWQgIT09IHRoaXMuYWNjb3VudElkICYmIHgubnVtYmVyID09PSB0aGlzLm51bWJlcikgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgYWNjb3VudElkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gTnVtYmVyKHBhcmFtcy5hY2NvdW50SWQpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmFwaS5nZXRBY2NvdW50KHRoaXMuYWNjb3VudElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBhY2NvdW50Lm51bWJlcjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBhY2NvdW50Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5tYXhDcmVkaXQgPSBhY2NvdW50Lm1heENyZWRpdDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0Y2ggPSBuZXcgUGF0Y2g8QWNjb3VudD4oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh4ID0+IHgubnVtYmVyLCB0aGlzLm51bWJlcilcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm5hbWUsIHRoaXMubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoeCA9PiB4Lm1heENyZWRpdCwgdGhpcy5tYXhDcmVkaXQpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS51cGRhdGVBY2NvdW50KHRoaXMuYWNjb3VudElkLCBwYXRjaC5vcGVyYXRpb25zKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImRldGFpbHNcIiwgeyBhY2NvdW50SWQ6IHRoaXMuYWNjb3VudElkIH0pO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+PC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5OdW1tZXI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJudW1iZXIgfCBudW1iZXJcXFwiIHN0ZXA9XFxcIjFcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW1tZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF2bjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZS5iaW5kPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF2blxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5LcmVkaXRtYWtzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibWF4Q3JlZGl0XFxcIiBwbGFjZWhvbGRlcj1cXFwiS3JlZGl0bWFrc1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGZpeGVkLWJvdHRvbVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhblN1Ym1pdFxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZVxcXCI+PC9yZXF1aXJlPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidzYXZlJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBHZW08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFjY291bnRzTGlzdCB7XHJcbiAgICBhY2NvdW50cyE6IEFjY291bnRWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZXNldENyZWRpdCgpIHtcclxuICAgICAgICBpZiAocHJvbXB0KFwiU2thbCByZXN0ZXJlbmRlIGtyZWRpdCBzw6Z0dGVzIHRpbCBtYWtzIGtyZWRpdCBmb3IgYWxsZSBrb250aT8gU2tyaXYgJ0pBJyBmb3IgYXQgYmVrcsOmZnRlXCIpID09PSBcIkpBXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGkucmVzZXRBbGxBY2NvdW50cygpLnNlbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBY2NvdW50Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBudW1iZXI6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwiY3JlYXRlXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUFycm93UmlnaHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3BsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGRpdiBpZi5iaW5kPVxcXCJhY2NvdW50cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+JiN4MjExNjs8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hdm48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1ha3M8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJhY2NvdW50IG9mIGFjY291bnRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2FjY291bnQubnVtYmVyfTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke2FjY291bnQubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwid2hpdGUtc3BhY2U6IG5vd3JhcFxcXCI+JHthY2NvdW50Lm1heENyZWRpdCB8IG1vbmV5fSBrci48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBkZXRhaWxzOyBwYXJhbXMuYmluZDogeyBhY2NvdW50SWQ6IGFjY291bnQuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJyZXNldENyZWRpdCgpXFxcIj5Tw6Z0IGFsbGUga29udGkgdGlsIGtyZWRpdG1ha3M8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgICAgICBEZXIgZXIgaW5nZW4ga29udGlcXHJcXG4gICAgICAgIDwvZW1wdHktaGludD5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiXSwic291cmNlUm9vdCI6IiJ9