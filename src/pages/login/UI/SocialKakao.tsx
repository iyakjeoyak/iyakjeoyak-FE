import { Form } from "@/components/Form";
import { RiKakaoTalkFill } from "react-icons/ri";
export const SocialKakao = () => {
	console.log("Kakao login clicked");
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
