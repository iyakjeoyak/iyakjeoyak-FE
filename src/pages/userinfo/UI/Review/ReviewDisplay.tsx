import "@styles/global.scss";

import Modal from "@/components/Modal";
import ReviewDetailModal from "@/pages/detail/UI/review/ReviewDetailModal";
import { ReviewDisplayProps } from "../../userInfoType";
import StarRating from "@/components/StarRating";
import formatDate from "@/utils/formatDate";
import style from "../../style/reviewdisplay.module.scss";
import useToggle from "@/hooks/useToggle";

// import { DetailedReview } from "../../userInfoType";

const ReviewDisplay = ({ reviews }: ReviewDisplayProps) => {
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			toggleOpen={toggleOpen}
			onOpen={onOpen}
		>
			<Modal.Trigger>
				{" "}
				<div className={style.reviewContainer}>
					{reviews.map((review) => (
						<div
							key={review.id}
							className={style.reviewBox}
							onClick={toggleOpen}
						>
							<div className={style.reviewHeadArea}>
								<div className={style.supplementName}>
									{review.medicine.prdlst_NM}
								</div>
								<StarRating filledStars={4.5} size={20} />
							</div>
							<div className={style.reviewContents}>
								{review.imageResult?.length > 0 && (
									<img
										src={review.imageResult?.[0].fullPath}
										alt="유저 제품 후기 사진"
										className={style.reviewImg}
									/>
								)}
								<div className={style.reviewTextBox}>
									<div className={style.reviewText}>{review.content}</div>
									<div className={style.reviewDate}>
										{formatDate(review.createdDate)}{" "}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</Modal.Trigger>
			<Modal.Overlay>
				{reviews.map((review) => (
					<Modal.Content>
						<ReviewDetailModal
							handleOpenConfirmDelete={onClose}
							reviewId={review.id}
						/>
					</Modal.Content>
				))}
			</Modal.Overlay>
		</Modal>
	);
};

export default ReviewDisplay;
