/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint browser: true */
	(function() {
	  var previousFormatter = window.electronAcceleratorFormatter;

	  var formatter = __webpack_require__(1);
	  window.electronAcceleratorFormatter = formatter;
	  window.electronAcceleratorFormatter.noConflict = function() {
	    window.electronAcceleratorFormatter = previousFormatter;
	    return formatter;
	  };
	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var os = __webpack_require__(3);

	var IS_MAC = os.platform() === 'darwin';
	var CMD_OR_CTRL = IS_MAC ? '\u2318' : '\u2303';

	var MODIFIER_MAP = {
	  'Command': '\u2318',
	  'Cmd': '\u2318',
	  'CommandOrControl': CMD_OR_CTRL,
	  'CmdOrCtrl': CMD_OR_CTRL,
	  'Super': '\u2318',
	  'Control': '\u2303',
	  'Ctrl': '\u2303',
	  'Shift': '\u21e7',
	  'Alt': '\u2325',
	  'Plus': '='
	};

	var formatter = function(accelerator) {
	  if (!accelerator) return '';

	  return accelerator
	    .split('+')
	    .map(function(modifierOrKeyCode) {
	      return MODIFIER_MAP[modifierOrKeyCode] || modifierOrKeyCode;
	    })
	    .join('');
	};

	module.exports = formatter;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Webpack's `os` shim always returns "browser" from `platform`. This is dumb.
	var os = __webpack_require__(3);

	if (os.platform() === 'browser') {
	  /* jshint browser: true */
	  os.platform = function() {
	    return /OS X/.test(window.navigator.userAgent) ? 'darwin' : 'win32';
	  };
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	exports.endianness = function () { return 'LE' };

	exports.hostname = function () {
	    if (typeof location !== 'undefined') {
	        return location.hostname
	    }
	    else return '';
	};

	exports.loadavg = function () { return [] };

	exports.uptime = function () { return 0 };

	exports.freemem = function () {
	    return Number.MAX_VALUE;
	};

	exports.totalmem = function () {
	    return Number.MAX_VALUE;
	};

	exports.cpus = function () { return [] };

	exports.type = function () { return 'Browser' };

	exports.release = function () {
	    if (typeof navigator !== 'undefined') {
	        return navigator.appVersion;
	    }
	    return '';
	};

	exports.networkInterfaces
	= exports.getNetworkInterfaces
	= function () { return {} };

	exports.arch = function () { return 'javascript' };

	exports.platform = function () { return 'browser' };

	exports.tmpdir = exports.tmpDir = function () {
	    return '/tmp';
	};

	exports.EOL = '\n';


/***/ }
/******/ ]);