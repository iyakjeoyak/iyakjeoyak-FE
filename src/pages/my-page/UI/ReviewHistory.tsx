import "@styles/global.scss";
import { reviewMockData } from "../mockData";
import NoReview from "./NoReview";
import ShowReview from "./ShowReview";

const ReviewHistory: React.FC = () => {
	// const userData = userMockData;
	const reviews = reviewMockData.reviews || [];

	return (
		<div className="reviewContasiner">
			{reviews.length > 0 ? ShowReview(reviews) : NoReview()}
		</div>
	);
};

export default ReviewHistory;
