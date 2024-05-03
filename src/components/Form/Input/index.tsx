import { InputHTMLAttributes } from "react";
import Container from "../Container";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

type GenericString<T> = Extract<keyof T, string>;

type GenericStringRecord<T> = Record<GenericString<T>, unknown>;

interface InputProps<T extends GenericStringRecord<T>>
	extends InputHTMLAttributes<HTMLInputElement> {
	name: GenericString<T>;
	className?: string;
	placeholder: string;
	title?: string;
	type?: string;
	
}

export const Input = <T extends Record<Extract<keyof T, string>, unknown>>({
	name, // 입력 필드의 이름
	className,
	placeholder,
	title,
  type = "text",
  ...props
}: InputProps<T>) => {
	const { register } = useFormContext();
	return (
		<Container title={title} name={name as keyof T}>
      <input
        {...props}
				className={`${styles.element} ${className || ""} m-big`}
				{...register(name as string)} // 입력 필드를 useForm으로 등록
				placeholder={placeholder}
				type={type}
			/>
		</Container>
	);
};
