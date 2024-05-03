import axios from "../axiosConfig";

interface PostMedicineLikeType {
  id: number;
}

export default async function postReviewLike(body: PostMedicineLikeType) {
	const response = await axios.post(`/heart/review`, {body});
	return response.data;
}
