(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics"],{

/***/ "async!statistics/dashboard":
/*!*************************************************************************************!*\
  !*** ./node_modules/bundle-loader?lazy&name=settings!./src/statistics/dashboard.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	Promise.all(/*! require.ensure | settings */[__webpack_require__.e("vendors~alarms~sale~settings"), __webpack_require__.e("vendors~settings"), __webpack_require__.e("accounts~alarms~checkout~sale~settings~setup"), __webpack_require__.e("settings")]).then((function(require) {
		cb(__webpack_require__(/*! !../../node_modules/ts-loader??ref--4!./dashboard.ts */ "statistics/dashboard"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGlzdGljcy9kYXNoYm9hcmQudHM/YTEyYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGlzdGljcy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpc3RpY3Mvcm91dGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxDQUFDLGdRQUFtQjtBQUNwQixLQUFLLG1CQUFPLENBQUMsa0ZBQWdFO0FBQzdFLEVBQUUsZ0VBQWE7QUFDZixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBdUM7QUFFdkMsSUFBTSxNQUFNLEdBQWtCO0lBQzFCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxhQUE4QyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtDQUM1SDtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBSEcsMENBQWUsR0FBZixVQUFnQixNQUEyQjtRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRCw0SiIsImZpbGUiOiJzdGF0aXN0aWNzLjgyNWViODc1OTU1MmJjZmJiYjY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNCEuL2Rhc2hib2FyZC50c1wiKSk7XG5cdH0sIFwic2V0dGluZ3NcIik7XG59IiwiaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtcclxuICAgIHsgcm91dGU6IFwiXCIsIG5hbWU6IFwiZGFzaGJvYXJkXCIsIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9kYXNoYm9hcmRcIiwgXCJzZXR0aW5nc1wiKSwgbmF2OiB0cnVlLCB0aXRsZTogXCJEYXNoYm9hcmRcIiB9XHJcbl1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzUm91dGVyIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcubWFwKHJvdXRlcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8dG9wLW5hdmJhcj48L3RvcC1uYXZiYXI+XFxyXFxuICAgIDxwYWdlLWJvZHk+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgPC9wYWdlLWJvZHk+XFxyXFxuPC90ZW1wbGF0ZT5cIjsiXSwic291cmNlUm9vdCI6IiJ9