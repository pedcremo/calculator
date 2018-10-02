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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculatorFunctions.js":
/*!************************************!*\
  !*** ./src/calculatorFunctions.js ***!
  \************************************/
/*! exports provided: fAdd_, fMultiplier, fDoublefier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fAdd_\", function() { return fAdd_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fMultiplier\", function() { return fMultiplier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fDoublefier\", function() { return fDoublefier; });\nvar fMultiplier = function fMultiplier(array_) {\n  return array_.reduce(function (valorAnterior, valorActual) {\n    return valorAnterior * valorActual;\n  });\n}; //It doubles every single item of the array\n\n\nvar fDoublefier = function fDoublefier(array_) {\n  return array_.map(function (valorActual) {\n    return valorActual * 2;\n  });\n};\n\nvar fAdd_ = function fAdd_(array_) {\n  return array_.reduce(function (valorAnterior, valorActual) {\n    return valorAnterior + valorActual;\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/calculatorFunctions.js?");

/***/ }),

/***/ "./src/customExceptions.js":
/*!*********************************!*\
  !*** ./src/customExceptions.js ***!
  \*********************************/
/*! exports provided: NoCalculatorFunctionNameError, AccessDeniedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoCalculatorFunctionNameError\", function() { return NoCalculatorFunctionNameError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccessDeniedError\", function() { return AccessDeniedError; });\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _wrapNativeSuper(Class) {\n  var _cache = typeof Map === \"function\" ? new Map() : undefined;\n\n  _wrapNativeSuper = function _wrapNativeSuper(Class) {\n    if (Class === null || !_isNativeFunction(Class)) return Class;\n\n    if (typeof Class !== \"function\") {\n      throw new TypeError(\"Super expression must either be null or a function\");\n    }\n\n    if (typeof _cache !== \"undefined\") {\n      if (_cache.has(Class)) return _cache.get(Class);\n\n      _cache.set(Class, Wrapper);\n    }\n\n    function Wrapper() {\n      return _construct(Class, arguments, _getPrototypeOf(this).constructor);\n    }\n\n    Wrapper.prototype = Object.create(Class.prototype, {\n      constructor: {\n        value: Wrapper,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n    return _setPrototypeOf(Wrapper, Class);\n  };\n\n  return _wrapNativeSuper(Class);\n}\n\nfunction isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction _construct(Parent, args, Class) {\n  if (isNativeReflectConstruct()) {\n    _construct = Reflect.construct;\n  } else {\n    _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n      var Constructor = Function.bind.apply(Parent, a);\n      var instance = new Constructor();\n      if (Class) _setPrototypeOf(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\nfunction _isNativeFunction(fn) {\n  return Function.toString.call(fn).indexOf(\"[native code]\") !== -1;\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nvar NoCalculatorFunctionNameError =\n/*#__PURE__*/\nfunction (_Error) {\n  _inherits(NoCalculatorFunctionNameError, _Error);\n\n  function NoCalculatorFunctionNameError() {\n    var _this;\n\n    _classCallCheck(this, NoCalculatorFunctionNameError);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoCalculatorFunctionNameError).call(this, \"No existeix eixa operació\"));\n    _this.name = 'NoCalculatorFunctionName';\n    return _this;\n  }\n\n  return NoCalculatorFunctionNameError;\n}(_wrapNativeSuper(Error));\nvar AccessDeniedError =\n/*#__PURE__*/\nfunction (_Error2) {\n  _inherits(AccessDeniedError, _Error2);\n\n  function AccessDeniedError() {\n    var _this2;\n\n    _classCallCheck(this, AccessDeniedError);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AccessDeniedError).call(this, \"You are not member of a rol that is allowed to execute such function\"));\n    _this2.name = 'AccessDeniedName';\n    return _this2;\n  }\n\n  return AccessDeniedError;\n}(_wrapNativeSuper(Error));\n\n//# sourceURL=webpack:///./src/customExceptions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./src/person.js\");\n\nvar persons = [new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Paco\", \"ElMaco\", _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoles().USER), new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Paca\", \"LaMaca\", _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoles().TEACHER), new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Root\", \"Toot\", _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoles().ADMIN)];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var select = document.getElementById(\"selectPerson\");\n  select.onchange = changedPerson;\n  persons.forEach(function (item) {\n    var o = document.createElement(\"option\");\n    o.text = item.name + \" \" + item.surname + \" (\" + item.rol + \")\";\n    o.value = item.name + item.surname;\n    select.appendChild(o);\n  });\n});\n\nfunction changedPerson(event) {\n  alert('gggg -> ' + event.target.value);\n}\n\n;\nconsole.log('Arre gat!!');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\n/* harmony import */ var _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorFunctions */ \"./src/calculatorFunctions.js\");\n/* harmony import */ var _customExceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customExceptions */ \"./src/customExceptions.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\n\nvar ROL = {\n  USER: 'regular user',\n  ADMIN: 'root',\n  TEACHER: 'teacher'\n};\nvar operationDictionary = {\n  'ADD': {\n    operator: _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fAdd_\"],\n    roles: [ROL.USER, ROL.ADMIN, ROL.TEACHER]\n  },\n  'MULTIPLIER': {\n    operator: _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fMultiplier\"],\n    roles: [ROL.ADMIN, ROL.TEACHER]\n  },\n  'DOUBLEFIER': {\n    operator: _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fDoublefier\"],\n    roles: [ROL.TEACHER]\n  }\n};\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(name, surname) {\n    var rol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ROL.USER;\n\n    _classCallCheck(this, Person);\n\n    this.name = name;\n    this.surname = surname;\n    this.rol = rol;\n  }\n\n  _createClass(Person, [{\n    key: \"calculator\",\n    value: function calculator() {\n      var operands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0];\n      var operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ADD';\n\n      try {\n        var chosenOperation = operationDictionary[operator];\n        if (!chosenOperation || typeof chosenOperation.operator !== \"function\") throw new _customExceptions__WEBPACK_IMPORTED_MODULE_1__[\"NoCalculatorFunctionNameError\"]();\n        if (!chosenOperation.roles.includes(this.rol)) throw new _customExceptions__WEBPACK_IMPORTED_MODULE_1__[\"AccessDeniedError\"]();\n        return chosenOperation.operator(operands);\n      } catch (error) {\n        console.log(error.name + \" \" + error.message);\n        return error.constructor;\n      }\n    }\n  }], [{\n    key: \"getRoles\",\n    value: function getRoles() {\n      return ROL;\n    }\n  }]);\n\n  return Person;\n}();\n\n\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ })

/******/ });