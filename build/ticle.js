(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ticle"] = factory();
	else
		root["Ticle"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["a"] = createRequest;
/* unused harmony export createResponse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);

function isObject(value) {
  return typeof value === 'object' && value !== null;
}
function createRequest(action, id, args) {
  return {
    action: action,
    data: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, args, {
      id: id
    })
  };
}
function createResponse(action, id, args) {
  return {
    action: action,
    data: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, args, {
      id: id
    })
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(7);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTimer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Proxy__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


var SimpleTimer =
/*#__PURE__*/
function () {
  function SimpleTimer(options) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isObject */])(options)) {
      options = {};
    }

    this.Proxy = new __WEBPACK_IMPORTED_MODULE_0__Proxy__["a" /* Proxy */]({
      recordDiff: options.diff
    });
  }

  var _proto = SimpleTimer.prototype;

  _proto.setTimeout = function (_setTimeout) {
    function setTimeout(_x, _x2) {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function (callback, delay) {
    var _Proxy;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return (_Proxy = this.Proxy).proxyTimer.apply(_Proxy, [setTimeout, callback, delay].concat(args));
  });

  _proto.setInterval = function (_setInterval) {
    function setInterval(_x3, _x4) {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (callback, delay) {
    var _Proxy2;

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return (_Proxy2 = this.Proxy).proxyTimer.apply(_Proxy2, [setInterval, callback, delay].concat(args));
  });

  _proto.setTrustyInterval = function setTrustyInterval(callback, delay) {
    var _Proxy3;

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    return (_Proxy3 = this.Proxy).proxyTimerWithLooping.apply(_Proxy3, [setTimeout, callback, delay].concat(args));
  };

  _proto.clearTimeout = function (_clearTimeout) {
    function clearTimeout(_x5) {
      return _clearTimeout.apply(this, arguments);
    }

    clearTimeout.toString = function () {
      return _clearTimeout.toString();
    };

    return clearTimeout;
  }(function (id) {
    return this.Proxy.proxyClear(clearTimeout, id);
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval(_x6) {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function (id) {
    return this.Proxy.proxyClear(clearInterval, id);
  });

  _proto.clearTrustyInterval = function clearTrustyInterval(id) {
    return this.Proxy.proxyClear(clearTimeout, id);
  };

  return SimpleTimer;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_WorkerThreadTimer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_SimpleTimer__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerTimer", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_WorkerThreadTimer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimer", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_SimpleTimer__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerThreadTimer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WorkerTimer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleTimer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);



var Timer;
var WorkerThreadTimer =
/*#__PURE__*/
function () {
  function WorkerThreadTimer(options) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* isObject */])(options)) {
      options = {};
    }

    if (Timer === undefined) {
      Timer = WorkerThreadTimer.isPlatformSupportWorker() ? new __WEBPACK_IMPORTED_MODULE_0__WorkerTimer__["a" /* WorkerTimer */](options) : new __WEBPACK_IMPORTED_MODULE_1__SimpleTimer__["a" /* SimpleTimer */](options);
    }
  }

  WorkerThreadTimer.isPlatformSupportWorker = function isPlatformSupportWorker() {
    return typeof window !== 'undefined' && 'Worker' in window;
  };

  var _proto = WorkerThreadTimer.prototype;

  _proto.setTimeout = function setTimeout(callback, delay) {
    var _Timer;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return (_Timer = Timer).setTimeout.apply(_Timer, [callback, delay].concat(args));
  };

  _proto.setInterval = function setInterval(callback, delay) {
    var _Timer2;

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return (_Timer2 = Timer).setInterval.apply(_Timer2, [callback, delay].concat(args));
  };

  _proto.setTrustyInterval = function setTrustyInterval(callback, delay) {
    var _Timer3;

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    return (_Timer3 = Timer).setTrustyInterval.apply(_Timer3, [callback, delay].concat(args));
  };

  _proto.clearTimeout = function clearTimeout(id) {
    return Timer.clearTimeout(id);
  };

  _proto.clearInterval = function clearInterval(id) {
    return Timer.clearInterval(id);
  };

  _proto.clearTrustyInterval = function clearTrustyInterval(id) {
    return Timer.clearTrustyInterval(id);
  };

  return WorkerThreadTimer;
}();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerTimer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Timer_Worker__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Timer_Worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Timer_Worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);



