"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryRouterProvider = void 0;
// NOTE: this path works with Next v10-v11.0.1
// @ts-expect-error
const router_context_1 = require("next/dist/next-server/lib/router-context");
const MemoryRouterProvider_1 = require("./MemoryRouterProvider");
exports.MemoryRouterProvider = MemoryRouterProvider_1.factory({ RouterContext: router_context_1.RouterContext });
//# sourceMappingURL=next-10.js.map