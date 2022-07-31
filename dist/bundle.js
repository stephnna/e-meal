/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/S&L-logo.png */ \"./src/assets/images/S&L-logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --Dark-Blue: hsl(209, 23%, 22%);\\r\\n  --Very-Dark-Blue: hsl(207, 26%, 17%);\\r\\n  --Very-Dark-Black: hsl(200, 15%, 8%);\\r\\n  --Dark-Gray: hsl(0, 0%, 52%);\\r\\n  --Very-Light-Gray: hsl(0, 0%, 98%);\\r\\n  --White: hsl(0, 0%, 100%);\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  outline: none;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.3s linear;\\r\\n  font-family: 'Nunito Sans', sans-serif;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  overflow-x: hidden;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--Very-Dark-Blue);\\r\\n}\\r\\n\\r\\n.global {\\r\\n  width: 100%;\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  color: goldenrod;\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  height: 100px;\\r\\n  width: 100px;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  font-family: cursive, Geneva, Tahoma, sans-serif;\\r\\n  background-color: rgb(1, 41, 59);\\r\\n  box-shadow: 5px 5px 10px rgb(43, 73, 100);\\r\\n  border: 1px solid rgb(85, 120, 150);\\r\\n  padding: 1rem 0;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 3rem;\\r\\n  color: goldenrod;\\r\\n}\\r\\n\\r\\n.comment-count {\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.order-num {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 600;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.comment-h2 {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 800;\\r\\n  margin: 0.5rem 0;\\r\\n}\\r\\n\\r\\n.right-header,\\r\\n.logo {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.footer a,\\r\\nfooter p {\\r\\n  color: goldenrod;\\r\\n  text-decoration: none;\\r\\n  font-size: 1.1rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.right-header li a {\\r\\n  margin-left: 16px;\\r\\n  color: goldenrod;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.meal-cards {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-gap: 1.5rem;\\r\\n  margin-top: 6rem;\\r\\n}\\r\\n\\r\\n.card .card-image {\\r\\n  background-color: rgb(20, 13, 78);\\r\\n  height: 13rem;\\r\\n  width: 100%;\\r\\n  border-radius: 1rem;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: var(--Dark-Blue);\\r\\n  box-shadow: 5px 5px 10px rgb(43, 73, 100);\\r\\n  border: 1px solid rgb(85, 120, 150);\\r\\n}\\r\\n\\r\\n.first-part h2 {\\r\\n  font-size: 1.1rem;\\r\\n  font-weight: 800;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.like-part span {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.like-part {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0.5rem;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.like-icon {\\r\\n  cursor: pointer;\\r\\n  color: goldenrod;\\r\\n  transition: all 0.3s linear;\\r\\n  background: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  margin-right: 0.3rem;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  transform: scale(1.2);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.second-part button {\\r\\n  font-size: 1.1rem;\\r\\n  font-weight: 600;\\r\\n  background-color: var(--Dark-Blue);\\r\\n  color: var(--White);\\r\\n  padding: 0.5rem 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n  border: 1px solid var(--Dark-Gray);\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.second-part button:hover {\\r\\n  background-color: goldenrod;\\r\\n  color: var(--White);\\r\\n}\\r\\n\\r\\n.carousel-item img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.card-image img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.card .card-content {\\r\\n  padding: 0 0.5rem;\\r\\n  background-color: var(--Dark-Blue);\\r\\n  border-radius: 0.5rem;\\r\\n  color: goldenrod;\\r\\n}\\r\\n\\r\\n.first-part,\\r\\n.second-part {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem 0.5rem;\\r\\n}\\r\\n\\r\\n.carousel-item {\\r\\n  height: 45rem;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background-color: var(--Dark-Blue);\\r\\n  color: goldenrod;\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  background-color: var(--Very-Dark-Blue);\\r\\n  padding-top: 1.5rem;\\r\\n}\\r\\n\\r\\n.copyright,\\r\\n.reserve,\\r\\n.footer-content,\\r\\n.comment-container {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.footer-content {\\r\\n  background-color: var(--Dark-Blue);\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  align-items: center;\\r\\n  color: goldenrod;\\r\\n  width: 100%;\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 2rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.sl img {\\r\\n  height: 40%;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.address span,\\r\\n.more-info span,\\r\\n.open-hours span {\\r\\n  display: block;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.address h2,\\r\\n.more-info h2,\\r\\n.open-hours h2 {\\r\\n  font-size: 1.1rem;\\r\\n  font-weight: 800;\\r\\n  text-decoration: underline;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.modal-container {\\r\\n  overflow-y: auto;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  background-color: goldenrod;\\r\\n  transition: 0.4s;\\r\\n  z-index: 1;\\r\\n  padding: 1rem;\\r\\n  border-radius: 1rem;\\r\\n  width: 100%;\\r\\n  max-width: 600px;\\r\\n  margin: 1rem auto;\\r\\n}\\r\\n\\r\\n.modalContainer img {\\r\\n  width: 80%;\\r\\n  height: 30%;\\r\\n  object-fit: fill;\\r\\n  border-radius: 0.5rem;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  cursor: pointer;\\r\\n  margin-bottom: 16px;\\r\\n  padding-left: 0;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  padding: 1rem;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  background-color: var(--Very-Dark-Blue);\\r\\n  color: var(--White);\\r\\n  padding: 0.5rem 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n  border: 1px solid var(--Dark-Gray);\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 0 10px rgba(87, 85, 85, 0.1);\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background-color: goldenrod;\\r\\n  color: var(--White);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1120px) {\\r\\n  .card-content {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .card .card-content {\\r\\n    padding: 0 0.5rem;\\r\\n  }\\r\\n\\r\\n  .meal-cards {\\r\\n    padding: 0 2rem;\\r\\n  }\\r\\n\\r\\n  .first-part,\\r\\n  .second-part {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .second-part button {\\r\\n    width: 100%;\\r\\n    margin-bottom: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .like-part {\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 650px) and (max-width: 835px) {\\r\\n  .meal-cards {\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    padding: 0 3rem;\\r\\n  }\\r\\n\\r\\n  .card .card-content {\\r\\n    padding: 0 0.5rem;\\r\\n  }\\r\\n\\r\\n  .first-part,\\r\\n  .second-part {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .second-part button {\\r\\n    width: 100%;\\r\\n    margin-bottom: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .like-part {\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n\\r\\n  .footer-content {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n\\r\\n  .sl,\\r\\n  .address,\\r\\n  .open-hours,\\r\\n  .more-info {\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 650px) {\\r\\n  body {\\r\\n    width: 100%;\\r\\n    max-width: 100%;\\r\\n  }\\r\\n\\r\\n  nav .display-none {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .meal-cards {\\r\\n    grid-template-columns: repeat(1, 1fr);\\r\\n    padding: 0 5%;\\r\\n  }\\r\\n\\r\\n  .card .card-content {\\r\\n    padding: 0 0.5rem;\\r\\n  }\\r\\n\\r\\n  .first-part,\\r\\n  .second-part {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .second-part button {\\r\\n    width: 100%;\\r\\n    margin-bottom: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .like-part {\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n\\r\\n  .carousel-item {\\r\\n    height: 20rem;\\r\\n  }\\r\\n\\r\\n  .footer-content {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .sl,\\r\\n  .address,\\r\\n  .open-hours,\\r\\n  .more-info {\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://e-meal/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://e-meal/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://e-meal/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://e-meal/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://e-meal/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://e-meal/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://e-meal/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://e-meal/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://e-meal/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://e-meal/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://e-meal/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservation.js */ \"./src/modules/reservation.js\");\n/* harmony import */ var _assets_images_meal1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/meal1.jpg */ \"./src/assets/images/meal1.jpg\");\n/* harmony import */ var _assets_images_meal2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/meal2.jpg */ \"./src/assets/images/meal2.jpg\");\n/* harmony import */ var _assets_images_meal3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/meal3.jpg */ \"./src/assets/images/meal3.jpg\");\n/* harmony import */ var _assets_images_meal4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/meal4.jpg */ \"./src/assets/images/meal4.jpg\");\n/* harmony import */ var _assets_images_meal5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/meal5.jpg */ \"./src/assets/images/meal5.jpg\");\n/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/close.svg */ \"./src/assets/images/close.svg\");\n/* harmony import */ var _assets_images_meal_screnshot_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/meal-screnshot.png */ \"./src/assets/images/meal-screnshot.png\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst mealHomePage = new _modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst newComment = new _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst newReservation = new _modules_reservation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\nmealHomePage.getMealHome();\nnewComment.fetchComment();\nnewReservation.fetchReservation();\n\n\n//# sourceURL=webpack://e-meal/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\nclass Comment {\n  // Initialization\n  constructor() {\n    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';\n    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/comments';\n    this.mealPopup = document.getElementById('meals-popup');\n  }\n\n  // Get meals from Api, throw error if promise was not resoved\n  //  otherwise popup meal if comment button is clicked\n\n  fetchComment = async () => {\n    const response = await fetch(this.API_URL);\n    const data = await response.json().catch((error) => new Error(error));\n    this.popupMeal(data);\n  };\n\n  //  Function that display meal when comment button is cloked\n  popupMeal = (data) => {\n    const selectAllMeal = document.querySelectorAll('.comment-meal');\n    selectAllMeal.forEach((item, index) => {\n      item.addEventListener('click', () => {\n        const mealContainer = document.createElement('div');\n        mealContainer.className = 'modal-container';\n        mealContainer.id = `${index}`;\n        mealContainer.innerHTML = `\n      <div><img class=\"close\" src=\"./assets/images/close.svg\" alt=\"close-button\"></div> \n       <div class=\"card-image\">\n       <img src=\"${data.meals[index].strMealThumb}\">\n       </div>\n       <div class=\"card-content\">\n        <div class=\"first-part\">\n         <h2>${data.meals[index].strMeal} (${index + 1})</h2>      \n         <span class=\"order-num\">Order Number: ${data.meals[index].idMeal}</span>\n         </div>       \n        </div>                     \n        <div class=\"reserve\" id=\"comment${index}\"></div>\n        <h2 class=\"comment-h2\">Add a comment</h2>\n        <form id=\"form${index}\">        \n        <input type=\"text\" id=\"name${index}\" placeholder=\"Your name\" required><br>\n        <textarea name=\"text-area\" id=\"text${index}\" class=\"text-area\" placeholder=\"Your insights\" rows=\"5\" maxlength=\"500\" required></textarea><br>\n        <button class=\"comment-btn\" type=\"button\">Comment</button>\n        </form>        \n       `;\n        this.mealPopup.appendChild(mealContainer);\n        const commentId = document.getElementById(`comment${index}`);\n        this.getComment(commentId, index);\n        const comment = document.querySelectorAll('.comment-btn');\n        this.addCommentOnPopup(comment, index);\n        this.closeMeal(index);\n      });\n    });\n  }\n\n  //  Add comment on Popup\n  addCommentOnPopup = async (comments, index) => {\n    comments.forEach((item) => {\n      item.addEventListener('click', (event) => {\n        event.preventDefault();\n        const commentId = document.getElementById(`comment${index}`);\n        const nameValue = document.getElementById(`name${index}`).value;\n        const commentValue = document.getElementById(`text${index}`).value;\n        const formId = document.getElementById(`form${index}`);\n        if (nameValue === '' || commentValue === '') return;\n\n        const commentData = {\n          item_id: `item${index}`,\n          username: nameValue,\n          comment: commentValue,\n        };\n        const commentString = JSON.stringify(commentData);\n        const data = JSON.parse(commentString);\n        this.addComment(data, commentId, index);\n        formId.reset();\n      });\n    });\n  }\n\n  displayComment = (commentData, commentId) => {\n    let commentContainer = '';\n    const commentCount = document.createElement('div');\n    commentCount.className = 'comment-count';\n    commentCount.innerHTML = `Comments (${commentData.length})`;\n    commentData.forEach((item) => {\n      const commentContent = `      \n       <div class=\"comment-container\">${item.creation_date}<br>${item.username}: ${item.comment}</div>     \n    `;\n      commentContainer += commentContent;\n    });\n    commentId.innerHTML = commentContainer;\n    commentId.insertBefore(commentCount, commentId.children[0]);\n  }\n\n  // close popup when the close button is cliked\n  closeMeal = (index) => {\n    const closeBtn = document.querySelectorAll('.close');\n    closeBtn.forEach((item) => {\n      item.addEventListener('click', () => {\n        document.getElementById(`${index}`).remove();\n      });\n    });\n  }\n\n  // Add Comments\n  addComment = async (data, commentId, index) => {\n    const response = await fetch(this.INV_API_URL, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    this.getComment(commentId, index);\n    return response;\n  }\n\n  //  Get comments\n  getComment = async (commentId, index) => {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/comments?item_id=item${index}`);\n    const comments = await response.text().catch((error) => new Error(error));\n    const commentsData = JSON.parse(comments);\n    if (commentsData.error === undefined) {\n      this.displayComment(commentsData, commentId);\n    }\n  }\n}\n\n//# sourceURL=webpack://e-meal/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MealHome)\n/* harmony export */ });\nclass MealHome {\n  // Initialization\n  constructor() {\n    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';\n    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/likes';\n    this.mealCards = document.getElementById('meal-cards');\n  }\n\n  // Get meals from Api, throw error if promise was not resoved\n  //  otherwise display meal if the page loads\n getMealHome = async () => {\n   const response = await fetch(this.API_URL);\n   const data = await response.json().catch((error) => new Error(error));\n   this.displayMeal(data);\n };\n\n //  display meals on Api\n displayMeal = (data) => {\n   document.getElementById('item-counter').innerHTML = data.length;\n   let cardContainer = '';\n   data.meals.forEach((item, index) => {\n     const cardContent = `\n    <div class=\"card\">\n    <div class=\"card-image\">\n            <img src=\"${item.strMealThumb}\"/>\n            </div>\n            <div class=\"card-content\">\n             <div class=\"first-part\">\n              <h2>${item.strMeal} (${index + 1})</h2>\n              <div class='like-part strMeal'>\n              <i class=\"fa-solid fa-heart like-icon\" id='likes${index}'></i> \n              <span class='like-count' id=\"count${index}\"></span>\n              </div>\n             </div>\n              <div class=\"second-part\">\n              <button class=\"comment-meal\">Comment</button>\n              <button class=\"reserve-meal\">Reservation</button>\n              </div>\n            </div>\n            </div>\n            `;\n     cardContainer += cardContent;\n   });\n\n   this.mealCards.innerHTML = cardContainer;\n   const selectAlllikes = document.querySelectorAll('.like-count');\n   selectAlllikes.forEach((item, likesId) => {\n     this.getCounts(likesId);\n   });\n   this.incrementLikes();\n }\n\n//  display counts\ndisplayCount = (countsData, likesId) => {\n  const likesContainer = document.getElementById(`count${likesId}`);\n  const filtered = countsData.filter((ele) => ele.item_id === `item${likesId}`);\n  filtered.forEach((item) => {\n    likesContainer.innerHTML = `${item.likes} likes`;\n    if (item.likes === 1) {\n      likesContainer.innerHTML = '1 like';\n    }\n  });\n  if (likesContainer.innerHTML.trim() === '') {\n    likesContainer.innerHTML = '0 like';\n  }\n}\n\n//  Increment likes if the heart icon is cliked\nincrementLikes = () => {\n  const selectAllHeart = document.querySelectorAll('.fa-heart');\n  selectAllHeart.forEach((item, likesId) => {\n    item.addEventListener('click', () => {\n      const creatLikes = { item_id: `item${likesId}` };\n      const likesString = JSON.stringify(creatLikes);\n      const data = JSON.parse(likesString);\n      this.addCount(data, likesId);\n    });\n  });\n}\n\n  // Add Likes\n  addCount = async (data, likesId) => {\n    const response = await fetch(this.INV_API_URL, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    this.getCounts(likesId);\n    return response;\n  }\n\n  //  fetc count from involvment api\n    getCounts = async (likesId) => {\n      const response = await fetch(this.INV_API_URL);\n      const counts = await response.text().catch((error) => new Error(error));\n      const countsData = JSON.parse(counts);\n      this.displayCount(countsData, likesId);\n    }\n}\n\n\n//# sourceURL=webpack://e-meal/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Reservation)\n/* harmony export */ });\nclass Reservation {\n  // Initialization\n  constructor() {\n    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';\n    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/reservations/';\n    this.mealPopup = document.getElementById('meals-popup');\n  }\n\n  // Get meals from Api, throw error if promise was not resoved\n  //  otherwise popup meal if comment button is clicked\n\n  fetchReservation = async () => {\n    const response = await fetch(this.API_URL);\n    const data = await response.json().catch((error) => new Error(error));\n    this.popupReserve(data);\n  };\n\n  //  Function that display meal when comment button is cloked\n  popupReserve = (data) => {\n    const selectAllMeal = document.querySelectorAll('.reserve-meal');\n    selectAllMeal.forEach((item, index) => {\n      item.addEventListener('click', () => {\n        const mealContainer = document.createElement('div');\n        mealContainer.className = 'modal-container';\n        mealContainer.id = `${index}`;\n        mealContainer.innerHTML = `\n      <div><img class=\"close\" src=\"./assets/images/close.svg\" alt=\"close-button\"></div> \n       <div class=\"card-image\">\n       <img src=\"${data.meals[index].strMealThumb}\">\n       </div>\n       <div class=\"card-content\">\n        <div class=\"first-part\">\n         <h2>${data.meals[index].strMeal} (${index + 1})</h2>      \n         <span class=\"order-num\">Order Number: ${data.meals[index].idMeal}</span>\n         </div>       \n        </div>                     \n        <div class=\"reserve\" id=\"reserve${index}\"></div>\n        <h2 class=\"comment-h2\">Add a reservation</h2>\n        <form id=\"form${index}\">        \n        <input type=\"text\" id=\"name${index}\" placeholder=\"Your name\" required><br>\n        <input type=\"text\" id=\"stadate${index}\" placeholder=\"Start date: YYYY-MM-DD\" required><br>\n        <input type=\"text\" id=\"enddate${index}\" placeholder=\"End date: YYYY-MM-DD\" required><br>        \n        <button class=\"comment-btn\" type=\"button\">Reserve</button>\n        </form>\n        \n       `;\n        this.mealPopup.appendChild(mealContainer);\n        const commentId = document.getElementById(`reserve${index}`);\n        this.getReserve(commentId, index);\n        const comment = document.querySelectorAll('.comment-btn');\n        this.addReserveOnPopup(comment, index);\n        this.closeReserve(index);\n      });\n    });\n  }\n\n  //  Add comment on Popup\n  addReserveOnPopup = async (comments, index) => {\n    comments.forEach((item) => {\n      item.addEventListener('click', (event) => {\n        event.preventDefault();\n        const commentId = document.getElementById(`reserve${index}`);\n        const nameValue = document.getElementById(`name${index}`).value;\n        const startValue = document.getElementById(`stadate${index}`).value;\n        const endValue = document.getElementById(`enddate${index}`).value;\n        const formId = document.getElementById(`form${index}`);\n        if (nameValue === '' || startValue === '' || endValue === '') return;\n\n        const commentData = {\n          item_id: `item${index}`,\n          username: nameValue,\n          date_start: startValue,\n          date_end: endValue,\n        };\n        const commentString = JSON.stringify(commentData);\n        const data = JSON.parse(commentString);\n        this.addReserve(data, commentId, index);\n        this.addReserve(data, commentId, index);\n        formId.reset();\n      });\n    });\n  }\n\n  displayReserve = (commentData, commentId) => {\n    let commentContainer = '';\n    const commentCount = document.createElement('div');\n    commentCount.className = 'comment-count';\n    commentCount.innerHTML = `Reservations (${commentData.length})`;\n    commentData.forEach((item) => {\n      const commentContent = `      \n       <div class=\"comment-container\">${item.date_start} - ${item.date_end} by ${item.username}</div>     \n    `;\n      commentContainer += commentContent;\n    });\n    commentId.innerHTML = commentContainer;\n    commentId.insertBefore(commentCount, commentId.children[0]);\n  }\n\n  // close popup when the close button is cliked\n  closeReserve = (index) => {\n    const closeBtn = document.querySelectorAll('.close');\n    closeBtn.forEach((item) => {\n      item.addEventListener('click', () => {\n        document.getElementById(`${index}`).remove();\n      });\n    });\n  }\n\n  // Add Comments\n  addReserve = async (data, commentId, index) => {\n    const response = await fetch(this.INV_API_URL, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    this.getReserve(commentId, index);\n    return response;\n  }\n\n  //  Get comments\n  getReserve = async (commentId, index) => {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/reservations?item_id=item${index}`);\n    const comments = await response.text().catch((error) => new Error(error));\n    const commentsData = JSON.parse(comments);\n    if (commentsData.error === undefined) {\n      this.displayReserve(commentsData, commentId);\n    }\n  }\n}\n\n//# sourceURL=webpack://e-meal/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/assets/images/S&L-logo.png":
/*!****************************************!*\
  !*** ./src/assets/images/S&L-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/S&L-logo.png\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/S&L-logo.png?");

/***/ }),

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/close.svg\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/close.svg?");

/***/ }),

/***/ "./src/assets/images/meal-screnshot.png":
/*!**********************************************!*\
  !*** ./src/assets/images/meal-screnshot.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/meal-screnshot.png\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/meal-screnshot.png?");

/***/ }),

/***/ "./src/assets/images/meal1.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/meal1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/meal1.jpg\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/meal1.jpg?");

/***/ }),

/***/ "./src/assets/images/meal2.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/meal2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/meal2.jpg\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/meal2.jpg?");

/***/ }),

/***/ "./src/assets/images/meal3.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/meal3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/meal3.jpg\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/meal3.jpg?");

/***/ }),

/***/ "./src/assets/images/meal4.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/meal4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/meal4.jpg\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/meal4.jpg?");

/***/ }),

/***/ "./src/assets/images/meal5.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/meal5.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/meal5.jpg\";\n\n//# sourceURL=webpack://e-meal/./src/assets/images/meal5.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;