import userQueryOption from "@/api/user";
import Loading from "@/pages/feedback/Loading";
import { setAccessToken, setRefreshToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const KakaoLogin = () => {
	const navigate = useNavigate();
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
	if (!code) {
		return <>Loading</>;
	}

	const { data } = useQuery(userQueryOption.getKakaoAuthToken({ code }));
	if (data) {
		const accessToken = data.headers.authorization;
		const refreshToken = data.data;
		setAccessToken(accessToken);
		setRefreshToken(refreshToken);
		toast.success("로그인이 완료되었습니다.", { autoClose: 2000 });
		navigate("/home");
	}
	return <Loading />;
};
