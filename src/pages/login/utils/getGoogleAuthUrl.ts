import { envConfig } from "@/utils/envConfig";

export const getGoogleAuthUrl = () => {
	return `https://accounts.google.com/o/oauth2/auth?client_id=${envConfig.GOOGLE_CLIENT_ID}&redirect_uri=${envConfig.KAKAO_REDIRECT_URI}&response_type=code&scope=openid email profile`;
};

export const handleGoogleLogin = () => {
	window.location.href = getGoogleAuthUrl();
};
