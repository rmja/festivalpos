(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alarms"],{

/***/ "./src/api/alarms-hub.ts":
/*!*******************************!*\
  !*** ./src/api/alarms-hub.ts ***!
  \*******************************/
/*! exports provided: AlarmsHub, EventCreated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmsHub", function() { return AlarmsHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreated", function() { return EventCreated; });
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _alarms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alarms */ "./src/api/alarms.ts");
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var ur_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ur-json */ "./node_modules/ur-json/dist/esm/index.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
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





var AlarmsHub = /** @class */ (function () {
    function AlarmsHub(eventAggregator) {
        this.connectedUsers = 0;
        this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]()
            .withUrl("/alarms")
            .build();
        this.connection.on("event-created", function (event) {
            event = Object(ur_json__WEBPACK_IMPORTED_MODULE_3__["modelBind"])(_alarms__WEBPACK_IMPORTED_MODULE_1__["AlarmEvent"], event);
            eventAggregator.publish(new EventCreated(event));
        });
    }
    AlarmsHub.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connectPromise) {
                            this.connectPromise = this.connection.start();
                        }
                        return [4 /*yield*/, this.connectPromise];
                    case 1:
                        _a.sent();
                        this.connectedUsers++;
                        return [2 /*return*/];
                }
            });
        });
    };
    AlarmsHub.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(--this.connectedUsers === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connection.stop()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AlarmsHub = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["autoinject"])(),
        __metadata("design:paramtypes", [aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_2__["EventAggregator"]])
    ], AlarmsHub);
    return AlarmsHub;
}());

var EventCreated = /** @class */ (function () {
    function EventCreated(event) {
        this.event = event;
    }
    return EventCreated;
}());



/***/ }),

/***/ "alarms/pending":
/*!****************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/alarms/pending.ts ***!
  \****************************************************************/
/*! exports provided: PendingAlarms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingAlarms", function() { return PendingAlarms; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var _api_alarms_hub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/alarms-hub */ "./src/api/alarms-hub.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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





var PendingAlarms = /** @class */ (function () {
    function PendingAlarms(api, alarmsHub, eventAggregator) {
        this.api = api;
        this.alarmsHub = alarmsHub;
        this.eventAggregator = eventAggregator;
        this.faBell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBell"];
    }
    PendingAlarms.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.alarmsHub.connect()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.api.getAllPendingAlarmEvents().bypassCache().transfer()];
                    case 2:
                        _a.pendingEvents = _b.sent();
                        this.disposables = [
                            this.eventAggregator.subscribe(_api_alarms_hub__WEBPACK_IMPORTED_MODULE_3__["EventCreated"], this.eventCreated.bind(this))
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingAlarms.prototype.deactivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, disposable;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        for (_i = 0, _a = this.disposables; _i < _a.length; _i++) {
                            disposable = _a[_i];
                            disposable.dispose();
                        }
                        return [4 /*yield*/, this.alarmsHub.disconnect()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingAlarms.prototype.eventCreated = function (event) {
        this.pendingEvents.push(event.event);
    };
    PendingAlarms.prototype.cancel = function (event, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.cancelAlarmEvent(event.id).transfer()];
                    case 1:
                        event = _a.sent();
                        this.pendingEvents.splice(index, 1, event);
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingAlarms = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"], _api_alarms_hub__WEBPACK_IMPORTED_MODULE_3__["AlarmsHub"], aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_2__["EventAggregator"]])
    ], PendingAlarms);
    return PendingAlarms;
}());



/***/ }),

/***/ "alarms/pending.html":
/*!*********************************!*\
  !*** ./src/alarms/pending.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <div class=\"card-deck\" if.bind=\"pendingEvents.length\">\r\n        <div class=\"card\" repeat.for=\"event of pendingEvents\">\r\n            <h4 class=\"card-header\">${event.alarmFeedName}</h4>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"col-6 text-muted\">Salgssted</h5>\r\n                    <h5 class=\"col-6\">${event.pointOfSaleName}</h5>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <h5 class=\"col-6 text-muted\">Terminal</h5>\r\n                    <h5 class=\"col-6\">${event.terminalName}</h5>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <h5 class=\"col-6 text-muted\">Afmeldt</h5>\r\n                    <div class=\"col-6\">\r\n                        <h5 if.bind=\"event.cancelled\">${event.cancelled | dateTime}</h5>\r\n                        <button else type=\"button\" class=\"btn btn-warning btn-sm\" click.delegate=\"cancel(event, $index)\"><require from=\"@fortawesome/free-solid-svg-icons/faTimes\"></require><font-awesome-icon icon.bind=\"'times' & fontawesome\"></font-awesome-icon> Afmeld</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <empty-hint else>\r\n        Der er ingen aktuelle alarmer\r\n    </empty-hint>\r\n</template>";

/***/ }),

