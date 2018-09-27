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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fAdd_\", function() { return fAdd_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fMultiplier\", function() { return fMultiplier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fDoublefier\", function() { return fDoublefier; });\nfAdd_ = function(array_) {   \n  return array_.reduce((valorAnterior, valorActual) => {\n     return valorAnterior + valorActual;\n  });\n}\n\nfMultiplier = function(array_) {\n  return array_.reduce((valorAnterior, valorActual)=>{\n     return valorAnterior * valorActual;\n  });\n} \n\n//It doubles every single item of the array\nfDoublefier = function(array_){\n  return array_.map(function(valorActual){\n    return valorActual*2;\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/calculatorFunctions.js?");

/***/ }),

/***/ "./src/customExceptions.js":
/*!*********************************!*\
  !*** ./src/customExceptions.js ***!
  \*********************************/
/*! exports provided: NoCalculatorFunctionNameError, AccessDeniedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoCalculatorFunctionNameError\", function() { return NoCalculatorFunctionNameError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccessDeniedError\", function() { return AccessDeniedError; });\nclass NoCalculatorFunctionNameError extends Error {\n  constructor() {\n    super(\"No existeix eixa operació\");\n    this.name = 'NoCalculatorFunctionName';\n  }\n}\n\nclass AccessDeniedError extends Error {\n  constructor() {\n    super(\"You are not member of a rol that is allowed to execute such function\");\n    this.name = 'AccessDeniedName';\n  }\n}\n\n//# sourceURL=webpack:///./src/customExceptions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./src/person.js\");\n\n\nlet paco = new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Paco\",\"ElMaco\",_person__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoles().USER);\nlet paca = new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Paca\",\"LaMaca\",_person__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoles().TEACHER);\nlet root = new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Root\",\"Toot\",_person__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRoles().ADMIN);\n\nconsole.log('Arre gat');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\n/* harmony import */ var _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorFunctions */ \"./src/calculatorFunctions.js\");\n/* harmony import */ var _customExceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customExceptions */ \"./src/customExceptions.js\");\n\n\n\nconst ROL={USER:'regular user',ADMIN:'root',TEACHER:'teacher'};\n\nlet operationDictionary={\n    'ADD':{ operator:_calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fAdd_\"],roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},\n    'MULTIPLIER': { operator:_calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fMultiplier\"],roles:[ROL.ADMIN,ROL.TEACHER]},\n    'DOUBLEFIER': { operator:_calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fDoublefier\"],roles:[ROL.TEACHER]}\n  };\n\nclass Person {    \n         \n    constructor(name,surname,rol=ROL.USER){\n        this.name = name;\n        this.surname = surname;\n        this.rol = rol;    \n    }\n\n    static getRoles(){\n        return ROL;\n    }\n\n    calculator(operands=[0],operator='ADD'){\n        try {            \n            let chosenOperation=operationDictionary[operator];\n            if (!chosenOperation || typeof chosenOperation.operator !== \"function\") throw new _customExceptions__WEBPACK_IMPORTED_MODULE_1__[\"NoCalculatorFunctionNameError\"](); \n            if (!chosenOperation.roles.includes(this.rol)) throw new _customExceptions__WEBPACK_IMPORTED_MODULE_1__[\"AccessDeniedError\"](); \n            \n            return chosenOperation.operator(operands);   \n          } catch (error) {    \n              console.log(error.name+\" \"+error.message);\n              return error.constructor;\n          }\n    }\n}\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ })

/******/ });