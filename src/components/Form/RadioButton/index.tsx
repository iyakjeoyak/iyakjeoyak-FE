import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

interface RadioButtonProps<T> {
	name: keyof T;
	text: string;
	value?: string;
}

export const RadioButton = <T,>({ name, text, value }: RadioButtonProps<T>) => {
	const { register } = useFormContext();

	return (
		<label className={styles.container}>
			{text}
			<input
				type="radio"
				value={value}
				{...register(name as string)} // react-hook-form 레지스터 함수 사용하여 입력 필드 등록
			></input>
		</label>
	);
};
