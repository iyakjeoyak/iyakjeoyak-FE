import userQueryOption from "@/api/user";
import { setAccessToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GoogleLogin = () => {
	const navigate = useNavigate();
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
	if (!code) {
		return <>Loading</>;
	}

	const { data } = useQuery(userQueryOption.getGoogleAuthToken({ code }));
	console.log(data);
	if (data) {
		const accessToken = data.headers.authorization;
		setAccessToken(accessToken);
		toast.success("로그인이 완료되었습니다.", { autoClose: 2000 });
		navigate("/home");
	}
	return <>Loading</>;
};
