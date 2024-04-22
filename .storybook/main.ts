import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/preset-scss",
	],
	core: {
		builder: "@storybook/builder-vite",
	},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	viteFinal: async (viteConfig) => {
		return mergeConfig(viteConfig, {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/styles/mixin.scss";',
					},
				},
			},
		});
	},
};
export default config;
