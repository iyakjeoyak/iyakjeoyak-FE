export default {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^.+\\.svg$": "jest-svg-transformer",
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.scss$"],
};
