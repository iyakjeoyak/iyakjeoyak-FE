import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { RadioButton } from "./RadioButton/RadioButton";
import { BaseSyntheticEvent } from "react";

interface FormProps {
	children: React.ReactNode;
	onSubmit: (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		e?: BaseSyntheticEvent<object, any, any> | undefined,
	) => Promise<void>; // 폼 제출 핸들러
	className?: string;
}

export const Form = ({ children, onSubmit, className }: FormProps) => {
	// useForm 훅을 사용하여 폼 상태 및 유효성 검사 처리
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
			</form>
		</FormProvider>
	);
};
Form.Input = Input;
Form.Button = Button;
Form.RadioButton = RadioButton;
