import type { BuildOptions, PluginBuild } from "esbuild";
import fs from "fs";

const outDir = "dist";

export default (): BuildOptions => {
	return {
		format: "iife",
		minify: true,
		outdir: outDir,
		bundle: true,
		platform: "browser",
		target: ["edge104", "esnext"],
		write: true,
		sourcesContent: false,
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
	};
};
