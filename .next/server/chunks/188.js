"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 3188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3450);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);




const TOOLBAR_OPTIONS = [
    [
        {
            header: [
                1,
                2,
                3,
                false
            ]
        }
    ],
    [
        {
            font: []
        }
    ],
    [
        {
            list: "ordered"
        },
        {
            list: "bullet"
        }
    ],
    [
        "bold",
        "italic",
        "underline"
    ],
    [
        {
            color: []
        },
        {
            background: []
        }
    ],
    [
        {
            align: []
        }
    ],
    [
        "image",
        "blockquote",
        "code-block"
    ],
    [
        "clean"
    ]
];
function TextEditor(props) {
    const { setQuill  } = props;
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((wrapper)=>{
        if (wrapper == null) return;
        wrapper.innerHTML = "";
        const editor = document.createElement("div");
        wrapper.append(editor);
        const q = new (quill__WEBPACK_IMPORTED_MODULE_2___default())(editor, {
            theme: "snow",
            modules: {
                toolbar: TOOLBAR_OPTIONS
            }
        });
        q.disable();
        q.setText("Loading...");
        setQuill(q);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[93vw] sm:w-[85vw] lg:w-[8.5in] h-[11in] pb-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col items-center h-[11in] text-black font-light w-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: wrapperRef,
                id: "editor",
                className: "editorContainer w-full"
            })
        })
    });
}


/***/ })

};
;