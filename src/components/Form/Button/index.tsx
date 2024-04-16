import { useFormContext } from "@/hooks/useFormContext";
import { IconType } from "react-icons";
import styles from "./index.module.scss";
import classNames from "classnames";

interface ButtonProps {
	name?: string;
	icon?: IconType;
	onClick?: () => Promise<void>;
	type?: "submit" | "button";
	variant?: "light" | "dark" | "icon";
}

export const Button = ({
	name,
	icon: Icon,
	onClick,
	type,
	variant,
}: ButtonProps) => {
	const { isLoading, loadingHandler } = useFormContext();

	const clickHandler = async () => {
		if (!onClick) {
			throw new Error("There is no onClick props ");
		}
		loadingHandler(true);
		try {
			await onClick();
		} catch (error) {
			console.error("onClick error", error);
			loadingHandler(false);
		}
	};

	const buttonClasses = classNames(styles.container, {
		[styles.light]: variant === "light",
		[styles.dark]: variant === "dark",
		[styles.icon]: variant === "icon",
	});
	return (
		<button
			className={`${buttonClasses} m-large`}
			type={type}
			disabled={isLoading}
			onClick={clickHandler}
		>
			{Icon && <Icon />}
			{name}
		</button>
	);
};
