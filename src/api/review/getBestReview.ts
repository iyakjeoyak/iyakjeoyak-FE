import { ReviewItemType } from "@/types";
import axios from "../axiosConfig";

export interface BestReviewItemType extends ReviewItemType {
	medicine: {
		id: number;
		prdlst_NM: string;
	};
}
export default async function getBestReview({ size }: { size: number }) {
	const response = await axios.get<BestReviewItemType[]>(
		`/reviews/top?size=${size}`,
	);
	return response.data;
}
