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

/***/ }),

/***/ "sale/alarms":
/*!*************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./src/sale/alarms.ts ***!
  \*************************************************************/
/*! exports provided: Alarms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alarms", function() { return Alarms; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var aurelia_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-store */ "aurelia-store");
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



var Alarms = /** @class */ (function () {
    function Alarms(api) {
        this.api = api;
    }
    Alarms.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, events, _i, events_1, event_1, _b, _c, feed;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getAllAlarmFeeds().transfer()];
                    case 1:
                        _a.feeds = _d.sent();
                        return [4 /*yield*/, this.api.getAllPendingAlarmEvents({ pointOfSaleId: this.state.pointOfSaleId }).bypassCache().transfer()];
                    case 2:
                        events = _d.sent();
                        if (events.length) {
                            for (_i = 0, events_1 = events; _i < events_1.length; _i++) {
                                event_1 = events_1[_i];
                                for (_b = 0, _c = this.feeds; _b < _c.length; _b++) {
                                    feed = _c[_b];
                                    if (feed.id === event_1.alarmFeedId) {
                                        feed.pendingEvent = event_1;
                                        break;
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Alarms.prototype.raise = function (feed) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = feed;
                        return [4 /*yield*/, this.api.createAlarmEvent(feed.id, {
                                terminalId: this.state.terminalId,
                                pointOfSaleId: this.state.pointOfSaleId,
                            }).transfer()];
                    case 1:
                        _a.pendingEvent = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Alarms = __decorate([
        Object(aurelia_store__WEBPACK_IMPORTED_MODULE_2__["connectTo"])({
            selector: function (store) { return store.state; },
            setup: "activate"
        }),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["autoinject"])(),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], Alarms);
    return Alarms;
}());



/***/ }),

