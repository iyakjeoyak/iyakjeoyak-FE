import "@styles/global.scss";

import Modal from "@/components/Modal";
import { ReviewDetailModal } from "@/pages/detail/UI";
import { ReviewDisplayProps } from "../../userInfoType";
import StarRating from "@/components/StarRating";
import style from "../../style/reviewdisplay.module.scss";
import { useModal } from "@/components/Modal/hooks/useModal";

const ReviewDisplay = ({ reviews }: ReviewDisplayProps) => {
	const { toggleModalOpen } = useModal();

	return (
		<Modal>
			<Modal.Trigger
				openElement={
					<div className={style.reviewContainer}>
						{reviews.map((review) => (
							<div
								key={review.reviewId}
								className={style.reviewBox}
								onClick={toggleModalOpen}
							>
								<div className={style.reviewHeadArea}>
									<div className={style.supplementName}>{review.itemName}</div>
									<StarRating filledStars={4.5} size={20} />
								</div>
								<div className={style.reviewContents}>
									<img
										src={review.reviewImg[0].userImage}
										alt="유저 제품 후기 사진"
										className={style.reviewImg}
									/>

									<div className={style.reviewTextBox}>
										<div className={style.reviewText}>{review.content}</div>
										<div className={style.reviewDate}>{review.date} </div>
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
			<Modal.Content>
				<ReviewDetailModal reviewId={1} />
			</Modal.Content>
		</Modal>
	);
};

export default ReviewDisplay;
