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

/***/ }),

/***/ "accounts/router":
/*!*****************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/accounts/router.ts ***!
  \*****************************************************************/
/*! exports provided: SaleRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleRouter", function() { return SaleRouter; });
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    { route: "", name: "list", moduleId: './list' },
    { route: ":accountId", name: "details", moduleId: './details' },
];
var SaleRouter = /** @class */ (function () {
    function SaleRouter() {
    }
    Object.defineProperty(SaleRouter.prototype, "totalQuantity", {
        get: function () {
            if (this.state) {
                return Object(_state__WEBPACK_IMPORTED_MODULE_3__["getOrderQuantityTotal"])(this.state);
            }
        },
        enumerable: true,
        configurable: true
    });
    SaleRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    SaleRouter.prototype.canActivate = function () {
        if (!Object(_state__WEBPACK_IMPORTED_MODULE_3__["isSetup"])(this.state)) {
            return new aurelia_router__WEBPACK_IMPORTED_MODULE_0__["RedirectToRoute"]("setup");
        }
        return true;
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["computedFrom"])("state"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SaleRouter.prototype, "totalQuantity", null);
    SaleRouter = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["autoinject"])(),
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_4__["connectTo"])({
            selector: function (store) { return store.state; },
            setup: "canActivate"
        })
    ], SaleRouter);
    return SaleRouter;
}());



/***/ }),

