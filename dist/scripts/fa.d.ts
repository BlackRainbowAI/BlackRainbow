/// <reference types="node" resolution-mode="require"/>
declare global {
    interface Window {
        interval: NodeJS.Timer;
        timeout: NodeJS.Timeout;
    }
}
export {};
