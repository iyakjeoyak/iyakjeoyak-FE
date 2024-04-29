import { SignUpFormType } from "@/pages/signup/utils/signupValidation";
import { AxiosError, AxiosResponse } from "axios";
import { postSignUp } from "@/api/post";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = useMutation<
	AxiosResponse,
	AxiosError,
	SignUpFormType,
	unknown
>({
	mutationFn: (newSignUpData: SignUpFormType) => postSignUp(newSignUpData),
});
