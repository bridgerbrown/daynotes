import { MemoryRouter } from "./MemoryRouter";
export declare type MemoryRouterEventHandlers = {
    onHashChangeStart?: (url: string, options: {
        shallow: boolean;
    }) => void;
    onHashChangeComplete?: (url: string, options: {
        shallow: boolean;
    }) => void;
    onRouteChangeStart?: (url: string, options: {
        shallow: boolean;
    }) => void;
    onRouteChangeComplete?: (url: string, options: {
        shallow: boolean;
    }) => void;
    onPush?: (url: string, options: {
        shallow: boolean;
    }) => void;
    onReplace?: (url: string, options: {
        shallow: boolean;
    }) => void;
};
export declare const useMemoryRouter: (singletonRouter: MemoryRouter, eventHandlers?: MemoryRouterEventHandlers | undefined) => Readonly<MemoryRouter>;
