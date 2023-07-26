"use strict";
(() => {
var exports = {};
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 7856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ User),
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
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0/client"
var client_ = __webpack_require__(6153);
// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/next/image.js
var next_image = __webpack_require__(2009);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/modules/user/UserImage.tsx



function UserImage(props) {
    const { image , editImage , setEditImage , updateUserImage , email  } = props;
    const imageCss = `mx-2 bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[125px] h-[125px] rounded-full flex justify-center items-center`;
    const editImageCss = `mb-4 mx-2 bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[75px] h-[75px] rounded-full flex justify-center items-center`;
    const submitImage = ()=>{
        if (editImage) {
            updateUserImage(email, image);
            setEditImage(false);
        } else {
            setEditImage(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: editImage ? editImageCss : imageCss,
        children: image ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: `/user-icons${image}`,
            alt: "User image",
            width: 448,
            height: 512,
            className: "w-1/2 opacity-100 invert",
            onClick: submitImage
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
    });
}
/* harmony default export */ const user_UserImage = (UserImage);

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./components/context/AuthContext.tsx
var AuthContext = __webpack_require__(8861);
;// CONCATENATED MODULE: ./pages/[user]/index.tsx









function User({ userCtxt  }) {
    const { user  } = (0,client_.useUser)();
    const { userData , setUserData  } = (0,AuthContext/* useAuth */.a)();
    const usersEmail = userCtxt.email;
    const [editImage, setEditImage] = (0,external_react_.useState)(false);
    const [userDoc, setUserDoc] = (0,external_react_.useState)([]);
    const [memberSinceDate, setMemberSinceDate] = (0,external_react_.useState)();
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const imageOptions = [
        "/user.png",
        "/user-hair-long.png",
        "/user-crown.png",
        "/user-astronaut.png",
        "/user-cowboy.png",
        "/user-ninja.png",
        "/user-robot.png",
        "/user-shakespeare.png"
    ];
    async function getUserDoc(email) {
        await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}`).then((response)=>response.json()).then((data)=>{
            setUserDoc(data.data);
            setUserData(data.data);
            const memberSince = (0,external_date_fns_.format)(new Date(data.data.memberSince), "LLLL d, yyyy") + ".";
            setMemberSinceDate(memberSince);
            setIsLoading(false);
        });
    }
    async function updateUserImage(email, newImage) {
        await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}&newImage=${newImage}`, {
            method: "PATCH"
        }).then((response)=>response.json()).then((data)=>{
            console.log(data.message);
            setIsLoading(false);
            getUserDoc(usersEmail);
        });
    }
    (0,external_react_.useEffect)(()=>{
        getUserDoc(usersEmail);
    }, [
        updateUserImage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "font-sans bg-gray-50 min-h-screen w-screen relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar/* default */.Z, {
                userDoc: userDoc
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-2 sm:mx-8 flex flex-col justify-center items-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-regular text-blackHeading",
                                children: "User"
                            })
                        }),
                        user ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col text-blackHeading mt-12 mb-2 font-light",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col items-center",
                                children: editImage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-6",
                                            children: "Choose a new profile picture:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-fit grid grid-cols-4",
                                            children: imageOptions.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx(user_UserImage, {
                                                    updateUserImage: updateUserImage,
                                                    email: usersEmail,
                                                    editImage: editImage,
                                                    setEditImage: setEditImage,
                                                    image: image
                                                }, image))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-3 mb-6 text-sm flex space-x-3 justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "bg-gray-200 hover:bg-gray-300 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full",
                                                onClick: ()=>setEditImage(false),
                                                children: "Cancel"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(user_UserImage, {
                                            editImage: editImage,
                                            setEditImage: setEditImage,
                                            image: userDoc.userImage
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-[125px] flex justify-end",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "hover:opacity-90 transition-opacity cursor-pointer text-xs font-medium opacity-50",
                                                onClick: ()=>setEditImage(true),
                                                children: "Edit"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-4 mb-6 flex flex-col items-center text-md",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "pr-2 font-semibold",
                                                            children: "Username:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "",
                                                            children: user.nickname
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "pr-2 font-semibold",
                                                            children: "Email:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "",
                                                            children: user.email
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex flex-col items-center mt-2 text-sm",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Member since ",
                                                            memberSinceDate
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "bg-gray-200/70 hover:bg-gray-300 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full",
                                            href: "/api/auth/logout",
                                            children: "LOG OUT"
                                        })
                                    ]
                                })
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Loading..."
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [138,468,36,556], () => (__webpack_exec__(7856)));
module.exports = __webpack_exports__;

})();