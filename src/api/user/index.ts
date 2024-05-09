import { queryOptions } from "@tanstack/react-query";
import { getDuplicationEmail, getDuplicationNickName } from "./duplication";
import { getGoogleAuthCode, getKakaoAuthCode } from "./getSocial";

const userQueryOption = {
	getDuplicationEmail: ({ username }: { username: string }) =>
		queryOptions({
			queryKey: ["username", username],
			queryFn: () => getDuplicationEmail({ username }),
		}),
	getDuplicationNickName: ({ nickname }: { nickname: string }) =>
		queryOptions({
			queryKey: ["nickname", nickname],
			queryFn: () => getDuplicationNickName({ nickname }),
		}),
	getKakaoAuthToken: ({ code }: { code: string }) =>
		queryOptions({
			queryKey: ["kakaocode", code],
			queryFn: () => getKakaoAuthCode({ code }),
		}),
	getGoogleAuthToken: ({ code }: { code: string }) =>
		queryOptions({
			queryKey: ["googlecode", code],
			queryFn: () => getGoogleAuthCode({ code }),
		}),
};

export default userQueryOption;
export { default as postSignUp } from "./postSignUp";
export { default as postLogin } from "./postLogin";
