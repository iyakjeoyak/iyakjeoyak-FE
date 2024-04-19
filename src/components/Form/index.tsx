import React, { useState } from "react";
import * as yup from "yup";
import {
	FieldValues,
	SubmitHandler,
	useForm,
	useFormContext,
} from "react-hook-form";
import { FormContext } from "@hooks/useFormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "./Button";
import { Input } from "./Input";
import { RadioButton } from "./RadioButton/RadioButton";

interface FormProps {
	children: React.ReactNode;
	onSubmit: SubmitHandler<FieldValues>; // 폼 제출 핸들러
	schema?: yup.ObjectSchema<FieldValues>; // 폼 유효성 검사 스키마
	className?: string;
}

export const Form = ({ children, onSubmit, schema, className }: FormProps) => {
	// 로딩 상태 변경 핸들러
	const FormContext = useFormContext();
	const [isLoading, setIsLoading] = useState(false);
	const loadingHandler = (boolean: boolean) => setIsLoading(boolean);

	// useForm 훅을 사용하여 폼 상태 및 유효성 검사 처리
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		resolver: schema ? yupResolver(schema) : undefined,
		mode: "onChange",
	});

	// 제출 핸들러 함수
	const submit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);
		try {
			await onSubmit(data);
		} catch (error) {
			console.error("submit error", error);
			setIsLoading(false);
		}
	};
	return (
		<FormContext.Provider
			value={{ isLoading, errors, register, loadingHandler }}
		>
			<form className={className} onSubmit={handleSubmit(submit)}>
				{children}
			</form>
		</FormContext.Provider>
	);
};
Form.Input = Input;
Form.Button = Button;
Form.RadioButton = RadioButton;
