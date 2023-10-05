"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDynamicRouteParser = void 0;
const route_matcher_1 = require("next/dist/shared/lib/router/utils/route-matcher");
const route_regex_1 = require("next/dist/shared/lib/router/utils/route-regex");
const utils_1 = require("next/dist/shared/lib/router/utils");
//
const normalize_page_path_1 = require("next/dist/shared/lib/page-path/normalize-page-path");
const createDynamicRouteParser_1 = require("./createDynamicRouteParser");
exports.createDynamicRouteParser = createDynamicRouteParser_1.factory({
    getSortedRoutes: utils_1.getSortedRoutes,
    getRouteMatcher: route_matcher_1.getRouteMatcher,
    getRouteRegex: route_regex_1.getRouteRegex,
    isDynamicRoute: utils_1.isDynamicRoute,
    normalizePagePath: normalize_page_path_1.normalizePagePath,
});
//# sourceMappingURL=next-12.js.map