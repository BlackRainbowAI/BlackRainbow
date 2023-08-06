import { copy } from "esbuild-plugin-copy";
import { rm } from "fs/promises";
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
			name: "clean-Target",
			setup(build) {
				build.onStart(async () => {
					try {
						await rm(outDir, {
							recursive: true,
						});
					} catch (_Error) {}
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
};
