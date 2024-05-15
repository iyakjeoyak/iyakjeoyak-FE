import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { FiAlertTriangle } from "react-icons/fi";
import Modal from "@/components/Modal";
import PopupModal from "@/components/PopupModal";
import ReviewDetailModal from "./ReviewDetailModal";
import { ReviewItemType } from "@/types";
import TagCommon from "@/components/Tag";
import Title from "@/components/WriterTitle";
import deleteReviewById from "@/api/review/deleteReviewById";
import isZero from "@/utils/isZero";
import postReviewLike from "@/api/review/postReviewLike";
import { queryClient } from "@/main";
import stopEvent from "@/utils/stopEvent";
import styles from "../styles/ReviewBoardItem.module.scss";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";

export default function ReviewBoardItem({
	reviewItem,
}: {
	reviewItem: ReviewItemType;
}) {
	const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();

	const {
		id: reviewId,
		title,
		star,
		heartCount,
		hashtagResult,
		imageResult,
	} = reviewItem;

	const { mutate: likeMutate } = useMutation({
		mutationFn: postReviewLike,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
		},
	});

	const handleLikeClick = (e: React.MouseEvent) => {
		stopEvent("propagation")(e);
		likeMutate(reviewId);
	};

	const { mutate: deleteReviewMutation } = useMutation({
		mutationFn: () => deleteReviewById({ reviewId }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
		},
	});

	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				toggleOpen={toggleOpen}
				onOpen={onOpen}
			>
				<Modal.Trigger
					openElement={
						<div className={styles.container}>
							<button className={styles.heart} onClick={handleLikeClick}>
								{isZero(heartCount) ? <IoMdHeartEmpty /> : <IoMdHeart />}
								<span>{heartCount}</span>
							</button>
							<Title
								createdDate={reviewItem.createdDate}
								star={star}
								userId={reviewItem.createdBy.userId}
								nickname={reviewItem.createdBy.nickname}
								image={reviewItem.createdBy.image}
							/>
							<div className={styles["review-container"]}>
								{imageResult.length !== 0 && (
									<img src={imageResult[0].fullPath} />
								)}
								<div className={styles["content-container"]}>
									<div>{title}</div>
									<div className={styles["tags"]}>
										{hashtagResult.slice(0, 4).map((tag) => (
											<TagCommon key={tag.id} text={tag.name} />
										))}
									</div>
								</div>
							</div>
						</div>
					}
				/>
				<Modal.Content>
					<ReviewDetailModal
						reviewId={reviewId}
						handleOpenConfirmDelete={() => {
							setIsOpenConfirmDelete(true);
						}}
					/>
				</Modal.Content>
			</Modal>
			{isOpenConfirmDelete && (
				<PopupModal
					icon={<FiAlertTriangle />}
					text="정말로 삭제하시겠습니까?"
					onClose={() => {
						setIsOpenConfirmDelete(false);
					}}
					onCancel={() => {
						setIsOpenConfirmDelete(false);
					}}
					onClick={() => {
						deleteReviewMutation();
					}}
				/>
			)}
		</>
	);
}
