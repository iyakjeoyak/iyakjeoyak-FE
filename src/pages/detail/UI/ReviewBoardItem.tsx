import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import Modal from "@/components/Modal";
import ReviewDetailModal from "./ReviewDetailModal";
import { ReviewItemType } from "@/types";
import TagCommon from "@/components/Tag";
import Title from "@/components/WriterTitle";
import isZero from "@/utils/isZero";
import postReviewLike from "@/api/review/postReviewLike";
import { queryClient } from "@/main";
import stopEvent from "@/utils/stopEvent";
import styles from "../styles/ReviewBoardItem.module.scss";
import { useMutation } from "@tanstack/react-query";
import useOpen from "@/hooks/useOpen";

export default function ReviewBoardItem({
	reviewItem,
}: {
	reviewItem: ReviewItemType;
}) {
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

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

	return (
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
							{heartCount}
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
								<p>{title}</p>
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
				<ReviewDetailModal reviewId={reviewId} />
			</Modal.Content>
		</Modal>
	);
}
