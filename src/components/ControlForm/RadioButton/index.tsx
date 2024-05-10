import styles from "@/components/Form/RadioButton/index.module.scss";
import { InputHTMLAttributes, forwardRef } from "react";
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	text: string;
	value: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ text, value, ...props }: RadioButtonProps, ref) => {
		return (
			<label className={styles.container}>
				{text}
				<input {...props} type="radio" value={value} ref={ref}></input>
			</label>
		);
	},
);
