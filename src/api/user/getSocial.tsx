import axios from "../axiosConfig";

export async function getKakaoAuthCode({code}:{code:string}) {
  return await axios.get(`/user/getKakaoAuthCode?code=${code}`);
}

export async function getGoogleAuthCode({ code }: { code: string }) {
	return await axios.get(`/user/getGoogleAuthCode?code=${code}`);
}