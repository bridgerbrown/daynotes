"use strict";
(() => {
var exports = {};
exports.id = 592;
exports.ids = [592];
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

/***/ 989:
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
            const { userId  } = req.query;
            if (userId) {
                const usersNotes = await db.collection("notes").find({
                    userId
                }).toArray();
                res.json({
                    status: 200,
                    data: usersNotes
                });
                console.log("Users notes fetched");
            } else {
                res.status(404).json({
                    status: 404,
                    message: "User not found"
                });
                console.log("No user ID");
            }
        } else if (req.method === "DELETE") {
            const { userId: userId1 , date  } = req.body;
            await db.collection("notes").deleteOne({
                userId: userId1,
                date: date
            });
            res.status(204).end();
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
var __webpack_exports__ = (__webpack_exec__(989));
module.exports = __webpack_exports__;

})();