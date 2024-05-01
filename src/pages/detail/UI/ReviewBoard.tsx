import { SORT_OPTIONS, SORT_QUERIES } from "@/constants/SORT_OPTIONS";

import ReviewBoardItem from "./ReviewBoardItem";
import ReviewPostModal from "./ReviewPostModal";
import SelectSort from "@/components/SelectSort";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewBoard.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ReviewBoard({medicineId}:{medicineId: number}) {
	const [currentSortValue, setCurrentSortValue] = useState<string>(
		SORT_QUERIES.BEST,
	);

	const handleCurrentSortValue = (sortValue: string) => {
		setCurrentSortValue(sortValue);
	};

  const {data:{data:reviews} }
  = useQuery(reviewQueryOptions.getReviewsByMedicineId({medicineId: medicineId, page: 1, size: 6}))


	return (
		<>
			<SelectSort
				currentSortValue={currentSortValue}
				handleCurrentSortValue={handleCurrentSortValue}
			>
				<SelectSort.SortCurrentOption />
				<SelectSort.SortOptionList>
					{SORT_OPTIONS.map((sort) => (
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
