import { defineConfig } from "vite";

export default defineConfig(async () => ({
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
	},
	envPrefix: ["VITE_", "TAURI_"],
	build: {
		target:
			process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
		minify: process.env.TAURI_DEBUG ? false : "esbuild",
		sourcemap: !!process.env.TAURI_DEBUG,
	},
	vite: {
		build: {
			sourcemap: true,
		},
	},
}));
