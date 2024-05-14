import axios from "../axiosConfig";

export async function getKakaoAuthCode({ code }: { code: string }) {
	return await axios.get(`/users/kakao-authcode?code=${code}`);
}

export async function getGoogleAuthCode({ code }: { code: string }) {
	return await axios.get(`/users/google-authcode?code=${code}`);
}
