import { defineConfig } from "vite";

export default defineConfig({
	publicDir: "./Public",
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		hmr: {
			overlay: false,
		},
	},
	envPrefix: ["VITE_", "TAURI_"],
	build: {
		outDir: "Target",
		target: "chrome105",
		minify: process.env["TAURI_DEBUG"] ? false : "esbuild",
		sourcemap: !!process.env["TAURI_DEBUG"],
	},
});
