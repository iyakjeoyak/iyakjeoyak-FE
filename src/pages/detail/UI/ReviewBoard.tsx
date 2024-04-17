import ReviewBoardItem from "./ReviewBoardItem";
import ReviewDetailModal from "./ReviewDetailModal";
import ReviewPostModal from "./ReviewPostModal";
import styles from "../styles/ReviewBoard.module.scss";
import { useState } from "react";

export default function ReviewBoard() {
	const [isOpenReviewPostModal, setIsOpenReviewPostModal] = useState(false);
	const [isOpenReviewDetailModal, setIsOpenReviewDetailModal] = useState(false);

	const toggleIsOpenReviewPostModal = () => {
		setIsOpenReviewPostModal((prev) => !prev);
	};

	const toggleIsOpenReviewDetailModal = () => {
		setIsOpenReviewDetailModal((prev) => !prev);
	};

	return (
		<>
			<div className={styles["container"]}>
				<div className={styles["reviews-container"]}>
					<ReviewBoardItem onClick={toggleIsOpenReviewDetailModal} />
					<ReviewBoardItem onClick={toggleIsOpenReviewDetailModal} />
					<ReviewBoardItem onClick={toggleIsOpenReviewDetailModal} />
				</div>
				<button onClick={toggleIsOpenReviewPostModal}>후기 작성하기</button>
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
