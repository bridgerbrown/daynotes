"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDynamicRouteParser = void 0;
const utils_1 = require("next/dist/next-server/lib/router/utils");
// @ts-expect-error
const normalize_page_path_1 = require("next/dist/next-server/server/normalize-page-path");
const createDynamicRouteParser_1 = require("./createDynamicRouteParser");
exports.createDynamicRouteParser = createDynamicRouteParser_1.factory({
    getSortedRoutes: utils_1.getSortedRoutes,
    getRouteMatcher: utils_1.getRouteMatcher,
    getRouteRegex: utils_1.getRouteRegex,
    isDynamicRoute: utils_1.isDynamicRoute,
    normalizePagePath: normalize_page_path_1.normalizePagePath,
});
//# sourceMappingURL=next-10.js.map