/***/ "sale/alarms.html":
/*!******************************!*\
  !*** ./src/sale/alarms.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <div if.bind=\"feeds.length\" class=\"card-deck\">\r\n        <div repeat.for=\"feed of feeds\" class=\"card\">\r\n            <div class=\"card-body\">\r\n                <button if.bind=\"feed.pendingEvent\" class=\"btn btn-danger btn-block\">\r\n                    <h6>${feed.name}</h6>\r\n                    <small>${feed.pendingEvent.terminalName}, ${feed.pendingEvent.pointOfSaleName} afventer hjælp</small>\r\n                </button>\r\n                <button else class=\"btn btn-success btn-block\" click.delegate=\"raise(feed)\">\r\n                    <h6>${feed.name}</h6>\r\n                    <small>Send besked</small>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <empty-hint else>\r\n        Der er ikke opsat nogen alarmer\r\n    </empty-hint>\r\n</template>";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FsYXJtcy1odWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYXJtcy9wZW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcGVuZGluZy5odG1sIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcm91dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYXJtcy9wZW5kaW5nLnRzPzRkZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbGUvYWxhcm1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWxlL2FsYXJtcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBGO0FBQ3BEO0FBQ3FCO0FBQ3ZCO0FBQ1c7QUFHL0M7SUFLSSxtQkFBWSxlQUFnQztRQUZwQyxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUd2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0VBQW9CLEVBQUU7YUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNsQixLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQVU7WUFDM0MsS0FBSyxHQUFHLHlEQUFTLENBQUMsa0RBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssMkJBQU8sR0FBYjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFD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QUFJLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBSyxDQUFDLFdBQVcsRUFBRTt3Q0FDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFLLENBQUM7d0NBQzFCLE1BQU07cUNBQ1Q7aUNBQ0o7NkJBQ0o7eUJBQ0o7Ozs7O0tBQ0o7SUFFSyxzQkFBSyxHQUFYLFVBQVksSUFBd0I7Ozs7Ozt3QkFDaEMsU0FBSTt3QkFBZ0IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dDQUN6RCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dDQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOzZCQUMxQyxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFIYixHQUFLLFlBQVksR0FBRyxTQUdQLENBQUM7Ozs7O0tBQ2pCO0lBM0JRLE1BQU07UUFMbEIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXO1lBQzlCLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUM7UUFDRCxvRUFBVSxFQUFFO3lDQUtnQix3Q0FBRztPQUpuQixNQUFNLENBNEJsQjtJQUFELGFBQUM7Q0FBQTtBQTVCa0I7Ozs7Ozs7Ozs7OztBQ1ZuQix1VEFBdVQsVUFBVSxzQ0FBc0MsK0JBQStCLElBQUksa0NBQWtDLHNMQUFzTCxVQUFVLG9QIiwiZmlsZSI6ImFsYXJtcy41ZjcyMTM0M2NmMTE1OTRiOTI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh1YkNvbm5lY3Rpb24sIEh1YkNvbm5lY3Rpb25CdWlsZGVyLCBIdWJDb25uZWN0aW9uU3RhdGUgfSBmcm9tIFwiQGFzcG5ldC9zaWduYWxyXCI7XHJcbmltcG9ydCB7IEFsYXJtRXZlbnQgfSBmcm9tIFwiLi9hbGFybXNcIjtcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xyXG5pbXBvcnQgeyBtb2RlbEJpbmQgfSBmcm9tIFwidXItanNvblwiO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBBbGFybXNIdWIge1xyXG4gICAgcHJpdmF0ZSBjb25uZWN0aW9uOiBIdWJDb25uZWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBjb25uZWN0UHJvbWlzZT86IFByb21pc2U8dm9pZD47XHJcbiAgICBwcml2YXRlIGNvbm5lY3RlZFVzZXJzID0gMDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAud2l0aFVybChcIi9hbGFybXNcIilcclxuICAgICAgICAgICAgLmJ1aWxkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbihcImV2ZW50LWNyZWF0ZWRcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQgPSBtb2RlbEJpbmQoQWxhcm1FdmVudCwgZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgRXZlbnRDcmVhdGVkKGV2ZW50KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29ubmVjdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdFByb21pc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0UHJvbWlzZSA9IHRoaXMuY29ubmVjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0UHJvbWlzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRVc2VycysrO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgaWYgKC0tdGhpcy5jb25uZWN0ZWRVc2VycyA9PT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q3JlYXRlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXZlbnQ6IEFsYXJtRXZlbnQpIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGF1dG9pbmplY3QsIERpc3Bvc2FibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XHJcbmltcG9ydCB7IEV2ZW50Q3JlYXRlZCwgQWxhcm1zSHViIH0gZnJvbSBcIi4uL2FwaS9hbGFybXMtaHViXCI7XHJcbmltcG9ydCB7IGZhQmVsbCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFBlbmRpbmdBbGFybXMge1xyXG4gICAgcGVuZGluZ0V2ZW50cyE6IEFsYXJtRXZlbnRWaWV3TW9kZWxbXTtcclxuICAgIGZhQmVsbCA9IGZhQmVsbDtcclxuICAgIHByaXZhdGUgZGlzcG9zYWJsZXMhOiBEaXNwb3NhYmxlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSBhbGFybXNIdWI6IEFsYXJtc0h1YiwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWxhcm1zSHViLmNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nRXZlbnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUGVuZGluZ0FsYXJtRXZlbnRzKCkuYnlwYXNzQ2FjaGUoKS50cmFuc2ZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2FibGVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoRXZlbnRDcmVhdGVkLCB0aGlzLmV2ZW50Q3JlYXRlZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGRpc3Bvc2FibGUgb2YgdGhpcy5kaXNwb3NhYmxlcykge1xyXG4gICAgICAgICAgICBkaXNwb3NhYmxlLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuYWxhcm1zSHViLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2ZW50Q3JlYXRlZChldmVudDogRXZlbnRDcmVhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nRXZlbnRzLnB1c2goZXZlbnQuZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNhbmNlbChldmVudDogQWxhcm1FdmVudFZpZXdNb2RlbCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGV2ZW50ID0gYXdhaXQgdGhpcy5hcGkuY2FuY2VsQWxhcm1FdmVudChldmVudC5pZCkudHJhbnNmZXIoKTtcclxuICAgICAgICB0aGlzLnBlbmRpbmdFdmVudHMuc3BsaWNlKGluZGV4LCAxLCBldmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGFybUV2ZW50Vmlld01vZGVsIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBhbGFybUZlZWROYW1lOiBzdHJpbmc7XHJcbiAgICB0ZXJtaW5hbE5hbWU6IHN0cmluZztcclxuICAgIHBvaW50T2ZTYWxlTmFtZTogc3RyaW5nO1xyXG4gICAgY3JlYXRlZDogRGF0ZVRpbWU7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2tcXFwiIGlmLmJpbmQ9XFxcInBlbmRpbmdFdmVudHMubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHJlcGVhdC5mb3I9XFxcImV2ZW50IG9mIHBlbmRpbmdFdmVudHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPiR7ZXZlbnQuYWxhcm1GZWVkTmFtZX08L2g0PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02IHRleHQtbXV0ZWRcXFwiPlNhbGdzc3RlZDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02XFxcIj4ke2V2ZW50LnBvaW50T2ZTYWxlTmFtZX08L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY29sLTYgdGV4dC1tdXRlZFxcXCI+VGVybWluYWw8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wtNlxcXCI+JHtldmVudC50ZXJtaW5hbE5hbWV9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02IHRleHQtbXV0ZWRcXFwiPkFmbWVsZHQ8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZi5iaW5kPVxcXCJldmVudC5jYW5jZWxsZWRcXFwiPiR7ZXZlbnQuY2FuY2VsbGVkIHwgZGF0ZVRpbWV9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGVsc2UgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVxcXCIgY2xpY2suZGVsZWdhdGU9XFxcImNhbmNlbChldmVudCwgJGluZGV4KVxcXCI+PHJlcXVpcmUgZnJvbT1cXFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXNcXFwiPjwvcmVxdWlyZT48Zm9udC1hd2Vzb21lLWljb24gaWNvbi5iaW5kPVxcXCIndGltZXMnICYgZm9udGF3ZXNvbWVcXFwiPjwvZm9udC1hd2Vzb21lLWljb24+IEFmbWVsZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZW1wdHktaGludCBlbHNlPlxcclxcbiAgICAgICAgRGVyIGVyIGluZ2VuIGFrdHVlbGxlIGFsYXJtZXJcXHJcXG4gICAgPC9lbXB0eS1oaW50PlxcclxcbjwvdGVtcGxhdGU+XCI7IiwiaW1wb3J0IHsgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVDb25maWcgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIHJlZGlyZWN0OiBcInBlbmRpbmdcIiB9LFxyXG4gICAgeyByb3V0ZTogXCJwZW5kaW5nXCIsIG5hbWU6IFwicGVuZGluZ1wiLCBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vcGVuZGluZ1wiLCBcImFsYXJtc1wiKSB9LFxyXG5dXHJcblxyXG5leHBvcnQgY2xhc3MgQWxhcm1zUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00IS4vcGVuZGluZy50c1wiKSk7XG5cdH0sIFwiYWxhcm1zXCIpO1xufSIsImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG8gfSBmcm9tIFwiYXVyZWxpYS1zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xyXG5cclxuQGNvbm5lY3RUbyh7XHJcbiAgICBzZWxlY3Rvcjogc3RvcmUgPT4gc3RvcmUuc3RhdGUsXHJcbiAgICBzZXR1cDogXCJhY3RpdmF0ZVwiXHJcbn0pXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFsYXJtcyB7XHJcbiAgICBwcml2YXRlIHN0YXRlITogU3RhdGU7XHJcbiAgICBmZWVkcyE6IEFsYXJtRmVlZFZpZXdNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGkpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmZlZWRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsQWxhcm1GZWVkcygpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgdGhpcy5hcGkuZ2V0QWxsUGVuZGluZ0FsYXJtRXZlbnRzKHsgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkIH0pLmJ5cGFzc0NhY2hlKCkudHJhbnNmZXIoKTtcclxuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmZWVkIG9mIHRoaXMuZmVlZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmVlZC5pZCA9PT0gZXZlbnQuYWxhcm1GZWVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlZC5wZW5kaW5nRXZlbnQgPSBldmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJhaXNlKGZlZWQ6IEFsYXJtRmVlZFZpZXdNb2RlbCkge1xyXG4gICAgICAgIGZlZWQucGVuZGluZ0V2ZW50ID0gYXdhaXQgdGhpcy5hcGkuY3JlYXRlQWxhcm1FdmVudChmZWVkLmlkLCB7XHJcbiAgICAgICAgICAgIHRlcm1pbmFsSWQ6IHRoaXMuc3RhdGUudGVybWluYWxJZCxcclxuICAgICAgICAgICAgcG9pbnRPZlNhbGVJZDogdGhpcy5zdGF0ZS5wb2ludE9mU2FsZUlkLCAgICAgICAgICAgIFxyXG4gICAgICAgIH0pLnRyYW5zZmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGFybUZlZWRWaWV3TW9kZWwge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBlbmRpbmdFdmVudD86IHtcclxuICAgICAgICB0ZXJtaW5hbE5hbWU6IHN0cmluZztcclxuICAgICAgICBwb2ludE9mU2FsZU5hbWU6IHN0cmluZ1xyXG4gICAgfTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgaWYuYmluZD1cXFwiZmVlZHMubGVuZ3RoXFxcIiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgcmVwZWF0LmZvcj1cXFwiZmVlZCBvZiBmZWVkc1xcXCIgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWYuYmluZD1cXFwiZmVlZC5wZW5kaW5nRXZlbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg2PiR7ZmVlZC5uYW1lfTwvaDY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtmZWVkLnBlbmRpbmdFdmVudC50ZXJtaW5hbE5hbWV9LCAke2ZlZWQucGVuZGluZ0V2ZW50LnBvaW50T2ZTYWxlTmFtZX0gYWZ2ZW50ZXIgaGrDpmxwPC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gZWxzZSBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcInJhaXNlKGZlZWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNj4ke2ZlZWQubmFtZX08L2g2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlNlbmQgYmVza2VkPC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxlbXB0eS1oaW50IGVsc2U+XFxyXFxuICAgICAgICBEZXIgZXIgaWtrZSBvcHNhdCBub2dlbiBhbGFybWVyXFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=