var freeId = 0;
var timers = {};

function tick(id, options) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (!options.diff) {
    args.shift();
  }

  return typeof timers[id] === 'function' && timers[id].apply(timers, args);
}

function setNewTimer(Worker, type, callback, delay) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
    args[_key2 - 4] = arguments[_key2];
  }

  var timerId = freeId++;
  timers[timerId] = callback;
  Worker.postMessage(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* createRequest */])(type, timerId, {
    delay: delay,
    args: args
  }));
  return timerId;
}

function clearTimer(Worker, type, id) {
  delete timers[id];
  Worker.postMessage(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* createRequest */])(type, id));
}

var WorkerTimer =
/*#__PURE__*/
function () {
  function WorkerTimer(options) {
    Object.defineProperty(this, "_Worker", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    this.options = {
      diff: true
    };
    this._Worker = new __WEBPACK_IMPORTED_MODULE_1__Timer_Worker___default.a();
    this._Worker.onerror = this._onError.bind(this);
    this._Worker.onmessage = this._onMessage.bind(this);
    this.init();
  }

  var _proto = WorkerTimer.prototype;

  _proto.init = function init() {
    this._Worker.postMessage(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* createRequest */])(__WEBPACK_IMPORTED_MODULE_0__actions__["d" /* ACTION_INIT */], null, {
      options: this.options
    }));
  };

  _proto.setTimeout = function setTimeout(callback, delay) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    return setNewTimer.apply(void 0, [this._Worker, __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* ACTION_SETTIMEOUT */], callback, delay].concat(args));
  };

  _proto.setInterval = function setInterval(callback, delay) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    return setNewTimer.apply(void 0, [this._Worker, __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* ACTION_SETINTERVAL */], callback, delay].concat(args));
  };

  _proto.setTrustyInterval = function setTrustyInterval(callback, delay) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
      args[_key5 - 2] = arguments[_key5];
    }

    return setNewTimer.apply(void 0, [this._Worker, __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* ACTION_SETTRUSTYINTERVAL */], callback, delay].concat(args));
  };

  _proto.clearTimeout = function clearTimeout(id) {
    clearTimer(this._Worker, __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* ACTION_CLEARTIMEOUT */], id);
  };

  _proto.clearInterval = function clearInterval(id) {
    clearTimer(this._Worker, __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ACTION_CLEARINTERVAL */], id);
  };

  _proto.clearTrustyInterval = function clearTrustyInterval(id) {
    clearTimer(this._Worker, __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* ACTION_CLEARTRUSTYINTERVAL */], id);
  };

  _proto._onError = function _onError(e) {
    console.error('worker error', e);
  };

  _proto._onMessage = function _onMessage(event) {
    var message = event.data;

    if (!message || message.action == null || !Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* isObject */])(message.data)) {
      return;
    }

    var _message$data = message.data,
        id = _message$data.id,
        args = _message$data.args;

    switch (message.action) {
      case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* ACTION_TICK */]:
        tick.apply(void 0, [id, this.options].concat(args));
        break;

      default:
        break;
    }
  };

  return WorkerTimer;
}();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ACTION_SETTIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACTION_CLEARTIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ACTION_TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ACTION_SETINTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_CLEARINTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ACTION_SETTRUSTYINTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACTION_CLEARTRUSTYINTERVAL; });
var ACTION_INIT = '-1';
var ACTION_SETTIMEOUT = '1';
var ACTION_CLEARTIMEOUT = '2';
var ACTION_TICK = '3';
var ACTION_SETINTERVAL = '4';
var ACTION_CLEARINTERVAL = '5';
var ACTION_SETTRUSTYINTERVAL = '6';
var ACTION_CLEARTRUSTYINTERVAL = '7';

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(16)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 10);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = isObject;\n/* unused harmony export createRequest */\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = createResponse;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);\n\nfunction isObject(value) {\n  return typeof value === 'object' && value !== null;\n}\nfunction createRequest(action, id, args) {\n  return {\n    action: action,\n    data: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, args, {\n      id: id\n    })\n  };\n}\nfunction createResponse(action, id, args) {\n  return {\n    action: action,\n    data: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, args, {\n      id: id\n    })\n  };\n}\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports) {\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(4)(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n/***/ }),\n/* 4 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports) {\n\nvar core = module.exports = { version: '2.5.1' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(7);\nvar defined = __webpack_require__(8);\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n/***/ }),\n/* 7 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(31);\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n/***/ }),\n/* 8 */\n/***/ (function(module, exports) {\n\n// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n/***/ }),\n/* 9 */\n/***/ (function(module, exports) {\n\n// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n/***/ }),\n/* 10 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\nObject.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleTimer__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(42);\n// @flow\n\n\n\nvar Timer;\nvar inited = false;\nvar timers = {};\n\nfunction callbackCreator(action, id) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    self.postMessage(Object(__WEBPACK_IMPORTED_MODULE_1__utils__[\"a\" /* createResponse */])(action, id, {\n      args: args\n    }));\n  };\n}\n\nfunction setTimeoutTick(id, delay) {\n  var _Timer;\n\n  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n    args[_key2 - 2] = arguments[_key2];\n  }\n\n  timers[id] = (_Timer = Timer).setTimeout.apply(_Timer, [callbackCreator(__WEBPACK_IMPORTED_MODULE_2__actions__[\"h\" /* ACTION_TICK */], id), delay].concat(args));\n}\n\nfunction setIntervalTick(id, delay) {\n  var _Timer2;\n\n  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {\n    args[_key3 - 2] = arguments[_key3];\n  }\n\n  timers[id] = (_Timer2 = Timer).setInterval.apply(_Timer2, [callbackCreator(__WEBPACK_IMPORTED_MODULE_2__actions__[\"h\" /* ACTION_TICK */], id), delay].concat(args));\n}\n\nfunction setTrustyIntervalTick(id, delay) {\n  var _Timer3;\n\n  for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {\n    args[_key4 - 2] = arguments[_key4];\n  }\n\n  timers[id] = (_Timer3 = Timer).setTrustyInterval.apply(_Timer3, [callbackCreator(__WEBPACK_IMPORTED_MODULE_2__actions__[\"h\" /* ACTION_TICK */], id), delay].concat(args));\n}\n\nfunction clearTimeoutTick(id) {\n  Timer.clearTimeout(timers[id]);\n  delete timers[id];\n}\n\nfunction clearIntervalTick(id) {\n  Timer.clearInterval(timers[id]);\n  delete timers[id];\n}\n\nfunction clearTrustyIntervalTick(id) {\n  Timer.clearTrustyInterval(timers[id]);\n  delete timers[id];\n}\n\nself.onmessage = function (event) {\n  var message = event.data;\n\n  if (!message || message.action == null || !Object(__WEBPACK_IMPORTED_MODULE_1__utils__[\"b\" /* isObject */])(message.data)) {\n    return;\n  }\n\n  var _message$data = message.data,\n      id = _message$data.id,\n      delay = _message$data.delay,\n      args = _message$data.args,\n      options = _message$data.options;\n\n  switch (message.action) {\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"f\" /* ACTION_SETTIMEOUT */]:\n      setTimeoutTick.apply(void 0, [id, delay].concat(args));\n      break;\n\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"e\" /* ACTION_SETINTERVAL */]:\n      setIntervalTick.apply(void 0, [id, delay].concat(args));\n      break;\n\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"b\" /* ACTION_CLEARTIMEOUT */]:\n      clearTimeoutTick(id);\n      break;\n\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"a\" /* ACTION_CLEARINTERVAL */]:\n      clearIntervalTick(id);\n      break;\n\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"c\" /* ACTION_CLEARTRUSTYINTERVAL */]:\n      clearTrustyIntervalTick(id);\n      break;\n\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"g\" /* ACTION_SETTRUSTYINTERVAL */]:\n      setTrustyIntervalTick.apply(void 0, [id, delay].concat(args));\n      break;\n\n    case __WEBPACK_IMPORTED_MODULE_2__actions__[\"d\" /* ACTION_INIT */]:\n      if (!inited) {\n        Timer = new __WEBPACK_IMPORTED_MODULE_0__SimpleTimer__[\"a\" /* SimpleTimer */](options);\n      }\n\n      break;\n\n    default:\n      break;\n  }\n};\n\n/***/ }),\n/* 11 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return SimpleTimer; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Proxy__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);\n\n\nvar SimpleTimer =\n/*#__PURE__*/\nfunction () {\n  function SimpleTimer(options) {\n    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__[\"b\" /* isObject */])(options)) {\n      options = {};\n    }\n\n    this.Proxy = new __WEBPACK_IMPORTED_MODULE_0__Proxy__[\"a\" /* Proxy */]({\n      recordDiff: options.diff\n    });\n  }\n\n  var _proto = SimpleTimer.prototype;\n\n  _proto.setTimeout = function (_setTimeout) {\n    function setTimeout(_x, _x2) {\n      return _setTimeout.apply(this, arguments);\n    }\n\n    setTimeout.toString = function () {\n      return _setTimeout.toString();\n    };\n\n    return setTimeout;\n  }(function (callback, delay) {\n    var _Proxy;\n\n    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      args[_key - 2] = arguments[_key];\n    }\n\n    return (_Proxy = this.Proxy).proxyTimer.apply(_Proxy, [setTimeout, callback, delay].concat(args));\n  });\n\n  _proto.setInterval = function (_setInterval) {\n    function setInterval(_x3, _x4) {\n      return _setInterval.apply(this, arguments);\n    }\n\n    setInterval.toString = function () {\n      return _setInterval.toString();\n    };\n\n    return setInterval;\n  }(function (callback, delay) {\n    var _Proxy2;\n\n    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n      args[_key2 - 2] = arguments[_key2];\n    }\n\n    return (_Proxy2 = this.Proxy).proxyTimer.apply(_Proxy2, [setInterval, callback, delay].concat(args));\n  });\n\n  _proto.setTrustyInterval = function setTrustyInterval(callback, delay) {\n    var _Proxy3;\n\n    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {\n      args[_key3 - 2] = arguments[_key3];\n    }\n\n    return (_Proxy3 = this.Proxy).proxyTimerWithLooping.apply(_Proxy3, [setTimeout, callback, delay].concat(args));\n  };\n\n  _proto.clearTimeout = function (_clearTimeout) {\n    function clearTimeout(_x5) {\n      return _clearTimeout.apply(this, arguments);\n    }\n\n    clearTimeout.toString = function () {\n      return _clearTimeout.toString();\n    };\n\n    return clearTimeout;\n  }(function (id) {\n    return this.Proxy.proxyClear(clearTimeout, id);\n  });\n\n  _proto.clearInterval = function (_clearInterval) {\n    function clearInterval(_x6) {\n      return _clearInterval.apply(this, arguments);\n    }\n\n    clearInterval.toString = function () {\n      return _clearInterval.toString();\n    };\n\n    return clearInterval;\n  }(function (id) {\n    return this.Proxy.proxyClear(clearInterval, id);\n  });\n\n  _proto.clearTrustyInterval = function clearTrustyInterval(id) {\n    return this.Proxy.proxyClear(clearTimeout, id);\n  };\n\n  return SimpleTimer;\n}();\n\n/***/ }),\n/* 12 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Proxy; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);\n\nvar freeId = 0;\nvar idsBinding = {};\nvar internalCallbacks = {};\nvar dates = {};\n\nfunction start(id) {\n  dates[id] = Date.now();\n}\n\nfunction end(id) {\n  var now = Date.now();\n  var last = dates[id];\n  dates[id] = now;\n  return now - last;\n}\n\nvar Proxy =\n/*#__PURE__*/\nfunction () {\n  function Proxy(options) {\n    Object.defineProperty(this, \"recordDiff\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: void 0\n    });\n\n    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__[\"b\" /* isObject */])(options)) {\n      options = {};\n    }\n\n    this.recordDiff = !!options.recordDiff || false;\n  }\n\n  var _proto = Proxy.prototype;\n\n  _proto.proxyTimer = function proxyTimer(timerMethod, callback, delay) {\n    var _this = this;\n\n    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {\n      args[_key - 3] = arguments[_key];\n    }\n\n    var id = freeId++;\n\n    if (this.recordDiff) {\n      start(id);\n    }\n\n    var iCb = internalCallbacks[id] = function () {\n      if (_this.recordDiff) {\n        return callback.apply(void 0, [end(id)].concat(args));\n      }\n\n      return callback.apply(void 0, args);\n    };\n\n    idsBinding[id] = timerMethod(iCb, delay);\n    return id;\n  };\n\n  _proto.proxyClear = function proxyClear(clearMethod, id) {\n    var tId = idsBinding[id];\n\n    if (tId !== undefined) {\n      clearMethod(tId);\n      delete idsBinding[id];\n      delete internalCallbacks[id];\n    }\n  };\n\n  _proto.proxyTimerWithLooping = function proxyTimerWithLooping(timerMethod, callback, delay) {\n    for (var _len2 = arguments.length, argsA = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {\n      argsA[_key2 - 3] = arguments[_key2];\n    }\n\n    var id = this.proxyTimer.apply(this, [timerMethod, function () {\n      idsBinding[id] = timerMethod(internalCallbacks[id], delay);\n      callback.apply(void 0, arguments);\n    }, delay].concat(argsA));\n    return id;\n  };\n\n  return Proxy;\n}();\n\n/***/ }),\n/* 13 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar _Object$assign = __webpack_require__(14);\n\nfunction _extends() {\n  module.exports = _extends = _Object$assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n/***/ }),\n/* 14 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = __webpack_require__(15);\n\n/***/ }),\n/* 15 */\n/***/ (function(module, exports, __webpack_require__) {\n\n__webpack_require__(16);\nmodule.exports = __webpack_require__(5).Object.assign;\n\n\n/***/ }),\n/* 16 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(17);\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(27) });\n\n\n/***/ }),\n/* 17 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar global = __webpack_require__(1);\nvar core = __webpack_require__(5);\nvar ctx = __webpack_require__(18);\nvar hide = __webpack_require__(20);\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && key in exports) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n/***/ }),\n/* 18 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// optional / simple context binding\nvar aFunction = __webpack_require__(19);\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n/***/ }),\n/* 19 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n/***/ }),\n/* 20 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar dP = __webpack_require__(21);\nvar createDesc = __webpack_require__(26);\nmodule.exports = __webpack_require__(3) ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n/***/ }),\n/* 21 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar anObject = __webpack_require__(22);\nvar IE8_DOM_DEFINE = __webpack_require__(23);\nvar toPrimitive = __webpack_require__(25);\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n/***/ }),\n/* 22 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar isObject = __webpack_require__(2);\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n/***/ }),\n/* 23 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = !__webpack_require__(3) && !__webpack_require__(4)(function () {\n  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n/***/ }),\n/* 24 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar isObject = __webpack_require__(2);\nvar document = __webpack_require__(1).document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n/***/ }),\n/* 25 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(2);\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n/***/ }),\n/* 26 */\n/***/ (function(module, exports) {\n\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n/***/ }),\n/* 27 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(28);\nvar gOPS = __webpack_require__(39);\nvar pIE = __webpack_require__(40);\nvar toObject = __webpack_require__(41);\nvar IObject = __webpack_require__(7);\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(4)(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n/***/ }),\n/* 28 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(29);\nvar enumBugKeys = __webpack_require__(38);\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n/***/ }),\n/* 29 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar has = __webpack_require__(30);\nvar toIObject = __webpack_require__(6);\nvar arrayIndexOf = __webpack_require__(32)(false);\nvar IE_PROTO = __webpack_require__(35)('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n/***/ }),\n/* 30 */\n/***/ (function(module, exports) {\n\nvar hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n/***/ }),\n/* 31 */\n/***/ (function(module, exports) {\n\nvar toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n/***/ }),\n/* 32 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(6);\nvar toLength = __webpack_require__(33);\nvar toAbsoluteIndex = __webpack_require__(34);\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n/***/ }),\n/* 33 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.1.15 ToLength\nvar toInteger = __webpack_require__(9);\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n/***/ }),\n/* 34 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar toInteger = __webpack_require__(9);\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n/***/ }),\n/* 35 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar shared = __webpack_require__(36)('keys');\nvar uid = __webpack_require__(37);\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n/***/ }),\n/* 36 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar global = __webpack_require__(1);\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n/***/ }),\n/* 37 */\n/***/ (function(module, exports) {\n\nvar id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n/***/ }),\n/* 38 */\n/***/ (function(module, exports) {\n\n// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n/***/ }),\n/* 39 */\n/***/ (function(module, exports) {\n\nexports.f = Object.getOwnPropertySymbols;\n\n\n/***/ }),\n/* 40 */\n/***/ (function(module, exports) {\n\nexports.f = {}.propertyIsEnumerable;\n\n\n/***/ }),\n/* 41 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(8);\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n/***/ }),\n/* 42 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return ACTION_INIT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return ACTION_SETTIMEOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return ACTION_CLEARTIMEOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return ACTION_TICK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return ACTION_SETINTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ACTION_CLEARINTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return ACTION_SETTRUSTYINTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return ACTION_CLEARTRUSTYINTERVAL; });\nvar ACTION_INIT = '-1';\nvar ACTION_SETTIMEOUT = '1';\nvar ACTION_CLEARTIMEOUT = '2';\nvar ACTION_TICK = '3';\nvar ACTION_SETINTERVAL = '4';\nvar ACTION_CLEARINTERVAL = '5';\nvar ACTION_SETTRUSTYINTERVAL = '6';\nvar ACTION_CLEARTRUSTYINTERVAL = '7';\n\n/***/ })\n/******/ ]);", null);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(18);

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(21);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(31) });


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(5);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(27);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(44);
var toObject = __webpack_require__(45);
var IObject = __webpack_require__(7);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(34);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(36)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(9);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(9);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Proxy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

