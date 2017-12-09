/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleTimer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constans__ = __webpack_require__(2);
// @flow


var _timers = {};
var simpleTimer = new __WEBPACK_IMPORTED_MODULE_0__SimpleTimer__["a" /* SimpleTimer */]();

function postMessageCreator(action, id) {
  return function () {
    self.postMessage({
      action: action,
      data: {
        id: id
      }
    });
  };
}

function setTimeoutTick(id, delay) {
  _timers[id] = simpleTimer.setTimeout(postMessageCreator(__WEBPACK_IMPORTED_MODULE_1__constans__["g" /* ACTION_TICK */], id), delay);
}

function setIntervalTick(id, delay) {
  _timers[id] = simpleTimer.setInterval(postMessageCreator(__WEBPACK_IMPORTED_MODULE_1__constans__["g" /* ACTION_TICK */], id), delay);
}

function setTrustyIntervalTick(id, delay) {
  _timers[id] = simpleTimer.setTrustyInterval(postMessageCreator(__WEBPACK_IMPORTED_MODULE_1__constans__["g" /* ACTION_TICK */], id), delay);
}

function clearTimeoutTick(id) {
  simpleTimer.clearTimeout(_timers[id]);
  delete _timers[id];
}

function clearIntervalTick(id) {
  simpleTimer.clearInterval(_timers[id]);
  delete _timers[id];
}

function clearTrustyIntervalTick(id) {
  simpleTimer.clearTrustyInterval(_timers[id]);
  delete _timers[id];
}

self.onmessage = function (event) {
  var message = event.data;

  if (message == null) {
    return;
  }

  switch (message.action) {
    case __WEBPACK_IMPORTED_MODULE_1__constans__["e" /* ACTION_SETTIMEOUT */]:
      setTimeoutTick(message.data.id, message.data.delay);
      break;

    case __WEBPACK_IMPORTED_MODULE_1__constans__["d" /* ACTION_SETINTERVAL */]:
      setIntervalTick(message.data.id, message.data.delay);
      break;

    case __WEBPACK_IMPORTED_MODULE_1__constans__["b" /* ACTION_CLEARTIMEOUT */]:
      clearTimeoutTick(message.data.id);
      break;

    case __WEBPACK_IMPORTED_MODULE_1__constans__["a" /* ACTION_CLEARINTERVAL */]:
      clearIntervalTick(message.data.id);
      break;

    case __WEBPACK_IMPORTED_MODULE_1__constans__["c" /* ACTION_CLEARTRUSTYINTERVAL */]:
      clearTrustyIntervalTick(message.data.id);
      break;

    case __WEBPACK_IMPORTED_MODULE_1__constans__["f" /* ACTION_SETTRUSTYINTERVAL */]:
      setTrustyIntervalTick(message.data.id, message.data.delay);
      break;

    default:
      break;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTimer; });
var freeTimerId = 0;
var SimpleTimer =
/*#__PURE__*/
function () {
  function SimpleTimer() {
    this._timers = {};
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
    return setTimeout(callback, delay);
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
    return setInterval(callback, delay);
  });

  _proto.setTrustyInterval = function setTrustyInterval(callback, delay) {
    var _this = this;

    var selfTimerId = freeTimerId++;

    var ticker = function ticker() {
      _this._timers[selfTimerId] = _this.setTimeout(ticker, delay);
      callback();
    };

    this._timers[selfTimerId] = this.setTimeout(ticker, delay);
    return selfTimerId;
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
    return clearTimeout(id);
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
    return clearInterval(id);
  });

  _proto.clearTrustyInterval = function clearTrustyInterval(id) {
    this.clearTimeout(this._timers[id]);
    delete this._timers[id];
  };

  return SimpleTimer;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ACTION_SETTIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACTION_CLEARTIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ACTION_TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_SETINTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_CLEARINTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ACTION_SETTRUSTYINTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACTION_CLEARTRUSTYINTERVAL; });
var ACTION_SETTIMEOUT = '1';
var ACTION_CLEARTIMEOUT = '2';
var ACTION_TICK = '3';
var ACTION_SETINTERVAL = '4';
var ACTION_CLEARINTERVAL = '5';
var ACTION_SETTRUSTYINTERVAL = '6';
var ACTION_CLEARTRUSTYINTERVAL = '7';

/***/ })
/******/ ]);