import "@styles/global.scss";

import FlexBox from "@/styles/FlexBox";
import ReviewDisplay from "./ReviewDisplay";
import ReviewEmpty from "./ReviewEmpty";
import getUserReview from "@/api/useInfo/getUserReview";
import { useEffect, useState } from "react";
import { DetailedReview } from "../../userInfoType";
import { showToast } from "@/utils/ToastConfig";

const ReviewHistory = () => {
	const [reviews, setReviews] = useState<DetailedReview[] | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const userReview = await getUserReview({ page: 0, size: 10 });
				setReviews(userReview.data);
				console.log(reviews);
			} catch (error) {
				showToast({
					type: "error",
					message: "리뷰 데이터를 가져오는 중 오류가 발생했습니다.",
				});
			}
		};

		fetchReviews();
	}, []);

	if (reviews && reviews.length > 0) {
		return (
			<FlexBox>
				{reviews.map((reviewItem) => (
					<ReviewDisplay reviews={[reviewItem]} key={reviewItem.id} />
				))}
			</FlexBox>
		);
	}

	return <ReviewEmpty />;
};

export default ReviewHistory;
