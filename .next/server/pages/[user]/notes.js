"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 1985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Notes),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/modules/navbar.tsx
var navbar = __webpack_require__(7903);
// EXTERNAL MODULE: ./components/modules/footer.tsx
var footer = __webpack_require__(3979);
// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/next/image.js
var next_image = __webpack_require__(2009);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/next/router.js
var next_router = __webpack_require__(3169);
;// CONCATENATED MODULE: ./components/modules/notes/NotePreview.tsx





function NotePreview(props) {
    const { usersEmail , note , setDeleteConfirmed  } = props;
    const router = (0,next_router.useRouter)();
    const noteObj = JSON.stringify(note.data.ops);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(false);
    function extractNoteData(inputString) {
        if (inputString) {
            const pattern = /"insert":"([^"]*?)(?:\\n"|\\n})|[^"]*?"insert":"([^"]*)"/g;
            const matches = inputString.match(pattern);
            const extractedText = [];
            if (matches) {
                for (const match of matches){
                    const capturedText = match.match(/"insert":"([^"]*)/);
                    if (capturedText) {
                        const text = capturedText[1].replace(/\\n/g, "");
                        extractedText.push(text);
                    }
                }
            }
            return extractedText.join(" ");
        }
    }
    console.log(extractNoteData(noteObj));
    console.log(noteObj);
    async function deleteSelectedNote(userId, date) {
        await fetch("/api/notes", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                date
            })
        }).then(()=>{
            console.log("Note deleted");
        }).catch((error)=>{
            console.log(error);
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group mr-6 mb-3",
        children: [
            deleteConfirmation ? /*#__PURE__*/ jsx_runtime_.jsx("div", {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/circle-xmark.png",
                        alt: "Delete note icon",
                        width: 512,
                        height: 512,
                        className: "hover:opacity-90 opacity-70 cursor-pointer group-hover:block relative hidden w-6 h-6 z-30 bottom-[10px] left-[112px] sm:bottom-2.5 sm:left-[185px] rounded-full",
                        onClick: ()=>setDeleteConfirmation(true)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "group-hover:block relative hidden bg-boxBg rounded-full z-20 bottom-[34px] left-[112px] sm:bottom-[34px] sm:left-[185px] w-6 h-6"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[125px] h-[200px] sm:w-[200px] sm:h-[275px] opacity-100 hover:opacity-100 bg-white hover:drop-shadow-md drop-shadow-sm cursor-pointer hover:border-gray-500 border-gray-400 border rounded-md",
                onClick: ()=>deleteConfirmation ? null : router.push(`/${usersEmail}/${note.date}`),
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "h-[250px] text-ellipsis overflow-hidden overflow-y-hidden opacity-70 hover:opacity-100 transition-opacity text-blackHeading text-sm font-light py-3 px-3",
                    children: deleteConfirmation ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col mt-12 justify-start items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-4 text-blackHeading font-thin text-sm",
                                children: "Delete note?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between items-center space-x-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/check.png",
                                        width: 448,
                                        height: 304,
                                        alt: "Confirmation icon",
                                        className: "w-5 h-fit cursor-pointer opacity-40 hover:opacity-90 transition-opacity",
                                        onClick: ()=>{
                                            setDeleteConfirmation(false);
                                            deleteSelectedNote(note.userId, note.date);
                                            setDeleteConfirmed(true);
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/x.png",
                                        width: 448,
                                        height: 448,
                                        alt: "Cancellation icon",
                                        className: "w-4 h-fit cursor-pointer opacity-40 hover:opacity-90 transition-opacity",
                                        onClick: ()=>setDeleteConfirmation(false)
                                    })
                                ]
                            })
                        ]
                    }) : extractNoteData(noteObj)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-10 mx-1 flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "text-blackHeading font-light",
                    children: (0,external_date_fns_.format)(new Date(note.date), "LLLL d, yyyy")
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
;// CONCATENATED MODULE: ./pages/[user]/notes.tsx








