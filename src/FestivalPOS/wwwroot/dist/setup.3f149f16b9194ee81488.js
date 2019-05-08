(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup"],{

/***/ "@fortawesome/free-solid-svg-icons/faSave":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSave.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'save';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f0c7';
var svgPathData = 'M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z';

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

exports.faSave = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "setup":
/*!*******************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/setup.ts ***!
  \*******************************************************/
/*! exports provided: Setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setup", function() { return Setup; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/api/index.ts");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/state.ts");
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





var Setup = /** @class */ (function () {
    function Setup(api, store, router) {
        this.api = api;
        this.store = store;
        this.router = router;
    }
    Object.defineProperty(Setup.prototype, "canSubmit", {
        get: function () {
            return this.terminal && this.pointOfSale;
        },
        enumerable: true,
        configurable: true
    });
    Setup.prototype.canActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllTerminals().transfer()];
                    case 1:
                        _a.terminals = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.api.getAllPointOfSales().transfer()];
                    case 2:
                        _b.pointOfSales = _c.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Setup.prototype.bind = function () {
        var _this = this;
        this.terminal = this.terminals.find(function (x) { return x.id === _this.state.terminalId; });
        this.pointOfSale = this.pointOfSales.find(function (x) { return x.id === _this.state.pointOfSaleId; });
    };
    Setup.prototype.createDefaults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = this.terminals).push;
                        return [4 /*yield*/, this.api.createTerminal({ name: "Terminal 1" }).transfer()];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        _d = (_c = this.pointOfSales).push;
                        return [4 /*yield*/, this.api.createPointOfSale({ name: "Salgssted 1" }).transfer()];
                    case 2:
                        _d.apply(_c, [_e.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Setup.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.terminal || !this.pointOfSale) {
                            throw new Error();
                        }
                        return [4 /*yield*/, this.store.dispatch(_state__WEBPACK_IMPORTED_MODULE_4__["setup"], this.terminal.id, this.pointOfSale.id)];
                    case 1:
                        _a.sent();
                        this.router.navigateToRoute("sale");
                        return [2 /*return*/];
                }
            });
        });
    };
    Setup = __decorate([
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_3__["connectTo"])(),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_2__["Api"], aurelia_store__WEBPACK_IMPORTED_MODULE_3__["Store"], aurelia_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Setup);
    return Setup;
}());



/***/ }),

