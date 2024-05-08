import styles from "@/components/Form/RadioButton/index.module.scss";
import { forwardRef } from "react";
interface RadioButtonProps {
	text: string;
	value: string;
	id: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ text, value, id }: RadioButtonProps, ref) => {
		return (
			<label className={styles.container}>
				{text}
				<input type="radio" value={value} id={id} ref={ref}></input>
			</label>
		);
	},
);
