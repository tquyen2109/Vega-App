(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-toasty [position]=\"'top=right'\"></ng2-toasty>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navmenu></app-navmenu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navmenu/navmenu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navmenu/navmenu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['']\" >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/vehicles']\" >Vehicles </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/vehicles/new']\" >New Vehicle</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-form/vehicle-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-form/vehicle-form.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navmenu></app-navmenu>\n<div style=\"margin:60px;\">\n<h1>New Vehicle</h1>\n<p>\n    {{vehicle | json}}\n</p>\n<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"make\">Make</label>\n        <select id=\"make\" class=\"form-control\" (change)=\"onMakeChange()\" [(ngModel)]=\"vehicle.makeId\" name=\"makeId\" required #make=\"ngModel\">\n            <option value=\"\"></option>\n        <option *ngFor=\"let m of makes\" value=\"{{m.id}}\"> {{m.name}}</option>\n        </select>\n        <div class=\"alert alert-danger\" *ngIf=\"make.touched && !make.valid\">Please specify the make</div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"model\">Model</label>\n        <select  id=\"model\" class=\"form-control\" [(ngModel)]=\"vehicle.modelId\" name=\"modelId\" required #model=\"ngModel\">\n            <option value=\"\"></option>\n        <option *ngFor=\"let m of models\" value=\"{{m.id}}\">{{m.name}} </option>\n\n        </select>\n        <div class=\"alert alert-danger\" *ngIf=\"model.touched && !model.valid\">Please specify the model</div>\n    </div>\n    <p>Is this vehicle registered</p>\n    <label for=\"registered\" class=\"radio-inline\">\n        <input type=\"radio\" name=\"isRegistered\" id=\"registered\" [value]=\"true\" [(ngModel)]=\"vehicle.isRegistered\">Yes\n    </label>\n    <label for=\"notRegistered\" class=\"radio-inline\">\n        <input type=\"radio\" name=\"isRegistered\" id=\"notRegistered\" [value]=\"false\" [(ngModel)]=\"vehicle.isRegistered\">No\n    </label>\n    <h2>Features</h2>\n    <div *ngFor=\"let f of features\" class=\"checkbox\">\n        <label for=\"feature{{f.id}}\" (change)=\"onFeatureToggle(f.id, $event)\" >\n        <input type=\"checkbox\" id=\"features{{f.id}}\" [checked]=\"vehicle.features.includes(f.id)\">\n        {{f.name}}\n        </label>\n    </div>\n    <h2>Contact</h2>\n    <div class=\"form-group\">\n        <label for=\"contactName\">Name</label>\n        <input id=\"contactName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"vehicle.contact.name\" name=\"contactName\" required #name=\"ngModel\">\n        <div class=\"alert alert-danger\" *ngIf=\"name.touched && !name.valid\">Please specify name</div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"contactPhone\">Phone</label>\n        <input id=\"contactPhone\"type=\"text\" class=\"form-control\" [(ngModel)]=\"vehicle.contact.phone\"  name=\"contactPhone\" required #phone=\"ngModel\">\n        <div class=\"alert alert-danger\" *ngIf=\"phone.touched && !phone.valid\">Please specify phone</div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"contactEmail\">Email</label>\n        <input id=\"contactEmail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"vehicle.contact.email\"  name=\"contactEmail\">\n    </div>\n    <button class=\"btn btn-primary\" >Save</button>\n\n</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navmenu></app-navmenu>\n <div style=\"margin:60px;\">    \n<h2>Vehicles</h2>\n<p>\n  <a [routerLink]=\"['/vehicles/new']\" class=\"btn btn-primary\">New Vehicle</a>\n</p>\n<div class=\"card card-body bg-light\">\n    <div class=\"form-group\">\n        <label for=\"make\">Make</label>\n        <select name=\"\" id=\"make\" class=\"form-control\" [(ngModel)]=\"query.makeId\" (change)=\"onFilterChange()\">\n            <option value=\"\"></option>\n        <option *ngFor=\"let m of makes\" value=\"{{m.id}}\">{{m.name}}</option>\n        </select>\n    </div>\n    <button class=\"btn btn-dark\" (click)=\"resetFilter()\">Reset</button>\n</div>\n\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let c of columns\" >\n        <div *ngIf=\"c.isSortable\" (click)=\"sortBy(c.key)\">\n        {{c.title}}\n        <i *ngIf=\"query.sortBy === c.key\" class=\"fa\"\n           [class.fa-sort-asc]=\"query.isSortAscending\"\n           [class.fa-sort-desc]=\"!query.isSortAscending\"           \n           ></i>\n        </div>\n        <div *ngIf=\"!c.isSortable\">\n          {{c.title}}\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let v of queryResult.items\">\n      <td>{{ v.id }}</td>\n      <td>{{ v.make.name }}</td>\n      <td>{{ v.model.name }}</td>\n      <td>{{ v.contact.name }}</td>\n      <td>\n        <a [routerLink]=\"['/vehicles/', v.id]\">View</a>\n      </td>\n    </tr>\n  </tbody>\n</table> \n<pagination [total-items]=\"queryResult.totalItems\" [page-size]=\"query.pageSize\" (page-changed)=\"onPageChange($event)\"></pagination>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-vehicle/view-vehicle.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-vehicle/view-vehicle.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Vehicle</h1>\n<div>\n\n  <!-- Nav tabs -->\n  <nav>\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li  class=\"nav-item\"><a class=\"nav-link active\" href=\"#basic\" aria-controls=\"basic\" role=\"tab\" data-toggle=\"tab\">Vehicle</a></li>\n    <li  class=\"nav-item\"><a class=\"nav-link\" href=\"#photos\" aria-controls=\"photos\" role=\"tab\" data-toggle=\"tab\">Photos</a></li>\n  </ul>\n</nav>\n  <!-- Tab panes -->\n  <div class=\"tab-content\" *ngIf=\"vehicle\">\n    <!-- Vehicle tab -->\n    <div role=\"tabpanel\" class=\"tab-pane fade show active\" id=\"basic\" role=\"tabpanel\">\n      <h2>Basics</h2>\n      <ul>\n        <li>Make: {{ vehicle.make.name }}</li>\n        <li>Model: {{ vehicle.model.name }}</li>\n        <li>Registered: {{ vehicle.isRegistered ? 'Yes' : 'No' }}\n      </ul>\n      <h2>Features</h2>\n      <ul>\n        <li *ngFor=\"let f of vehicle.features\">{{ f.name }}</li>\n      </ul>\n      <h2>Contact</h2>\n      <ul>\n        <li>Contact Name: {{ vehicle.contact.name }}</li>\n        <li>Contact Phone: {{ vehicle.contact.phone }}</li>\n        <li>Contact Email: {{ vehicle.contact.email }}</li>\n      </ul>\n      <br/>\n      <p>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/vehicles/edit/', vehicle.id]\">Edit</a>\n        <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n        <a class=\"btn btn-default\" [routerLink]=\"['/vehicles']\">View All Vehicles</a>\n      </p>\n    </div>\n    <!-- Photos tab -->\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"photos\" role=\"tabpanel\">\n      <h2>Photos</h2>\n      <input type=\"file\" (change)=\"uploadPhoto()\" #fileInput>\n    <img *ngFor=\"let photo of photos\"  src=\"{{photo.fileName}}\" alt=\"img-thumbnail\">\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-error-handler.ts":
/*!**************************************!*\
  !*** ./src/app/app-error-handler.ts ***!
  \**************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppErrorHandler = class AppErrorHandler {
    constructor(ngZone, toastyService) {
        this.ngZone = ngZone;
        this.toastyService = toastyService;
    }
    handleError(_error) {
        this.ngZone.run(() => {
            this.toastyService.error({
                title: 'Error',
                msg: 'An unexpected error happened.',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
        });
    }
};
AppErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyService"]))
], AppErrorHandler);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Vega-SPA';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error-handler */ "./src/app/app-error-handler.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navmenu/navmenu.component */ "./src/app/navmenu/navmenu.component.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicle-form/vehicle-form.component */ "./src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _shared_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pagination.component */ "./src/app/shared/pagination.component.ts");
/* harmony import */ var _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-vehicle/view-vehicle.component */ "./src/app/view-vehicle/view-vehicle.component.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/photo.service */ "./src/app/services/photo.service.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_13__["VehicleFormComponent"],
            _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_11__["NavmenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_14__["VehicleListComponent"],
            _shared_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"],
            _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_16__["ViewVehicleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_7__["ToastyModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                { path: 'vehicles/new', component: _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_13__["VehicleFormComponent"] },
                { path: 'vehicles/:id', component: _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_16__["ViewVehicleComponent"] },
                { path: 'vehicles/edit/:id', component: _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_13__["VehicleFormComponent"] },
                { path: 'vehicles', component: _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_14__["VehicleListComponent"] },
                { path: '**', redirectTo: 'home' }
            ])
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"], useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_1__["AppErrorHandler"] },
            _services_vehicle_service__WEBPACK_IMPORTED_MODULE_12__["VehicleService"],
            _services_photo_service__WEBPACK_IMPORTED_MODULE_17__["PhotoService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/*!***********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/*! exports provided: NavmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavmenuComponent", function() { return NavmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavmenuComponent = class NavmenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navmenu/navmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navmenu.component.css */ "./src/app/navmenu/navmenu.component.css")).default]
    })
], NavmenuComponent);



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PhotoService = class PhotoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000';
    }
    upload(vehicleId, file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.baseUrl + '/api/vehicles/' + vehicleId + '/photos', formData);
    }
    getPhotos(vehicleId) {
        return this.http.get(this.baseUrl + '/api/vehicles/' + vehicleId + '/photos');
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], PhotoService);



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VehicleService = class VehicleService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000';
    }
    getMakes() {
        return this.http.get(this.baseUrl + '/api/makes');
    }
    getFeatures() {
        return this.http.get(this.baseUrl + '/api/features');
    }
    create(vehicle) {
        return this.http.post(this.baseUrl + '/api/vehicles', vehicle);
    }
    getVehicle(id) {
        return this.http.get(this.baseUrl + '/api/vehicles/' + id);
    }
    update(vehicle) {
        return this.http.put(this.baseUrl + '/api/vehicles/' + vehicle.id, vehicle);
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/api/vehicles/' + id);
    }
    getVehicles(filter) {
        return this.http.get(this.baseUrl + '/api/vehicles/' + '?' + this.toQueryString(filter));
    }
    toQueryString(obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleService);



