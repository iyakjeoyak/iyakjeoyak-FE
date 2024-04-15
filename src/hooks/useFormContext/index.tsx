import { createContext, useContext } from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface FormContextInterface {
	isLoading: boolean;
	loadingHandler: (boolean: boolean) => void;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}
// Form 컨텍스트 생성
export const FormContext = createContext<FormContextInterface | undefined>(
	undefined,
);
// Form 컨텍스트를 사용하기 위한 커스텀 훅 정의
export const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormContext는 FormProvider 내에서 사용해야 합니다");
	}
	return context;
};
