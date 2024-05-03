import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		svgrPlugin(),
		// visualizer({
		// 	open: true,
		// 	gzipSize: true,
		// 	brotliSize: true,
		// }),
	],
	css: {
		modules: {
			scopeBehaviour: "local",
			localsConvention: "camelCase",
		},
		preprocessorOptions: {
			scss: {
				// additionalData: "$injectedColor: orange;",
			},
		},
	},
	server: {
		// proxy: {
		// 	"/api": {
		// 		target: "http://54.180.121.206:8080",
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/api/, ""),
		// 	},
		// },

		proxy: {
			"/api": {
				target: "http://54.180.121.206:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},

	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
			},
		},
	},

	// 절대경로
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@router": path.resolve(__dirname, "src/router"),
			"@stories": path.resolve(__dirname, "src/stories"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@types": path.resolve(__dirname, "src/types"),
			"@api": path.resolve(__dirname, "src/api"),
		},
	},

	publicDir: "public",
});
