import axios from "../axiosConfig";

export default async function patchReviewById({
	reviewId,
	body,
}: {
	reviewId: number;
	body: FormData;
}) {
	const response = await axios.patch(`/review/${reviewId}`, body, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
}
