import { useMutation } from "@tanstack/react-query";
import { LoginFormType } from "@/pages/login/utils/loginValidation";
import postLogin from "@/api/post/postLogin";
import { AxiosError, AxiosResponse } from "axios";

export const useLoginMutation = useMutation<
	AxiosResponse,
	AxiosError,
	LoginFormType,
	unknown
>({
	mutationFn: (newLoginData: LoginFormType) => postLogin(newLoginData),
});
