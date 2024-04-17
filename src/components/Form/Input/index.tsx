import { useFormContext } from "@/hooks/useFormContext";
import styles from "./index.module.scss";
interface InputProps {
	name: string;
	text: string;
	type?: string;
	placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
	name,
	text,
	type,
	placeholder,
}) => {
	const { errors, isLoading, register } = useFormContext();
	// 에러 메시지 가져오기
	const errorMessage = errors[name]?.message as string;

	return (
		<div>
			<label className={styles.container}>
				<span>{text}</span>
				<input
					className={`${styles.element} m-big`}
					type={type}
					disabled={isLoading} // 로딩 중일 때 입력 필드 비활성화
					{...register(name)} // react-hook-form 레지스터 함수 사용하여 입력 필드 등록
					placeholder={placeholder}
				/>
			</label>
			{errorMessage && <span>{errorMessage}</span>}
		</div>
	);
};
