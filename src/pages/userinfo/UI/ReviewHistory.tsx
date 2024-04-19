import "@styles/global.scss";
import { reviewMockData } from "../mockData";
import ReviewEmpty from "./ReviewEmpty";
import ReviewDisplay from "./ReviewDisplay";

const ReviewHistory: React.FC = () => {
	// const userData = userMockData;
	const reviews = reviewMockData.reviews || [];

	return (
		<div className="reviewContainer">
			{reviews.length > 0 ? ReviewDisplay(reviews) : ReviewEmpty()}
		</div>
	);
};

export default ReviewHistory;
