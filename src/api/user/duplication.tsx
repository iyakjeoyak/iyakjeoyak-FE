import axios from "../axiosConfig";


export async function getDuplicationEmail({username}:{username:string}) {
	const response = await axios.get(`/user/check/username/${username}`);
	return response.data;
}

export async function getDuplicationNickName({nickname}:{nickname:string}) {
  const response = await axios.get(`/user/check/nickname/${nickname}`);
  return response.data
}
