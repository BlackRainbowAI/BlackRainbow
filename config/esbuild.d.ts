import type { PluginBuild } from "esbuild";
declare const _default: {
    format: string;
    minify: boolean;
    outdir: string;
    bundle: boolean;
    platform: string;
    target: string[];
    plugins: {
        name: string;
        setup(build: PluginBuild): void;
    }[];
};
export default _default;
