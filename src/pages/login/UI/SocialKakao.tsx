import { Form } from "@/components/Form";
import axios from "axios";
import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export const SocialKakao = () => {
	console.log("Kakao login clicked");
	const Rest_api_key = process.env.VITE_KAKAO_RESTAPI_KEY;
	const redirect_uri = "http://localhost:5173/auth";
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleKakaoLogin = async () => {
    window.location.href = kakaoURL;
    await axios.post("kakaoURL",headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },);
		
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
  // const code = window.location.search
  const code = new URL(document.location.toString()).searchParams.get('code');
  const navigate = useNavigate()

  useEffect(() => {
    console.log(process.env.)
  })
}