import axios from "../axiosConfig";

export interface ReviewPatchBodyType {
	title: string;
	tagList: number[];
	content: string;
	star: number;
}

export default async function patchReviewById({
	reviewId,
	body,
}: {
	reviewId: number;
	body: ReviewPatchBodyType;
}) {
	const response = await axios.patch(`/reviews/${reviewId}`, body);
	return response.data;
}
