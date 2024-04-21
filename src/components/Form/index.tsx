import {
	DefaultValues,
	FieldValues,
	FormProvider,
	Resolver,
	useForm,
} from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { RadioButton } from "./RadioButton/RadioButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormProps<T extends FieldValues> {
	children: React.ReactNode;
	validationSchema: yup.ObjectSchema<T>; // 폼 유효성 검사 스키마
	pageDefaultValues: DefaultValues<T>;
}

export const Form = <T extends FieldValues>({
	children,
	validationSchema,
	pageDefaultValues,
}: FormProps<T>) => {
	// useForm을 사용하여 폼 상태를 관리하고 yup 스키마를 사용하여 입력 양식의 유효성을 검사
	const methods = useForm<T>({
		resolver: yupResolver(validationSchema) as unknown as Resolver<T>, // yup 스키마를 해결하는 resolver 설정
		mode: "onChange", // 기본값은 onSubmit
		defaultValues: pageDefaultValues,
	});

	return <FormProvider {...methods}>{children}</FormProvider>; // 하위 컴포넌트에 useForm에서 생성된 메소드들을 제공하는 FormProvider 반환
};
Form.Input = Input;
Form.Button = Button;
Form.RadioButton = RadioButton;
