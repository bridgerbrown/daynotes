"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMemoryRouter = void 0;
const react_1 = __importDefault(require("react"));
function withMemoryRouter(useRouter, ComposedComponent) {
    function WithRouterWrapper(props) {
        return react_1.default.createElement(ComposedComponent, Object.assign({ router: useRouter() }, props));
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    // This is needed to allow checking for custom getInitialProps in _app
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if (process.env.NODE_ENV !== "production") {
        const name = ComposedComponent.displayName || ComposedComponent.name || "Unknown";
        WithRouterWrapper.displayName = `withRouter(${name})`;
    }
    return WithRouterWrapper;
}
exports.withMemoryRouter = withMemoryRouter;
//# sourceMappingURL=withMemoryRouter.js.map