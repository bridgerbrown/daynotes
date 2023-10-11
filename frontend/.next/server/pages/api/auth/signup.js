"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "(api)/./pages/api/auth/signup.tsx":
/*!***********************************!*\
  !*** ./pages/api/auth/signup.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            const { email , username , password  } = req.body;\n            const url = \"http://localhost:10000/register\";\n            const response = await fetch(url, {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email: email,\n                    username: username,\n                    password: password\n                }),\n                headers: {\n                    \"Content-type\": \"application/json; charset=UTF-8\"\n                }\n            });\n            if (response.status === 201) {\n                res.status(201).json({\n                    message: \"User registered successfully.\"\n                });\n            } else {\n                res.status(response.status).json(await response.json());\n            }\n        } else {\n            res.status(405).json({\n                status: 405,\n                message: \"Method not allowed\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        res.status(500).json({\n            status: 500,\n            message: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFPLEVBQUVDLEdBQU8sRUFBRTtJQUN0RCxJQUFJO1FBQ0YsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQU87WUFDeEIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdMLElBQUlNLElBQUk7WUFDOUMsTUFBTUMsTUFBTTtZQUVaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUYsS0FBSztnQkFDaENMLFFBQVE7Z0JBQ1JJLE1BQU1JLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkJSLE9BQU9BO29CQUNQQyxVQUFVQTtvQkFDVkMsVUFBVUE7Z0JBQ1o7Z0JBQ0FPLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUEsSUFBSUosU0FBU0ssTUFBTSxLQUFLLEtBQUs7Z0JBQzNCWixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUErQjtZQUNqRSxPQUFPO2dCQUNMZCxJQUFJWSxNQUFNLENBQUNMLFNBQVNLLE1BQU0sRUFBRUMsSUFBSSxDQUFDLE1BQU1OLFNBQVNNLElBQUk7WUFDdEQsQ0FBQztRQUNILE9BQU87WUFDTGIsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUQsUUFBUTtnQkFBS0UsU0FBUztZQUFxQjtRQUNwRSxDQUFDO0lBQ0gsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtRQUN4QmYsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRCxRQUFRO1lBQUtFLFNBQVM7UUFBd0I7SUFDdkU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF5bm90ZXMvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHN4PzRmYjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6YW55LCByZXM6YW55KSB7XG4gIHRyeSB7IFxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIil7XG4gICAgICBjb25zdCB7IGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjEwMDAwL3JlZ2lzdGVyXCI7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5LlwifSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgc3RhdHVzOiA0MDUsIG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzOiA1MDAsIG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.tsx"));
module.exports = __webpack_exports__;

})();