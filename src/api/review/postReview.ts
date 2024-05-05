import axios from "../axiosConfig";

export default async function postReview({ body }: { body: any }) {
	const response = await axios.post(`/review`, body, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	return response.data;
}
