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
				<ReviewDisplay reviews={reviews} />
			</FlexBox>
		);
	}

	return <ReviewEmpty />;
};

export default ReviewHistory;
