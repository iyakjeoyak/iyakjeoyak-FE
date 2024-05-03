import { queryOptions } from "@tanstack/react-query";
import getReviewsByMedicineId from "./getReviewsByMedicineId";
import getReviewById from "./getReviewById";

const reviewQueryOptions = {
	getReviewsByMedicineId: ({ medicineId }: { medicineId: number }) =>
		queryOptions({
			queryKey: ["review", "reviews", medicineId],
			queryFn: () => getReviewsByMedicineId({ medicineId }),
		}),
	getReviewById: ({ reviewId }: { reviewId: number }) =>
		queryOptions({
			queryKey: ["review", "reviews", reviewId],
			queryFn: () => getReviewById({ reviewId }),
		}),
};

export default reviewQueryOptions;
