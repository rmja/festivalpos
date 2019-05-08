(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHVwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNQO0FBQ1o7QUFDcUI7QUFDVjtBQUl2QztJQVlJLGVBQW9CLEdBQVEsRUFBVSxLQUFtQixFQUFVLE1BQWM7UUFBN0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ2pGLENBQUM7SUFMRCxzQkFBSSw0QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFLSywyQkFBVyxHQUFqQjs7Ozs7O3dCQUNJLFNBQUk7d0JBQWEscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxHQUFLLFNBQVMsR0FBRyxTQUEyQyxDQUFDO3dCQUM3RCxTQUFJO3dCQUFnQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxFQUFFOzt3QkFBbEUsR0FBSyxZQUFZLEdBQUcsU0FBOEMsQ0FBQzt3QkFFbkUsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFRCxvQkFBSSxHQUFKO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFSyw4QkFBYyxHQUFwQjs7Ozs7O3dCQUNJLGVBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQXBGLGNBQW9CLFNBQWdFLEVBQUMsQ0FBQzt3QkFDdEYsZUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJO3dCQUFDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUEzRixjQUF1QixTQUFvRSxFQUFDLENBQUM7Ozs7O0tBQ2hHO0lBRUssc0JBQU0sR0FBWjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUNyQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7eUJBQ3JCO3dCQUVELHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLDRDQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7O3dCQUF2RSxTQUF1RSxDQUFDO3dCQUV4RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDdkM7SUF4Q1EsS0FBSztRQUZqQiwrREFBUyxFQUFFO1FBQ1gsb0VBQVUsRUFBRTt5Q0FhZ0Isd0NBQUcsRUFBaUIsbURBQUssRUFBeUIscURBQU07T0FaeEUsS0FBSyxDQXlDakI7SUFBRCxZQUFDO0NBQUE7QUF6Q2lCOzs7Ozs7Ozs7Ozs7QUNSbEIsaWJBQWliLGNBQWMsd1VBQXdVLGlCQUFpQix5akIiLCJmaWxlIjoic2V0dXAuNjA4YjJjZDZjNTJkMDEzMDJhNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvLCBTdG9yZSB9IGZyb20gXCJhdXJlbGlhLXN0b3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBzZXR1cCB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5AY29ubmVjdFRvKClcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgU2V0dXAge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSE6IFN0YXRlO1xyXG4gICAgdGVybWluYWw/OiBUZXJtaW5hbDtcclxuICAgIHRlcm1pbmFscyE6IFRlcm1pbmFsW107XHJcblxyXG4gICAgcG9pbnRPZlNhbGU/OiBQb2ludE9mU2FsZTtcclxuICAgIHBvaW50T2ZTYWxlcyE6IFBvaW50T2ZTYWxlW107XHJcblxyXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXJtaW5hbCAmJiB0aGlzLnBvaW50T2ZTYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMudGVybWluYWxzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsVGVybWluYWxzKCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnBvaW50T2ZTYWxlcyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFBvaW50T2ZTYWxlcygpLnRyYW5zZmVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbCA9IHRoaXMudGVybWluYWxzLmZpbmQoeCA9PiB4LmlkID09PSB0aGlzLnN0YXRlLnRlcm1pbmFsSWQpO1xyXG4gICAgICAgIHRoaXMucG9pbnRPZlNhbGUgPSB0aGlzLnBvaW50T2ZTYWxlcy5maW5kKHggPT4geC5pZCA9PT0gdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGVEZWZhdWx0cygpIHtcclxuICAgICAgICB0aGlzLnRlcm1pbmFscy5wdXNoKGF3YWl0IHRoaXMuYXBpLmNyZWF0ZVRlcm1pbmFsKHsgbmFtZTogXCJUZXJtaW5hbCAxXCIgfSkudHJhbnNmZXIoKSk7XHJcbiAgICAgICAgdGhpcy5wb2ludE9mU2FsZXMucHVzaChhd2FpdCB0aGlzLmFwaS5jcmVhdGVQb2ludE9mU2FsZSh7IG5hbWU6IFwiU2FsZ3NzdGVkIDFcIiB9KS50cmFuc2ZlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlcm1pbmFsIHx8ICF0aGlzLnBvaW50T2ZTYWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXR1cCwgdGhpcy50ZXJtaW5hbC5pZCwgdGhpcy5wb2ludE9mU2FsZS5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcInNhbGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXJtaW5hbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRPZlNhbGUge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx0b3AtbmF2YmFyPjwvdG9wLW5hdmJhcj5cXHJcXG4gICAgPHBhZ2UtYm9keT5cXHJcXG4gICAgICAgIDxmb3JtIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwic3VibWl0KClcXFwiIGlmLmJpbmQ9XFxcInRlcm1pbmFscy5sZW5ndGggJiYgcG9pbnRPZlNhbGVzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzc1xcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRlcm1pbmFsPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZS5iaW5kPVxcXCJ0ZXJtaW5hbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHJlcGVhdC5mb3I9XFxcInRlcm1pbmFsIG9mIHRlcm1pbmFsc1xcXCIgbW9kZWwuYmluZD1cXFwidGVybWluYWxcXFwiPiR7dGVybWluYWwubmFtZX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5TYWxnc3N0ZWQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlLmJpbmQ9XFxcInBvaW50T2ZTYWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gcmVwZWF0LmZvcj1cXFwicG9pbnRPZlNhbGUgb2YgcG9pbnRPZlNhbGVzXFxcIiBtb2RlbC5iaW5kPVxcXCJwb2ludE9mU2FsZVxcXCI+JHtwb2ludE9mU2FsZS5uYW1lfTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgZml4ZWQtYm90dG9tXFxcIj48cmVxdWlyZSBmcm9tPVxcXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTYXZlXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3NhdmUnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEdlbTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPGRpdiBlbHNlPlxcclxcbiAgICAgICAgICAgIERlciBza2FsIHbDpnJlIG9wc2F0IG1lZCB0ZXJtaW5hbGVyIG9nIHNhbGdzc3RlZGVyIGZvciBhdCBzdGFydGUuIDxhIGhyZWYgY2xpY2suZGVsZWdhdGU9XFxcImNyZWF0ZURlZmF1bHRzKClcXFwiPktsaWsgaGVyIGZvciBhdCBvcHJldHRlIGVuIGFmIGh2ZXIuPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvcGFnZS1ib2R5PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==