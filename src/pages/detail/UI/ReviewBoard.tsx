import { SORT_OPTIONS, SORT_QUERIES } from "@/constants/SORT_OPTIONS";

import { Button } from "@/components/Button";
import ReviewBoardItem from "./ReviewBoardItem";
import ReviewDetailModal from "./ReviewDetailModal";
import ReviewPostModal from "./ReviewPostModal";
import SelectSort from "@/components/SelectSort";
import styles from "../styles/ReviewBoard.module.scss";
import { useState } from "react";

export default function ReviewBoard() {
	const [currentSortValue, setCurrentSortValue] = useState<string>(
		SORT_QUERIES.BEST,
	);
	const [isOpenReviewPostModal, setIsOpenReviewPostModal] = useState(false);
	const [isOpenReviewDetailModal, setIsOpenReviewDetailModal] = useState(false);

	const handleCurrentSortValue = (sortValue: string) => {
		setCurrentSortValue(sortValue);
	};

	const toggleIsOpenReviewPostModal = () => {
		setIsOpenReviewPostModal((prev) => !prev);
	};

	const toggleIsOpenReviewDetailModal = () => {
		setIsOpenReviewDetailModal((prev) => !prev);
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
					<ReviewBoardItem onClick={toggleIsOpenReviewDetailModal} />
					<ReviewBoardItem onClick={toggleIsOpenReviewDetailModal} />
					<ReviewBoardItem onClick={toggleIsOpenReviewDetailModal} />
				</div>
				<Button
					onClick={toggleIsOpenReviewPostModal}
					variant="dark"
					name="후기 작성하기"
				/>
			</div>
			{isOpenReviewPostModal && (
				<ReviewPostModal toggleModalOpen={toggleIsOpenReviewPostModal} />
			)}
			{isOpenReviewDetailModal && (
				<ReviewDetailModal toggleModalOpen={toggleIsOpenReviewDetailModal} />
			)}
		</>
	);
}
