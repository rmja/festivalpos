(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts"],{

/***/ "accounts/details":
/*!******************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/accounts/details.ts ***!
  \******************************************************************/
/*! exports provided: AccountDetails, YearValueConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetails", function() { return AccountDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearValueConverter", function() { return YearValueConverter; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
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



var currentYear = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().year;
var AccountDetails = /** @class */ (function () {
    function AccountDetails(api) {
        this.api = api;
        this.year = currentYear;
    }
    AccountDetails.prototype.activate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var accountId, account, _a, year;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        accountId = Number(params.accountId);
                        return [4 /*yield*/, this.api.getAccount(accountId).transfer()];
                    case 1:
                        account = _b.sent();
                        this.name = account.name;
                        this.maxCredit = account.maxCredit;
                        this.remainingCredit = account.remainingCredit;
                        _a = this;
                        return [4 /*yield*/, this.api.getAllPayments({ accountId: accountId }).transfer()];
                    case 2:
                        _a.payments = _b.sent();
                        this.years = [];
                        for (year = findMinYear(this.payments); year <= currentYear; year++) {
                            this.years.push(year);
                        }
                        this.years.reverse();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountDetails = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_2__["Api"]])
    ], AccountDetails);
    return AccountDetails;
}());

var YearValueConverter = /** @class */ (function () {
    function YearValueConverter() {
    }
    YearValueConverter.prototype.toView = function (payments, year) {
        return payments.filter(function (x) { return x.created.year === year; });
    };
    return YearValueConverter;
}());

function findMinYear(payments) {
    var year = currentYear;
    for (var _i = 0, payments_1 = payments; _i < payments_1.length; _i++) {
        var payment = payments_1[_i];
        if (payment.created.year < year) {
            year = payment.created.year;
        }
    }
    return year;
}


/***/ }),

/***/ "accounts/details.html":
/*!***********************************!*\
  !*** ./src/accounts/details.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <h1>${name}</h1>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col text-muted\">Kreditmaks</h5>\r\n        <h5 class=\"col text-right\">${maxCredit | money} kr.</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h5 class=\"col text-muted\">Tilbage</h5>\r\n        <h5 class=\"col text-right\">${remainingCredit | money} kr.</h5>\r\n    </div>\r\n\r\n    <select class=\"form-control float-right\" style=\"width: 6em\" value.bind=\"year\">\r\n        <option repeat.for=\"year of years\" model.bind=\"year\">${year}</option>\r\n    </select>\r\n    <h4>Posteringer</h4>\r\n    <table class=\"table\">\r\n        <thead>\r\n            <th>Oprettet</th>\r\n            <th>Ordrenr</th>\r\n            <th>Beløb</th>\r\n        </thead>\r\n        <tr repeat.for=\"payment of payments | year: year\">\r\n            <td style=\"white-space: nowrap\">${payment.created | dateTime}</td>\r\n            <td style=\"width: 100%\">${payment.orderId}</td>\r\n            <td class=\"text-right\">${payment.amount | money}</td>\r\n        </tr>\r\n    </table>\r\n</template>";

/***/ }),

/***/ "accounts/list":
/*!***************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/accounts/list.ts ***!
  \***************************************************************/
/*! exports provided: AccountsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsList", function() { return AccountsList; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
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
    AccountsList = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], AccountsList);
    return AccountsList;
}());



/***/ }),

