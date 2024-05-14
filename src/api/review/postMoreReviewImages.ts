import axios from "../axiosConfig";

export default async function postMoreReviewImage({
	body,
	reviewId,
}: {
	body: FormData;
	reviewId: number;
}) {
	const response = await axios.post(
		`/reviews/image?reviewId=${reviewId}`,
		body,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		},
	);

	return response.data;
}
