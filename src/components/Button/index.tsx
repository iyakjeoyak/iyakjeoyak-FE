import { ButtonStyles, getButtonClasses } from "@/utils/getButtonClasses";
import { Sizes, Variant } from "@/types/styleType";

import styles from "./index.module.scss";

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
  ...props
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
      {...props}
		>
			{icon}
			{children}
		</button>
	);
};
