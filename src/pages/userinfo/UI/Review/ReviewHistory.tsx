import "@styles/global.scss";

import ReviewDisplay from "./ReviewDisplay";
import ReviewEmpty from "./ReviewEmpty";
import getUserReview from "@/api/useInfo/getUserReview";
import { useEffect, useState } from "react";
import { DetailedReview } from "../../userInfoType";
import { showToast } from "@/utils/ToastConfig";
import CommonHeaderBox from "../CommonHeaderBox";
import style from "../../style/reviewhistory.module.scss";

const ReviewHistory = () => {
	const [reviews, setReviews] = useState<DetailedReview[] | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const userReview = await getUserReview({ page: 0, size: 10 });
				setReviews(userReview.data);
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
			<section className={style.reviewWrapper}>
				<CommonHeaderBox
					className={style.reviewHeader}
					titleText="내 영양제 리뷰"
					count={reviews && reviews?.length}
				/>
				{reviews.map((reviewItem) => (
					<ReviewDisplay reviews={[reviewItem]} key={reviewItem.id} />
				))}
			</section>
		);
	}

	return <ReviewEmpty />;
};

export default ReviewHistory;
