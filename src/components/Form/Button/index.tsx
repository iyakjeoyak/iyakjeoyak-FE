import { IconType } from "react-icons";
import styles from "./index.module.scss";
import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string; // 버튼 텍스트
	icon?: IconType; // 아이콘 버튼
	className?: string;
	variant?: "light" | "dark" | "icon"; // 버튼 색상
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ text, icon: Icon, className, variant, ...buttonProps }, ref) => {
		const buttonClasses = classNames(styles.container, {
			[styles.light]: variant === "light",
			[styles.dark]: variant === "dark",
			[styles.icon]: variant === "icon",
		});
		return (
			<button
				ref={ref}
				className={`${buttonClasses} m-large ${className || ""}`}
				{...buttonProps}
			>
				{Icon && <Icon />}
				{text}
			</button>
		);
	},
);
