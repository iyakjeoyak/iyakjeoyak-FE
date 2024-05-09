import Container from "@/components/ControlForm/Container";
import { InputHTMLAttributes, forwardRef } from "react";
import styles from "@/components/Form/Container/index.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	placeholder: string;
	title?: string;
	type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, placeholder, title, type = "text", ...props }: InputProps,
		ref,
	) => {
		return (
			<Container title={title}>
				<input
					{...props}
					className={`${styles.element} ${className || ""} m-big`}
					placeholder={placeholder}
					type={type}
					ref={ref}
				/>
			</Container>
		);
	},
);