/***/ "accounts/list.html":
/*!********************************!*\
  !*** ./src/accounts/list.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <table class=\"table table-sm\" if.bind=\"accounts.length\">\r\n        <thead>\r\n            <th>&#x2116;</th>\r\n            <th>Navn</th>\r\n            <th>Maks</th>\r\n            <th>Rest</th>\r\n            <th></th>\r\n        </thead>\r\n        <tr repeat.for=\"account of accounts\">\r\n            <td>${account.number}</td>\r\n            <td style=\"width: 100%\">${account.name}</td>\r\n            <td class=\"text-right\" style=\"white-space: nowrap\">${account.maxCredit | money}</td>\r\n            <td class=\"text-right\" style=\"white-space: nowrap\">${account.remainingCredit | money}</td>\r\n            <td>\r\n                <a route-href=\"route: details; params.bind: { accountId: account.id }\" class=\"btn btn-light btn-sm\"><require from=\"@fortawesome/free-solid-svg-icons/faArrowRight\"></require><font-awesome-icon icon.bind=\"'arrow-right' & fontawesome\"></font-awesome-icon></a>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <empty-hint else>\r\n        Der er ingen konti\r\n    </empty-hint>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9saXN0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNkO0FBRUo7QUFFN0IsSUFBTSxXQUFXLEdBQUcsOENBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFHMUM7SUFRSSx3QkFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFGNUIsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUduQixDQUFDO0lBRUssaUNBQVEsR0FBZCxVQUFlLE1BQTZCOzs7Ozs7d0JBQ2xDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUF6RCxPQUFPLEdBQUcsU0FBK0M7d0JBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7d0JBRS9DLFNBQUk7d0JBQVkscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUFsRixHQUFLLFFBQVEsR0FBRyxTQUFrRSxDQUFDO3dCQUVuRixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDaEIsS0FBUyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUksV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFOzRCQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDekI7d0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7S0FDeEI7SUF6QlEsY0FBYztRQUQxQixvRUFBVSxFQUFFO3lDQVNnQix3Q0FBRztPQVJuQixjQUFjLENBMEIxQjtJQUFELHFCQUFDO0NBQUE7QUExQjBCO0FBNEIzQjtJQUFBO0lBSUEsQ0FBQztJQUhHLG1DQUFNLEdBQU4sVUFBTyxRQUE0QixFQUFFLElBQVk7UUFDN0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDOztBQVFELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQzdDLElBQUksSUFBSSxHQUFHLFdBQVc7SUFFdEIsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7UUFBM0IsSUFBTSxPQUFPO1FBQ2QsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQy9CO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7QUMxREQsMENBQTBDLEtBQUssdUlBQXVJLGtCQUFrQixrSkFBa0osd0JBQXdCLDhMQUE4TCxLQUFLLCtVQUErVSwyQkFBMkIsaURBQWlELGdCQUFnQixnREFBZ0QsdUJBQXVCLHVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeC9CO0FBQ2xCO0FBSTdCO0lBR0ksc0JBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzVCLENBQUM7SUFFSywrQkFBUSxHQUFkOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBWSxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQTFELEdBQUssUUFBUSxHQUFHLFNBQTBDLENBQUM7Ozs7O0tBQzlEO0lBUlEsWUFBWTtRQUR4QixvRUFBVSxFQUFFO3lDQUlnQix3Q0FBRztPQUhuQixZQUFZLENBU3hCO0lBQUQsbUJBQUM7Q0FBQTtBQVR3Qjs7Ozs7Ozs7Ozs7O0FDTHpCLCtJQUErSSxrTkFBa04sZUFBZSxpREFBaUQsYUFBYSw4RUFBOEUsMEJBQTBCLDhFQUE4RSxnQ0FBZ0MsNEVBQTRFLGVBQWUsd0JBQXdCLHFWIiwiZmlsZSI6ImFjY291bnRzLjNkNGNkYWI2OTI5MmY3MjYwOWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuXHJcbmNvbnN0IGN1cnJlbnRZZWFyID0gRGF0ZVRpbWUubG9jYWwoKS55ZWFyO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudERldGFpbHMge1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuICAgIG1heENyZWRpdCE6IEJpZztcclxuICAgIHJlbWFpbmluZ0NyZWRpdCE6IEJpZztcclxuICAgIHBheW1lbnRzITogUGF5bWVudFZpZXdNb2RlbFtdO1xyXG4gICAgeWVhcnMhOiBudW1iZXJbXTtcclxuICAgIHllYXIgPSBjdXJyZW50WWVhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IGFjY291bnRJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBOdW1iZXIocGFyYW1zLmFjY291bnRJZCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuYXBpLmdldEFjY291bnQoYWNjb3VudElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGFjY291bnQubmFtZTtcclxuICAgICAgICB0aGlzLm1heENyZWRpdCA9IGFjY291bnQubWF4Q3JlZGl0O1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nQ3JlZGl0ID0gYWNjb3VudC5yZW1haW5pbmdDcmVkaXQ7XHJcblxyXG4gICAgICAgIHRoaXMucGF5bWVudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQYXltZW50cyh7IGFjY291bnRJZDogYWNjb3VudElkIH0pLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy55ZWFycyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHllYXIgPSBmaW5kTWluWWVhcih0aGlzLnBheW1lbnRzKTsgeWVhciA8PSBjdXJyZW50WWVhcjsgeWVhcisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMueWVhcnMucHVzaCh5ZWFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy55ZWFycy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBZZWFyVmFsdWVDb252ZXJ0ZXIge1xyXG4gICAgdG9WaWV3KHBheW1lbnRzOiBQYXltZW50Vmlld01vZGVsW10sIHllYXI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBwYXltZW50cy5maWx0ZXIoeCA9PiB4LmNyZWF0ZWQueWVhciA9PT0geWVhcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXltZW50Vmlld01vZGVsIHtcclxuICAgIG9yZGVySWQ6IG51bWJlcjtcclxuICAgIGFtb3VudDogQmlnO1xyXG4gICAgY3JlYXRlZDogRGF0ZVRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRNaW5ZZWFyKHBheW1lbnRzOiBQYXltZW50Vmlld01vZGVsW10pIHtcclxuICAgIGxldCB5ZWFyID0gY3VycmVudFllYXJcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBheW1lbnQgb2YgcGF5bWVudHMpIHtcclxuICAgICAgICBpZiAocGF5bWVudC5jcmVhdGVkLnllYXIgPCB5ZWFyKSB7XHJcbiAgICAgICAgICAgIHllYXIgPSBwYXltZW50LmNyZWF0ZWQueWVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHllYXI7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8aDE+JHtuYW1lfTwvaDE+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDUgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5LcmVkaXRtYWtzPC9oNT5cXHJcXG4gICAgICAgIDxoNSBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7bWF4Q3JlZGl0IHwgbW9uZXl9IGtyLjwvaDU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDU+XFxyXFxuICAgICAgICA8aDUgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke3JlbWFpbmluZ0NyZWRpdCB8IG1vbmV5fSBrci48L2g1PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XFxcIiBzdHlsZT1cXFwid2lkdGg6IDZlbVxcXCIgdmFsdWUuYmluZD1cXFwieWVhclxcXCI+XFxyXFxuICAgICAgICA8b3B0aW9uIHJlcGVhdC5mb3I9XFxcInllYXIgb2YgeWVhcnNcXFwiIG1vZGVsLmJpbmQ9XFxcInllYXJcXFwiPiR7eWVhcn08L29wdGlvbj5cXHJcXG4gICAgPC9zZWxlY3Q+XFxyXFxuICAgIDxoND5Qb3N0ZXJpbmdlcjwvaDQ+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0aD5PcHJldHRldDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk9yZHJlbnI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5CZWzDuGI8L3RoPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJwYXltZW50IG9mIHBheW1lbnRzIHwgeWVhcjogeWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke3BheW1lbnQuY3JlYXRlZCB8IGRhdGVUaW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtwYXltZW50Lm9yZGVySWR9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiR7cGF5bWVudC5hbW91bnQgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50c0xpc3Qge1xyXG4gICAgYWNjb3VudHMhOiBBY2NvdW50Vmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBY2NvdW50Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBudW1iZXI6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1heENyZWRpdDogQmlnO1xyXG4gICAgcmVtYWluaW5nQ3JlZGl0OiBCaWc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtXFxcIiBpZi5iaW5kPVxcXCJhY2NvdW50cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0aD4mI3gyMTE2OzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk5hdm48L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5NYWtzPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+UmVzdDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImFjY291bnQgb2YgYWNjb3VudHNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD4ke2FjY291bnQubnVtYmVyfTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHthY2NvdW50Lm5hbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke2FjY291bnQubWF4Q3JlZGl0IHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke2FjY291bnQucmVtYWluaW5nQ3JlZGl0IHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBkZXRhaWxzOyBwYXJhbXMuYmluZDogeyBhY2NvdW50SWQ6IGFjY291bnQuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd1JpZ2h0XFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2Fycm93LXJpZ2h0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgIERlciBlciBpbmdlbiBrb250aVxcclxcbiAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiXSwic291cmNlUm9vdCI6IiJ9