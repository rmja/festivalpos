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
    function PayButtonCustomElement(api, store, router) {
        this.api = api;
        this.store = store;
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
    PayButtonCustomElement.prototype.cancelOrder = function () {
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
                        this.router.navigateToRoute("products");
                        return [2 /*return*/];
                }
            });
        });
    };
    PayButtonCustomElement.prototype.doConfirm = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var order, pos, affiliateKey, appId, total, title, callbackUrl;
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
                    case 2:
                        if (!this.orderId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.api.getOrderById(this.orderId).transfer()];
                    case 3:
                        order = _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.api.createOrder({
                            terminalId: this.state.terminalId,
                            pointOfSaleId: this.state.pointOfSaleId,
                            lines: this.state.orderLines
                        }).transfer()];
                    case 5:
                        order = _a.sent();
                        return [4 /*yield*/, this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_1__["resetOrder"])];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(method === "card")) return [3 /*break*/, 9];
                        debugger;
                        return [4 /*yield*/, this.api.getPointOfSale(order.pointOfSaleId).transfer()];
                    case 8:
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
                        return [3 /*break*/, 10];
                    case 9:
                        this.router.navigate("/checkout/orders/" + order.id + "/pay/" + method);
                        _a.label = 10;
                    case 10: return [2 /*return*/];
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
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["Api"], aurelia_store__WEBPACK_IMPORTED_MODULE_0__["Store"], aurelia_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FsZS9wYXktYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL3BheS1idXR0b24uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pZO0FBQ2tDO0FBQ1o7QUFDMUM7QUFDVztBQUt4QztJQWlCSSxnQ0FBb0IsR0FBUSxFQUFVLEtBQW1CLEVBQVUsTUFBYztRQUE3RCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDakYsQ0FBQztJQWJELHNCQUFJLHlDQUFLO2FBQVQ7WUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyw0REFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVU7YUFBZDtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLG9FQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDOzs7T0FBQTtJQUtLLDRDQUFXLEdBQWpCOzs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDZixNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7eUJBQ3JCO3dCQUVELHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7O3dCQUEvQyxTQUErQyxDQUFDO3dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7S0FDM0M7SUFFSywwQ0FBUyxHQUFmLFVBQWdCLE1BQW1DOzs7Ozs7d0JBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUNsQixzQkFBTzt5QkFDVjs2QkFFRyxJQUFJLENBQUMsT0FBTyxFQUFaLHdCQUFZO3dCQUNaLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzt3QkFBckMsU0FBcUMsQ0FBQzs7OzZCQUt0QyxJQUFJLENBQUMsT0FBTyxFQUFaLHdCQUFZO3dCQUNKLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxLQUFLLEdBQUcsU0FBb0QsQ0FBQzs7NEJBR3JELHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDOzRCQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVOzRCQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOzRCQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO3lCQUMvQixDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFKYixLQUFLLEdBQUcsU0FJSyxDQUFDO3dCQUVkLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGlEQUFVLENBQUM7O3dCQUFyQyxTQUFxQyxDQUFDOzs7NkJBR3RDLE9BQU0sS0FBSyxNQUFNLEdBQWpCLHdCQUFpQjt3QkFDakIsUUFBUSxDQUFDO3dCQUNHLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUFuRSxHQUFHLEdBQUcsU0FBNkQ7d0JBSW5FLFlBQVksR0FBRyxzQ0FBc0MsQ0FBQzt3QkFDdEQsS0FBSyxHQUFHLHNCQUFzQixDQUFDO3dCQUMvQixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLEtBQUssR0FBRyxhQUFXLEdBQUcsQ0FBQyxJQUFNLENBQUM7d0JBRTlCLFdBQVcsR0FBTSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sMkJBQXNCLEtBQUssQ0FBQyxFQUFFLGtDQUE2QixLQUFLLENBQUMsU0FBVyxDQUFDO3dCQUUxSCxxS0FBcUs7d0JBRXJLLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUNuQixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQ0FDckIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQU0sV0FBVywyQ0FBd0MsQ0FBQzs2QkFDakY7aUNBQ0k7Z0NBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQU0sV0FBVyw0RkFBeUYsQ0FBQzs2QkFDbEk7eUJBQ0o7Ozt3QkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxzQkFBb0IsS0FBSyxDQUFDLEVBQUUsYUFBUSxNQUFRLENBQUMsQ0FBQzs7Ozs7O0tBRTFFO0lBN0VXO1FBQVgsa0VBQVEsRUFBRTs7MkRBQXNDO0lBR2pEO1FBREMsc0VBQVksQ0FBQyxPQUFPLENBQUM7Ozt1REFLckI7SUFUUSxzQkFBc0I7UUFGbEMsb0VBQVUsRUFBRTtRQUNaLCtEQUFTLEVBQUU7eUNBa0JpQix3Q0FBRyxFQUFpQixtREFBSyxFQUF5QixxREFBTTtPQWpCeEUsc0JBQXNCLENBZ0ZsQztJQUFELDZCQUFDO0NBQUE7QUFoRmtDOzs7Ozs7Ozs7Ozs7QUNUbkMscUtBQXFLLGNBQWMseTlCIiwiZmlsZSI6ImNoZWNrb3V0fnNhbGUuNjhlZTNlMGU3NjRiOTRiOGMwYzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBEaWdpdCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDk7XHJcbmV4cG9ydCBjb25zdCBDT01NQSA9IFwiLFwiO1xyXG5leHBvcnQgY29uc3QgRU5URVIgPSBcIkVudGVyXCI7XHJcbmV4cG9ydCBjb25zdCBFU0NBUEUgPSBcIkVzY2FwZVwiO1xyXG5leHBvcnQgY29uc3QgQkFDS1NQQUNFID0gXCJCYWNrc3BhY2VcIjsiLCJpbXBvcnQgeyBjb25uZWN0VG8sIFN0b3JlIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUsIGdldE9yZGVyVG90YWwsIGdldE9yZGVyUXVhbnRpdHlUb3RhbCwgcmVzZXRPcmRlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZyb20sIGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL2FwaS9vcmRlclwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5AY29ubmVjdFRvKClcclxuZXhwb3J0IGNsYXNzIFBheUJ1dHRvbkN1c3RvbUVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgQGJpbmRhYmxlKCkgY29uZmlybT86ICgpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIEBjb21wdXRlZEZyb20oXCJzdGF0ZVwiKVxyXG4gICAgZ2V0IHRvdGFsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRPcmRlclRvdGFsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FuQ29uZmlybSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpID4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yZGVySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFwaS5kZWxldGVPcmRlcih0aGlzLm9yZGVySWQpLnNlbmQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJwcm9kdWN0c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkb0NvbmZpcm0obWV0aG9kOiBcImNhcmRcIiB8IFwiY2FzaFwiIHwgXCJhY2NvdW50XCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ29uZmlybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbmZpcm0oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcmRlcklkKSB7XHJcbiAgICAgICAgICAgIG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuZ2V0T3JkZXJCeUlkKHRoaXMub3JkZXJJZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9yZGVyID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlT3JkZXIoe1xyXG4gICAgICAgICAgICAgICAgdGVybWluYWxJZDogdGhpcy5zdGF0ZS50ZXJtaW5hbElkLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgbGluZXM6IHRoaXMuc3RhdGUub3JkZXJMaW5lc1xyXG4gICAgICAgICAgICB9KS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yZS5kaXNwYXRjaChyZXNldE9yZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwiY2FyZFwiKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBhd2FpdCB0aGlzLmFwaS5nZXRQb2ludE9mU2FsZShvcmRlci5wb2ludE9mU2FsZUlkKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhhbXBsZTogPGEgaHJlZj1cInN1bXVwbWVyY2hhbnQ6Ly9wYXkvMS4wP2FmZmlsaWF0ZS1rZXk9N2NhODRmMTctODRhNS00MTQwLThkZjYtNmViZWVkODU0MGZjJmFwcC1pZD1jb20uZXhhbXBsZS5teWFwcCZ0b3RhbD0xLjIzJmN1cnJlbmN5PUVVUiZ0aXRsZT1UYXhpIFJpZGUmcmVjZWlwdC1tb2JpbGVwaG9uZT0rMzUzMTIzNDU2Nzg5MCZyZWNlaXB0LWVtYWlsPWN1c3RvbWVyQG1haWwuY29tJmNhbGxiYWNrPWh0dHA6Ly9leGFtcGxlLmNvbS9teWFwcC9teWNhbGxiYWNrXCI+U3RhcnQgU3VtVXAgUGF5bWVudDwvYT5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFmZmlsaWF0ZUtleSA9IFwiN2NhODRmMTctODRhNS00MTQwLThkZjYtNmViZWVkODU0MGZjXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcElkID0gXCJjb20ucm1qYS5mZXN0aXZhbHBvc1wiO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IG9yZGVyLmFtb3VudER1ZS50b0ZpeGVkKDIpOyAvLyBIYXMgXCIuXCIgYXMgZGVjaW1hbCBzZXBhcmF0b3JcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBgS2FqZmVzdCAke3Bvcy5uYW1lfWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja1VybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LyMvY2hlY2tvdXQvb3JkZXJzLyR7b3JkZXIuaWR9L3BheS9jYXJkLWNhbGxiYWNrP2Ftb3VudD0ke29yZGVyLmFtb3VudER1ZX1gO1xyXG5cclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgc3VtdXBtZXJjaGFudDovL3BheS8xLjA/YWZmaWxpYXRlLWtleT0ke2FmZmlsaWF0ZUtleX0mYXBwLWlkPSR7YXBwSWR9JnRvdGFsPSR7dG90YWx9JmN1cnJlbmN5PURLSyZ0aXRsZT0ke3RpdGxlfSZjYWxsYmFjaz0ke2NhbGxiYWNrVXJsfWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkRlYnVnP1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJTdWNjZXNzP1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7Y2FsbGJhY2tVcmx9JnNtcC1zdGF0dXM9c3VjY2VzcyZzbXAtdHgtY29kZT0xMjNhYmNgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtjYWxsYmFja1VybH0mc21wLXN0YXR1cz1mYWlsZWQmc21wLWZhaWx1cmUtY2F1c2U9dGVzdGZlamwmc21wLW1lc3NhZ2U9ZmVqbGJlc2tlZCZzbXAtdHgtY29kZT0xMjNhYmNgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoYC9jaGVja291dC9vcmRlcnMvJHtvcmRlci5pZH0vcGF5LyR7bWV0aG9kfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiA3ZW1cXFwiIGRpc2FibGVkPVxcXCJ0cnVlXFxcIj4ke3RvdGFsIHwgbW9uZXl9IGtyLjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnYWNjb3VudCcpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuQ29uZmlybVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTW9uZXlCaWxsQWx0XFxcIj48L3JlcXVpcmU+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZFxcXCI+PC9yZXF1aXJlPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZpbGVJbnZvaWNlRG9sbGFyXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2ZpbGUtaW52b2ljZS1kb2xsYXInICYgZm9udGF3ZXNvbWVcXFwiIGZpeGVkLXdpZHRoPVxcXCJ0cnVlXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcImRvQ29uZmlybSgnY2FyZCcpXFxcIiBkaXNhYmxlZC5iaW5kPVxcXCIhY2FuQ29uZmlybVxcXCI+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2NyZWRpdC1jYXJkJyAmIGZvbnRhd2Vzb21lXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJkb0NvbmZpcm0oJ2Nhc2gnKVxcXCIgZGlzYWJsZWQuYmluZD1cXFwiIWNhbkNvbmZpcm1cXFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uLmJpbmQ9XFxcIidtb25leS1iaWxsLWFsdCcgJiBmb250YXdlc29tZVxcXCIgZml4ZWQtd2lkdGg9XFxcInRydWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==