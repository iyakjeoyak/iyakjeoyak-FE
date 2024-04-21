import styles from "./index.module.scss";
import { getButtonClasses, ButtonStyles } from "@/utils/getButtonClasses";
import { Sizes, Variant } from "@/types/styleType";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: JSX.Element;
	onClick: () => Promise<void> | void;
	type?: "submit" | "button";
	variant: Variant;
	size?: Sizes;
	className?: string;
}

export const Button = ({
	icon,
	onClick,
	type = "button",
	variant,
	size = "m",
	className,
	children,
}: ButtonProps) => {
	const buttonClasses = getButtonClasses(styles as ButtonStyles, {
		variant,
		size,
	});

	return (
		<button
			className={`${buttonClasses} ${className}`}
			type={type}
			onClick={onClick}
		>
			{icon}
			{children}
		</button>
	);
};