/***/ "accounts/router.html":
/*!**********************************!*\
  !*** ./src/accounts/router.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <top-navbar></top-navbar>\r\n    <page-body>\r\n        <router-view></router-view>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "async!accounts/details":
/*!*********************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=accounts!./src/accounts/details.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./details.ts */ "accounts/details"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "async!accounts/list":
/*!******************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=accounts!./src/accounts/list.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./list.ts */ "accounts/list"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvcm91dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2RldGFpbHMudHM/MzIyZiIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvbGlzdC50cz83ODEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDZDtBQUVKO0FBRTdCLElBQU0sV0FBVyxHQUFHLDhDQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBRzFDO0lBUUksd0JBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBRjVCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHbkIsQ0FBQztJQUVLLGlDQUFRLEdBQWQsVUFBZSxNQUE2Qjs7Ozs7O3dCQUNsQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDM0IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFBekQsT0FBTyxHQUFHLFNBQStDO3dCQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFD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QyxLQUFLLENBQUMsQ0FBQzthQUM1QztRQUNMLENBQUM7OztPQUFBO0lBRUQsb0NBQWUsR0FBZixVQUFnQixNQUEyQjtRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLHNEQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSw4REFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWhCRDtRQURDLHNFQUFZLENBQUMsT0FBTyxDQUFDOzs7bURBS3JCO0lBUlEsVUFBVTtRQUx0QixvRUFBVSxFQUFFO1FBQ1osK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXO1lBQzlCLEtBQUssRUFBRSxhQUFhO1NBQ3ZCLENBQUM7T0FDVyxVQUFVLENBcUJ0QjtJQUFELGlCQUFDO0NBQUE7QUFyQnNCOzs7Ozs7Ozs7Ozs7QUNoQnZCLDRKOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsQ0FBQyw2Q0FBbUI7QUFDcEIsS0FBSyxtQkFBTyxDQUFDLDRFQUE4RDtBQUMzRSxFQUFFLGdFQUFhO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLENBQUMsNkNBQW1CO0FBQ3BCLEtBQUssbUJBQU8sQ0FBQyxzRUFBMkQ7QUFDeEUsRUFBRSxnRUFBYTtBQUNmLEMiLCJmaWxlIjoiYWNjb3VudHMuODllODAwZmYyZGJmY2I0YzA5NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5cclxuY29uc3QgY3VycmVudFllYXIgPSBEYXRlVGltZS5sb2NhbCgpLnllYXI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50RGV0YWlscyB7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG4gICAgbWF4Q3JlZGl0ITogQmlnO1xyXG4gICAgcmVtYWluaW5nQ3JlZGl0ITogQmlnO1xyXG4gICAgcGF5bWVudHMhOiBQYXltZW50Vmlld01vZGVsW107XHJcbiAgICB5ZWFycyE6IG51bWJlcltdO1xyXG4gICAgeWVhciA9IGN1cnJlbnRZZWFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IHsgYWNjb3VudElkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZCA9IE51bWJlcihwYXJhbXMuYWNjb3VudElkKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWNjb3VudChhY2NvdW50SWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gYWNjb3VudC5uYW1lO1xyXG4gICAgICAgIHRoaXMubWF4Q3JlZGl0ID0gYWNjb3VudC5tYXhDcmVkaXQ7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdDcmVkaXQgPSBhY2NvdW50LnJlbWFpbmluZ0NyZWRpdDtcclxuXHJcbiAgICAgICAgdGhpcy5wYXltZW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFBheW1lbnRzKHsgYWNjb3VudElkOiBhY2NvdW50SWQgfSkudHJhbnNmZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnllYXJzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeWVhciA9IGZpbmRNaW5ZZWFyKHRoaXMucGF5bWVudHMpOyB5ZWFyIDw9IGN1cnJlbnRZZWFyOyB5ZWFyKyspIHtcclxuICAgICAgICAgICAgdGhpcy55ZWFycy5wdXNoKHllYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnllYXJzLnJldmVyc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFllYXJWYWx1ZUNvbnZlcnRlciB7XHJcbiAgICB0b1ZpZXcocGF5bWVudHM6IFBheW1lbnRWaWV3TW9kZWxbXSwgeWVhcjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHBheW1lbnRzLmZpbHRlcih4ID0+IHguY3JlYXRlZC55ZWFyID09PSB5ZWFyKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFBheW1lbnRWaWV3TW9kZWwge1xyXG4gICAgb3JkZXJJZDogbnVtYmVyO1xyXG4gICAgYW1vdW50OiBCaWc7XHJcbiAgICBjcmVhdGVkOiBEYXRlVGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZE1pblllYXIocGF5bWVudHM6IFBheW1lbnRWaWV3TW9kZWxbXSkge1xyXG4gICAgbGV0IHllYXIgPSBjdXJyZW50WWVhclxyXG5cclxuICAgIGZvciAoY29uc3QgcGF5bWVudCBvZiBwYXltZW50cykge1xyXG4gICAgICAgIGlmIChwYXltZW50LmNyZWF0ZWQueWVhciA8IHllYXIpIHtcclxuICAgICAgICAgICAgeWVhciA9IHBheW1lbnQuY3JlYXRlZC55ZWFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geWVhcjtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMT4ke25hbWV9PC9oMT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxoNSBjbGFzcz1cXFwiY29sIHRleHQtbXV0ZWRcXFwiPktyZWRpdG1ha3M8L2g1PlxcclxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wgdGV4dC1yaWdodFxcXCI+JHttYXhDcmVkaXQgfCBtb25leX0ga3IuPC9oNT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDUgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5UaWxiYWdlPC9oNT5cXHJcXG4gICAgICAgIDxoNSBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7cmVtYWluaW5nQ3JlZGl0IHwgbW9uZXl9IGtyLjwvaDU+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgZmxvYXQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNmVtXFxcIiB2YWx1ZS5iaW5kPVxcXCJ5ZWFyXFxcIj5cXHJcXG4gICAgICAgIDxvcHRpb24gcmVwZWF0LmZvcj1cXFwieWVhciBvZiB5ZWFyc1xcXCIgbW9kZWwuYmluZD1cXFwieWVhclxcXCI+JHt5ZWFyfTwvb3B0aW9uPlxcclxcbiAgICA8L3NlbGVjdD5cXHJcXG4gICAgPGg0PlBvc3RlcmluZ2VyPC9oND5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRoPk9wcmV0dGV0PC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+T3JkcmVucjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkJlbMO4YjwvdGg+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcInBheW1lbnQgb2YgcGF5bWVudHMgfCB5ZWFyOiB5ZWFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndoaXRlLXNwYWNlOiBub3dyYXBcXFwiPiR7cGF5bWVudC5jcmVhdGVkIHwgZGF0ZVRpbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke3BheW1lbnQub3JkZXJJZH08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+JHtwYXltZW50LmFtb3VudCB8IG1vbmV5fTwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFjY291bnRzTGlzdCB7XHJcbiAgICBhY2NvdW50cyE6IEFjY291bnRWaWV3TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbEFjY291bnRzKCkudHJhbnNmZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEFjY291bnRWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWF4Q3JlZGl0OiBCaWc7XHJcbiAgICByZW1haW5pbmdDcmVkaXQ6IEJpZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc21cXFwiIGlmLmJpbmQ9XFxcImFjY291bnRzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRoPiYjeDIxMTY7PC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+TmF2bjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk1ha3M8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5SZXN0PC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dHIgcmVwZWF0LmZvcj1cXFwiYWNjb3VudCBvZiBhY2NvdW50c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPiR7YWNjb3VudC5udW1iZXJ9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj4ke2FjY291bnQubmFtZX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcIndoaXRlLXNwYWNlOiBub3dyYXBcXFwiPiR7YWNjb3VudC5tYXhDcmVkaXQgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcIndoaXRlLXNwYWNlOiBub3dyYXBcXFwiPiR7YWNjb3VudC5yZW1haW5pbmdDcmVkaXQgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPGEgcm91dGUtaHJlZj1cXFwicm91dGU6IGRldGFpbHM7IHBhcmFtcy5iaW5kOiB7IGFjY291bnRJZDogYWNjb3VudC5pZCB9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tc21cXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUFycm93UmlnaHRcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInYXJyb3ctcmlnaHQnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+PC9hPlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgRGVyIGVyIGluZ2VuIGtvbnRpXFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJDb25maWd1cmF0aW9uLCBSZWRpcmVjdFRvUm91dGUgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBnZXRPcmRlclF1YW50aXR5VG90YWwsIGlzU2V0dXAgfSBmcm9tIFwiLi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwibGlzdFwiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vbGlzdFwiLCBcImFjY291bnRzXCIpIH0sXHJcbiAgICB7IHJvdXRlOiBcIjphY2NvdW50SWRcIiwgbmFtZTogXCJkZXRhaWxzXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9kZXRhaWxzXCIsIFwiYWNjb3VudHNcIikgfSxcclxuXTtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuQGNvbm5lY3RUbyh7XHJcbiAgICBzZWxlY3Rvcjogc3RvcmUgPT4gc3RvcmUuc3RhdGUsXHJcbiAgICBzZXR1cDogXCJjYW5BY3RpdmF0ZVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYWxlUm91dGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGUhOiBTdGF0ZTtcclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKFwic3RhdGVcIilcclxuICAgIGdldCB0b3RhbFF1YW50aXR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRPcmRlclF1YW50aXR5VG90YWwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKCFpc1NldHVwKHRoaXMuc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RUb1JvdXRlKFwic2V0dXBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPjwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L3BhZ2UtYm9keT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0XHRjYihyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQhLi9kZXRhaWxzLnRzXCIpKTtcblx0fSwgXCJhY2NvdW50c1wiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vbGlzdC50c1wiKSk7XG5cdH0sIFwiYWNjb3VudHNcIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==