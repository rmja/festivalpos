(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics"],{

/***/ "statistics/dashboard":
/*!*************************************!*\
  !*** ./src/statistics/dashboard.ts ***!
  \*************************************/
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

/***/ "statistics/router":
/*!*******************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/statistics/router.ts ***!
  \*******************************************************************/
/*! exports provided: StatisticsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsRouter", function() { return StatisticsRouter; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js");

var routes = [
    { route: "", name: "dashboard", moduleId: './dashboard', nav: true, title: "Dashboard" }
];
var StatisticsRouter = /** @class */ (function () {
    function StatisticsRouter() {
    }
    StatisticsRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return StatisticsRouter;
}());



/***/ }),

/***/ "statistics/router.html":
/*!************************************!*\
  !*** ./src/statistics/router.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <top-navbar></top-navbar>\r\n    <page-body>\r\n        <router-view></router-view>\r\n    </page-body>\r\n</template>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGlzdGljcy9kYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpc3RpY3MvZGFzaGJvYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpc3RpY3Mvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aXN0aWNzL3JvdXRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zdGF0aXN0aWNzL3N0YXRzLXdpZGdldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGlzdGljcy9zdGF0cy13aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDbEI7QUFDSTtBQUlqQztJQVdJLDZCQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFSyxzQ0FBUSxHQUFkLFVBQWUsTUFBeUI7Ozs7Ozt3QkFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUV6RCxTQUFJO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O3dCQUE5RCxHQUFLLFFBQVEsR0FBRyxTQUE4QyxDQUFDO3dCQUMvRCxxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFOzt3QkFBbEIsU0FBa0IsQ0FBQzt3QkFFbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7S0FDckQ7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sbUNBQUssR0FBYjtRQUFBLGlCQU9DO1FBTkcsSUFBTSxRQUFRO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFNLElBQUksWUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQXZCLENBQXVCLENBQUM7aUJBQzFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBSSxZQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQU0sSUFBSSxVQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sRUFBdEIsQ0FBc0IsQ0FBQyxFQUFuSSxDQUFtSSxDQUFDLENBQ25LLENBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQW5DUSxtQkFBbUI7UUFEL0Isb0VBQVUsRUFBRTt5Q0FZZ0Isd0NBQUc7T0FYbkIsbUJBQW1CLENBb0MvQjtJQUFELDBCQUFDO0NBQUE7QUFwQytCOzs7Ozs7Ozs7Ozs7QUNOaEMsc2Q7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUF1QztBQUV2QyxJQUFNLE1BQU0sR0FBa0I7SUFDMUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQWtDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0NBQ2hIO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIRywwQ0FBZSxHQUFmLFVBQWdCLE1BQTJCO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1hELDRKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ3NIO0FBQzVEO0FBRzFELElBQU0sS0FBSyxHQUE0QztJQUNuRCxNQUFNLEVBQUUsOEVBQVk7SUFDcEIsTUFBTSxFQUFFLGdGQUFjO0lBQ3RCLFNBQVMsRUFBRSxxRkFBbUI7Q0FDakM7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUhHLDBDQUFvQixHQUFwQixVQUFxQixNQUFxQjtRQUN0QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBTHNEO1FBQXRELGtFQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSw2REFBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOzs4Q0FBZ0I7SUFDMUQ7UUFBWCxrRUFBUSxFQUFFOzs4Q0FBd0I7SUFLdkMsa0JBQUM7Q0FBQTtBQVB1Qjs7Ozs7Ozs7Ozs7O0FDWHhCLG1IQUFtSCxNQUFNLDhLQUE4Syw0QkFBNEIsbUNBQW1DLFlBQVksd0RBQXdELG1CQUFtQix1UkFBdVIsZUFBZSxHQUFHLG9CQUFvQixvTUFBb00sa0JBQWtCLEdBQUcsZUFBZSxHQUFHLG9CQUFvQixpSyIsImZpbGUiOiJzdGF0aXN0aWNzLjhkNzExNDEzNzkwODM4NjA3MjA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NEYXNoYm9hcmQge1xyXG4gICAgcHJpdmF0ZSB0aW1lckhhbmRsZSE6IGFueTtcclxuICAgIHllYXIhOiBudW1iZXI7XHJcblxyXG4gICAgaG91clN0YXRzPzogU3RhdHNWaWV3TW9kZWxbXTtcclxuICAgIHBvc1N0YXRzIToge1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGhvdXJTdGF0cz86IFN0YXRzVmlld01vZGVsW11cclxuICAgIH1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaCA9IHRoaXMuZmV0Y2guYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgeWVhcj86IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy55ZWFyID0gTnVtYmVyKHBhcmFtcy55ZWFyKSB8fCBEYXRlVGltZS5sb2NhbCgpLnllYXI7XHJcblxyXG4gICAgICAgIHRoaXMucG9zU3RhdHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQb2ludE9mU2FsZXMoKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lckhhbmRsZSA9IHNldEludGVydmFsKHRoaXMuZmV0Y2gsIDEwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmZXRjaCgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgdGhpcy5hcGkuZ2V0SG91cmx5U3RhdHMoeyB5ZWFyOiB0aGlzLnllYXIgfSkuYnlwYXNzQ2FjaGUoKS50cmFuc2ZlcigpLnRoZW4ocmVzdWx0ID0+IHRoaXMuaG91clN0YXRzID0gcmVzdWx0KSxcclxuICAgICAgICAgICAgLi4udGhpcy5wb3NTdGF0cy5tYXAocG9zID0+IHRoaXMuYXBpLmdldEhvdXJseVN0YXRzKHsgeWVhcjogdGhpcy55ZWFyLCBwb2ludE9mU2FsZUlkOiBwb3MuaWQgfSkuYnlwYXNzQ2FjaGUoKS50cmFuc2ZlcigpLnRoZW4ocmVzdWx0ID0+IHBvcy5ob3VyU3RhdHMgPSByZXN1bHQpKVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHNWaWV3TW9kZWwge1xyXG4gICAgcGVyaW9kU3RhcnQ6IERhdGVUaW1lO1xyXG4gICAgb3JkZXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbDogQmlnO1xyXG4gICAgcGF5bWVudHM6IHtcclxuICAgICAgICBtZXRob2Q6IFwiY2FyZFwiIHwgXCJjYXNoXCIgfCBcImFjY291bnRcIlxyXG4gICAgICAgIHBheW1lbnRzOiBudW1iZXI7XHJcbiAgICAgICAgdG90YWw6IEJpZztcclxuICAgIH1bXTtcclxuICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgcHJvZHVjdElkOiBudW1iZXI7XHJcbiAgICAgICAgcHJvZHVjdE5hbWU6IHN0cmluZztcclxuICAgICAgICBvcmRlcnM6IG51bWJlcjtcclxuICAgICAgICBxdWFudGl0eTogbnVtYmVyO1xyXG4gICAgICAgIHRvdGFsOiBCaWc7XHJcbiAgICB9W107XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8cmVxdWlyZSBmcm9tPVxcXCIuL3N0YXRzLXdpZGdldFxcXCI+PC9yZXF1aXJlPlxcclxcbiAgICA8aDI+U2FsZ3NzdGF0aXN0aWs8L2gyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPHN0YXRzLXdpZGdldCBjbGFzcz1cXFwiY29sLTEyXFxcIiB2YWx1ZS5iaW5kPVxcXCJob3VyU3RhdHNcXFwiPjwvc3RhdHMtd2lkZ2V0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGgyPlNhbGdzc3RlZHNzdGF0aXN0aWs8L2gyPlxcclxcbiAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcInBvcyBvZiBwb3NTdGF0c1xcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHMtd2lkZ2V0IGNsYXNzPVxcXCJjb2wtMTJcXFwiIHRpdGxlLmJpbmQ9XFxcInBvcy5uYW1lXFxcIiB2YWx1ZS5iaW5kPVxcXCJwb3MuaG91clN0YXRzXFxcIj48L3N0YXRzLXdpZGdldD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLXBhbFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW1xyXG4gICAgeyByb3V0ZTogXCJcIiwgbmFtZTogXCJkYXNoYm9hcmRcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Rhc2hib2FyZFwiKSwgbmF2OiB0cnVlLCB0aXRsZTogXCJEYXNoYm9hcmRcIiB9XHJcbl1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBQYXltZW50TWV0aG9kIH0gZnJvbSBcIi4uL2FwaS9wYXltZW50XCI7XHJcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCwgZmFNb25leUJpbGxBbHQsIEljb25EZWZpbml0aW9uLCBmYUZpbGVJbnZvaWNlRG9sbGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU3RhdHNWaWV3TW9kZWwgfSBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcclxuXHJcbmNvbnN0IGljb25zOiB7W2lkIGluIFBheW1lbnRNZXRob2RdOiBJY29uRGVmaW5pdGlvbn0gPSB7XHJcbiAgICBcImNhcmRcIjogZmFDcmVkaXRDYXJkLFxyXG4gICAgXCJjYXNoXCI6IGZhTW9uZXlCaWxsQWx0LFxyXG4gICAgXCJhY2NvdW50XCI6IGZhRmlsZUludm9pY2VEb2xsYXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRzV2lkZ2V0IHtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZSB9KSB0aXRsZT86IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSgpIHZhbHVlITogU3RhdHNWaWV3TW9kZWw7XHJcblxyXG4gICAgZ2V0UGF5bWVudE1ldGhvZEljb24obWV0aG9kOiBQYXltZW50TWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIGljb25zW21ldGhvZF07XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIiBpZi5iaW5kPVxcXCJ0aXRsZVxcXCI+JHt0aXRsZX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJob3VyIG9mIHZhbHVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2hvdXIucGVyaW9kU3RhcnQgfCBkYXRlVGltZX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aG91ci5vcmRlcnN9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+JHtob3VyLnRvdGFsIHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcInN0YXRzIG9mIGhvdXIucGF5bWVudHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCJnZXRQYXltZW50TWV0aG9kSWNvbihzdGF0cy5tZXRob2QpXFxcIiBmaXhlZC13aWR0aD1cXFwidHJ1ZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdGF0cy5wYXltZW50c30vJHtzdGF0cy50b3RhbCB8IG1vbmV5fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlcGVhdC5mb3I9XFxcInN0YXRzIG9mIGhvdXIucHJvZHVjdHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0YXRzLnByb2R1Y3ROYW1lfSAke3N0YXRzLnF1YW50aXR5fS8ke3N0YXRzLnRvdGFsIHwgbW9uZXl9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiXSwic291cmNlUm9vdCI6IiJ9