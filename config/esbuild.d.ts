import type { PluginBuild } from "esbuild";
declare const _default: {
	format: "esm";
	minify: true;
	outdir: string;
	bundle: true;
	platform: "browser";
	target: string[];
	plugins: {
		name: string;
		setup(build: PluginBuild): void;
	}[];
};
export default _default;