function Notes({ userCtxt  }) {
    const inactiveSortItemCSS = `opacity-50 hover:opacity-100 flex cursor-pointer`;
    const activeSortItemCSS = `opacity-100 flex cursor-pointer`;
    const arrowDescendingCss = `cursor-pointer ml-1.5 mr-4 mt-0.5 w-3 opacity-70 h-fit`;
    const arrowAscendingCss = `rotate-180 cursor-pointer ml-1.5 mr-4 mt-0.5 w-3 opacity-70 h-fit`;
    const [userId, setUserId] = (0,external_react_.useState)("");
    const [usersNotes, setUsersNotes] = (0,external_react_.useState)([]);
    const [filteredNotes, setFilteredNotes] = (0,external_react_.useState)([]);
    const [sortedType, setSortedType] = (0,external_react_.useState)("date");
    const [dateAscending, setDateAscending] = (0,external_react_.useState)(false);
    const [deleteConfirmed, setDeleteConfirmed] = (0,external_react_.useState)(false);
    const [searchQuery, setSearchQuery] = (0,external_react_.useState)("");
    const usersEmail = userCtxt.email;
    async function getUserIdAndNotes(email) {
        await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}`).then((response)=>response.json()).then((data)=>{
            setUserId(data.data.userId);
            getUsersNotes(data.data.userId);
        });
    }
    async function getUsersNotes(userId) {
        await fetch(`https://daynotes-client.vercel.app/api/notes?userId=${userId}`).then((response)=>response.json()).then((data)=>{
            setUsersNotes(data.data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    const handleSearch = (event)=>{
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    };
    (0,external_react_.useEffect)(()=>{
        const filteredNotes = usersNotes.filter((note)=>{
            const { data , date  } = note;
            const formattedData = JSON.stringify(data);
            const formattedDate = JSON.stringify((0,external_date_fns_.format)(new Date(date), "LLLL d, yyyy"));
            return formattedData.toLowerCase().includes(searchQuery) || formattedDate.toLowerCase().includes(searchQuery);
        });
        setFilteredNotes(filteredNotes);
    }, [
        usersNotes,
        searchQuery
    ]);
    const sortedNotesAscDates = [
        ...usersNotes
    ].sort((a, b)=>(0,external_date_fns_.compareAsc)((0,external_date_fns_.parseISO)(a.date), (0,external_date_fns_.parseISO)(b.date)));
    const sortedNotesDescDates = [
        ...usersNotes
    ].sort((a, b)=>(0,external_date_fns_.compareDesc)((0,external_date_fns_.parseISO)(a.date), (0,external_date_fns_.parseISO)(b.date)));
    const sortedNotesLastUpdated = [
        ...usersNotes
    ].sort((a, b)=>(0,external_date_fns_.compareDesc)((0,external_date_fns_.parseISO)(a.lastUpdated), (0,external_date_fns_.parseISO)(b.lastUpdated)));
    const sortedFilteredNotesAscDates = [
        ...filteredNotes
    ].sort((a, b)=>(0,external_date_fns_.compareAsc)((0,external_date_fns_.parseISO)(a.date), (0,external_date_fns_.parseISO)(b.date)));
    const sortedFilteredNotesDescDates = [
        ...filteredNotes
    ].sort((a, b)=>(0,external_date_fns_.compareDesc)((0,external_date_fns_.parseISO)(a.date), (0,external_date_fns_.parseISO)(b.date)));
    const sortedFilteredNotesLastUpdated = [
        ...filteredNotes
    ].sort((a, b)=>(0,external_date_fns_.compareDesc)((0,external_date_fns_.parseISO)(a.lastUpdated), (0,external_date_fns_.parseISO)(b.lastUpdated)));
    (0,external_react_.useEffect)(()=>{
        getUserIdAndNotes(usersEmail);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (deleteConfirmed) {
            getUsersNotes(userId);
            setDeleteConfirmed(false);
        }
    }, [
        deleteConfirmed
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "font-sans bg-gray-50 min-h-screen w-screen relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-2 sm:mx-8 flex flex-col justify-center items-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "min-h-[85vh] border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-regular text-blackHeading",
                                children: "Notes"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "flex justify-between items-start sm:items-center mx-4 sm:mx-8 mt-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-sm mt-2 sm:mt-0 flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: " mr-4 text-blackHeading font-light",
                                            children: "Sort by:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: sortedType == "date" ? activeSortItemCSS : inactiveSortItemCSS,
                                            onClick: ()=>{
                                                sortedType == "date" ? setDateAscending(!dateAscending) : setSortedType("date");
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: ":text-sm cursor-pointer text-blackHeading font-light",
                                                    children: "Date"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/arrow-down.png",
                                                    alt: "Date sorting ascending or descending arrow",
                                                    width: 384,
                                                    height: 448,
                                                    className: dateAscending ? arrowAscendingCss : arrowDescendingCss
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: sortedType == "last-updated" ? activeSortItemCSS : inactiveSortItemCSS,
                                            onClick: ()=>setSortedType("last-updated"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "cursor-pointer text-blackHeading font-light",
                                                children: "Last Updated"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex sm:flex-row flex-col-reverse justify-center items-end sm:items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mt-2 sm:mt-0 mr-2 sm:mr-4 text-xs sm:text-sm font-light text-grayHeading",
                                            children: usersNotes ? usersNotes.length == 1 ? "1 note made" : usersNotes.length + " notes made" : "0 notes made"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-min h-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "search",
                                                    placeholder: "Search notes...",
                                                    id: "searchInput",
                                                    onChange: handleSearch,
                                                    className: "text-sm pl-10 pr-4 font-light border-grayHeading border rounded-full h-10 w-48 md:w-72"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/search.png",
                                                    alt: "search icon, magnifying glass",
                                                    width: 512,
                                                    height: 512,
                                                    className: "w-4 relative left-[13px] md:left-[14px] bottom-[27px] opacity-60"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mx-4 sm:mx-8 my-10 flex flex-wrap",
                            children: usersNotes.length ? filteredNotes ? sortedType == "date" ? dateAscending ? sortedFilteredNotesAscDates.length ? sortedFilteredNotesAscDates.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(NotePreview, {
                                    note: note,
                                    setDeleteConfirmed: setDeleteConfirmed,
                                    usersEmail: usersEmail
                                }, note._id)) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full flex justify-center items-center mt-48",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-lg md:text-xl font-thin text-grayHeading",
                                    children: "No search results..."
                                })
                            }) : sortedFilteredNotesDescDates.length ? sortedFilteredNotesDescDates.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(NotePreview, {
                                    note: note,
                                    setDeleteConfirmed: setDeleteConfirmed,
                                    usersEmail: usersEmail
                                }, note._id)) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full flex justify-center items-center mt-48",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-lg md:text-xl font-thin text-grayHeading",
                                    children: "No search results..."
                                })
                            }) : sortedFilteredNotesLastUpdated.length ? sortedFilteredNotesLastUpdated.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(NotePreview, {
                                    note: note,
                                    setDeleteConfirmed: setDeleteConfirmed,
                                    usersEmail: usersEmail
                                }, note._id)) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full flex justify-center items-center mt-48",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-lg md:text-xl font-thin text-grayHeading",
                                    children: "No search results..."
                                })
                            }) : sortedType == "date" ? dateAscending ? sortedNotesAscDates.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(NotePreview, {
                                    note: note,
                                    setDeleteConfirmed: setDeleteConfirmed,
                                    usersEmail: usersEmail
                                }, note._id)) : sortedNotesDescDates.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(NotePreview, {
                                    note: note,
                                    setDeleteConfirmed: setDeleteConfirmed,
                                    usersEmail: usersEmail
                                }, note._id)) : sortedNotesLastUpdated.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(NotePreview, {
                                    note: note,
                                    setDeleteConfirmed: setDeleteConfirmed,
                                    usersEmail: usersEmail
                                }, note._id)) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full flex justify-center items-center mt-48",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-lg md:text-xl font-thin text-grayHeading",
                                    children: "No notes made yet!"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    });
}
const getServerSideProps = (0,nextjs_auth0_.withPageAuthRequired)({
    async getServerSideProps (ctx) {
        const session = await (0,nextjs_auth0_.getSession)(ctx.req, ctx.res);
        return {
            props: {
                userCtxt: JSON.parse(JSON.stringify(session)).user
            }
        };
    }
});


/***/ }),

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0/client");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [138,468,36,169,556], () => (__webpack_exec__(1985)));
module.exports = __webpack_exports__;

})();