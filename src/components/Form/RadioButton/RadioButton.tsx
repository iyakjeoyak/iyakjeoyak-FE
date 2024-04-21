import styles from "@/components/Form/RadioButton/RadioButton.module.scss";
import { useFormContext } from "react-hook-form";

interface RadioButtonProps {
	name: string;
	text: string;
	value?: string;
}

export const RadioButton = ({ name, text, value }: RadioButtonProps) => {
	const { register } = useFormContext();

	return (
		<label className={styles.container}>
			{text}
			<input
				type="radio"
				value={value}
				{...register(name)} // react-hook-form 레지스터 함수 사용하여 입력 필드 등록
			></input>
		</label>
	);
};
