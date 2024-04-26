import { SignUpType } from "@/pages/signup/utils/signupValidation";

import { AxiosError } from "axios";
import { postSignUp } from "@/api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignUpQuery(data: SignUpType) {
	const querClient = useQueryClient();
	return useMutation<SignUpType, AxiosError>({
		mutationFn: () => postSignUp(data),
		onSettled: () => querClient.invalidateQueries(),
	});
}
