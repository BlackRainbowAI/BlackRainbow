import type { BuildOptions, PluginBuild } from "esbuild";
import * as fs from "fs";

import { copy } from "esbuild-plugin-copy";

const outDir = "dist";

export default {
	format: "esm",
	minify: true,
	outdir: outDir,
	bundle: true,
	platform: "browser",
	target: ["edge104", "esnext"],
	plugins: [
		{
			name: "clean-dist",
			setup(build: PluginBuild) {
				build.onStart(async () => {
					try {
						await fs.promises.rm(outDir, {
							recursive: true,
						});
					} catch (_error) {}
				});
			},
		},

		copy({
			resolveFrom: "out",
			assets: [
				{
					from: "./src/styles/*.css",
					to: "./styles/",
				},
			],
		}),
	],
} satisfies BuildOptions;
