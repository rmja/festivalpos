(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/aurelia-dialog/dist/native-modules/resources/attach-focus.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/resources/attach-focus.js ***!
  \***********************************************************************************/
/*! exports provided: AttachFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachFocus", function() { return AttachFocus; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js");

var AttachFocus = /** @class */ (function () {
    function AttachFocus(element) {
        this.element = element;
        this.value = true;
    }
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    AttachFocus.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["DOM"].Element];
    };
    AttachFocus.prototype.attached = function () {
        if (this.value === '' || (this.value && this.value !== 'false')) {
            this.element.focus();
        }
    };
    /**
     * @internal
     */
    AttachFocus.$resource = {
        type: 'attribute',
        name: 'attach-focus'
    };
    return AttachFocus;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXVyZWxpYS1kaWFsb2cvZGlzdC9uYXRpdmUtbW9kdWxlcy9yZXNvdXJjZXMvYXR0YWNoLWZvY3VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJmaWxlIjoiMC5iMzNkNjRhMzdhODNiMDYwMjc1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcbnZhciBBdHRhY2hGb2N1cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBdHRhY2hGb2N1cyhlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG4gICAgQXR0YWNoRm9jdXMuaW5qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW0RPTS5FbGVtZW50XTtcbiAgICB9O1xuICAgIEF0dGFjaEZvY3VzLnByb3RvdHlwZS5hdHRhY2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICcnIHx8ICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT09ICdmYWxzZScpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQXR0YWNoRm9jdXMuJHJlc291cmNlID0ge1xuICAgICAgICB0eXBlOiAnYXR0cmlidXRlJyxcbiAgICAgICAgbmFtZTogJ2F0dGFjaC1mb2N1cydcbiAgICB9O1xuICAgIHJldHVybiBBdHRhY2hGb2N1cztcbn0oKSk7XG5leHBvcnQgeyBBdHRhY2hGb2N1cyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==