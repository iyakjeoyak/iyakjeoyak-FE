import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { LoginType } from "@/pages/login/utils/loginValidation";
import postLogin from "@/api/post/postLogin";

export function useLoginUpMutation() {
	return useMutation<LoginType, AxiosError>({
		mutationFn: (newLoginData: LoginType) => postLogin(newLoginData),
		onSuccess: () => {},
	});
}
