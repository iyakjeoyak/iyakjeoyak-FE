import { ReviewItemType } from "@/types";
import axios from "../axiosConfig";

export default async function getReviewById({
	reviewId,
}: {
	reviewId: number;
}) {
	const response = await axios.get<ReviewItemType>(`/reviews/${reviewId}`);
	return response.data;
}
