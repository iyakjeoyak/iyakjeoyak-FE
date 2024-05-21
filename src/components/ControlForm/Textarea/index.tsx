import { TextareaHTMLAttributes, forwardRef } from "react";

import Container from "../Container";
import styles from "./index.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	title: string;
	placeholder?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ title, placeholder, ...props }: TextareaProps, ref) => {
		return (
			<Container title={title}>
				<textarea
					className={styles.textarea}
					placeholder={placeholder}
					{...props}
					ref={ref}
				/>
			</Container>
		);
	},
);
