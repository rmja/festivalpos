(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout~sale"],{

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
                        // window.location.href = `sumupmerchant://pay/1.0?affiliate-key=${affiliateKey}&app-id=${appId}&total=${total}&currency=DKK&title=${title}&callback=${callbackUrl}`;
                        if (confirm("Debug?")) {
                            if (confirm("Success?")) {
                                window.location.href = callbackUrl + "&smp-status=success&smp-tx-code=123abc";
                            }
                            else {
                                window.location.href = callbackUrl + "&smp-status=failed&smp-failure-cause=testfejl&smp-message=fejlbesked&smp-tx-code=123abc";
                            }
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

/***/ "sale/pay-button":
/*!********************************!*\
  !*** ./src/sale/pay-button.ts ***!
  \********************************/
/*! exports provided: PayButtonCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayButtonCustomElement", function() { return PayButtonCustomElement; });
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _sumup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sumup */ "./src/sumup.ts");
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






var PayButtonCustomElement = /** @class */ (function () {
    function PayButtonCustomElement(api, store, sumup, router) {
        this.api = api;
        this.store = store;
        this.sumup = sumup;
        this.router = router;
    }
    Object.defineProperty(PayButtonCustomElement.prototype, "total", {
        get: function () {
            if (this.state) {
                return Object(_state__WEBPACK_IMPORTED_MODULE_1__["getOrderTotal"])(this.state);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PayButtonCustomElement.prototype, "canConfirm", {
        get: function () {
            if (this.state) {
                return Object(_state__WEBPACK_IMPORTED_MODULE_1__["getOrderQuantityTotal"])(this.state) > 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    PayButtonCustomElement.prototype.doConfirm = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.canConfirm) {
                            return [2 /*return*/];
                        }
                        if (!this.confirm) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.resolve(this.confirm())];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.api.createOrder({
                            terminalId: this.state.terminalId,
                            pointOfSaleId: this.state.pointOfSaleId,
                            lines: this.state.orderLines
                        }).transfer()];
                    case 3:
                        order = _a.sent();
                        return [4 /*yield*/, this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_1__["resetOrder"])];
                    case 4:
                        _a.sent();
                        if (!(method === "card")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sumup.redirectToApp(order)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this.router.navigate("/checkout/orders/" + order.id + "/pay/" + method);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["bindable"])(),
        __metadata("design:type", Function)
    ], PayButtonCustomElement.prototype, "confirm", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["computedFrom"])("state"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PayButtonCustomElement.prototype, "total", null);
    PayButtonCustomElement = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["autoinject"])(),
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_0__["connectTo"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["Api"], aurelia_store__WEBPACK_IMPORTED_MODULE_0__["Store"], _sumup__WEBPACK_IMPORTED_MODULE_5__["Sumup"], aurelia_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PayButtonCustomElement);
    return PayButtonCustomElement;
}());



/***/ }),

