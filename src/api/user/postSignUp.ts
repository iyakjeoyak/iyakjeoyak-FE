import axios from "../axiosConfig";

export default async function postSignUp(data: FormData) {
	return await axios.post("/user/signup", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
}
