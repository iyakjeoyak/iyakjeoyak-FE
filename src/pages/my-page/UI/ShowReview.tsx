import "@styles/global.scss";
import {
	userMockData,
	supplementRecordMockData,
	ReviewData,
} from "../mockData";

const ShowReview = (reviews: ReviewData) => {
	return (
		<div className="reviews-container">
			{reviews.map((review, index) => (
				<div key={index} className="review">
					<div className="review-header">
						<div className="review-user">{review.user}</div>
						<div className="review-date">{review.date}</div>
					</div>
					<div className="review-content">{review.content}</div>
				</div>
			))}
		</div>
	);
};

export default ShowReview;
