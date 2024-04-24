import Container from "../Container";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

interface TextareaProps<T> {
	name: keyof T;
	title: string;
	placeholder?: string;
}

export const Textarea = <T,>({
	name,
	title,
	placeholder,
}: TextareaProps<T>) => {
	const { register } = useFormContext();

	return (
		<Container title={title} name={name as string}>
			<textarea
				className={styles.textarea}
				{...register(name as string)}
				placeholder={placeholder}
			/>
		</Container>
	);
};
