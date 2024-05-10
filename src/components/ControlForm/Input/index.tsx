import Container from "@/components/ControlForm/Container";
import { InputHTMLAttributes, forwardRef } from "react";
import styles from "../Input/index.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	placeholder?: string;
	title?: string;
	type?: string;
	value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			placeholder,
			title,
			value,
			type = "text",
			...props
		}: InputProps,
		ref,
	) => {
		return (
			<Container title={title}>
				<input
					{...props}
					className={`${styles.element} ${className || ""} m-big`}
					placeholder={placeholder}
					type={type}
					value={value}
					ref={ref}
				/>
			</Container>
		);
	},
);
