function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/mat-touch-select/fesm2015/mat-touch-select.js":
  /*!********************************************************************************************************************************!*\
    !*** /Users/devashishpuri/Documents/Projects/Angular/libs/mat-touch-select/dist/mat-touch-select/fesm2015/mat-touch-select.js ***!
    \********************************************************************************************************************************/

  /*! exports provided: MatTouchSelectComponent, MatTouchSelectModule, ɵa */

  /***/
  function distMatTouchSelectFesm2015MatTouchSelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTouchSelectComponent", function () {
      return MatTouchSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTouchSelectModule", function () {
      return MatTouchSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return MatTouchOptionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function TouchOptions() {}

    if (false) {}

    var MatTouchOptionsComponent = /*#__PURE__*/function () {
      /**
       * @param {?} dialogRef
       * @param {?} data
       */
      function MatTouchOptionsComponent(dialogRef, data) {
        _classCallCheck(this, MatTouchOptionsComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }
      /**
       * @param {?} change
       * @return {?}
       */


      _createClass(MatTouchOptionsComponent, [{
        key: "valSelect",
        value: function valSelect(change) {
          this.dialogRef.close(change.value);
        }
      }]);

      return MatTouchOptionsComponent;
    }();

    MatTouchOptionsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'lib-mat-touch-options',
        template: "<div class=\"mat-touch-options\">\n    <h4 class=\"label\">{{ data.label }}</h4>\n    <mat-radio-group [value]='data.selected' (change)='valSelect($event)'>\n        <mat-radio-button class=\"touch-option\" *ngFor='let option of data.options' [value]='option'>\n            {{ option }}\n        </mat-radio-button>\n    </mat-radio-group>\n</div>",
        styles: [".mat-touch-options{min-width:256px}.mat-touch-options .label{margin:0;text-align:center;opacity:.76;font-size:large;font-weight:500}.mat-touch-options .touch-option{display:block;margin:24px 0}.mat-touch-options .touch-option:last-of-type{margin-bottom:8px}"]
      }]
    }];
    /** @nocollapse */

    MatTouchOptionsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // export interface MatTouchOption {
    //   display: string;
    //   value: string;
    // }


    var MatTouchSelectComponent = /*#__PURE__*/function () {
      // ###############################################
      // ##########| COMPONENT IMPLEMENTATION |#########
      // ###############################################

      /**
       * @param {?} ngControl
       * @param {?} dialog
       * @param {?} overlayContainer
       */
      function MatTouchSelectComponent(ngControl, dialog, overlayContainer) {
        _classCallCheck(this, MatTouchSelectComponent);

        this.ngControl = ngControl;
        this.dialog = dialog;
        this.overlayContainer = overlayContainer;
        this.touchUi = false;
        this.isPanelOpen = false; // ###############################################
        // #########| NG FORM CONTROL INTERFACE |#########
        // ###############################################

        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.focused = false;
        this.controlType = 'mat-select';
        this.describedBy = '';

        this.registerOnChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.registerOnTouched =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        if (this.ngControl) {
          this.ngControl.valueAccessor = this;
        }
      }
      /**
       * @return {?}
       */


      _createClass(MatTouchSelectComponent, [{
        key: "setDescribedByIds",

        /**
         * @param {?} ids
         * @return {?}
         */
        value: function setDescribedByIds(ids) {
          this.describedBy = ids.join(' ');
        }
        /**
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(val) {
          this.value = val;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.ngControl) {
            this.select.ngControl = this.ngControl;
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick(event) {
          var _this = this;

          // If not toggled, toggle
          if (
          /** @type {?} */
          event.target.classList.contains('mat-form-field-infix') ||
          /** @type {?} */
          event.target.classList.contains('mat-form-field-flex')) {
            if (this.touchUi) {
              this.isPanelOpen = true;
              this.showTouchOptions();
            } else {
              this.select.open();
            }

            return;
          }

          if (this.touchUi) {
            this.overlayContainer.getContainerElement().style.display = 'none';
            this.select.close();

            if (!this.selectChangeSubscription) {
              this.selectChangeSubscription = this.select.openedChange.subscribe(
              /**
              * @param {?} isSelectOpened
              * @return {?}
              */
              function (isSelectOpened) {
                if (!_this.disabled && !isSelectOpened && !_this.isPanelOpen) {
                  _this.isPanelOpen = true;
                  _this.overlayContainer.getContainerElement().style.display = 'unset';

                  _this.showTouchOptions();
                }
              });
            }
          } else {
            if (this.selectChangeSubscription) {
              this.selectChangeSubscription.unsubscribe();
              this.selectChangeSubscription = null;
            }
          }
        }
        /**
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "setMatVal",
        value: function setMatVal(val) {
          this.value = val.value;

          if (this.ngControl) {
            this.ngControl.control.setValue(this.value);
            this.ngControl.control.markAsTouched();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "showTouchOptions",
        value: function showTouchOptions() {
          var _this2 = this;

          /** @type {?} */
          var dialogRef = this.dialog.open(MatTouchOptionsComponent, {
            autoFocus: false,
            data:
            /** @type {?} */
            {
              label: this.placeholder,
              options: this.options,
              selected: this.value
            }
          });
          dialogRef.afterClosed().subscribe(
          /**
          * @param {?} result
          * @return {?}
          */
          function (result) {
            _this2.isPanelOpen = false;
            _this2.select.disabled = false;
            _this2.value = result || _this2.value;

            if (_this2.ngControl) {
              _this2.ngControl.control.setValue(_this2.value);

              _this2.ngControl.control.markAsTouched();
            }
          });
        }
        /**
         * @param {?} opened
         * @return {?}
         */

      }, {
        key: "openChanged",
        value: function openChanged(opened) {
          if (!opened && !this.touchUi) {
            this.ngControl.control.markAsTouched();
          }
        }
      }, {
        key: "empty",
        get: function get() {
          return !this.value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return this.focused || !this.empty;
        }
        /**
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} req
         * @return {?}
         */
        ,
        set: function set(req) {
          this._required = !!req;
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "errorState",
        get: function get() {
          if (this.errorStateMatcher) {
            return this.errorStateMatcher.isErrorState(
            /** @type {?} */
            this.ngControl.control, null);
          } else {
            return this.ngControl && this.ngControl.errors !== null && this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._value = val;
          this.stateChanges.next();
        }
      }]);

      return MatTouchSelectComponent;
    }();

    MatTouchSelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-touch-select',
        template: "<mat-select #select [placeholder]='placeholder' (openedChange)='openChanged($event)' (selectionChange)='setMatVal($event)'\n    [value]='value' [errorStateMatcher]='errorStateMatcher' [disabled]='disabled'>\n    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{ option }}\n    </mat-option>\n</mat-select>",
        providers: [{
          provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldControl"],
          useExisting: MatTouchSelectComponent
        }]
      }]
    }];
    /** @nocollapse */

    MatTouchSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
      }];
    };

    MatTouchSelectComponent.propDecorators = {
      select: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['select', {
          "static": false
        }]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchUi: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shouldLabelFloat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.floating']
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      describedBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['attr.aria-describedby']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTouchSelectModule = function MatTouchSelectModule() {
      _classCallCheck(this, MatTouchSelectModule);
    };

    MatTouchSelectModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [MatTouchSelectComponent, MatTouchOptionsComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"]],
        entryComponents: [MatTouchOptionsComponent],
        exports: [MatTouchSelectComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=mat-touch-select.js.map

    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** /Users/devashishpuri/Documents/Projects/Angular/libs/mat-touch-select/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"demo\">\n  <h2>\n    Mat Touch Select Demo\n  </h2>\n  <div>\n\n    <div class=\"btn-control\">\n      <button mat-flat-button (click)='touchToggle = !touchToggle' color='primary'>\n        Toggle Touch: {{ touchToggle }}\n      </button>\n    </div>\n\n    <div class=\"btn-control\">\n      <button mat-flat-button (click)='control.reset()' color='primary'>\n        Reset Value\n      </button>\n    </div>\n    \n    <div class=\"btn-control\">\n      <button mat-flat-button (click)='toggleDisable()' color='primary'>\n        {{ disabled ? 'Enable' : 'Disable' }}\n      </button>\n    </div>\n\n  </div>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>App timer</mat-label>\n\n  <!-- Our Touch Optimised Form Control -->\n  <mat-touch-select [options]='options' [formControl]='control' [touchUi]='touchToggle'\n    [errorStateMatcher]=\"matcher\">\n  </mat-touch-select>\n  <mat-error>\n    App timer is <strong>required</strong>\n  </mat-error>\n  </mat-form-field>\n</div>";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!*************************************************************************************************************!*\
    !*** /Users/devashishpuri/Documents/Projects/Angular/libs/mat-touch-select/node_modules/tslib/tslib.es6.js ***!
    \*************************************************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".demo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-width: 420px;\n  margin: auto;\n  padding: 16px;\n}\n.demo > div {\n  padding: 16px 0;\n}\n.demo .btn-control {\n  display: inline-block;\n}\n.demo .btn-control:not(:last-of-type) {\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXZhc2hpc2hwdXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL2xpYnMvbWF0LXRvdWNoLXNlbGVjdC9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7QUNDUjtBREVJO0VBQ0kscUJBQUE7QUNBUjtBREVRO0VBQ0ksa0JBQUE7QUNBWiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB9XG5cbiAgICAuYnRuLWNvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmRlbW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmRlbW8gPiBkaXYge1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG4uZGVtbyAuYnRuLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGVtbyAuYnRuLWNvbnRyb2w6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: MyErrorStateMatcher, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /** Error when invalid control is dirty, touched, or submitted. */


    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.touchToggle = false;
        this.disabled = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.matcher = new MyErrorStateMatcher();
        this.options = ['No limit', '15 minutes', '30 minutes', '1 hour', 'Custom Limit', 'Pause App'];
        this.control.valueChanges.subscribe(function (val) {
          console.log(val);
        });
      }

      _createClass(AppComponent, [{
        key: "toggleDisable",
        value: function toggleDisable() {
          this.disabled = !this.disabled;
          this.disabled ? this.control.disable() : this.control.enable();
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var mat_touch_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! mat-touch-select */
    "../../dist/mat-touch-select/fesm2015/mat-touch-select.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], mat_touch_select__WEBPACK_IMPORTED_MODULE_5__["MatTouchSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "../../node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/devashishpuri/Documents/Projects/Angular/libs/mat-touch-select/projects/demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map