import axios from "../axiosConfig";

export interface PatchBodyType {
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
	body: PatchBodyType;
}) {
	const response = await axios.patch(`/review/${reviewId}`, body, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
}