/***/ "sale/pay-button.html":
/*!**********************************!*\
  !*** ./src/sale/pay-button.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <div class=\"btn-group btn-block\">\r\n        <button class=\"btn btn-primary btn-lg\" style=\"width: 7em\" disabled=\"true\">${total | money} kr.</button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('account')\" disabled.bind=\"!canConfirm\"><require from=\"@fortawesome/free-solid-svg-icons/faMoneyBillAlt\"></require><require from=\"@fortawesome/free-solid-svg-icons/faCreditCard\"></require><require from=\"@fortawesome/free-solid-svg-icons/faFileInvoiceDollar\"></require><font-awesome-icon icon.bind=\"'file-invoice-dollar' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('card')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'credit-card' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n        <button class=\"btn btn-primary btn-lg\" click.delegate=\"doConfirm('cash')\" disabled.bind=\"!canConfirm\"><font-awesome-icon icon.bind=\"'money-bill-alt' & fontawesome\" fixed-width=\"true\"></font-awesome-icon></button>\r\n    </div>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VtdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvcGF5LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9wYXktYnV0dG9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUN4QixJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIVTtBQUNuQjtBQUc1QjtJQUNJLGVBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzVCLENBQUM7SUFFSyw2QkFBYSxHQUFuQixVQUFvQixLQUFZOzs7Ozs0QkFDaEIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQW5FLEdBQUcsR0FBRyxTQUE2RDt3QkFJbkUsWUFBWSxHQUFHLHNDQUFzQyxDQUFDO3dCQUN0RCxLQUFLLEdBQUcsc0JBQXNCLENBQUM7d0JBQy9CLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsS0FBSyxHQUFHLGFBQVcsR0FBRyxDQUFDLElBQU0sQ0FBQzt3QkFFOUIsV0FBVyxHQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSwyQkFBc0IsS0FBSyxDQUFDLEVBQUUsa0NBQTZCLEtBQUssQ0FBQyxTQUFXLENBQUM7d0JBRTFILHFLQUFxSzt3QkFFckssSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQ25CLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dDQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBTSxXQUFXLDJDQUF3QyxDQUFDOzZCQUNqRjtpQ0FDSTtnQ0FDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBTSxXQUFXLDRGQUF5RixDQUFDOzZCQUNsSTt5QkFDSjs7Ozs7S0FDSjtJQTFCUSxLQUFLO1FBRGpCLG9FQUFVLEVBQUU7eUNBRWdCLHdDQUFHO09BRG5CLEtBQUssQ0EyQmpCO0lBQUQsWUFBQztDQUFBO0FBM0JpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMK0I7QUFDa0M7QUFDWjtBQUMxQztBQUNXO0FBRVA7QUFJakM7SUFpQkksZ0NBQW9CLEdBQVEsRUFBVSxLQUFtQixFQUFVLEtBQVksRUFBVSxNQUFjO1FBQW5GLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdkcsQ0FBQztJQWJELHNCQUFJLHlDQUFLO2FBQVQ7WUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyw0REFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVU7YUFBZDtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLG9FQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDOzs7T0FBQTtJQUtLLDBDQUFTLEdBQWYsVUFBZ0IsTUFBbUM7Ozs7Ozt3QkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLHNCQUFPO3lCQUNWOzZCQUVHLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7d0JBQ1oscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O3dCQUFyQyxTQUFxQyxDQUFDOzs0QkFHNUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7NEJBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7NEJBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7NEJBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7eUJBQy9CLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUpQLEtBQUssR0FBRyxTQUlEO3dCQUViLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGlEQUFVLENBQUM7O3dCQUFyQyxTQUFxQyxDQUFDOzZCQUVsQyxPQUFNLEtBQUssTUFBTSxHQUFqQix3QkFBaUI7d0JBQ2pCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7d0JBQXJDLFNBQXFDLENBQUM7Ozt3QkFFdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQW9CLEtBQUssQ0FBQyxFQUFFLGFBQVEsTUFBUSxDQUFDLENBQUM7Ozs7OztLQUUxRTtJQXhDVztRQUFYLGtFQUFRLEVBQUU7OzJEQUFzQztJQUdqRDtRQURDLHNFQUFZLENBQUMsT0FBTyxDQUFDOzs7dURBS3JCO0lBVFEsc0JBQXNCO1FBRmxDLG9FQUFVLEVBQUU7UUFDWiwrREFBUyxFQUFFO3lDQWtCaUIsd0NBQUcsRUFBaUIsbURBQUssRUFBd0IsNENBQUssRUFBa0IscURBQU07T0FqQjlGLHNCQUFzQixDQTJDbEM7SUFBRCw2QkFBQztDQUFBO0FBM0NrQzs7Ozs7Ozs7Ozs7O0FDVm5DLHFLQUFxSyxjQUFjLHk5QiIsImZpbGUiOiJjaGVja291dH5zYWxlLjZmYzVlNTNmZGU4NjliNWYyMTc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgRGlnaXQgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5O1xyXG5leHBvcnQgY29uc3QgQ09NTUEgPSBcIixcIjtcclxuZXhwb3J0IGNvbnN0IEVOVEVSID0gXCJFbnRlclwiO1xyXG5leHBvcnQgY29uc3QgRVNDQVBFID0gXCJFc2NhcGVcIjtcclxuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRSA9IFwiQmFja3NwYWNlXCI7IiwiaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi9hcGkvb3JkZXJcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFN1bXVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZWRpcmVjdFRvQXBwKG9yZGVyOiBPcmRlcikge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGF3YWl0IHRoaXMuYXBpLmdldFBvaW50T2ZTYWxlKG9yZGVyLnBvaW50T2ZTYWxlSWQpLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgIC8vIEV4YW1wbGU6IDxhIGhyZWY9XCJzdW11cG1lcmNoYW50Oi8vcGF5LzEuMD9hZmZpbGlhdGUta2V5PTdjYTg0ZjE3LTg0YTUtNDE0MC04ZGY2LTZlYmVlZDg1NDBmYyZhcHAtaWQ9Y29tLmV4YW1wbGUubXlhcHAmdG90YWw9MS4yMyZjdXJyZW5jeT1FVVImdGl0bGU9VGF4aSBSaWRlJnJlY2VpcHQtbW9iaWxlcGhvbmU9KzM1MzEyMzQ1Njc4OTAmcmVjZWlwdC1lbWFpbD1jdXN0b21lckBtYWlsLmNvbSZjYWxsYmFjaz1odHRwOi8vZXhhbXBsZS5jb20vbXlhcHAvbXljYWxsYmFja1wiPlN0YXJ0IFN1bVVwIFBheW1lbnQ8L2E+XHJcblxyXG4gICAgICAgIGNvbnN0IGFmZmlsaWF0ZUtleSA9IFwiN2NhODRmMTctODRhNS00MTQwLThkZjYtNmViZWVkODU0MGZjXCI7XHJcbiAgICAgICAgY29uc3QgYXBwSWQgPSBcImNvbS5ybWphLmZlc3RpdmFscG9zXCI7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBvcmRlci5hbW91bnREdWUudG9GaXhlZCgyKTsgLy8gSGFzIFwiLlwiIGFzIGRlY2ltYWwgc2VwYXJhdG9yXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBgS2FqZmVzdCAke3Bvcy5uYW1lfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrVXJsID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vIy9jaGVja291dC9vcmRlcnMvJHtvcmRlci5pZH0vcGF5L2NhcmQtY2FsbGJhY2s/YW1vdW50PSR7b3JkZXIuYW1vdW50RHVlfWA7XHJcblxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYHN1bXVwbWVyY2hhbnQ6Ly9wYXkvMS4wP2FmZmlsaWF0ZS1rZXk9JHthZmZpbGlhdGVLZXl9JmFwcC1pZD0ke2FwcElkfSZ0b3RhbD0ke3RvdGFsfSZjdXJyZW5jeT1ES0smdGl0bGU9JHt0aXRsZX0mY2FsbGJhY2s9JHtjYWxsYmFja1VybH1gO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlybShcIkRlYnVnP1wiKSkge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlybShcIlN1Y2Nlc3M/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2NhbGxiYWNrVXJsfSZzbXAtc3RhdHVzPXN1Y2Nlc3Mmc21wLXR4LWNvZGU9MTIzYWJjYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7Y2FsbGJhY2tVcmx9JnNtcC1zdGF0dXM9ZmFpbGVkJnNtcC1mYWlsdXJlLWNhdXNlPXRlc3RmZWpsJnNtcC1tZXNzYWdlPWZlamxiZXNrZWQmc21wLXR4LWNvZGU9MTIzYWJjYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbm5lY3RUbywgU3RvcmUgfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgZ2V0T3JkZXJUb3RhbCwgZ2V0T3JkZXJRdWFudGl0eVRvdGFsLCByZXNldE9yZGVyIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVkRnJvbSwgYXV0b2luamVjdCwgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vYXBpL29yZGVyXCI7XHJcbmltcG9ydCB7IFN1bXVwIH0gZnJvbSBcIi4uL3N1bXVwXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oKVxyXG5leHBvcnQgY2xhc3MgUGF5QnV0dG9uQ3VzdG9tRWxlbWVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICBAYmluZGFibGUoKSBjb25maXJtPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgdG90YWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldE9yZGVyVG90YWwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5Db25maXJtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRPcmRlclF1YW50aXR5VG90YWwodGhpcy5zdGF0ZSkgPiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sIHByaXZhdGUgc3VtdXA6IFN1bXVwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZG9Db25maXJtKG1ldGhvZDogXCJjYXJkXCIgfCBcImNhc2hcIiB8IFwiYWNjb3VudFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNvbmZpcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUodGhpcy5jb25maXJtKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCB0aGlzLmFwaS5jcmVhdGVPcmRlcih7XHJcbiAgICAgICAgICAgIHRlcm1pbmFsSWQ6IHRoaXMuc3RhdGUudGVybWluYWxJZCxcclxuICAgICAgICAgICAgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkLFxyXG4gICAgICAgICAgICBsaW5lczogdGhpcy5zdGF0ZS5vcmRlckxpbmVzXHJcbiAgICAgICAgfSkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yZS5kaXNwYXRjaChyZXNldE9yZGVyKTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJjYXJkXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdW11cC5yZWRpcmVjdFRvQXBwKG9yZGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShgL2NoZWNrb3V0L29yZGVycy8ke29yZGVyLmlkfS9wYXkvJHttZXRob2R9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBzdHlsZT1cXFwid2lkdGg6IDdlbVxcXCIgZGlzYWJsZWQ9XFxcInRydWVcXFwiPiR7dG90YWwgfCBtb25leX0ga3IuPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdhY2NvdW50JylcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5Db25maXJtXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNb25leUJpbGxBbHRcXFwiPjwvcmVxdWlyZT48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkXFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmlsZUludm9pY2VEb2xsYXJcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInZmlsZS1pbnZvaWNlLWRvbGxhcicgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiBjbGljay5kZWxlZ2F0ZT1cXFwiZG9Db25maXJtKCdjYXJkJylcXFwiIGRpc2FibGVkLmJpbmQ9XFxcIiFjYW5Db25maXJtXFxcIj48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInY3JlZGl0LWNhcmQnICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnY2FzaCcpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuQ29uZmlybVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ21vbmV5LWJpbGwtYWx0JyAmIGZvbnRhd2Vzb21lXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiXSwic291cmNlUm9vdCI6IiJ9