/***/ "alarms/router":
/*!***************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/alarms/router.ts ***!
  \***************************************************************/
/*! exports provided: AlarmsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmsRouter", function() { return AlarmsRouter; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js");

var routes = [
    { route: "", redirect: "pending" },
    { route: "pending", name: "pending", moduleId: './pending' },
];
var AlarmsRouter = /** @class */ (function () {
    function AlarmsRouter() {
    }
    AlarmsRouter.prototype.configureRouter = function (config) {
        config.map(routes);
    };
    return AlarmsRouter;
}());



/***/ }),

/***/ "alarms/router.html":
/*!********************************!*\
  !*** ./src/alarms/router.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <top-navbar></top-navbar>\r\n    <page-body>\r\n        <router-view></router-view>\r\n    </page-body>\r\n</template>";

/***/ }),

/***/ "async!alarms/pending":
/*!*****************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=alarms!./src/alarms/pending.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.resolve(/*! require.ensure */).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./pending.ts */ "alarms/pending"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FsYXJtcy1odWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYXJtcy9wZW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcGVuZGluZy5odG1sIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcm91dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYXJtcy9wZW5kaW5nLnRzPzRkZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEY7QUFDcEQ7QUFDcUI7QUFDdkI7QUFDVztBQUcvQztJQUtJLG1CQUFZLGVBQWdDO1FBRnBDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBR3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvRUFBb0IsRUFBRTthQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQ2xCLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQUMsS0FBVTtZQUMzQyxLQUFLLEdBQUcseURBQVMsQ0FBQyxrREFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSywyQkFBTyxHQUFiOzs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTs0QkFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUNqRDt3QkFFRCxxQkFBTSxJQUFJLENBQUMsY0FBYzs7d0JBQXpCLFNBQXlCLENBQUM7d0JBRTFCLElBQUksQ0FBQyxjQUFj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QUUsUUFBUSxFQUFFLFdBQTBDLEVBQUU7Q0FDOUY7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUhHLHNDQUFlLEdBQWYsVUFBZ0IsTUFBMkI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWkQsNEo7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxDQUFDLDZDQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsMEVBQThEO0FBQzNFLEVBQUUsZ0VBQVc7QUFDYixDIiwiZmlsZSI6ImFsYXJtcy41NzU0N2YxYjcyMDc1NGY1MGUzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh1YkNvbm5lY3Rpb24sIEh1YkNvbm5lY3Rpb25CdWlsZGVyLCBIdWJDb25uZWN0aW9uU3RhdGUgfSBmcm9tIFwiQGFzcG5ldC9zaWduYWxyXCI7XHJcbmltcG9ydCB7IEFsYXJtRXZlbnQgfSBmcm9tIFwiLi9hbGFybXNcIjtcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xyXG5pbXBvcnQgeyBtb2RlbEJpbmQgfSBmcm9tIFwidXItanNvblwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBbGFybXNIdWIge1xyXG4gICAgcHJpdmF0ZSBjb25uZWN0aW9uOiBIdWJDb25uZWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBjb25uZWN0UHJvbWlzZT86IFByb21pc2U8dm9pZD47XHJcbiAgICBwcml2YXRlIGNvbm5lY3RlZFVzZXJzID0gMDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAud2l0aFVybChcIi9hbGFybXNcIilcclxuICAgICAgICAgICAgLmJ1aWxkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbihcImV2ZW50LWNyZWF0ZWRcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQgPSBtb2RlbEJpbmQoQWxhcm1FdmVudCwgZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgRXZlbnRDcmVhdGVkKGV2ZW50KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29ubmVjdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdFByb21pc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0UHJvbWlzZSA9IHRoaXMuY29ubmVjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0UHJvbWlzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRVc2VycysrO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgaWYgKC0tdGhpcy5jb25uZWN0ZWRVc2VycyA9PT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q3JlYXRlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXZlbnQ6IEFsYXJtRXZlbnQpIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGF1dG9pbmplY3QsIERpc3Bvc2FibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XHJcbmltcG9ydCB7IEV2ZW50Q3JlYXRlZCwgQWxhcm1zSHViIH0gZnJvbSBcIi4uL2FwaS9hbGFybXMtaHViXCI7XHJcbmltcG9ydCB7IGZhQmVsbCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBlbmRpbmdBbGFybXMge1xyXG4gICAgcGVuZGluZ0V2ZW50cyE6IEFsYXJtRXZlbnRWaWV3TW9kZWxbXTtcclxuICAgIGZhQmVsbCA9IGZhQmVsbDtcclxuICAgIHByaXZhdGUgZGlzcG9zYWJsZXMhOiBEaXNwb3NhYmxlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBhbGFybXNIdWI6IEFsYXJtc0h1YiwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWxhcm1zSHViLmNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nRXZlbnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUGVuZGluZ0FsYXJtRXZlbnRzKCkuYnlwYXNzQ2FjaGUoKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2FibGVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoRXZlbnRDcmVhdGVkLCB0aGlzLmV2ZW50Q3JlYXRlZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGRpc3Bvc2FibGUgb2YgdGhpcy5kaXNwb3NhYmxlcykge1xyXG4gICAgICAgICAgICBkaXNwb3NhYmxlLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYWxhcm1zSHViLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2ZW50Q3JlYXRlZChldmVudDogRXZlbnRDcmVhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nRXZlbnRzLnB1c2goZXZlbnQuZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbmNlbChldmVudDogQWxhcm1FdmVudFZpZXdNb2RlbCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGV2ZW50ID0gYXdhaXQgdGhpcy5hcGkuY2FuY2VsQWxhcm1FdmVudChldmVudC5pZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnBlbmRpbmdFdmVudHMuc3BsaWNlKGluZGV4LCAxLCBldmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGFybUV2ZW50Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBhbGFybUZlZWROYW1lOiBzdHJpbmc7XHJcbiAgICB0ZXJtaW5hbE5hbWU6IHN0cmluZztcclxuICAgIHBvaW50T2ZTYWxlTmFtZTogc3RyaW5nO1xyXG4gICAgY3JlYXRlZDogRGF0ZVRpbWU7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2tcXFwiIGlmLmJpbmQ9XFxcInBlbmRpbmdFdmVudHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHJlcGVhdC5mb3I9XFxcImV2ZW50IG9mIHBlbmRpbmdFdmVudHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPiR7ZXZlbnQuYWxhcm1GZWVkTmFtZX08L2g0PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02IHRleHQtbXV0ZWRcXFwiPlNhbGdzc3RlZDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02XFxcIj4ke2V2ZW50LnBvaW50T2ZTYWxlTmFtZX08L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY29sLTYgdGV4dC1tdXRlZFxcXCI+VGVybWluYWw8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wtNlxcXCI+JHtldmVudC50ZXJtaW5hbE5hbWV9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02IHRleHQtbXV0ZWRcXFwiPkFmbWVsZHQ8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZi5iaW5kPVxcXCJldmVudC5jYW5jZWxsZWRcXFwiPiR7ZXZlbnQuY2FuY2VsbGVkIHwgZGF0ZVRpbWV9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGVsc2UgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNhbmNlbChldmVudCwgJGluZGV4KVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEFmbWVsZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgRGVyIGVyIGluZ2VuIGFrdHVlbGxlIGFsYXJtZXJcXHJcXG4gICAgPC9lbXB0eS1oaW50PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVDb25maWcgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIHJlZGlyZWN0OiBcInBlbmRpbmdcIiB9LFxyXG4gICAgeyByb3V0ZTogXCJwZW5kaW5nXCIsIG5hbWU6IFwicGVuZGluZ1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vcGVuZGluZ1wiLCBcImFsYXJtc1wiKSB9LFxyXG5dXHJcblxyXG5leHBvcnQgY2xhc3MgQWxhcm1zUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vcGVuZGluZy50c1wiKSk7XG5cdH0sIFwiYWxhcm1zXCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=