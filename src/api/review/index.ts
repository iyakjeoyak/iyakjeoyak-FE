import getBestReview from "./getBestReview";
import getReviewById from "./getReviewById";
import getReviewsByMedicineId from "./getReviewsByMedicineId";
import { queryOptions } from "@tanstack/react-query";

const reviewQueryOptions = {
	getReviewsByMedicineId: ({ queryParams }: { queryParams: string }) =>
		queryOptions({
			queryKey: ["reviews", queryParams],
			queryFn: () => getReviewsByMedicineId({ queryParams }),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),
	getBestReview: ({ size }: { size: number }) =>
		queryOptions({
			queryKey: ["reviews", "best"],
			queryFn: () => getBestReview({ size }),
			initialData: [],
		}),
	getReviewById: ({ reviewId }: { reviewId: number }) =>
		queryOptions({
			queryKey: ["review", reviewId],
			queryFn: () => getReviewById({ reviewId }),
			initialData: {
				id: 0,
				title: "",
				content: "",
				createdBy: { userId: 0, nickname: "", image: { id: 0, fullPath: "" } },
				createdDate: "",
				hashtagResult: [{ id: 0, name: "" }],
				heartCount: 0,
				star: 0,
				modifiedDate: "",
				imageResult: [],
			},
		}),
};

export default reviewQueryOptions;
