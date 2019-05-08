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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FsYXJtcy1odWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYXJtcy9wZW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGFybXMvcGVuZGluZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBGO0FBQ3BEO0FBQ3FCO0FBQ3ZCO0FBQ1c7QUFHL0M7SUFLSSxtQkFBWSxlQUFnQztRQUZwQyxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUd2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0VBQW9CLEVBQUU7YUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNsQixLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQVU7WUFDM0MsS0FBSyxHQUFHLHlEQUFTLENBQUMsa0RBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssMkJBQU8sR0FBYjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDakQ7d0JBRUQscUJBQU0sSUFBSSxDQUFDLGNBQWM7O3dCQUF6QixTQUF5QixDQUFDO3dCQUUxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7O0tBQ3pCO0lBRUssOEJBQVUsR0FBaEI7Ozs7OzZCQUNRLEdBQUUsSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFDLEdBQTNCLHdCQUEyQjt3QkFDM0IscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7O3dCQUE1QixTQUE0QixDQUFDOzs7Ozs7S0FFcEM7SUE5QlEsU0FBUztRQURyQixvRUFBVSxFQUFFO3lDQU1vQix3RUFBZTtPQUxuQyxTQUFTLENBK0JyQjtJQUFELGdCQUFDO0NBQUE7QUEvQnFCO0FBaUN0QjtJQUNJLHNCQUFtQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQ3BDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0MwRDtBQUM5QjtBQUU4QjtBQUNDO0FBQ0Q7QUFHM0Q7SUFLSSx1QkFBb0IsR0FBUSxFQUFVLFNBQW9CLEVBQVUsZUFBZ0M7UUFBaEYsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIcEcsV0FBTSxHQUFHLHdFQUFNLENBQUM7SUFJaEIsQ0FBQztJQUVLLGdDQUFRLEdBQWQ7Ozs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFFL0IsU0FBSTt3QkFBaUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRTs7d0JBQXZGLEdBQUssYUFBYSxHQUFHLFNBQWtFLENBQUM7d0JBRXhGLElBQUksQ0FBQyxXQUFXLEdBQUc7NEJBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsNERBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDN0UsQ0FBQzs7Ozs7S0FDTDtJQUVLLGtDQUFVLEdBQWhCOzs7Ozs7d0JBQ0ksV0FBeUMsRUFBaEIsU0FBSSxDQUFDLFdBQVcsRUFBaEIsY0FBZ0IsRUFBaEIsSUFBZ0IsRUFBRTs0QkFBaEMsVUFBVTs0QkFDakIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUN4Qjt3QkFFRCxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTs7d0JBQWpDLFNBQWlDLENBQUM7Ozs7O0tBQ3JDO0lBRU8sb0NBQVksR0FBcEIsVUFBcUIsS0FBbUI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFSyw4QkFBTSxHQUFaLFVBQWEsS0FBMEIsRUFBRSxLQUFhOzs7OzRCQUMxQyxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUE1RCxLQUFLLEdBQUcsU0FBb0QsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7S0FDOUM7SUFqQ1EsYUFBYTtRQUR6QixvRUFBVSxFQUFFO3lDQU1nQix3Q0FBRyxFQUFxQix5REFBUyxFQUEyQix3RUFBZTtPQUwzRixhQUFhLENBa0N6QjtJQUFELG9CQUFDO0NBQUE7QUFsQ3lCOzs7Ozs7Ozs7Ozs7QUNSMUIsZ05BQWdOLG9CQUFvQix3TUFBd00sc0JBQXNCLHdMQUF3TCxtQkFBbUIsb1BBQW9QLDJCQUEyQiwrZiIsImZpbGUiOiJhbGFybXMuMWQ2OTMxY2FjMmYzMDhjOTViMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdWJDb25uZWN0aW9uLCBIdWJDb25uZWN0aW9uQnVpbGRlciwgSHViQ29ubmVjdGlvblN0YXRlIH0gZnJvbSBcIkBhc3BuZXQvc2lnbmFsclwiO1xyXG5pbXBvcnQgeyBBbGFybUV2ZW50IH0gZnJvbSBcIi4vYWxhcm1zXCI7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcclxuaW1wb3J0IHsgbW9kZWxCaW5kIH0gZnJvbSBcInVyLWpzb25cIjtcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWxhcm1zSHViIHtcclxuICAgIHByaXZhdGUgY29ubmVjdGlvbjogSHViQ29ubmVjdGlvbjtcclxuICAgIHByaXZhdGUgY29ubmVjdFByb21pc2U/OiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBjb25uZWN0ZWRVc2VycyA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IEh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgICAgICAgICAgLndpdGhVcmwoXCIvYWxhcm1zXCIpXHJcbiAgICAgICAgICAgIC5idWlsZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub24oXCJldmVudC1jcmVhdGVkXCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gbW9kZWxCaW5kKEFsYXJtRXZlbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IEV2ZW50Q3JlYXRlZChldmVudCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFByb21pc2UgPSB0aGlzLmNvbm5lY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdFByb21pc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkVXNlcnMrKztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICgtLXRoaXMuY29ubmVjdGVkVXNlcnMgPT09IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudENyZWF0ZWQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGV2ZW50OiBBbGFybUV2ZW50KSB7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBhdXRvaW5qZWN0LCBEaXNwb3NhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xyXG5pbXBvcnQgeyBFdmVudENyZWF0ZWQsIEFsYXJtc0h1YiB9IGZyb20gXCIuLi9hcGkvYWxhcm1zLWh1YlwiO1xyXG5pbXBvcnQgeyBmYUJlbGwgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBQZW5kaW5nQWxhcm1zIHtcclxuICAgIHBlbmRpbmdFdmVudHMhOiBBbGFybUV2ZW50Vmlld01vZGVsW107XHJcbiAgICBmYUJlbGwgPSBmYUJlbGw7XHJcbiAgICBwcml2YXRlIGRpc3Bvc2FibGVzITogRGlzcG9zYWJsZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgYWxhcm1zSHViOiBBbGFybXNIdWIsIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFsYXJtc0h1Yi5jb25uZWN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucGVuZGluZ0V2ZW50cyA9IGF3YWl0IHRoaXMuYXBpLmdldEFsbFBlbmRpbmdBbGFybUV2ZW50cygpLmJ5cGFzc0NhY2hlKCkudHJhbnNmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwb3NhYmxlcyA9IFtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEV2ZW50Q3JlYXRlZCwgdGhpcy5ldmVudENyZWF0ZWQuYmluZCh0aGlzKSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBkaXNwb3NhYmxlIG9mIHRoaXMuZGlzcG9zYWJsZXMpIHtcclxuICAgICAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmFsYXJtc0h1Yi5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBldmVudENyZWF0ZWQoZXZlbnQ6IEV2ZW50Q3JlYXRlZCkge1xyXG4gICAgICAgIHRoaXMucGVuZGluZ0V2ZW50cy5wdXNoKGV2ZW50LmV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjYW5jZWwoZXZlbnQ6IEFsYXJtRXZlbnRWaWV3TW9kZWwsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBldmVudCA9IGF3YWl0IHRoaXMuYXBpLmNhbmNlbEFsYXJtRXZlbnQoZXZlbnQuaWQpLnRyYW5zZmVyKCk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nRXZlbnRzLnNwbGljZShpbmRleCwgMSwgZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQWxhcm1FdmVudFZpZXdNb2RlbCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgYWxhcm1GZWVkTmFtZTogc3RyaW5nO1xyXG4gICAgdGVybWluYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBwb2ludE9mU2FsZU5hbWU6IHN0cmluZztcclxuICAgIGNyZWF0ZWQ6IERhdGVUaW1lO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIiBpZi5iaW5kPVxcXCJwZW5kaW5nRXZlbnRzLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiByZXBlYXQuZm9yPVxcXCJldmVudCBvZiBwZW5kaW5nRXZlbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj4ke2V2ZW50LmFsYXJtRmVlZE5hbWV9PC9oND5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wtNiB0ZXh0LW11dGVkXFxcIj5TYWxnc3N0ZWQ8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wtNlxcXCI+JHtldmVudC5wb2ludE9mU2FsZU5hbWV9PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNvbC02IHRleHQtbXV0ZWRcXFwiPlRlcm1pbmFsPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY29sLTZcXFwiPiR7ZXZlbnQudGVybWluYWxOYW1lfTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjb2wtNiB0ZXh0LW11dGVkXFxcIj5BZm1lbGR0PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgaWYuYmluZD1cXFwiZXZlbnQuY2FuY2VsbGVkXFxcIj4ke2V2ZW50LmNhbmNlbGxlZCB8IGRhdGVUaW1lfTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBlbHNlIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tc21cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjYW5jZWwoZXZlbnQsICRpbmRleClcXFwiPjxyZXF1aXJlIGZyb209XFxcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzXFxcIj48L3JlcXVpcmU+PGZvbnQtYXdlc29tZS1pY29uIGljb24uYmluZD1cXFwiJ3RpbWVzJyAmIGZvbnRhd2Vzb21lXFxcIj48L2ZvbnQtYXdlc29tZS1pY29uPiBBZm1lbGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGVtcHR5LWhpbnQgZWxzZT5cXHJcXG4gICAgICAgIERlciBlciBpbmdlbiBha3R1ZWxsZSBhbGFybWVyXFxyXFxuICAgIDwvZW1wdHktaGludD5cXHJcXG48L3RlbXBsYXRlPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=