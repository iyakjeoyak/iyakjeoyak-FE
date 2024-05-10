import { envConfig } from "@/utils/envConfig";

export const getKakaoAuthUrl = () => {
	return `https://kauth.kakao.com/oauth/authorize?client_id=${envConfig.KAKAO_RESTAPI_KEY}&redirect_uri=${envConfig.KAKAO_REDIRECT_URI}&response_type=code`;
};

export const handleKakaoLogin = () => {
	window.location.href = getKakaoAuthUrl();
};
 