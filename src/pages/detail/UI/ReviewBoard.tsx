import BlankBox from "@/components/BlankBox";
import ReviewBoardItem from "./ReviewBoardItem";
import ReviewPostModal from "./ReviewPostModal";
import SelectSort from "@/components/SelectSort";
import isZero from "@/utils/isZero";
import qs from "qs";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewBoard.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const enum REVIEW_SORT_QUERIES {
	OLDEST = "oldest",
	LATEST = "latest",
	MOST_LIKED = "most_liked",
	LOW_LIKED = "low_liked",
}

export const REVIEW_SORT_OPTIONS: SortOptionType[] = [
	{
		label: "오래된 리뷰 순",
		value: REVIEW_SORT_QUERIES.OLDEST,
	},
	{
		label: "리뷰 최신 순",
		value: REVIEW_SORT_QUERIES.LATEST,
	},
	{
		label: "좋아요 많은 순",
		value: REVIEW_SORT_QUERIES.MOST_LIKED,
	},
	{
		label: "좋아요 적은 순",
		value: REVIEW_SORT_QUERIES.LOW_LIKED,
	},
];

export interface SortOptionType {
	label: string;
	value: REVIEW_SORT_QUERIES;
}

export interface SortMappingType {
	orderBy: string;
	sort: "ASC" | "DESC";
}

const REVIEW_SORT_QUERIES_MAPPING: Record<
	REVIEW_SORT_QUERIES,
	SortMappingType
> = {
	[REVIEW_SORT_QUERIES.OLDEST]: { orderBy: "CREATED_DATE", sort: "ASC" },
	[REVIEW_SORT_QUERIES.LATEST]: { orderBy: "CREATED_DATE", sort: "DESC" },
	[REVIEW_SORT_QUERIES.MOST_LIKED]: { orderBy: "HEART_COUNT", sort: "ASC" },
	[REVIEW_SORT_QUERIES.LOW_LIKED]: { orderBy: "HEART_COUNT", sort: "DESC" },
};

export default function ReviewBoard({ medicineId }: { medicineId: number }) {
	const [currentSort, setCurrentSort] = useState<SortOptionType>(
		REVIEW_SORT_OPTIONS[0],
	);

	const handleCurrentSort = (sortOption: SortOptionType) => {
		setCurrentSort(sortOption);
	};

	const queryParams = qs.stringify(
		{
			medicineId,
			page: 0,
			size: 50, // TODO 무한 스크롤 바꾸기..바꾸겠지..
			...REVIEW_SORT_QUERIES_MAPPING[currentSort.value],
		},
		{ addQueryPrefix: true },
	);

	const {
		data: { data: reviews },
	} = useQuery(reviewQueryOptions.getReviewsByMedicineId({ queryParams }));

	return (
		<>
			<SelectSort
				currentSort={currentSort}
				handleCurrentSort={handleCurrentSort}
			>
				<SelectSort.SortCurrentOption />
				<SelectSort.SortOptionList>
					{REVIEW_SORT_OPTIONS.map((sort) => (
						<SelectSort.SortOption
							key={sort.value}
							value={sort.value}
							label={sort.label}
						/>
					))}
				</SelectSort.SortOptionList>
			</SelectSort>
			<div className={styles["container"]}>
				<div className={styles["reviews-container"]}>
					{isZero(reviews.length) ? (
						<BlankBox text="작성된 리뷰가 없습니다" />
					) : (
						reviews.map((reviewItem) => (
							<ReviewBoardItem key={reviewItem.id} reviewItem={reviewItem} />
						))
					)}
				</div>
				<ReviewPostModal />
			</div>
		</>
	);
}
