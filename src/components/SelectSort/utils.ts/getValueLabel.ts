import { SORT_QUERIES } from "@/constants/SORT_OPTIONS";

export default function getValueLabel(value: string) {
	switch (value) {
		case SORT_QUERIES.BEST:
			return "베스트 리뷰 순";
		case SORT_QUERIES.HIGH_RATING:
			return "별점 높은 순";
		case SORT_QUERIES.LOW_PRICE:
			return "별점 낮은 순";
		default:
			return "Not found";
	}
}
