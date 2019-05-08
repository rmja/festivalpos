(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvcHJvZHVjdHMvY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9lZGl0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9wcm9kdWN0cy9lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3Byb2R1Y3RzL2xpc3QuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3dCO0FBQzNCO0FBQ1c7QUFJeEM7SUFRSSx1QkFBb0IsR0FBUSxFQUFVLE1BQWM7UUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQcEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7SUFPWixDQUFDO0lBTEQsc0JBQUksb0NBQVM7YUFBYjtZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0ssOEJBQU0sR0FBWjs7Ozs7NEJBQ29CLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksMENBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQWxHLE9BQU8sR0FBRyxTQUF3Rjt3QkFDeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQ3ZDO0lBZFEsYUFBYTtRQUZ6QixvRUFBVSxFQUFFO1FBQ1osaUVBQU8sQ0FBQyxhQUFh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QztDQUFBO0FBVHVCOzs7Ozs7Ozs7Ozs7QUNOeEIsbTdCQUFtN0IsYUFBYSxvREFBb0Qsc0JBQXNCLHNHQUFzRyxlQUFlLHdCQUF3QiwwVCIsImZpbGUiOiJsaXN0LjQ3NzQxYzc5OWJiNTk2NDI1Y2I1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0LCB1c2VWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkB1c2VWaWV3KFwiLi9lZGl0Lmh0bWxcIilcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2R1Y3Qge1xyXG4gICAgbmFtZSA9IFwiXCI7XHJcbiAgICBwcmljZSA9IFwiMFwiO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVQcm9kdWN0KHsgbmFtZTogdGhpcy5uYW1lLCBwcmljZTogbmV3IEJpZyh0aGlzLnByaWNlKSB9KS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHsgUGF0Y2ggfSBmcm9tIFwidXItanNvbnBhdGNoXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2FwaS9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9kdWN0IHtcclxuICAgIHByaXZhdGUgcHJvZHVjdElkITogbnVtYmVyO1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuICAgIHByaWNlITogc3RyaW5nO1xyXG5cclxuICAgIGdldCBjYW5TdWJtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IHByb2R1Y3RJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IE51bWJlcihwYXJhbXMucHJvZHVjdElkKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgdGhpcy5hcGkuZ2V0UHJvZHVjdCh0aGlzLnByb2R1Y3RJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJTa2FsIHByb2R1a3RldCBzbGV0dGVzP1wiKSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVQcm9kdWN0KHRoaXMucHJvZHVjdElkKS5zZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcImxpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCBwYXRjaCA9IG5ldyBQYXRjaDxQcm9kdWN0PigpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5uYW1lLCB0aGlzLm5hbWUpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHggPT4geC5wcmljZSwgbmV3IEJpZyh0aGlzLnByaWNlKSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpLnVwZGF0ZVByb2R1Y3QodGhpcy5wcm9kdWN0SWQsIHBhdGNoLm9wZXJhdGlvbnMpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwibGlzdFwiKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiBpZi5iaW5kPVxcXCJkZWxldGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmIGNsaWNrLmRlbGVnYXRlPVxcXCJkZWxldGUoKVxcXCIgY2xhc3M9XFxcIm5hdi1saW5rIHRleHQtZGFuZ2VyXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2hcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndHJhc2gnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8Zm9ybSBzdWJtaXQuZGVsZWdhdGU9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hdm48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWUuYmluZD1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hdm5cXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJpczwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlLmJpbmQ9XFxcInByaWNlXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjAuMDFcXFwiIHBsYWNlaG9sZGVyPVxcXCJQcmlzXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuU3VibWl0XFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiYXVyZWxpYS1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3Qge1xyXG4gICAgcHJvZHVjdHMhOiBQcm9kdWN0Vmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBkaWFsb2c6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUHJvZHVjdHMoKS50cmFuc2ZlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdFZpZXdNb2RlbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpY2U6IEJpZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwiY3JlYXRlXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUFycm93UmlnaHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3BsdXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgaWYuYmluZD1cXFwicHJvZHVjdHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hdm48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlNhbGdzcHJpczwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJwcm9kdWN0IG9mIHByb2R1Y3RzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPkJpbGxlZGU8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke3Byb2R1Y3QubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiR7cHJvZHVjdC5wcmljZSB8IG1vbmV5fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogZWRpdDsgcGFyYW1zLmJpbmQ6IHsgcHJvZHVjdElkOiBwcm9kdWN0LmlkIH1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2Fycm93LXJpZ2h0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxlbXB0eS1oaW50IGVsc2U+XFxyXFxuICAgICAgICAgICAgRGVyIGVyIGluZ2VuIHByb2R1a3RlclxcclxcbiAgICAgICAgPC9lbXB0eS1oaW50PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=