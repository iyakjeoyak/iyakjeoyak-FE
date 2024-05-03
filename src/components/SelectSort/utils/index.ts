import { REVIEW_SORT_QUERIES } from "@/pages/detail/UI/ReviewBoard";

export function getValueLabel(value: string) {
	switch (value) {
		case REVIEW_SORT_QUERIES.oldestReview:
			return "베스트 리뷰 순";
		case REVIEW_SORT_QUERIES.latestReview:
			return "별점 높은 순";
		case REVIEW_SORT_QUERIES.mostLikedReview:
			return "별점 낮은 순";
		default:
			return "Not found";
	}
}
