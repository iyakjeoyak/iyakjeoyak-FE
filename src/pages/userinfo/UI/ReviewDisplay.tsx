import "@styles/global.scss";

import { DetailedReview } from "../userInfoType";
import StarRating from "@/components/StarRating";
import style from "../style/reviewdisplay.module.scss";

const ReviewDisplay = (reviews: DetailedReview[]) => {
	return (
		<div className={style.reviewContainer}>
			{reviews.map((review, index) => (
				<div key={index} className={style.reviewBox}>
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
	);
};

export default ReviewDisplay;
