"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryRouterProvider = void 0;
// NOTE: this path works with Next v11.1.0+
//
const router_context_1 = require("next/dist/shared/lib/router-context");
const MemoryRouterProvider_1 = require("./MemoryRouterProvider");
exports.MemoryRouterProvider = MemoryRouterProvider_1.factory({ RouterContext: router_context_1.RouterContext });
//# sourceMappingURL=next-11.js.map