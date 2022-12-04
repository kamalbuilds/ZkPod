/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/StudentRegistration",{

/***/ "./component/Modal.tsx":
/*!*****************************!*\
  !*** ./component/Modal.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var react_qr_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-svg */ \"./node_modules/react-qr-svg/dist-modules/index.js\");\n/* harmony import */ var react_qr_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qr_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./component/index.tsx\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: \"(100vh - 50%)\",\n    bgcolor: \"background.paper\",\n    border: \"2px solid #89dee2\",\n    boxShadow: 24,\n    borderRadius: 5,\n    p: 4\n};\nconst DetailsModal = (props)=>{\n    const { open , handleClose  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n            open: open,\n            onClose: handleClose,\n            \"aria-labelledby\": \"modal-modal-title\",\n            \"aria-describedby\": \"modal-modal-description\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: style,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_svg__WEBPACK_IMPORTED_MODULE_2__.QRCode, {\n                        level: \"Q\",\n                        style: {\n                            width: 256\n                        },\n                        value: JSON.stringify({\n                            h: \"qrProofRequestJson\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.ButtonUI, {\n                    name: \"Mint your Degree\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_c = DetailsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsModal);\nvar _c;\n$RefreshReg$(_c, \"DetailsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvTW9kYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUM2QjtBQUM5QjtBQUNaO0FBRTFCLE1BQU1LLFFBQVE7SUFDWkMsVUFBVTtJQUNWQyxLQUFLO0lBQ0xDLE1BQU07SUFDTkMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLFNBQVM7SUFDVEMsUUFBUTtJQUNSQyxXQUFXO0lBQ1hDLGNBQWE7SUFDYkMsR0FBRztBQUNMO0FBRUEsTUFBTUMsZUFBZSxDQUFDQyxRQUFjO0lBQ2xDLE1BQU0sRUFDSkMsS0FBSSxFQUNKQyxZQUFXLEVBQ1YsR0FBQ0Y7SUFJSixxQkFDRTtrQkFDQSw0RUFBQ2hCLGdEQUFLQTtZQUNKaUIsTUFBTUE7WUFDTkUsU0FBU0Q7WUFDVEUsbUJBQWdCO1lBQ2hCQyxvQkFBaUI7OzhCQUVqQiw4REFBQ3BCLDhDQUFHQTtvQkFBQ3FCLElBQUlsQjs4QkFDVCw0RUFBQ0YsZ0RBQU1BO3dCQUNMcUIsT0FBTTt3QkFDTm5CLE9BQU87NEJBQUVLLE9BQU87d0JBQUk7d0JBQ3BCZSxPQUFPQyxLQUFLQyxTQUFTLENBQUM7NEJBQUNDLEdBQUU7d0JBQW9COzs7Ozs7Ozs7Ozs4QkFHL0MsOERBQUN4Qix1Q0FBUUE7b0JBQUN5QixNQUFLOzs7Ozs7Ozs7Ozs7O0FBSXJCO0tBM0JNYjtBQTZCTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvTW9kYWwudHN4P2E4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7TW9kYWwsQm94LFR5cG9ncmFwaHksVGV4dEZpZWxkLCBCdXR0b259IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcclxuaW1wb3J0IHsgUVJDb2RlIH0gZnJvbSAncmVhY3QtcXItc3ZnJztcclxuaW1wb3J0IHtCdXR0b25VSX0gZnJvbSBcIi5cIlxyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScgYXMgJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IFwiKDEwMHZoIC0gNTAlKVwiLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3JkZXI6ICcycHggc29saWQgIzg5ZGVlMicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBib3JkZXJSYWRpdXM6NSxcclxuICBwOiA0LFxyXG59O1xyXG5cclxuY29uc3QgRGV0YWlsc01vZGFsID0gKHByb3BzOmFueSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG9wZW4sXHJcbiAgICBoYW5kbGVDbG9zZVxyXG4gICAgfT1wcm9wcztcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZX0+XHJcbiAgICAgIDxRUkNvZGVcclxuICAgICAgICBsZXZlbD1cIlFcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTYgfX1cclxuICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoe2g6XCJxclByb29mUmVxdWVzdEpzb25cIn0pfVxyXG4gICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJ1dHRvblVJIG5hbWU9XCJNaW50IHlvdXIgRGVncmVlXCIvPlxyXG4gICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc01vZGFsIl0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWwiLCJCb3giLCJRUkNvZGUiLCJCdXR0b25VSSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsIkRldGFpbHNNb2RhbCIsInByb3BzIiwib3BlbiIsImhhbmRsZUNsb3NlIiwib25DbG9zZSIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtZGVzY3JpYmVkYnkiLCJzeCIsImxldmVsIiwidmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiaCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Modal.tsx\n"));

/***/ }),

/***/ "./component/index.tsx":
/*!*****************************!*\
  !*** ./component/index.tsx ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});