import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const KakaoLogin = () => {
	const navigate = useNavigate();
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
	const restApiKey = import.meta.env.VITE_KAKAO_RESTAPI_KEY;
	const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

	useEffect(() => {
		const getKakaoToken = async (code: string) => {
			try {
				const response = await fetch(
					`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${restApiKey}&redirect_uri=${redirectUri}&code=${code}`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
						},
					},
				);
				console.log("code", code);
				console.log("response", response);
				console.log("data", await response.json());
				navigate("/home");
			} catch (error) {
				console.error("error", error);
			}
		};
		// tanstack-query 토큰구현
		if (code) {
			getKakaoToken(code);
		}
	}, [code, navigate, redirectUri, restApiKey]);

	return <>Loading</>;
};
