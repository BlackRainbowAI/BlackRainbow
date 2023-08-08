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
			setup: (build) =>
				build.onStart(async () => {
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
					from: "./src/styles/*.css",
					to: "./styles/",
				},
			],
		}),
	],
};
