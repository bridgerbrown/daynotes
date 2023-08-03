"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_modules_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/modules/navbar */ \"./components/modules/navbar.tsx\");\n/* harmony import */ var _components_modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modules/footer */ \"./components/modules/footer.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { user  } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_5__.useUser)();\n    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfToday)();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const s = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)(\"daynotes-server.onrender.com\", {\n            transports: [\n                \"websocket\"\n            ]\n        });\n        setSocket(s);\n        console.log(\"Waking up server...\");\n        return ()=>{\n            s.disconnect();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"font-sans overflow-hidden bg-gray-50 min-h-screen w-screen relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modules_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mx-2 mb-96 sm:mx-8 flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-72 w-full flex flex-col justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900\",\n                            children: \"Day-to-day notes, made easy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center mb-24 text-gray-500 text-lg sm:text-xl lg:text-2xl px-2 font-light\",\n                            children: \"Bring your daily notes to the next level with date-based organization.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/api/auth/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border border-blue-700 hover:from-blue-700 hover:to-blue-700 from-blue-600 to-blue-700 shadow-lg hover:shadow-xl transition-all bg-gradient-to-b lg:px-8 lg:py-4 px-6 py-3 text-md lg:text-lg text-white font-semibold rounded-lg\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-light text-gray-500\",\n                            children: [\n                                \"Thanks for signing up! \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/\".concat(user.email, \"/\").concat(today),\n                                    className: \"underline underline-offset-2 hover:text-gray-700 transition-colors\",\n                                    children: \"Click here to make your first note\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 78\n                                }, this),\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mb-36 lg:mb-48\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-48 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-12 sm:mt-16 lg:col-start-1 lg:mt-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-6 md:px-12 lg:relative lg:m-0 lg:h-full lg:px-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/note-preview.png\",\n                                    alt: \"Product preview\",\n                                    width: 2199,\n                                    height: 1147,\n                                    className: \"w-full max-w-[640px] lg:absolute lg:-right-36 lg:h-[540px] lg:w-auto lg:max-w-none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-16 lg:mt-0 mx-auto max-w-2xl px-6 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-32\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl mb-4\",\n                                        children: \"Seamless updating note documents\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mr-4 lg:mr-8 text-lg text-gray-600/80 font-light\",\n                                        children: \"Utilizing the power of Socket.io web sockets, DayNotes allows you to have instantaneously updating documents for real-time synchronization between your browser tabs. With efficient lightweight data transmission, web sockets allow a persistent connection between the server and the client.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pb-96\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-48 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-12 sm:mt-16 lg:col-start-2 lg:mt-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-6 md:px-12 lg:relative lg:m-0 lg:h-full lg:px-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/calendar-preview.png\",\n                                    alt: \"Product preview\",\n                                    width: 1658,\n                                    height: 1040,\n                                    className: \"w-full max-w-[640px] lg:absolute lg:-left-24 lg:h-[540px] lg:w-auto lg:max-w-none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-16 lg:mt-0 mx-auto max-w-2xl px-6 sm:px-6 lg:col-start-1 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-32\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl mb-4\",\n                                        children: \"Calendar-based note organization\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mr-4 lg:mr-8 text-lg text-gray-600/80 font-light\",\n                                        children: \"Using the date-formatting of Date-fns, DayNotes allows users create notes according to any date in the calendar year. Note documents are securely created and stored in a MongoDB database behind their private Auth0 user data.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mx-2 mb-96 sm:mx-8 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mb-10 text-xl md:text-2xl lg:text-3xl text-gray-900\",\n                        children: \"How was this website built?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center mb-24 text-gray-500 text-lg px-2 font-light\",\n                        children: [\n                            \"Learn more about how this Front-End Web Development project was built \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/about\",\n                                className: \"underline underline-offset-4 text-blue-400 hover:text-blue-600 transition-colors\",\n                                children: \"here\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 81\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modules_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/daynotes/pages/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KaQT5fnOuTY4/oPNRa72YflDqa4=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_5__.useUser\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL21vZHVsZXMvbmF2YmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvbW9kdWxlcy9mb290ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwL2NsaWVudCc7XG5pbXBvcnQgeyBzdGFydE9mVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XG4gIGNvbnN0IHRvZGF5ID0gc3RhcnRPZlRvZGF5KCk7XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZTxhbnk+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzID0gaW8oXCJkYXlub3Rlcy1zZXJ2ZXIub25yZW5kZXIuY29tXCIsIHtcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J11cbiAgICB9KTtcbiAgICBzZXRTb2NrZXQocyk7XG4gICAgY29uc29sZS5sb2coXCJXYWtpbmcgdXAgc2VydmVyLi4uXCIpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzLmRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmb250LXNhbnMgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktNTAgbWluLWgtc2NyZWVuIHctc2NyZWVuIHJlbGF0aXZlXCI+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXgtMiBtYi05NiBzbTpteC04IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTcyIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWItMTAgdGV4dC0zeGwgc206dGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgIERheS10by1kYXkgbm90ZXMsIG1hZGUgZWFzeVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi0yNCB0ZXh0LWdyYXktNTAwIHRleHQtbGcgc206dGV4dC14bCBsZzp0ZXh0LTJ4bCBweC0yIGZvbnQtbGlnaHQnPlxuICAgICAgICAgICAgQnJpbmcgeW91ciBkYWlseSBub3RlcyB0byB0aGUgbmV4dCBsZXZlbCB3aXRoIGRhdGUtYmFzZWQgb3JnYW5pemF0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhdXNlciA/XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXBpL2F1dGgvbG9naW5gfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ibHVlLTcwMCBob3Zlcjpmcm9tLWJsdWUtNzAwIGhvdmVyOnRvLWJsdWUtNzAwIGZyb20tYmx1ZS02MDAgdG8tYmx1ZS03MDAgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBiZy1ncmFkaWVudC10by1iIGxnOnB4LTggbGc6cHktNCBweC02IHB5LTMgdGV4dC1tZCBsZzp0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCc+VGhhbmtzIGZvciBzaWduaW5nIHVwISA8TGluayBcbiAgICAgICAgICAgICAgICBocmVmPXtgLyR7dXNlci5lbWFpbH0vJHt0b2RheX1gfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTIgaG92ZXI6dGV4dC1ncmF5LTcwMCB0cmFuc2l0aW9uLWNvbG9ycyc+XG4gICAgICAgICAgICAgICAgICBDbGljayBoZXJlIHRvIG1ha2UgeW91ciBmaXJzdCBub3RlXG4gICAgICAgICAgICAgICAgPC9MaW5rPi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21iLTM2IGxnOm1iLTQ4Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOm14LWF1dG8gbGc6Z3JpZCBsZzptYXgtdy03eGwgbGc6Z3JpZC1mbG93LWNvbC1kZW5zZSBsZzpncmlkLWNvbHMtMiBsZzpnYXAtNDggbGc6cHgtOCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEyIHNtOm10LTE2IGxnOmNvbC1zdGFydC0xIGxnOm10LTAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcHgtNiBtZDpweC0xMiBsZzpyZWxhdGl2ZSBsZzptLTAgbGc6aC1mdWxsIGxnOnB4LTAnPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e1wiL25vdGUtcHJldmlldy5wbmdcIn1cbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9kdWN0IHByZXZpZXdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMTk5fVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTE0N31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1bNjQwcHhdIGxnOmFic29sdXRlIGxnOi1yaWdodC0zNiBsZzpoLVs1NDBweF0gbGc6dy1hdXRvIGxnOm1heC13LW5vbmUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTYgbGc6bXQtMCBteC1hdXRvIG1heC13LTJ4bCBweC02IHNtOnB4LTYgbGc6Y29sLXN0YXJ0LTIgbGc6bXgtMCBsZzptYXgtdy1ub25lIGxnOnB4LTAgbGc6cHQtMjQgbGc6cGItMzInPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgbWItNCc+XG4gICAgICAgICAgICAgICAgU2VhbWxlc3MgdXBkYXRpbmcgbm90ZSBkb2N1bWVudHMgXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXItNCBsZzptci04IHRleHQtbGcgdGV4dC1ncmF5LTYwMC84MCBmb250LWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICBVdGlsaXppbmcgdGhlIHBvd2VyIG9mIFNvY2tldC5pbyB3ZWIgc29ja2V0cywgRGF5Tm90ZXMgYWxsb3dzXG4gICAgICAgICAgICAgICAgeW91IHRvIGhhdmUgaW5zdGFudGFuZW91c2x5IHVwZGF0aW5nIGRvY3VtZW50cyBmb3IgcmVhbC10aW1lIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHlvdXIgYnJvd3NlciB0YWJzLlxuICAgICAgICAgICAgICAgIFdpdGggZWZmaWNpZW50IGxpZ2h0d2VpZ2h0IGRhdGEgdHJhbnNtaXNzaW9uLCB3ZWIgc29ja2V0cyBhbGxvdyBhIHBlcnNpc3RlbnQgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZVxuICAgICAgICAgICAgICAgIHNlcnZlciBhbmQgdGhlIGNsaWVudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYi05Nic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpteC1hdXRvIGxnOmdyaWQgbGc6bWF4LXctN3hsIGxnOmdyaWQtZmxvdy1jb2wtZGVuc2UgbGc6Z3JpZC1jb2xzLTIgbGc6Z2FwLTQ4IGxnOnB4LTgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMiBzbTptdC0xNiBsZzpjb2wtc3RhcnQtMiBsZzptdC0wJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB4LTYgbWQ6cHgtMTIgbGc6cmVsYXRpdmUgbGc6bS0wIGxnOmgtZnVsbCBsZzpweC0wJz5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9jYWxlbmRhci1wcmV2aWV3LnBuZ1wifVxuICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgcHJldmlld1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE2NTh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDQwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LVs2NDBweF0gbGc6YWJzb2x1dGUgbGc6LWxlZnQtMjQgbGc6aC1bNTQwcHhdIGxnOnctYXV0byBsZzptYXgtdy1ub25lJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTE2IGxnOm10LTAgbXgtYXV0byBtYXgtdy0yeGwgcHgtNiBzbTpweC02IGxnOmNvbC1zdGFydC0xIGxnOm14LTAgbGc6bWF4LXctbm9uZSBsZzpweC0wIGxnOnB0LTI0IGxnOnBiLTMyJz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIG1iLTQnPlxuICAgICAgICAgICAgICAgIENhbGVuZGFyLWJhc2VkIG5vdGUgb3JnYW5pemF0aW9uXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXItNCBsZzptci04IHRleHQtbGcgdGV4dC1ncmF5LTYwMC84MCBmb250LWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICBVc2luZyB0aGUgZGF0ZS1mb3JtYXR0aW5nIG9mIERhdGUtZm5zLCBEYXlOb3RlcyBhbGxvd3MgdXNlcnMgY3JlYXRlIG5vdGVzIGFjY29yZGluZyB0byBhbnkgZGF0ZSBpbiB0aGUgY2FsZW5kYXIgeWVhci5cbiAgICAgICAgICAgICAgICBOb3RlIGRvY3VtZW50cyBhcmUgc2VjdXJlbHkgY3JlYXRlZCBhbmQgc3RvcmVkIGluIGEgTW9uZ29EQiBkYXRhYmFzZSBiZWhpbmQgdGhlaXIgcHJpdmF0ZSBBdXRoMCB1c2VyIGRhdGEuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXgtMiBtYi05NiBzbTpteC04IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItMTAgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICBIb3cgd2FzIHRoaXMgd2Vic2l0ZSBidWlsdD9cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi0yNCB0ZXh0LWdyYXktNTAwIHRleHQtbGcgcHgtMiBmb250LWxpZ2h0Jz5cbiAgICAgICAgICBMZWFybiBtb3JlIGFib3V0IGhvdyB0aGlzIEZyb250LUVuZCBXZWIgRGV2ZWxvcG1lbnQgcHJvamVjdCB3YXMgYnVpbHQgPExpbmsgXG4gICAgICAgICAgICBocmVmPXtcIi9hYm91dFwifSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtNCB0ZXh0LWJsdWUtNDAwIGhvdmVyOnRleHQtYmx1ZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMnPlxuICAgICAgICAgICAgICBoZXJlXG4gICAgICAgICAgPC9MaW5rPi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9tYWluPlxuICApXG59O1xuXG5cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJJbWFnZSIsIkxpbmsiLCJ1c2VVc2VyIiwic3RhcnRPZlRvZGF5IiwiaW8iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VyIiwidG9kYXkiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJzIiwidHJhbnNwb3J0cyIsImNvbnNvbGUiLCJsb2ciLCJkaXNjb25uZWN0IiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJkaXYiLCJoMSIsInAiLCJocmVmIiwiYnV0dG9uIiwiZW1haWwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});