/// <reference types="node" resolution-mode="require"/>
declare global {
    interface Window {
        interval: NodeJS.Timer;
    }
}
export {};
