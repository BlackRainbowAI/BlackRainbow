/// <reference types="node" />
declare global {
    interface Window {
        interval: NodeJS.Timer;
    }
}
export {};
