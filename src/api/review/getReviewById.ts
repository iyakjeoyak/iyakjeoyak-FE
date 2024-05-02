import { ReviewItemType } from "@/types";
import instance from "..";

export default async function getReviewById({
	reviewId,
}: {
	reviewId: number;
}) {
	const response = await instance.get<ReviewItemType>(`/review/${reviewId}`);
	return response.data;
}
