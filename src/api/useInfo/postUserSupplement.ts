import axios from "../axiosConfig";

export default async function postUserSupplement(userSupplement: FormData) {
	const response = await axios.post(`/storage`, userSupplement, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	console.log(response.data);
	return response.data;
}
