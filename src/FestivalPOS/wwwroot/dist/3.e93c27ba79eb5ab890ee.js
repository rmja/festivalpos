(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-header.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-header.js ***!
  \***************************************************************************************/
/*! exports provided: UxDialogHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDialogHeader", function() { return UxDialogHeader; });
/* harmony import */ var _dialog_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog-controller */ "./node_modules/aurelia-dialog/dist/native-modules/dialog-controller.js");

var UxDialogHeader = /** @class */ (function () {
    function UxDialogHeader(controller) {
        this.controller = controller;
    }
    UxDialogHeader.prototype.bind = function () {
        if (typeof this.showCloseButton !== 'boolean') {
            this.showCloseButton = !this.controller.settings.lock;
        }
    };
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    UxDialogHeader.inject = [_dialog_controller__WEBPACK_IMPORTED_MODULE_0__["DialogController"]];
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    UxDialogHeader.$view = "<template>\n    <button\n      type=\"button\"\n      class=\"dialog-close\"\n      aria-label=\"Close\"\n      if.bind=\"showCloseButton\"\n      click.trigger=\"controller.cancel()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n\n    <div class=\"dialog-header-content\">\n      <slot></slot>\n    </div>\n  </template>";
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    UxDialogHeader.$resource = {
        name: 'ux-dialog-header',
        bindables: ['showCloseButton']
    };
    return UxDialogHeader;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXVyZWxpYS1kaWFsb2cvZGlzdC9uYXRpdmUtbW9kdWxlcy9yZXNvdXJjZXMvdXgtZGlhbG9nLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1FQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtQQUErUDtBQUMvUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCIiwiZmlsZSI6IjMuZTkzYzI3YmE3OWViNWFiODkwZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFsb2dDb250cm9sbGVyIH0gZnJvbSAnLi4vZGlhbG9nLWNvbnRyb2xsZXInO1xudmFyIFV4RGlhbG9nSGVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFV4RGlhbG9nSGVhZGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gICAgVXhEaWFsb2dIZWFkZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zaG93Q2xvc2VCdXR0b24gIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q2xvc2VCdXR0b24gPSAhdGhpcy5jb250cm9sbGVyLnNldHRpbmdzLmxvY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcbiAgICBVeERpYWxvZ0hlYWRlci5pbmplY3QgPSBbRGlhbG9nQ29udHJvbGxlcl07XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xuICAgIFV4RGlhbG9nSGVhZGVyLiR2aWV3ID0gXCI8dGVtcGxhdGU+XFxuICAgIDxidXR0b25cXG4gICAgICB0eXBlPVxcXCJidXR0b25cXFwiXFxuICAgICAgY2xhc3M9XFxcImRpYWxvZy1jbG9zZVxcXCJcXG4gICAgICBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCJcXG4gICAgICBpZi5iaW5kPVxcXCJzaG93Q2xvc2VCdXR0b25cXFwiXFxuICAgICAgY2xpY2sudHJpZ2dlcj1cXFwiY29udHJvbGxlci5jYW5jZWwoKVxcXCI+XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaGVhZGVyLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlwiO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcbiAgICBVeERpYWxvZ0hlYWRlci4kcmVzb3VyY2UgPSB7XG4gICAgICAgIG5hbWU6ICd1eC1kaWFsb2ctaGVhZGVyJyxcbiAgICAgICAgYmluZGFibGVzOiBbJ3Nob3dDbG9zZUJ1dHRvbiddXG4gICAgfTtcbiAgICByZXR1cm4gVXhEaWFsb2dIZWFkZXI7XG59KCkpO1xuZXhwb3J0IHsgVXhEaWFsb2dIZWFkZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=