import Container from "../Container";
import { ErrorMessage } from "@hookform/error-message";
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
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<Container title={title}>
			<textarea
				className={styles.textarea}
				{...register(name as string)}
				placeholder={placeholder}
			/>
			{/* 추후 Container로 집어 넣기*/}
			<ErrorMessage
				errors={errors}
				name={name as string}
				render={({ message }) => <p>{message}</p>}
			/>
		</Container>
	);
};
