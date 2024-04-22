import { SORT_OPTIONS, SORT_QUERIES } from "@/constants/SORT_OPTIONS";

import ReviewBoardItem from "./ReviewBoardItem";
import ReviewPostModal from "./ReviewPostModal";
import SelectSort from "@/components/SelectSort";
import styles from "../styles/ReviewBoard.module.scss";
import { useState } from "react";

export default function ReviewBoard() {
	const [currentSortValue, setCurrentSortValue] = useState<string>(
		SORT_QUERIES.BEST,
	);

	const handleCurrentSortValue = (sortValue: string) => {
		setCurrentSortValue(sortValue);
	};

	return (
		<>
			<SelectSort
				currentSortValue={currentSortValue}
				handleCurrentSortValue={handleCurrentSortValue}
			>
				<SelectSort.SortCurrentOption />
				<SelectSort.SortOptionList>
					{SORT_OPTIONS.map((sort) => (
						<SelectSort.SortOption value={sort.value} label={sort.label} />
					))}
				</SelectSort.SortOptionList>
			</SelectSort>
			<div className={styles["container"]}>
				<div className={styles["reviews-container"]}>
					<ReviewBoardItem />
					<ReviewBoardItem />
					<ReviewBoardItem />
				</div>
				<ReviewPostModal />
			</div>
		</>
	);
}