/***/ "setup.html":
/*!************************!*\
  !*** ./src/setup.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <top-navbar></top-navbar>\r\n    <page-body>\r\n        <form submit.delegate=\"submit()\" if.bind=\"terminals.length && pointOfSales.length\">\r\n            <div class\"form-group\">\r\n                <label>Terminal</label>\r\n                <select value.bind=\"terminal\" class=\"form-control\">\r\n                    <option repeat.for=\"terminal of terminals\" model.bind=\"terminal\">${terminal.name}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Salgssted</label>\r\n                <select value.bind=\"pointOfSale\" class=\"form-control\">\r\n                    <option repeat.for=\"pointOfSale of pointOfSales\" model.bind=\"pointOfSale\">${pointOfSale.name}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block fixed-bottom\"><require from=\"@fortawesome/free-solid-svg-icons/faSave\"></require><font-awesome-icon icon.bind=\"'save' & fontawesome\"></font-awesome-icon> Gem</button>\r\n        </form>\r\n        <div else>\r\n            Der skal være opsat med terminaler og salgssteder for at starte. <a href click.delegate=\"createDefaults()\">Klik her for at oprette en af hver.</a>\r\n        </div>\r\n    </page-body>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHVwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrQztBQUNQO0FBQ1o7QUFDcUI7QUFDVjtBQUl2QztJQVlJLGVBQW9CLEdBQVEsRUFBVSxLQUFtQixFQUFVLE1BQWM7UUFBN0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ2pGLENBQUM7SUFMRCxzQkFBSSw0QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFLSywyQkFBVyxHQUFqQjs7Ozs7O3dCQUNJLFNBQUk7d0JBQWEscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxHQUFLLFNBQVMsR0FBRyxTQUEyQyxDQUFDO3dCQUM3RCxTQUFJO3dCQUFnQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxFQUFFOzt3QkFBbEUsR0FBSyxZQUFZLEdBQUcsU0FBOEMsQ0FBQzt3QkFFbkUsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFRCxvQkFBSSxHQUFKO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFSyw4QkFBYyxHQUFwQjs7Ozs7O3dCQUNJLGVBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQXBGLGNBQW9CLFNBQWdFLEVBQUMsQ0FBQzt3QkFDdEYsZUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJO3dCQUFDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUEzRixjQUF1QixTQUFvRSxFQUFDLENBQUM7Ozs7O0tBQ2hHO0lBRUssc0JBQU0sR0FBWjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUNyQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7eUJBQ3JCO3dCQUVELHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLDRDQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7O3dCQUF2RSxTQUF1RSxDQUFDO3dCQUV4RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDdkM7SUF4Q1EsS0FBSztRQUZqQiwrREFBUyxFQUFFO1FBQ1gsb0VBQVUsRUFBRTt5Q0FhZ0Isd0NBQUcsRUFBaUIsbURBQUssRUFBeUIscURBQU07T0FaeEUsS0FBSyxDQXlDakI7SUFBRCxZQUFDO0NBQUE7QUF6Q2lCOzs7Ozs7Ozs7Ozs7QUNSbEIsaWJBQWliLGNBQWMsd1VBQXdVLGlCQUFpQix5akIiLCJmaWxlIjoic2V0dXAuM2YxNDlmMTZiOTE5NGVlODE0ODguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NhdmUnO1xudmFyIHdpZHRoID0gNDQ4O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwYzcnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000MzMuOTQxIDEyOS45NDFsLTgzLjg4Mi04My44ODJBNDggNDggMCAwIDAgMzE2LjExOCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMTYzLjg4MmE0OCA0OCAwIDAgMC0xNC4wNTktMzMuOTQxek0yMjQgNDE2Yy0zNS4zNDYgMC02NC0yOC42NTQtNjQtNjQgMC0zNS4zNDYgMjguNjU0LTY0IDY0LTY0czY0IDI4LjY1NCA2NCA2NGMwIDM1LjM0Ni0yOC42NTQgNjQtNjQgNjR6bTk2LTMwNC41MlYyMTJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMkg3NmMtNi42MjcgMC0xMi01LjM3My0xMi0xMlYxMDhjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgyMjguNTJjMy4xODMgMCA2LjIzNSAxLjI2NCA4LjQ4NSAzLjUxNWwzLjQ4IDMuNDhBMTEuOTk2IDExLjk5NiAwIDAgMSAzMjAgMTExLjQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVNhdmUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG8sIFN0b3JlIH0gZnJvbSBcImF1cmVsaWEtc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RhdGUsIHNldHVwIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbkBjb25uZWN0VG8oKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBTZXR1cCB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICB0ZXJtaW5hbD86IFRlcm1pbmFsO1xyXG4gICAgdGVybWluYWxzITogVGVybWluYWxbXTtcclxuXHJcbiAgICBwb2ludE9mU2FsZT86IFBvaW50T2ZTYWxlO1xyXG4gICAgcG9pbnRPZlNhbGVzITogUG9pbnRPZlNhbGVbXTtcclxuXHJcbiAgICBnZXQgY2FuU3VibWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlcm1pbmFsICYmIHRoaXMucG9pbnRPZlNhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbHMgPSBhd2FpdCB0aGlzLmFwaS5nZXRBbGxUZXJtaW5hbHMoKS50cmFuc2ZlcigpO1xyXG4gICAgICAgIHRoaXMucG9pbnRPZlNhbGVzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUG9pbnRPZlNhbGVzKCkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZCgpIHtcclxuICAgICAgICB0aGlzLnRlcm1pbmFsID0gdGhpcy50ZXJtaW5hbHMuZmluZCh4ID0+IHguaWQgPT09IHRoaXMuc3RhdGUudGVybWluYWxJZCk7XHJcbiAgICAgICAgdGhpcy5wb2ludE9mU2FsZSA9IHRoaXMucG9pbnRPZlNhbGVzLmZpbmQoeCA9PiB4LmlkID09PSB0aGlzLnN0YXRlLnBvaW50T2ZTYWxlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZURlZmF1bHRzKCkge1xyXG4gICAgICAgIHRoaXMudGVybWluYWxzLnB1c2goYXdhaXQgdGhpcy5hcGkuY3JlYXRlVGVybWluYWwoeyBuYW1lOiBcIlRlcm1pbmFsIDFcIiB9KS50cmFuc2ZlcigpKTtcclxuICAgICAgICB0aGlzLnBvaW50T2ZTYWxlcy5wdXNoKGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVBvaW50T2ZTYWxlKHsgbmFtZTogXCJTYWxnc3N0ZWQgMVwiIH0pLnRyYW5zZmVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGVybWluYWwgfHwgIXRoaXMucG9pbnRPZlNhbGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldHVwLCB0aGlzLnRlcm1pbmFsLmlkLCB0aGlzLnBvaW50T2ZTYWxlLmlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwic2FsZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFRlcm1pbmFsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb2ludE9mU2FsZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRvcC1uYXZiYXI+PC90b3AtbmF2YmFyPlxcclxcbiAgICA8cGFnZS1ib2R5PlxcclxcbiAgICAgICAgPGZvcm0gc3VibWl0LmRlbGVnYXRlPVxcXCJzdWJtaXQoKVxcXCIgaWYuYmluZD1cXFwidGVybWluYWxzLmxlbmd0aCAmJiBwb2ludE9mU2FsZXMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzXFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGVybWluYWw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlLmJpbmQ9XFxcInRlcm1pbmFsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gcmVwZWF0LmZvcj1cXFwidGVybWluYWwgb2YgdGVybWluYWxzXFxcIiBtb2RlbC5iaW5kPVxcXCJ0ZXJtaW5hbFxcXCI+JHt0ZXJtaW5hbC5uYW1lfTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlNhbGdzc3RlZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWUuYmluZD1cXFwicG9pbnRPZlNhbGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiByZXBlYXQuZm9yPVxcXCJwb2ludE9mU2FsZSBvZiBwb2ludE9mU2FsZXNcXFwiIG1vZGVsLmJpbmQ9XFxcInBvaW50T2ZTYWxlXFxcIj4ke3BvaW50T2ZTYWxlLm5hbWV9PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBmaXhlZC1ib3R0b21cXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNhdmVcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCInc2F2ZScgJiBmb250YXdlc29tZVxcXCI+PC9mb250LWF3ZXNvbWUtaWNvbj4gR2VtPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8ZGl2IGVsc2U+XFxyXFxuICAgICAgICAgICAgRGVyIHNrYWwgdsOmcmUgb3BzYXQgbWVkIHRlcm1pbmFsZXIgb2cgc2FsZ3NzdGVkZXIgZm9yIGF0IHN0YXJ0ZS4gPGEgaHJlZiBjbGljay5kZWxlZ2F0ZT1cXFwiY3JlYXRlRGVmYXVsdHMoKVxcXCI+S2xpayBoZXIgZm9yIGF0IG9wcmV0dGUgZW4gYWYgaHZlci48L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiXSwic291cmNlUm9vdCI6IiJ9