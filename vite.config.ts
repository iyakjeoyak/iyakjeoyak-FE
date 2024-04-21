import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		svgrPlugin(),
		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true,
		}),
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
		proxy: {
			"/api": {
				target: "http://54.180.121.206:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},

	build: {
		// 빌드할 라이브러리에 대한 설정
		lib: {
			// 라이브러리의 진입점
			entry: path.resolve(__dirname, "src/index.tsx"),
			// 라이브러리 이름
			name: "index",
			fileName: "index",
		},
		rollupOptions: {
			// 번들에 포함시키지 않을 외부 종속성
			external: ["react"],
			// 번들의 출력 옵션 설정
			output: {
				globals: {
					react: "React",
				},
			},
		},
		// CommonJS 번들러에 대한 옵션을 정의한다.
		commonjsOptions: {
			esmExternals: ["react"],
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
		},
	},
});
