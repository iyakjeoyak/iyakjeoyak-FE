import axios from "../axiosConfig";

export default async function postUserSupplement(userSupplement: FormData) {
	const response = await axios.post(`/storages`, userSupplement, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
}
