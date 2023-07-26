"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DateHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2009);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




function DateHeader(props) {
    const { tomorrow , yesterday , monthView , setMonthView , prevDay , nextDay , selectedDay , dateDifference , noteActivated  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex flex-col items-center w-[8.5in] pt-8 pb-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-gray-500 text-sm font-light pb-2",
                    children: dateDifference
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[78vw] lg:w-[8.5in] flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 flex flex-col justify-center items-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: prevDay,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/angle-left.png",
                                    width: 210,
                                    height: 369,
                                    alt: "Arrow",
                                    className: "scale-75 h-6 w-4 opacity-30 hover:opacity-50 transition-opacity "
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "w-max mt-2 text-gray-500 text-xs font-light",
                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(yesterday), "LLLL dd")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "flex justify-center items-center w-[8.5in] pb-8 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-col flex justify-center items-center",
                            children: noteActivated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "cursor-pointer text-black font-light text-4xl",
                                onClick: ()=>setMonthView(!monthView),
                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(selectedDay), "LLLL d")
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "cursor-pointer text-gray-400 font-light text-4xl",
                                onClick: ()=>setMonthView(!monthView),
                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(selectedDay), "LLLL d")
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 flex flex-col justify-center items-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: nextDay,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/angle-left.png",
                                    width: 210,
                                    height: 369,
                                    alt: "Arrow",
                                    className: "scale-75 h-6 w-4 opacity-30 hover:opacity-50 transition-opacity rotate-180"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-2 w-max text-gray-500 text-xs font-light",
                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(tomorrow), "LLLL dd")
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CalendarModule)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2009);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3169);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function CalendarModule(props) {
    let { usersNotes , setSelectedDay , selectedDay , usersEmail , monthView  } = props;
    let today = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfToday)();
    let firstDayCurrentMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfMonth)(today);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(selectedDay);
    const [arePropsReady, setArePropsReady] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const activeCalendarCSS = `flex justify-center items-center`;
    const inactiveCalendarCSS = `hidden`;
    const days = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.eachDayOfInterval)({
        start: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfMonth)(currentMonth)),
        end: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfMonth)(currentMonth))
    });
    function previousMonth() {
        let firstDayNextMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.subMonths)(currentMonth, 1);
        setCurrentMonth(firstDayNextMonth);
    }
    function nextMonth() {
        let firstDayNextMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMonths)(currentMonth, 1);
        setCurrentMonth(firstDayNextMonth);
        console.log(currentMonth);
    }
    const userNotesDates = [];
    for (const note of usersNotes){
        userNotesDates.push(note.date);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: usersNotes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: activeCalendarCSS,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "w-full rounded-md",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full flex justify-center items-center bg-gray-100/80 shadow-inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "pt-1 pb-7",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pl-3 pt-6 flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "flex-auto text-2xl font-light text-blackHeading",
                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(currentMonth, "MMMM yyyy")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: previousMonth,
                                        className: "flex items-center justify-center px-1.5 text-gray-700 hover:text-gray-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Previous month"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: "/angle-left.png",
                                                width: 210,
                                                height: 369,
                                                alt: "Arrow",
                                                className: "h-3 w-2 opacity-60 hover:opacity-80 transition-opacity"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: nextMonth,
                                        type: "button",
                                        className: "ml-2 flex flex-none items-center justify-center px-1.5 text-gray-700 hover:text-gray-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Next month"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: "/angle-left.png",
                                                width: 210,
                                                height: 369,
                                                alt: "Arrow",
                                                className: "h-3 w-2 opacity-60 hover:opacity-80 transition-opacity rotate-180"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tracking-wider text-gray-900 grid grid-cols-7 mt-4 text-sm font-medium leading-4 text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "SUN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "MON"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "TUE"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "WED"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "THU"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "FRI"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "SAT"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-light border-[1px] drop-shadow-sm bg-[#f9fbfa] border-gray-300 grid grid-cols-7 my-2 text-md",
                                children: days.map((day, dayIdx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classNames(dayIdx === 0 && colStartClasses[(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.getDay)(day)], ""),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSelectedDay(day);
                                                    router.push(`/${usersEmail}/${day}`);
                                                },
                                                className: classNames((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && "bg-blue-100", !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && "bg-blue-200 font-semibold", !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameMonth)(day, firstDayCurrentMonth) && "text-gray-700", !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameMonth)(day, firstDayCurrentMonth) && "text-gray-400", (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && "font-semibold bg-blue-300", (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && "bg-blue-300", !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && "hover:bg-gray-100 transition-colors", (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(day, selectedDay) && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(day) && "bg-blue-200 font-semibold", "font-regular text-sm flex pb-5 h-14 w-14 border-[0.5px] border-gray-300 items-center justify-center"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                    dateTime: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(day, "yyyy-MM-dd"),
                                                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(day, "d")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative bottom-5 h-0 w-14 flex justify-center",
                                                children: userNotesDates.map((date)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(date), day) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "relative w-2 h-2 rounded-full bg-blue-500"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}))
                                            })
                                        ]
                                    }, day.toString()))
                            })
                        ]
                    })
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
    });
}
let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7"
];


