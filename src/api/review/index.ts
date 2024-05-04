import getBestReview from "./getBestReview";
import getReviewById from "./getReviewById";
import getReviewsByMedicineId from "./getReviewsByMedicineId";
import postReview from "./postReview";
import { queryOptions } from "@tanstack/react-query";

const reviewQueryOptions = {
	getReviewsByMedicineId: ({ queryParams }: { queryParams: string }) =>
		queryOptions({
			queryKey: ["review", "reviews", queryParams],
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
			queryKey: ["review", "reviews", "best"],
			queryFn: () => getBestReview({ size }),
			initialData: [],
		}),
	getReviewById: ({ reviewId }: { reviewId: number }) =>
		queryOptions({
			queryKey: ["review", "reviews", reviewId],
			queryFn: () => getReviewById({ reviewId }),
			initialData: {
				id: 0,
				title: "",
				content: "",
				createdBy: { userId: 0, nickname: "", image: null },
				createdDate: "",
				hashtagResult: [{ id: 0, name: "" }],
				heartCount: 0,
				star: 0,
				modifiedDate: "",
			},
		}),
	postReview: ({ body }: { body: FormData }) =>
		queryOptions({
			queryKey: ["review", "postReview"],
			queryFn: () => postReview({ body }),
		}),
};

export default reviewQueryOptions;
