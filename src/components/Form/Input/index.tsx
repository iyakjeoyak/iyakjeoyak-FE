// import { useFormContext } from "@/hooks/useFormContext";
import styles from "./index.module.scss";
import { FormContext } from "@/hooks/useFormContext";
import { useContext } from "react";

interface InputProps {
	name: string;
	text: string;
	type?: string;
	placeholder?: string;
	className?: string;
}

export const Input: React.FC<InputProps> = ({
	name,
	text,
	type = "text",
	placeholder,
	className,
	...inputProps
}) => {
	const context = useContext(FormContext);
	// const { errors, isSubmitting, register } = useFormContext();
	if (!context) {
		throw new Error("Input must be used within a FormProvider");
	}
	const { register, errors, isLoading } = context;

	// 에러 메시지 가져오기
	const errorMessage = errors[name]?.message as string;

	return (
		<div>
			<label className={styles.container}>
				<span className={className}>{text}</span>
				<input
					className={`${styles.element} ${className || ""} m-big`}
					type={type}
					disabled={isLoading} // 로딩 중일 때 입력 필드 비활성화
					{...register(name)} // react-hook-form 레지스터 함수 사용하여 입력 필드 등록
					placeholder={placeholder}
					{...inputProps}
				/>
			</label>
			{errorMessage && <span>{errorMessage}</span>}
		</div>
	);
};
