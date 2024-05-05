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
				<ReviewDisplay reviews={reviews} />
			</FlexBox>
		);
	}

	return <ReviewEmpty />;
};

export default ReviewHistory;
