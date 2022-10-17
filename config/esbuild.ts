import type { BuildOptions, PluginBuild } from "esbuild";
import fs from "fs";

const outDir = "dist";

export default async (): Promise<BuildOptions> => ({
	format: "esm",
	minify: true,
	outdir: outDir,
	bundle: true,
	platform: "browser",
	target: ["edge104", "esnext"],
	write: true,
	plugins: [
		{
			name: "clean-dist",
			setup(build: PluginBuild) {
				build.onStart(async () => {
					try {
						await fs.promises.rm(outDir, {
							recursive: true,
						});
					} catch (error) {}
				});
			},
		},
	],
});
