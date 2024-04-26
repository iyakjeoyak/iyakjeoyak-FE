import { SignUpType } from "@/pages/signup/utils/signupValidation";
import { AxiosError } from "axios";
import { postSignUp } from "@/api/post";
import { useMutation } from "@tanstack/react-query";

export function useSignUpMutation() {
	return useMutation<SignUpType, AxiosError>({
		mutationFn: (newSignUpData: SignUpType) => postSignUp(newSignUpData),
		onSuccess: () => {},
	});
}