/***/ }),

/***/ "./src/app/shared/pagination.component.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pagination.component.ts ***!
  \************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pageSize = 10;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 1;
    }
    ngOnChanges() {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.totalItems / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++)
            this.pages.push(i);
    }
    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    }
    previous() {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }
    next() {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('total-items')
], PaginationComponent.prototype, "totalItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('page-size')
], PaginationComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('page-changed')
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pagination',
        template: `
    <nav *ngIf="totalItems > pageSize">
        <ul class="pagination">
            <li class="page-item" [class.disabled]="currentPage == 1">
                <a class="page-link" (click)="previous()" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
                <a class="page-link">{{ page }}</a>
            </li>
            <li [class.disabled]="currentPage == pages.length">
                <a class="page-item" class="page-link" (click)="next()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>  
`
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-form/vehicle-form.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtZm9ybS92ZWhpY2xlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-form/vehicle-form.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleFormComponent", function() { return VehicleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_Observable_forkJoin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/Observable/forkJoin */ "./node_modules/rxjs/add/Observable/forkJoin.js");
/* harmony import */ var rxjs_add_Observable_forkJoin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_Observable_forkJoin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








let VehicleFormComponent = class VehicleFormComponent {
    constructor(route, //to read route parameter
    router, //navigate uset to different page
    vehicleService, toastyService) {
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.toastyService = toastyService;
        this.vehicle = {
            id: 0,
            makeId: 0,
            modelId: 0,
            isRegistered: false,
            features: [],
            contact: {
                name: '',
                phone: '',
                email: ''
            }
        };
        route.params.subscribe(p => {
            this.vehicle.id = +p['id'] || 0; // + is for converting to number
        });
    }
    ngOnInit() {
        var sources = [
            this.vehicleService.getMakes(),
            this.vehicleService.getFeatures(),
        ];
        if (this.vehicle.id) {
            sources.push(this.vehicleService.getVehicle(this.vehicle.id));
        }
        //forJoin to work with different Observable parallel
        rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].forkJoin(sources).subscribe((data) => {
            this.makes = data[0];
            this.features = data[1];
            if (this.vehicle.id) {
                this.setVehiclle(data[2]);
                this.populateModels();
            }
        }, err => {
            if (err.status === 404) {
                this.router.navigate(['/home']);
            }
        });
    }
    setVehiclle(v) {
        this.vehicle.id = v.id;
        this.vehicle.makeId = v.make.id;
        this.vehicle.modelId = v.model.id;
        this.vehicle.isRegistered = v.isRegistered;
        this.vehicle.contact = v.contact;
        this.vehicle.features = underscore__WEBPACK_IMPORTED_MODULE_7__["pluck"](v.features, 'id');
    }
    onMakeChange() {
        this.populateModels();
        delete this.vehicle.modelId;
    }
    populateModels() {
        var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
        this.models = selectedMake ? selectedMake.models : [];
    }
    onFeatureToggle(featureId, $event) {
        if ($event.target.checked)
            this.vehicle.features.push(featureId);
        else {
            var index = this.vehicle.features.indexOf(featureId);
            this.vehicle.features.splice(index, 1);
        }
    }
    submit() {
        var result$ = (this.vehicle.id) ? this.vehicleService.update(this.vehicle) : this.vehicleService.create(this.vehicle);
        result$.subscribe((vehicle) => {
            this.toastyService.success({
                title: 'Success',
                msg: 'The vehicle was successfully updated.',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
            this.router.navigate(['/vehicles/', vehicle.id]);
        });
    }
};
VehicleFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyService"] }
];
VehicleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vehicle-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-form/vehicle-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-form.component.css */ "./src/app/vehicle-form/vehicle-form.component.css")).default]
    })
], VehicleFormComponent);



