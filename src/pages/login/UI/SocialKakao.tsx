import { Form } from "@/components/Form";
import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export const SocialKakao = () => {
	const Rest_api_key = import.meta.env.VITE_KAKAO_RESTAPI_KEY;
	const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
	const handleKakaoLogin = () => {
		window.location.href = kakaoURL;
	};
	return (
		<Form.Button
			icon={RiKakaoTalkFill}
			type="button"
			variant="icon"
			onClick={handleKakaoLogin}
		/>
	);
};

const Redirection = () => {
	const code = window.location.search;
	// const code = new URL(dococument.location.toString()).searchParams.get("code");
	const navigate = useNavigate();
	const headers = {
		"Content-Type": "application/x-www-form-urlencoded",
	};
	console.log("code", code);
	useEffect(() => {
		console.log(import.meta.env.VITE_BASE_URL);
	}, []);
};
