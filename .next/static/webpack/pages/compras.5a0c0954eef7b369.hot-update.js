"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/compras",{

/***/ "./components/historial/compras/Compra.jsx":
/*!*************************************************!*\
  !*** ./components/historial/compras/Compra.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_historial_compras_compraContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/historial/compras/compraContext */ \"./context/historial/compras/compraContext.jsx\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/auth/authContext */ \"./context/auth/authContext.jsx\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Compra = function(param) {\n    var producto = param.producto;\n    var _this1 = _this;\n    _s();\n    var nombre = producto.nombre, marca = producto.marca, modelo = producto.modelo, cantidad = producto.cantidad, proveedor1 = producto.proveedor, fecha_compra = producto.fecha_compra, valor_dolar_compra = producto.valor_dolar_compra;\n    var AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    var modo = AuthContext.modo;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"border-b dark:border-none hover:bg-gray-50 dark:hover:bg-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center font-semibold\",\n                children: nombre\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center\",\n                children: marca\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center\",\n                children: modelo\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: cantidad.map(function(unidades, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: unidades\n                        }, i, false, {\n                            fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 50\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: fecha_compra.map(function(fecha, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: fecha\n                        }, i, false, {\n                            fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 51\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: proveedor1.map(function(proveedor, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: proveedor\n                        }, i, false, {\n                            fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 52\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"p-3 dark:text-gray-50 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: valor_dolar_compra.map(function(valor, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: proveedor1\n                        }, i, false, {\n                            fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 57\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Adrian\\\\Ciber\\\\Ciber_Stock_Frontend\\\\components\\\\historial\\\\compras\\\\Compra.jsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_s(Compra, \"tfsuSMVOXk4a5neBgJjOa+ptw8Y=\");\n_c = Compra;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compra);\nvar _c;\n$RefreshReg$(_c, \"Compra\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hpc3RvcmlhbC9jb21wcmFzL0NvbXByYS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDTTtBQUMwQztBQUNqQjtBQUM3Qjs7QUFFL0IsSUFBTUssTUFBTSxHQUFHLGdCQUFnQjtRQUFkQyxRQUFRLFNBQVJBLFFBQVE7OztJQUNyQixJQUFPQyxNQUFNLEdBQTBFRCxRQUFRLENBQXhGQyxNQUFNLEVBQUVDLEtBQUssR0FBbUVGLFFBQVEsQ0FBaEZFLEtBQUssRUFBRUMsTUFBTSxHQUEyREgsUUFBUSxDQUF6RUcsTUFBTSxFQUFFQyxRQUFRLEdBQWlESixRQUFRLENBQWpFSSxRQUFRLEVBQUVDLFVBQVMsR0FBc0NMLFFBQVEsQ0FBdkRLLFNBQVMsRUFBRUMsWUFBWSxHQUF3Qk4sUUFBUSxDQUE1Q00sWUFBWSxFQUFFQyxrQkFBa0IsR0FBSVAsUUFBUSxDQUE5Qk8sa0JBQWtCO0lBRW5GLElBQU1DLFdBQVcsR0FBR2IsaURBQVUsQ0FBQ0UsaUVBQVcsQ0FBQztJQUMzQyxJQUFNLElBQUssR0FBSVcsV0FBVyxDQUFuQkMsSUFBSTtJQUdYLHFCQUNJLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxtRUFBbUU7OzBCQUM3RSw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGlEQUFpRDswQkFBRVYsTUFBTTs7Ozs7cUJBQU07MEJBQzdFLDhEQUFDVyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsbUNBQW1DOzBCQUFFVCxLQUFLOzs7OztxQkFBTTswQkFDOUQsOERBQUNVLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxtQ0FBbUM7MEJBQUVSLE1BQU07Ozs7O3FCQUFNOzBCQUMvRCw4REFBQ1MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLG1DQUFtQzswQkFDL0MsNEVBQUNFLElBQUU7OEJBQUVULFFBQVEsQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLFFBQVEsRUFBRUMsQ0FBQzs2Q0FBSyw4REFBQ0MsSUFBRTs0QkFBU04sU0FBUyxFQUFDLE1BQU07c0NBQUVJLFFBQVE7MkJBQTdCQyxDQUFDOzs7O2tDQUFrQztxQkFBQSxDQUFDOzs7Ozt5QkFBTTs7Ozs7cUJBQ25GOzBCQUNMLDhEQUFDSixJQUFFO2dCQUFDRCxTQUFTLEVBQUMsbUNBQW1DOzBCQUMvQyw0RUFBQ0UsSUFBRTs4QkFBRVAsWUFBWSxDQUFDUSxHQUFHLENBQUMsU0FBQ0ksS0FBSyxFQUFFRixDQUFDOzZDQUFLLDhEQUFDQyxJQUFFOzRCQUFTTixTQUFTLEVBQUMsTUFBTTtzQ0FBRU8sS0FBSzsyQkFBMUJGLENBQUM7Ozs7a0NBQStCO3FCQUFBLENBQUM7Ozs7O3lCQUFNOzs7OztxQkFDakY7MEJBQ0wsOERBQUNKLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxtQ0FBbUM7MEJBQy9DLDRFQUFDRSxJQUFFOzhCQUFFUixVQUFTLENBQUNTLEdBQUcsQ0FBQyxTQUFDVCxTQUFTLEVBQUVXLENBQUM7NkNBQUssOERBQUNDLElBQUU7NEJBQVNOLFNBQVMsRUFBQyxNQUFNO3NDQUFFTixTQUFTOzJCQUE5QlcsQ0FBQzs7OztrQ0FBbUM7cUJBQUEsQ0FBQzs7Ozs7eUJBQU07Ozs7O3FCQUN0RjswQkFDTCw4REFBQ0osSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLG1DQUFtQzswQkFDL0MsNEVBQUNFLElBQUU7OEJBQUVOLGtCQUFrQixDQUFDTyxHQUFHLENBQUMsU0FBQ0ssS0FBSyxFQUFFSCxDQUFDOzZDQUFLLDhEQUFDQyxJQUFFOzRCQUFTTixTQUFTLEVBQUMsTUFBTTtzQ0FBRU4sVUFBUzsyQkFBOUJXLENBQUM7Ozs7a0NBQW1DO3FCQUFBLENBQUM7Ozs7O3lCQUFNOzs7OztxQkFDM0Y7Ozs7OzthQUdKLENBQ1A7Q0FDTDtHQTVCS2pCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQThCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGlzdG9yaWFsL2NvbXByYXMvQ29tcHJhLmpzeD8wY2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29tcHJhQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9oaXN0b3JpYWwvY29tcHJhcy9jb21wcmFDb250ZXh0XCI7XHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5cclxuY29uc3QgQ29tcHJhID0gKHtwcm9kdWN0b30pID0+IHtcclxuICAgIGNvbnN0IHtub21icmUsIG1hcmNhLCBtb2RlbG8sIGNhbnRpZGFkLCBwcm92ZWVkb3IsIGZlY2hhX2NvbXByYSwgdmFsb3JfZG9sYXJfY29tcHJhfSA9IHByb2R1Y3RvXHJcblxyXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KVxyXG4gICAgY29uc3Qge21vZG99ID0gQXV0aENvbnRleHRcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iIGRhcms6Ym9yZGVyLW5vbmUgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTMgZGFyazp0ZXh0LWdyYXktNTAgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPntub21icmV9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMyBkYXJrOnRleHQtZ3JheS01MCB0ZXh0LWNlbnRlclwiPnttYXJjYX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zIGRhcms6dGV4dC1ncmF5LTUwIHRleHQtY2VudGVyXCI+e21vZGVsb308L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zIGRhcms6dGV4dC1ncmF5LTUwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHVsPntjYW50aWRhZC5tYXAoKHVuaWRhZGVzLCBpKSA9PiA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJtYi0yXCI+e3VuaWRhZGVzfTwvbGk+KX08L3VsPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zIGRhcms6dGV4dC1ncmF5LTUwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHVsPntmZWNoYV9jb21wcmEubWFwKChmZWNoYSwgaSkgPT4gPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibWItMlwiPntmZWNoYX08L2xpPil9PC91bD5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMyBkYXJrOnRleHQtZ3JheS01MCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDx1bD57cHJvdmVlZG9yLm1hcCgocHJvdmVlZG9yLCBpKSA9PiA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJtYi0yXCI+e3Byb3ZlZWRvcn08L2xpPil9PC91bD5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMyBkYXJrOnRleHQtZ3JheS01MCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDx1bD57dmFsb3JfZG9sYXJfY29tcHJhLm1hcCgodmFsb3IsIGkpID0+IDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cIm1iLTJcIj57cHJvdmVlZG9yfTwvbGk+KX08L3VsPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcbiAgICAgICAgPC90cj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wcmE7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlQ29udGV4dCIsImNvbXByYUNvbnRleHQiLCJhdXRoQ29udGV4dCIsIlN3YWwiLCJDb21wcmEiLCJwcm9kdWN0byIsIm5vbWJyZSIsIm1hcmNhIiwibW9kZWxvIiwiY2FudGlkYWQiLCJwcm92ZWVkb3IiLCJmZWNoYV9jb21wcmEiLCJ2YWxvcl9kb2xhcl9jb21wcmEiLCJBdXRoQ29udGV4dCIsIm1vZG8iLCJ0ciIsImNsYXNzTmFtZSIsInRkIiwidWwiLCJtYXAiLCJ1bmlkYWRlcyIsImkiLCJsaSIsImZlY2hhIiwidmFsb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/historial/compras/Compra.jsx\n");

/***/ })

});