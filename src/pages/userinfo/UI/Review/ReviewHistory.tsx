import "@styles/global.scss";
import { reviewMockData } from "../../mockData";
import ReviewEmpty from "./ReviewEmpty";
import ReviewDisplay from "./ReviewDisplay";
import FlexBox from "@/styles/FlexBox";

const ReviewHistory: React.FC = () => {
	const reviews = reviewMockData.reviews || [];

	if (reviews.length > 0) {
		return (
			<FlexBox>
				{reviews.map((reviewItem) => (
					<ReviewDisplay review={reviewItem} key={reviewItem.reviewId} />
				))}
			</FlexBox>
		);
	}

	return <ReviewEmpty />;
};

export default ReviewHistory;
