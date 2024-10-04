import type { BuildOptions } from "esbuild";

/**
 * @module ESBuild
 *
 */
export default {
	bundle: true,
	target: ["edge104", "esnext"],
} satisfies BuildOptions;
