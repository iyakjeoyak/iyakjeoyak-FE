import axios from "../axiosConfig";

export default async function postSignUp(data: FormData) {
	return await axios.post("/user/signUp", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
}
