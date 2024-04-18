import { IconType } from "react-icons";
import styles from "./index.module.scss";
import classNames from "classnames";

interface ButtonProps {
	name?: string; // 버튼 텍스트
	icon?: IconType; // 아이콘 버튼
	onClick?: () => Promise<void>;
	type?: "submit" | "button";
	variant?: "light" | "dark" | "icon"; // 버튼 색상
	size?: "default" | "medium";
}

export const Button = ({
	name,
	icon: Icon,
	onClick,
	type,
	variant,
	size = "default",
}: ButtonProps) => {
	const buttonClasses = classNames(styles.container, {
		[styles.light]: variant === "light",
		[styles.dark]: variant === "dark",
		[styles.icon]: variant === "icon",
		[styles.medium]: size === "medium",
		[styles[size]]: size !== "default",
	});

	return (
		<button className={buttonClasses} type={type} onClick={onClick}>
			{Icon && <Icon />}
			{name}
		</button>
	);
};
