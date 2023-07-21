"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoryRouter = void 0;
const react_1 = require("react");
const MemoryRouter_1 = require("./MemoryRouter");
const useMemoryRouter = (singletonRouter, eventHandlers) => {
    const [router, setRouter] = react_1.useState(() => MemoryRouter_1.MemoryRouter.snapshot(singletonRouter));
    // Trigger updates on route changes:
    react_1.useEffect(() => {
        // To ensure we don't call setRouter after unmounting:
        let isMounted = true;
        const handleRouteChange = () => {
            if (!isMounted)
                return;
            // Ensure the reference changes each render:
            setRouter(MemoryRouter_1.MemoryRouter.snapshot(singletonRouter));
        };
        singletonRouter.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            isMounted = false;
            singletonRouter.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [singletonRouter]);
    // Subscribe to any eventHandlers:
    react_1.useEffect(() => {
        if (!eventHandlers)
            return;
        const { onRouteChangeStart, onRouteChangeComplete, onHashChangeComplete, onHashChangeStart, onPush, onReplace, } = eventHandlers;
        if (onRouteChangeStart)
            singletonRouter.events.on("routeChangeStart", onRouteChangeStart);
        if (onRouteChangeComplete)
            singletonRouter.events.on("routeChangeComplete", onRouteChangeComplete);
        if (onHashChangeStart)
            singletonRouter.events.on("hashChangeStart", onHashChangeStart);
        if (onHashChangeComplete)
            singletonRouter.events.on("hashChangeComplete", onHashChangeComplete);
        if (onPush)
            singletonRouter.events.on("NEXT_ROUTER_MOCK:push", onPush);
        if (onReplace)
            singletonRouter.events.on("NEXT_ROUTER_MOCK:replace", onReplace);
        return () => {
            if (onRouteChangeStart)
                singletonRouter.events.off("routeChangeStart", onRouteChangeStart);
            if (onRouteChangeComplete)
                singletonRouter.events.off("routeChangeComplete", onRouteChangeComplete);
            if (onHashChangeStart)
                singletonRouter.events.off("hashChangeStart", onHashChangeStart);
            if (onHashChangeComplete)
                singletonRouter.events.off("hashChangeComplete", onHashChangeComplete);
            if (onPush)
                singletonRouter.events.off("NEXT_ROUTER_MOCK:push", onPush);
            if (onReplace)
                singletonRouter.events.off("NEXT_ROUTER_MOCK:replace", onReplace);
        };
    }, [
        singletonRouter.events,
        eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onRouteChangeStart,
        eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onRouteChangeComplete,
        eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onHashChangeStart,
        eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onHashChangeComplete,
        eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onPush,
        eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onReplace,
    ]);
    return router;
};
exports.useMemoryRouter = useMemoryRouter;
//# sourceMappingURL=useMemoryRouter.js.map