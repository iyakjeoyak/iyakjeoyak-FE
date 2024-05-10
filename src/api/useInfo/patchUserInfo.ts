import axios from "../axiosConfig";

export default async function patchUserInfo(userInfo: FormData) {
	const response = await axios.patch(`/user`, userInfo, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
}
