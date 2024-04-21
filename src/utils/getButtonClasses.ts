import classNames from "classnames";
import { ElementType } from "react";
import { Sizes, Variant } from "@/types/styleType";

export interface ButtonStyles {
	container: string;
	light: string;
	dark: string;
	greentransparent: string;
	medium: string;
	[key: string]: string;
}

export interface ButtonOptions {
	variant: Variant;
	name?: string;
	size?: Sizes;
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
			[styles.xlarge]: size === "xl",
			[styles.large]: size === "l",
			[styles.medium]: size === "m",
			[styles.small]: size === "s",
			[styles.xsmall]: size === "xs",
		},
		[styles, variant, name, size],
	);
