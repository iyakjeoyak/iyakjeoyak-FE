import "@styles/global.scss";

import FlexBox from "@/styles/FlexBox";
import ReviewDisplay from "./ReviewDisplay";
import ReviewEmpty from "./ReviewEmpty";
import { reviewMockData } from "../../mockData";

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
