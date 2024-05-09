import { IconType } from "react-icons";
import classNames from "classnames";
import styles from "./index.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string; // 버튼 텍스트
	icon?: IconType; // 아이콘 버튼
	className?: string;
	variant?: "light" | "dark" | "icon"; // 버튼 색상
	size?: "default" | "medium";
	type?: "submit" | "button";
	onClick?: () => void;
}

export const Button = ({
	text,
	icon: Icon,
	className,
	variant,
	size = "default",
	type = "submit",
	onClick,
  ...props
}: ButtonProps) => {
	const buttonClasses = classNames(styles.container, {
		[styles.light]: variant === "light",
		[styles.dark]: variant === "dark",
		[styles.icon]: variant === "icon",
		[styles.medium]: size === "medium",
		[styles[size]]: size !== "default",
	});
	return (
		<button
			className={`${buttonClasses} m-large ${className || ""}`}
			type={type}
			onClick={onClick}
      {...props}
		>
			{Icon && <Icon />}
			{text}
		</button>
	);
};