/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtbGlzdC92ZWhpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let VehicleListComponent = class VehicleListComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.PAGE_SIZE = 3;
        this.queryResult = {};
        this.query = {
            pageSize: this.PAGE_SIZE
        };
        this.columns = [
            { title: 'Id', key: 'id' },
            { title: 'Make', key: 'make', isSortable: true },
            { title: 'Model', key: 'model', isSortable: true },
            { title: 'Contact Name', key: 'contactName', isSortable: true },
            {}
        ];
    }
    ngOnInit() {
        this.populateVehicles();
        this.vehicleService.getMakes()
            .subscribe((makes) => this.makes = makes);
    }
    //Small dataset use client side query
    // onFilterChange(){
    //   var vehicles = this.allVehicles;
    //   if(this.query.makeId)
    //     vehicles = vehicles.query(v => v.make.id == this.query.makeId);
    //   if(this.query.modelId)
    //     vehicles = vehicles.query(v => v.model.id == this.query.modelId);
    //   this.vehicles = vehicles;
    // }
    //Serverside query
    populateVehicles() {
        this.vehicleService.getVehicles(this.query)
            .subscribe((result) => this.queryResult = result);
    }
    onFilterChange() {
        //this.query.modelId = 2;
        this.query.page = 1;
        this.populateVehicles();
    }
    resetFilter() {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateVehicles();
    }
    sortBy(columnName) {
        if (this.query.sortBy == columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateVehicles();
    }
    onPageChange(page) {
        this.query.page = page;
        this.populateVehicles();
    }
};
VehicleListComponent.ctorParameters = () => [
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__["VehicleService"] }
];
VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vehicle-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-list/vehicle-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-list.component.css */ "./src/app/vehicle-list/vehicle-list.component.css")).default]
    })
], VehicleListComponent);



