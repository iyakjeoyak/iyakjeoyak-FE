import ReviewBoardItem from "./ReviewBoardItem";
import ReviewPostModal from "./ReviewPostModal";
import SelectSort from "@/components/SelectSort";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewBoard.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export enum REVIEW_SORT_QUERIES  {
  oldestReview = 'orderBy=CREATED_DATE&sort=ASC',
  latestReview = 'orderBy=CREATED_DATE&sort=DESC',
  mostLikedReview = 'orderBy=HEART_COUNT&sort=ASC',
  lowLikedReview = 'orderBy=HEART_COUNT&sort=DESC'
}

export const REVIEW_SORT_OPTIONS = [
	{
		label: "오래된 리뷰 순",
		value: REVIEW_SORT_QUERIES.oldestReview,
	},
	{
		label: "리뷰 최신 순",
		value: REVIEW_SORT_QUERIES.latestReview,
	},
	{
		label: "좋아요 많은 순",
		value: REVIEW_SORT_QUERIES.mostLikedReview,
	},
  {
		label: "좋아요 적은 순",
		value: REVIEW_SORT_QUERIES.lowLikedReview,
	},
];

const valueToLabel = {
  'orderBy=CREATED_DATE&sort=ASC': '오래된 리뷰 순',
  'orderBy=CREATED_DATE&sort=DESC': '리뷰 최신 순',
  'orderBy=HEART_COUNT&sort=ASC': '좋아요 많은 순',
  'orderBy=HEART_COUNT&sort=DESC': '좋아요 적은 순'
}

export default function ReviewBoard({medicineId}:{medicineId: number}) {
	const [currentSortValue, setCurrentSortValue] = useState<string>(
		REVIEW_SORT_QUERIES.oldestReview,
	);

	const handleCurrentSortValue = (sortValue: string) => {
		setCurrentSortValue(sortValue);
	};

  const {data:{data:reviews} }
  = useQuery(reviewQueryOptions.getReviewsByMedicineId({medicineId: medicineId, page: 0, size: 6}))


  console.log(currentSortValue)
	return (
		<>
			<SelectSort
				currentSortValue={currentSortValue}
				handleCurrentSortValue={handleCurrentSortValue}
			>
				<SelectSort.SortCurrentOption valueToLabel={valueToLabel} />
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
					{reviews.map((reviewItem)=><ReviewBoardItem key={reviewItem.id} reviewItem={reviewItem}/>)}
				</div>
				<ReviewPostModal />
			</div>
		</>
	);
}
