import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GoogleLogin = () => {
	const navigate = useNavigate();
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
	const clientId = import.meta.env.VITE_GOGLE_CLIENT_ID;
	const clientPw = import.meta.env.VITE_GOGLE_CLIENT_PW;
	const redirectUri = import.meta.env.VITE_GOGLE_REDIRECT_URI;

	useEffect(() => {
		const getKakaoToken = async (code: string) => {
			try {
				const response = await fetch(
					`https://oauth2.googleapis.com/token?grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientPw}&code=${code}`,
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
		if (code) {
			getKakaoToken(code);
		}
	}, [code, navigate, redirectUri, clientId, clientPw]);

	return <>Loading</>;
};