/***/ }),

/***/ 4868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DayNote),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8907);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3169);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4612);
/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6153);
/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_modules_calendar_CalendarModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2379);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2009);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_modules_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7903);
/* harmony import */ var _components_modules_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3979);
/* harmony import */ var _components_modules_DateHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_6__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const TextEditorNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 188).then(__webpack_require__.bind(__webpack_require__, 3188)), {
    loadableGenerated: {
        modules: [
            "[user]/[date].tsx -> " + "../../components/modules/TextEditor"
        ]
    },
    ssr: false
});



function DayNote({ userCtxt  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [selectedDay, setSelectedDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfToday)());
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [quill, setQuill] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [monthView, setMonthView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [usersNotes, setUsersNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [noteActivated, setNoteActivated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dateDifference, setDateDifference] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Today");
    const [deleteConfirmation, setDeleteConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [deleteConfirmed, setDeleteConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [lastSocketId, setLastSocketId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const yesterday = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subDays)(new Date(selectedDay), 1);
    const tomorrow = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.addDays)(new Date(selectedDay), 1);
    const SAVE_INTERVAL_MS = 500;
    const { user  } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_7__.useUser)();
    const usersEmail = userCtxt.email;
    const parseDateFromUrl = (url)=>{
        const splitUrl = url.split("/");
        const date = splitUrl[2];
        const decodedDateString = new Date(decodeURIComponent(date));
        return decodedDateString;
    };
    const activateNote = async ()=>{
        const s = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)("daynotes-server.onrender.com", {
            transports: [
                "websocket"
            ]
        });
        setSocket(s);
        setDeleteConfirmed(false);
        setNoteActivated(true);
        await new Promise((resolve)=>setTimeout(resolve, 900));
        getUsersNotes(userId);
    };
    const deleteNote = async ()=>{
        await socket.emit("delete-note", userId, selectedDay);
        setNoteActivated(false);
        await new Promise((resolve)=>setTimeout(resolve, 500));
        getUsersNotes(userId);
    };
    const getDateDifference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfToday)();
        const diffInDays = Math.abs((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(today, selectedDay));
        const diffInWeeks = Math.abs((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInWeeks)(today, selectedDay));
        const diffInMonths = Math.abs((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInMonths)(today, selectedDay));
        if (diffInDays == 0) {
            setDateDifference("Today");
        } else if (diffInWeeks == 0) {
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isAfter)(selectedDay, today)) {
                diffInDays == 1 ? setDateDifference("1 day from now") : setDateDifference(`${diffInDays} days from now`);
            } else {
                diffInDays == 1 ? setDateDifference("1 day ago") : setDateDifference(`${diffInDays} days ago`);
            }
        } else if (diffInWeeks >= 1 && diffInMonths == 0) {
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isAfter)(selectedDay, today)) {
                diffInWeeks == 1 ? setDateDifference("1 week from now") : setDateDifference(`${diffInWeeks} weeks from now`);
            } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isBefore)(selectedDay, today)) {
                diffInWeeks == 1 ? setDateDifference("1 week ago") : setDateDifference(`${diffInWeeks} weeks ago`);
            }
        } else if (diffInMonths >= 1) {
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isAfter)(selectedDay, today)) {
                diffInMonths == 1 ? setDateDifference("1 month from now") : setDateDifference(`${diffInMonths} months from now`);
            } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isBefore)(selectedDay, today)) {
                diffInMonths == 1 ? setDateDifference("1 month ago") : setDateDifference(`${diffInMonths} months ago`);
            }
        }
    }, [
        selectedDay
    ]);
    const prevDay = ()=>{
        setSelectedDay(yesterday);
        {
            user !== undefined && router.push(`/${usersEmail}/${yesterday}`);
        }
    };
    const nextDay = ()=>{
        setSelectedDay(tomorrow);
        {
            user !== undefined && router.push(`/${usersEmail}/${tomorrow}`);
        }
    };
    const checkNoteExists = (notes, selectedDay)=>{
        if (notes) {
            const notesDate = notes.map((note)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.parseISO)(note.date)).filter((date)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isSameDay)(date, selectedDay));
            const notesText = notes.filter((note)=>{
                const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.parseISO)(note.date);
                return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isSameDay)(date, selectedDay);
            }).map((note)=>note.data.ops);
            const noteContainsText = notesText.length > 0;
            const noteCreated = notesDate.length > 0;
            const noteExists = noteCreated && noteContainsText;
            return noteExists;
        } else {
            return false;
        }
    };
    async function getUserIdAndNotes(email) {
        await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}`).then((response)=>response.json()).then((data)=>{
            setUserId(data.data.userId);
            getUsersNotes(data.data.userId);
        }).catch((error)=>{
            console.log(error);
        });
    }
    async function getUsersNotes(userId) {
        await fetch(`https://daynotes-client.vercel.app/api/notes?userId=${userId}`).then((response)=>response.json()).then((data)=>{
            setUsersNotes(data.data);
            console.log(data.data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getUserIdAndNotes(usersEmail);
    }, [
        selectedDay
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!usersNotes) return;
        const noteExists = checkNoteExists(usersNotes, selectedDay);
        console.log(noteExists);
        setNoteActivated(noteExists);
    }, [
        usersNotes,
        selectedDay
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const urlDate = parseDateFromUrl(router.asPath);
        if (urlDate !== selectedDay) {
            setSelectedDay(urlDate);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const s = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)("daynotes-server.onrender.com", {
            transports: [
                "websocket"
            ]
        });
        setSocket(s);
        checkNoteExists(usersNotes, selectedDay);
        return ()=>{
            s.disconnect();
        };
    }, [
        router.asPath
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (socket == null || quill == null || !noteActivated) return;
        socket.once("load-document", (document)=>{
            quill.setContents(document);
            quill.enable();
            console.log("Loading document...");
        });
        socket.emit("get-document", userId, selectedDay);
    }, [
        socket,
        quill,
        noteActivated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (socket == null || quill == null) return;
        const interval = setInterval(()=>{
            socket.emit("save-document", quill.getContents());
        }, SAVE_INTERVAL_MS);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        socket,
        quill
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (socket == null || quill == null) return;
        const handler = (delta)=>{
            quill.updateContents(delta);
        };
        socket.on("receive-changes", handler);
        return ()=>{
            socket.off("receive-changes", handler);
        };
    }, [
        socket,
        quill
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (socket == null || quill == null) return;
        const handler = (delta, oldDelta, source)=>{
            if (source === "user" && socket.id !== lastSocketId) {
                socket.emit("send-changes", delta);
                setLastSocketId(socket.id);
            }
        };
        quill.on("text-change", handler);
        return ()=>{
            quill.off("text-change", handler);
        };
    }, [
        socket,
        quill
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (deleteConfirmed) {
            deleteNote();
            setDeleteConfirmed(false);
        }
    }, [
        deleteConfirmed
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (socket == null || quill == null) return;
        const disconnectHandler = ()=>{
            socket.disconnect();
        };
        if (false) {}
        return ()=>{
            if (false) {}
        };
    }, [
        socket,
        quill
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "font-sans bg-gray-50 min-h-screen w-screen relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_navbar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-2 sm:mx-8 mt-0 pt-0 flex flex-col justify-center items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-lg bg-slate-50 border-boxBorder border drop-shadow-lg min-h-[100vh] mt-0 mb-32 w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "px-4 pt-3 pb-2 flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            src: "/calendar.png",
                                            width: 448,
                                            height: 512,
                                            alt: "Calendar menu icon",
                                            className: "cursor-pointer w-5 mr-4 h-fit opacity-40 hover:opacity-70 transition-opacity",
                                            onClick: ()=>setMonthView(!monthView)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "transition pt-0.5 text-sm font-light text-gray-500"
                                        })
                                    ]
                                }),
                                noteActivated ? deleteConfirmation ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mr-1 flex justify-center items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gray-500 font-thin text-sm",
                                            children: "Delete note?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            src: "/check.png",
                                            width: 448,
                                            height: 304,
                                            alt: "Confirmation icon",
                                            className: "w-5 h-fit cursor-pointer opacity-40 hover:opacity-70 transition-opacity",
                                            onClick: ()=>{
                                                setDeleteConfirmation(false);
                                                setDeleteConfirmed(true);
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            src: "/x.png",
                                            width: 448,
                                            height: 448,
                                            alt: "Cancellation icon",
                                            className: "w-4 h-fit cursor-pointer opacity-40 hover:opacity-70 transition-opacity",
                                            onClick: ()=>setDeleteConfirmation(false)
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer opacity-40 hover:opacity-70 transition-opacity",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        src: "/trash-can.png",
                                        width: 448,
                                        height: 512,
                                        alt: "Delete note icon, trashcan",
                                        className: "w-[1.1rem] h-fit",
                                        onClick: ()=>setDeleteConfirmation(true)
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                            ]
                        }),
                        monthView && usersNotes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_calendar_CalendarModule__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            usersEmail: usersEmail,
                            usersNotes: usersNotes,
                            selectedDay: selectedDay,
                            setSelectedDay: setSelectedDay,
                            monthView: monthView
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-32 flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_DateHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    monthView: monthView,
                                    setMonthView: setMonthView,
                                    noteActivated: noteActivated,
                                    dateDifference: dateDifference,
                                    selectedDay: selectedDay,
                                    prevDay: prevDay,
                                    nextDay: nextDay,
                                    yesterday: yesterday,
                                    tomorrow: tomorrow
                                }),
                                noteActivated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextEditorNoSSR, {
                                    setQuill: setQuill
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[5in] flex justify-center items-center font-light w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "hover:text-gray-600 hover:border-gray-600 text-gray-400 text-lg flex items-center justify-center text-center w-16 h-16 pb-0.5 rounded-full border-[3px] font-bold border-gray-400",
                                        onClick: ()=>activateNote(),
                                        children: " +"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_footer__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
}
const getServerSideProps = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_9__.withPageAuthRequired)({
    async getServerSideProps (ctx) {
        const session = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_9__.getSession)(ctx.req, ctx.res);
        return {
            props: {
                userCtxt: JSON.parse(JSON.stringify(session)).user
            }
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 3450:
/***/ ((module) => {

module.exports = require("quill");

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

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [138,468,36,169,819,556], () => (__webpack_exec__(4868)));
module.exports = __webpack_exports__;

})();