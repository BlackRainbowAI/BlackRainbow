/**
 * @module ESBuild
 *
 */
export default {
	color: true,
	format: "esm",
	metafile: true,
	minify: true,
	outdir: "Target",
	platform: "browser",
	bundle: true,
	target: ["edge104", "esnext"],
	write: true,
	logLevel: "debug",
	plugins: [
		{
			name: "Target",
			setup: ({ onStart, initialOptions: { outdir } }) =>
				onStart(async () => {
					try {
						outdir
							? await (await import("fs/promises")).rm(outdir, {
									recursive: true,
							  })
							: {};
					} catch (_Error) {
						console.log(_Error);
					}
				}),
		},
		(await import("@playform/copy")).default({
			Resolve: "out",
			Asset: [
				{
					from: "./Source/styles/*.css",
					to: "./styles/",
				},
			],
		}),
	],
} satisfies BuildOptions;

import type { BuildOptions } from "esbuild";
