import axios from "../axiosConfig";

export default async function deleteReviewImage({
	reviewId,
	imageId,
}: {
	reviewId: number;
	imageId: number;
}) {
	const response = await axios.delete(
		`/review/image?reviewId=${reviewId}&imageId=${imageId}`,
	);
	return response.data;
}
