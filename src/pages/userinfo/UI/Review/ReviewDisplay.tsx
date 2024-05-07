import "@styles/global.scss";
// import { DetailedReview } from "../../userInfoType";
import StarRating from "@/components/StarRating";
import style from "../../style/reviewdisplay.module.scss";
import useOpen from "@/hooks/useOpen";
import Modal from "@/components/Modal";
import { ReviewDisplayProps } from "../../userInfoType";
import { ReviewDetailModal } from "@/pages/detail/UI";
import formatDate from "@/utils/formatDate";

const ReviewDisplay = ({ reviews }: ReviewDisplayProps) => {
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			toggleOpen={toggleOpen}
			onOpen={onOpen}
		>
			<Modal.Trigger
				openElement={
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
									<img
										src={review.imageResult?.[0].fullPath}
										alt="유저 제품 후기 사진"
										className={style.reviewImg}
									/>

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
				}
			/>
			{reviews.map((review) => (
				<Modal.Content>
					<ReviewDetailModal reviewId={review.id} />
				</Modal.Content>
			))}
		</Modal>
	);
};

export default ReviewDisplay;
