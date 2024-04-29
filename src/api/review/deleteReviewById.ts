import axios from "../axiosConfig";

export default async function deleteReviewById({reviewId}:{reviewId: number}) {
	const response = await axios.delete(`/review/${reviewId}`);
	return response.data;
}