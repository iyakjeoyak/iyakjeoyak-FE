import axios from "../axiosConfig";

export default async function postReviewLike(id: number) {
	const response = await axios.post(`/heart/review/click`, {reviewId: id});
	return response.data;
}
