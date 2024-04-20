export enum SORT_QUERIES {
	BEST = "best",
	HIGH_RATING = "highRating",
	LOW_RATING = "lowRating",
	HIGH_PRICE = "highPrice",
	LOW_PRICE = "lowPrice",
}

export interface SortOptionType {
	label: string;
	value: string;
}

export const SORT_OPTIONS = [
	{
		label: "베스트 리뷰 순",
		value: SORT_QUERIES.BEST,
	},
	{
		label: "별점 높은 순",
		value: SORT_QUERIES.HIGH_RATING,
	},
	{
		label: "별점 낮은 순",
		value: SORT_QUERIES.LOW_PRICE,
	},
];
