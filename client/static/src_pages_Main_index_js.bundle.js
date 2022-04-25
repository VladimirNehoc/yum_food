"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkyum_food_app"] = self["webpackChunkyum_food_app"] || []).push([["src_pages_Main_index_js"],{

/***/ "./src/containers/ContainerBlock/StyledComponent.js":
/*!**********************************************************!*\
  !*** ./src/containers/ContainerBlock/StyledComponent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  box-shadow: \", \";\\n  border-radius: \", \";\\n  padding: \", \";\\n  box-sizing: border-box;\\n  background-color: \", \";\\n  color: \", \";\\n\"])), function (props) {\n  return props.theme.containerBlockShadow;\n}, function (props) {\n  return props.theme.borderRadiusM;\n}, function (props) {\n  return props.padding || \"\".concat(props.theme.paddingL, \" \").concat(props.theme.paddingXL);\n}, function (props) {\n  return props.theme.bgCardColor;\n}, function (props) {\n  return props.theme.textColor;\n}));\n\n//# sourceURL=webpack://yum_food_app/./src/containers/ContainerBlock/StyledComponent.js?");

/***/ }),

/***/ "./src/containers/ContainerBlock/index.js":
/*!************************************************!*\
  !*** ./src/containers/ContainerBlock/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledComponent */ \"./src/containers/ContainerBlock/StyledComponent.js\");\n\n\n\n\nvar ContainerBlock = function ContainerBlock(_ref) {\n  var padding = _ref.padding,\n      children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    padding: padding\n  }, children);\n};\n\nContainerBlock.propTypes = {\n  padding: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]).isRequired\n};\nContainerBlock.defaultProps = {\n  padding: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerBlock);\n\n//# sourceURL=webpack://yum_food_app/./src/containers/ContainerBlock/index.js?");

/***/ }),

/***/ "./src/pages/Main/Main.js":
/*!********************************!*\
  !*** ./src/pages/Main/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_ContainerBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/ContainerBlock */ \"./src/containers/ContainerBlock/index.js\");\n\n\n\n\n\n\nvar Main = function Main() {\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.main;\n  }),\n      items = _useSelector.items;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"list-items\"\n  }, lodash__WEBPACK_IMPORTED_MODULE_2___default().map(items, function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n      to: \"/recipe/\".concat(item.id),\n      key: item.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(containers_ContainerBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, item.name)));\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://yum_food_app/./src/pages/Main/Main.js?");

/***/ }),

/***/ "./src/pages/Main/StyledComponent.js":
/*!*******************************************!*\
  !*** ./src/pages/Main/StyledComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n\\n\"]))));\n\n//# sourceURL=webpack://yum_food_app/./src/pages/Main/StyledComponent.js?");

/***/ }),

/***/ "./src/pages/Main/index.js":
/*!*********************************!*\
  !*** ./src/pages/Main/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api */ \"./src/api.js\");\n/* harmony import */ var store_main_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/main/actions */ \"./src/store/main/actions.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main */ \"./src/pages/Main/Main.js\");\n/* harmony import */ var _StyledComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StyledComponent */ \"./src/pages/Main/StyledComponent.js\");\n\n\n\n\n\n\nvar setItems = store_main_actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setItems,\n    setIsLoadingItems = store_main_actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setIsLoadingItems;\n\nvar RecipePage = function RecipePage() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch(setIsLoadingItems(true));\n    api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('recipes').then(function (res) {\n      dispatch(setItems(res.data));\n    })[\"finally\"](function () {\n      dispatch(setIsLoadingItems(false));\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyledComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipePage);\n\n//# sourceURL=webpack://yum_food_app/./src/pages/Main/index.js?");

/***/ })

}]);