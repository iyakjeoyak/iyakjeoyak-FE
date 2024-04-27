import instance from "..";

export default async function deleteReviewById({reviewId}:{reviewId: number}) {
	const response = await instance.delete(`/review/${reviewId}`);
	return response.data;
}