(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts"],{

/***/ "@fortawesome/free-solid-svg-icons/faArrowRight":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faArrowRight.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'arrow-right';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f061';
var svgPathData = 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z';

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

exports.faArrowRight = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvcm91dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2RldGFpbHMudHM/MzIyZiIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvbGlzdC50cz83ODEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCK0M7QUFDZDtBQUVKO0FBRTdCLElBQU0sV0FBVyxHQUFHLDhDQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBRzFDO0lBUUksd0JBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBRjVCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHbkIsQ0FBQztJQUVLLGlDQUFRLEdBQWQsVUFBZSxNQUE2Qjs7Ozs7O3dCQUNsQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFT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QUNmLEMiLCJmaWxlIjoiYWNjb3VudHMuNjNkNGZkMzlmMmU4YzQ2ZDU3NzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2Fycm93LXJpZ2h0JztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDYxJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMTkwLjUgNjYuOWwyMi4yLTIyLjJjOS40LTkuNCAyNC42LTkuNCAzMy45IDBMNDQxIDIzOWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyNDYuNiA0NjcuM2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjItMjIuMmMtOS41LTkuNS05LjMtMjUgLjQtMzQuM0wzMTEuNCAyOTZIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0di0zMmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgyODcuNEwxOTAuOSAxMDEuMmMtOS44LTkuMy0xMC0yNC44LS40LTM0LjN6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQXJyb3dSaWdodCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuXHJcbmNvbnN0IGN1cnJlbnRZZWFyID0gRGF0ZVRpbWUubG9jYWwoKS55ZWFyO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudERldGFpbHMge1xyXG4gICAgbmFtZSE6IHN0cmluZztcclxuICAgIG1heENyZWRpdCE6IEJpZztcclxuICAgIHJlbWFpbmluZ0NyZWRpdCE6IEJpZztcclxuICAgIHBheW1lbnRzITogUGF5bWVudFZpZXdNb2RlbFtdO1xyXG4gICAgeWVhcnMhOiBudW1iZXJbXTtcclxuICAgIHllYXIgPSBjdXJyZW50WWVhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUocGFyYW1zOiB7IGFjY291bnRJZDogc3RyaW5nIH0pIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBOdW1iZXIocGFyYW1zLmFjY291bnRJZCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuYXBpLmdldEFjY291bnQoYWNjb3VudElkKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGFjY291bnQubmFtZTtcclxuICAgICAgICB0aGlzLm1heENyZWRpdCA9IGFjY291bnQubWF4Q3JlZGl0O1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nQ3JlZGl0ID0gYWNjb3VudC5yZW1haW5pbmdDcmVkaXQ7XHJcblxyXG4gICAgICAgIHRoaXMucGF5bWVudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxQYXltZW50cyh7IGFjY291bnRJZDogYWNjb3VudElkIH0pLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy55ZWFycyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHllYXIgPSBmaW5kTWluWWVhcih0aGlzLnBheW1lbnRzKTsgeWVhciA8PSBjdXJyZW50WWVhcjsgeWVhcisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMueWVhcnMucHVzaCh5ZWFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy55ZWFycy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBZZWFyVmFsdWVDb252ZXJ0ZXIge1xyXG4gICAgdG9WaWV3KHBheW1lbnRzOiBQYXltZW50Vmlld01vZGVsW10sIHllYXI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBwYXltZW50cy5maWx0ZXIoeCA9PiB4LmNyZWF0ZWQueWVhciA9PT0geWVhcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXltZW50Vmlld01vZGVsIHtcclxuICAgIG9yZGVySWQ6IG51bWJlcjtcclxuICAgIGFtb3VudDogQmlnO1xyXG4gICAgY3JlYXRlZDogRGF0ZVRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRNaW5ZZWFyKHBheW1lbnRzOiBQYXltZW50Vmlld01vZGVsW10pIHtcclxuICAgIGxldCB5ZWFyID0gY3VycmVudFllYXJcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBheW1lbnQgb2YgcGF5bWVudHMpIHtcclxuICAgICAgICBpZiAocGF5bWVudC5jcmVhdGVkLnllYXIgPCB5ZWFyKSB7XHJcbiAgICAgICAgICAgIHllYXIgPSBwYXltZW50LmNyZWF0ZWQueWVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHllYXI7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8aDE+JHtuYW1lfTwvaDE+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8aDUgY2xhc3M9XFxcImNvbCB0ZXh0LW11dGVkXFxcIj5LcmVkaXRtYWtzPC9oNT5cXHJcXG4gICAgICAgIDxoNSBjbGFzcz1cXFwiY29sIHRleHQtcmlnaHRcXFwiPiR7bWF4Q3JlZGl0IHwgbW9uZXl9IGtyLjwvaDU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wgdGV4dC1tdXRlZFxcXCI+VGlsYmFnZTwvaDU+XFxyXFxuICAgICAgICA8aDUgY2xhc3M9XFxcImNvbCB0ZXh0LXJpZ2h0XFxcIj4ke3JlbWFpbmluZ0NyZWRpdCB8IG1vbmV5fSBrci48L2g1PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZsb2F0LXJpZ2h0XFxcIiBzdHlsZT1cXFwid2lkdGg6IDZlbVxcXCIgdmFsdWUuYmluZD1cXFwieWVhclxcXCI+XFxyXFxuICAgICAgICA8b3B0aW9uIHJlcGVhdC5mb3I9XFxcInllYXIgb2YgeWVhcnNcXFwiIG1vZGVsLmJpbmQ9XFxcInllYXJcXFwiPiR7eWVhcn08L29wdGlvbj5cXHJcXG4gICAgPC9zZWxlY3Q+XFxyXFxuICAgIDxoND5Qb3N0ZXJpbmdlcjwvaDQ+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0aD5PcHJldHRldDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk9yZHJlbnI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5CZWzDuGI8L3RoPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0ciByZXBlYXQuZm9yPVxcXCJwYXltZW50IG9mIHBheW1lbnRzIHwgeWVhcjogeWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke3BheW1lbnQuY3JlYXRlZCB8IGRhdGVUaW1lfTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHtwYXltZW50Lm9yZGVySWR9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiR7cGF5bWVudC5hbW91bnQgfCBtb25leX08L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG48L3RlbXBsYXRlPlwiOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50c0xpc3Qge1xyXG4gICAgYWNjb3VudHMhOiBBY2NvdW50Vmlld01vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxBY2NvdW50cygpLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBY2NvdW50Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBudW1iZXI6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1heENyZWRpdDogQmlnO1xyXG4gICAgcmVtYWluaW5nQ3JlZGl0OiBCaWc7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtXFxcIiBpZi5iaW5kPVxcXCJhY2NvdW50cy5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0aD4mI3gyMTE2OzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk5hdm48L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5NYWtzPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+UmVzdDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRyIHJlcGVhdC5mb3I9XFxcImFjY291bnQgb2YgYWNjb3VudHNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD4ke2FjY291bnQubnVtYmVyfTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+JHthY2NvdW50Lm5hbWV9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke2FjY291bnQubWF4Q3JlZGl0IHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj4ke2FjY291bnQucmVtYWluaW5nQ3JlZGl0IHwgbW9uZXl9PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxhIHJvdXRlLWhyZWY9XFxcInJvdXRlOiBkZXRhaWxzOyBwYXJhbXMuYmluZDogeyBhY2NvdW50SWQ6IGFjY291bnQuaWQgfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlnaHQgYnRuLXNtXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd1JpZ2h0XFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ2Fycm93LXJpZ2h0JyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPjwvYT5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgIERlciBlciBpbmdlbiBrb250aVxcclxcbiAgICA8L2VtcHR5LWhpbnQ+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyQ29uZmlndXJhdGlvbiwgUmVkaXJlY3RUb1JvdXRlIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSBcImF1cmVsaWEtcGFsXCI7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgZ2V0T3JkZXJRdWFudGl0eVRvdGFsLCBpc1NldHVwIH0gZnJvbSBcIi4uL3N0YXRlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUbyB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBbXHJcbiAgICB7IHJvdXRlOiBcIlwiLCBuYW1lOiBcImxpc3RcIiwgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2xpc3RcIiwgXCJhY2NvdW50c1wiKSB9LFxyXG4gICAgeyByb3V0ZTogXCI6YWNjb3VudElkXCIsIG5hbWU6IFwiZGV0YWlsc1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZGV0YWlsc1wiLCBcImFjY291bnRzXCIpIH0sXHJcbl07XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbkBjb25uZWN0VG8oe1xyXG4gICAgc2VsZWN0b3I6IHN0b3JlID0+IHN0b3JlLnN0YXRlLFxyXG4gICAgc2V0dXA6IFwiY2FuQWN0aXZhdGVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FsZVJvdXRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbShcInN0YXRlXCIpXHJcbiAgICBnZXQgdG90YWxRdWFudGl0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJRdWFudGl0eVRvdGFsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLm1hcChyb3V0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICghaXNTZXR1cCh0aGlzLnN0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0VG9Sb3V0ZShcInNldHVwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vZGV0YWlscy50c1wiKSk7XG5cdH0sIFwiYWNjb3VudHNcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2xpc3QudHNcIikpO1xuXHR9LCBcImFjY291bnRzXCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=