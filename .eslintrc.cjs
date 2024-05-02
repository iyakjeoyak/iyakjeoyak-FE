module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	globals: {
		JSX: true,
	},
	extends: [
		"prettier",
		"standard-with-typescript",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "style", "import"],
	settings: {
		"import/resolver": {
			node: {
				paths: ["src"],
				extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
			},
			typescript: {
				project: "./tsconfig.json",
			},
			alias: {
				map: [["@", path.resolve(__dirname, "./src")]],
				extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
			},
		},
	},
	rules: {
		"import/no-unresolved": ["off", { commonjs: true }],
		"import/no-extraneous-dependencies": "error",
		"node/no-missing-require": "off",
		"node/no-extraneous-import": "off",
		"react-refresh/only-export-components": [
			"warn",
			{
				allowConstantExport: true,
			},
		],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
				],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
	},
};
