import classNames from "classnames";
import { ElementType } from "react";

export interface ButtonStyles {
	container: string;
	light: string;
	dark: string;
	greentransparent: string;
	medium: string;
	[key: string]: string;
}

export interface ButtonOptions {
	variant: "light" | "dark" | "greentransparent";
	name?: string;
	size: "default" | "medium";
	transparent?: ElementType;
}

export const getButtonClasses = (
	styles: ButtonStyles,
	{ variant, name, size }: ButtonOptions,
) =>
	classNames(
		styles.container,
		{
			[styles.light]: variant === "light",
			[styles.dark]: variant === "dark",
			[styles.greentransparent]: variant === "greentransparent" && !name,
			[styles.medium]: size === "medium",
			[styles.default]: size === "default",
		},
		[styles, variant, name, size],
	);
