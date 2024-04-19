import styles from "./index.module.scss";
import { ElementType, useMemo } from "react";
import { getButtonClasses, ButtonStyles } from "@/utils/getButtonClasses";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	name?: string; // 버튼 텍스트
	icon?: ElementType; // 아이콘 버튼
	onClick?: (() => Promise<void>) | (() => void);
	type?: "submit" | "button";
	variant: "light" | "dark" | "greentransparent"; // 버튼 색상
	size?: "default" | "medium";
	className?: string;
}

export const Button = ({
	name,
	icon: Icon,
	onClick,
	type = "button",
	variant,
	size = "default",
	className,
	children,
}: ButtonProps) => {
	const buttonClasses = useMemo(
		() => getButtonClasses(styles as ButtonStyles, { variant, name, size }),
		[variant, name, size],
	);

	return (
		<button
			className={`${buttonClasses} ${className}`}
			type={type}
			onClick={onClick}
		>
			{Icon && <Icon />}
			{children || (name && <span>{name}</span>)}
		</button>
	);
};
