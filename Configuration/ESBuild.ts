import type { PluginBuild, BuildOptions as Type } from "esbuild";

import { copy as Copy } from "esbuild-plugin-copy";
import { rm as Remove } from "fs/promises";

const outDir = "Target";

export default {
	format: "esm",
	minify: true,
	outdir: outDir,
	bundle: true,
	platform: "browser",
	target: ["edge104", "esnext"],
	plugins: [
		{
			name: "Target",
			setup: (Build: PluginBuild) =>
				Build.onStart(async () => {
					try {
						await Remove(outDir, {
							recursive: true,
						});
					} catch (_Error) {}
				}),
		},
		Copy({
			resolveFrom: "out",
			assets: [
				{
					from: "./Source/styles/*.css",
					to: "./styles/",
				},
			],
		}),
	],
} satisfies Type as Type;
