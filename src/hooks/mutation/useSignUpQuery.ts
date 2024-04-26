import { SignUpType } from "@/pages/signup/utils/signupValidation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { postSignUp } from "@/api/post";

export function useSignUpQuery(data: SignUpType) {
	const querClient = useQueryClient();
	return useMutation<SignUpType, AxiosError>({
		mutationFn: () => postSignUp(data),
		onSettled: () => querClient.invalidateQueries(),
	});
}
