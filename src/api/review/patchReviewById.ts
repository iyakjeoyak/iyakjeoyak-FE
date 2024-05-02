import instance from "..";

export default async function patchReviewById({
	reviewId,
}: {
	reviewId: number;
}) {
	const response = await instance.patch(`/review/${reviewId}`);
	return response.data;
}
