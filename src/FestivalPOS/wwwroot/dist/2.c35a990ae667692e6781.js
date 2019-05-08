(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-footer.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/resources/ux-dialog-footer.js ***!
  \***************************************************************************************/
/*! exports provided: UxDialogFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDialogFooter", function() { return UxDialogFooter; });
/* harmony import */ var _dialog_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog-controller */ "./node_modules/aurelia-dialog/dist/native-modules/dialog-controller.js");

/**
 * View-model for footer of Dialog.
 */
var UxDialogFooter = /** @class */ (function () {
    function UxDialogFooter(controller) {
        this.controller = controller;
        /**
         * @bindable
         */
        this.buttons = [];
        /**
         * @bindable
         */
        this.useDefaultButtons = false;
    }
    UxDialogFooter.isCancelButton = function (value) {
        return value === 'Cancel';
    };
    UxDialogFooter.prototype.close = function (buttonValue) {
        if (UxDialogFooter.isCancelButton(buttonValue)) {
            this.controller.cancel(buttonValue);
        }
        else {
            this.controller.ok(buttonValue);
        }
    };
    UxDialogFooter.prototype.useDefaultButtonsChanged = function (newValue) {
        if (newValue) {
            this.buttons = ['Cancel', 'Ok'];
        }
    };
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    UxDialogFooter.inject = [_dialog_controller__WEBPACK_IMPORTED_MODULE_0__["DialogController"]];
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    UxDialogFooter.$view = "<template>\n    <slot></slot>\n    <template if.bind=\"buttons.length > 0\">\n      <button type=\"button\"\n        class=\"btn btn-default\"\n        repeat.for=\"button of buttons\"\n        click.trigger=\"close(button)\">\n        ${button}\n      </button>\n    </template>\n  </template>";
    /**
     * @internal
     */
    // tslint:disable-next-line:member-ordering
    UxDialogFooter.$resource = {
        name: 'ux-dialog-footer',
        bindables: ['buttons', 'useDefaultButtons']
    };
    return UxDialogFooter;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXVyZWxpYS1kaWFsb2cvZGlzdC9uYXRpdmUtbW9kdWxlcy9yZXNvdXJjZXMvdXgtZGlhbG9nLWZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMFFBQTBRLE9BQU87QUFDalI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN5QiIsImZpbGUiOiIyLmMzNWE5OTBhZTY2NzY5MmU2NzgxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nQ29udHJvbGxlciB9IGZyb20gJy4uL2RpYWxvZy1jb250cm9sbGVyJztcbi8qKlxuICogVmlldy1tb2RlbCBmb3IgZm9vdGVyIG9mIERpYWxvZy5cbiAqL1xudmFyIFV4RGlhbG9nRm9vdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFV4RGlhbG9nRm9vdGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBiaW5kYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYmluZGFibGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXNlRGVmYXVsdEJ1dHRvbnMgPSBmYWxzZTtcbiAgICB9XG4gICAgVXhEaWFsb2dGb290ZXIuaXNDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnQ2FuY2VsJztcbiAgICB9O1xuICAgIFV4RGlhbG9nRm9vdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChidXR0b25WYWx1ZSkge1xuICAgICAgICBpZiAoVXhEaWFsb2dGb290ZXIuaXNDYW5jZWxCdXR0b24oYnV0dG9uVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2FuY2VsKGJ1dHRvblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5vayhidXR0b25WYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFV4RGlhbG9nRm9vdGVyLnByb3RvdHlwZS51c2VEZWZhdWx0QnV0dG9uc0NoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbJ0NhbmNlbCcsICdPayddO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG4gICAgVXhEaWFsb2dGb290ZXIuaW5qZWN0ID0gW0RpYWxvZ0NvbnRyb2xsZXJdO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcbiAgICBVeERpYWxvZ0Zvb3Rlci4kdmlldyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuICAgIDx0ZW1wbGF0ZSBpZi5iaW5kPVxcXCJidXR0b25zLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCJcXG4gICAgICAgIHJlcGVhdC5mb3I9XFxcImJ1dHRvbiBvZiBidXR0b25zXFxcIlxcbiAgICAgICAgY2xpY2sudHJpZ2dlcj1cXFwiY2xvc2UoYnV0dG9uKVxcXCI+XFxuICAgICAgICAke2J1dHRvbn1cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC90ZW1wbGF0ZT5cXG4gIDwvdGVtcGxhdGU+XCI7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xuICAgIFV4RGlhbG9nRm9vdGVyLiRyZXNvdXJjZSA9IHtcbiAgICAgICAgbmFtZTogJ3V4LWRpYWxvZy1mb290ZXInLFxuICAgICAgICBiaW5kYWJsZXM6IFsnYnV0dG9ucycsICd1c2VEZWZhdWx0QnV0dG9ucyddXG4gICAgfTtcbiAgICByZXR1cm4gVXhEaWFsb2dGb290ZXI7XG59KCkpO1xuZXhwb3J0IHsgVXhEaWFsb2dGb290ZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=