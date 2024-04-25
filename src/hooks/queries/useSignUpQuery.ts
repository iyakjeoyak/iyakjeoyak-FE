import { SignUpType } from "@/pages/signup/utils/signupValidation";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import queryKeys from "./queryKeys";
import { postSignUp } from "@/api/post";

export function useSignUpQuery(data: SignUpType) {
	return useQuery<SignUpType, AxiosError>({
		queryKey: queryKeys.SignUp(),
		queryFn: async () => postSignUp(data),
	});
}
