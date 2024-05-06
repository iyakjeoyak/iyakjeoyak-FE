import userQueryOption from "@/api/user";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const GoogleLogin = () => {
	const navigate = useNavigate();
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
  if (!code) {
		return <>Loading</>;
	}

	const { data } = useQuery(userQueryOption.getGoogleAuthToken({ code }));
	if (data) {
		navigate("/home");
	}

	return <>Loading</>;
};
