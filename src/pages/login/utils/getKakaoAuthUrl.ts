export const getKakaoAuthUrl = () => {
	const restApiKey = import.meta.env.VITE_KAKAO_RESTAPI_KEY;
	const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
	return `http://54.180.121.206:8080/oauth2/authorization/kakao`;
	// return `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;
};

export const handleKakaoLogin = () => {
	window.location.href = getKakaoAuthUrl();
};
 