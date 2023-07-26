"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mongodb)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.tsx

if (!process.env.MONGODB_CONNECTION_STRING) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_CONNECTION_STRING;
const options = {};
let client;
let clientPromise;
if (false) {} else {
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
/* harmony default export */ const mongodb = (clientPromise);


/***/ }),

/***/ 1823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);

async function handler(req, res) {
    try {
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
        const db = client.db("daynotes");
        if (req.method === "GET") {
            const { email  } = req.query;
            const userDoc = await db.collection("users").findOne({
                email: email
            });
            if (userDoc) {
                res.json({
                    status: 200,
                    data: userDoc
                });
            } else {
                res.status(404).json({
                    status: 404,
                    message: "User not found"
                });
            }
        } else if (req.method === "PATCH") {
            const { email: email1 , newImage  } = req.query;
            await db.collection("users").findOneAndUpdate({
                email: email1
            }, {
                $set: {
                    userImage: newImage
                }
            });
            res.json({
                status: 200,
                message: "Image changed"
            });
        } else {
            res.status(405).json({
                status: 405,
                message: "Method not allowed"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1823));
module.exports = __webpack_exports__;

})();