var freeId = 0;
var idsBinding = {};
var internalCallbacks = {};
var dates = {};

function start(id) {
  dates[id] = Date.now();
}

function end(id) {
  var now = Date.now();
  var last = dates[id];
  dates[id] = now;
  return now - last;
}

var Proxy =
/*#__PURE__*/
function () {
  function Proxy(options) {
    Object.defineProperty(this, "recordDiff", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });

    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* isObject */])(options)) {
      options = {};
    }

    this.recordDiff = !!options.recordDiff || false;
  }

  var _proto = Proxy.prototype;

  _proto.proxyTimer = function proxyTimer(timerMethod, callback, delay) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    var id = freeId++;

    if (this.recordDiff) {
      start(id);
    }

    var iCb = internalCallbacks[id] = function () {
      if (_this.recordDiff) {
        return callback.apply(void 0, [end(id)].concat(args));
      }

      return callback.apply(void 0, args);
    };

    idsBinding[id] = timerMethod(iCb, delay);
    return id;
  };

  _proto.proxyClear = function proxyClear(clearMethod, id) {
    var tId = idsBinding[id];

    if (tId !== undefined) {
      clearMethod(tId);
      delete idsBinding[id];
      delete internalCallbacks[id];
    }
  };

  _proto.proxyTimerWithLooping = function proxyTimerWithLooping(timerMethod, callback, delay) {
    for (var _len2 = arguments.length, argsA = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      argsA[_key2 - 3] = arguments[_key2];
    }

    var id = this.proxyTimer.apply(this, [timerMethod, function () {
      idsBinding[id] = timerMethod(internalCallbacks[id], delay);
      callback.apply(void 0, arguments);
    }, delay].concat(argsA));
    return id;
  };

  return Proxy;
}();

/***/ })
/******/ ]);
});