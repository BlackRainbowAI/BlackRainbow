/// <reference types="node" />
declare global {
    interface Window {
        interval: NodeJS.Timer;
        timeout: NodeJS.Timeout;
    }
}
export {};