/***/ }),

/***/ "./src/app/view-vehicle/view-vehicle.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-vehicle/view-vehicle.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdmVoaWNsZS92aWV3LXZlaGljbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/view-vehicle/view-vehicle.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-vehicle/view-vehicle.component.ts ***!
  \********************************************************/
/*! exports provided: ViewVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVehicleComponent", function() { return ViewVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/photo.service */ "./src/app/services/photo.service.ts");






let ViewVehicleComponent = class ViewVehicleComponent {
    constructor(route, router, toasty, vehicleService, photoService) {
        this.route = route;
        this.router = router;
        this.toasty = toasty;
        this.vehicleService = vehicleService;
        this.photoService = photoService;
        route.params.subscribe(p => {
            this.vehicleId = +p['id'];
            if (isNaN(this.vehicleId) || this.vehicleId <= 0) {
                router.navigate(['/vehicles']);
                return;
            }
        });
    }
    ngOnInit() {
        this.photoService.getPhotos(this.vehicleId)
            .subscribe((photos) => this.photos = photos);
        this.vehicleService.getVehicle(this.vehicleId)
            .subscribe(v => this.vehicle = v, err => {
            if (err.status === 404) {
                this.router.navigate(['/vehicles']);
                return;
            }
        });
    }
    delete() {
        if (confirm("Are you sure ?")) {
            this.vehicleService.delete(this.vehicle.id)
                .subscribe(x => {
                this.router.navigate(['/vehicles']);
            });
        }
    }
    uploadPhoto() {
        var nativeElement = this.fileInput.nativeElement;
        this.photoService.upload(this.vehicleId, nativeElement.files[0])
            .subscribe(x => console.log(x));
    }
};
ViewVehicleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__["VehicleService"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('fileInput', { static: false })
], ViewVehicleComponent.prototype, "fileInput", void 0);
ViewVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-view-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-vehicle/view-vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-vehicle.component.css */ "./src/app/view-vehicle/view-vehicle.component.css")).default]
    })
], ViewVehicleComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Quyen Tran\Vega\Vega-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);