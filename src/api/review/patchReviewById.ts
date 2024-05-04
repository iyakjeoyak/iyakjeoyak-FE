import axios from "../axiosConfig";

export default async function patchReviewById({
	reviewId,
}: {
	reviewId: number;
}) {
	const response = await axios.patch(`/review/${reviewId}`);
	return response.data;
}
