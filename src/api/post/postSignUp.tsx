import axios from "../axiosConfig";

export default async function postSignUp(data: FormData) {
	return axios.post("/user", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
}
