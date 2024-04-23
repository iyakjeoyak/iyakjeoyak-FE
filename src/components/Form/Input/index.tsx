import Container from "../Container";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

interface InputProps<T> {
	name: keyof T;
	className?: string;
	placeholder: string;
	title?: string;
	type?: string;
}

export const Input = <T,>({
	name, // 입력 필드의 이름
	className,
	placeholder,
	title,
	type = "text",
}: InputProps<T>) => {
	const { register } = useFormContext();
	return (
		<Container title={title} name={name}>
			<input
				className={`${styles.element} ${className || ""} m-big`}
				{...register(name as string)} // 입력 필드를 useForm으로 등록
				placeholder={placeholder}
				type={type}
			/>
		</Container>
	);
};
