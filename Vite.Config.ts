import { defineConfig } from "vite";

export default defineConfig({
	publicDir: "./Public",
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
	},
	envPrefix: ["VITE_", "TAURI_"],
	build: {
		outDir: "Dist",
		target:
			process.env['TAURI_PLATFORM'] === "windows" ? "chrome105" : "safari13",
		minify: process.env["TAURI_DEBUG"] ? false : "esbuild",
		sourcemap: !!process.env["TAURI_DEBUG"],
	},
});
