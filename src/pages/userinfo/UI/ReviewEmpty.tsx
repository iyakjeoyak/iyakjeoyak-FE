import "@styles/global.scss";
// import { userMockData, supplementRecordMockData } from "../mockData";
import style from "../style/reviewempty.module.scss";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

const ReviewEmpty = () => {
	const navigate = useNavigate();
	return (
		<section className={style.noReviewContainer}>
			<div className={style.noReviewContent}>
				<div className={style.noReviewTitle}>아직 작성된 후기가 없습니다</div>
				<Button
					name="이번 주 BEST 영양제 확인하기"
					type="button"
					variant="dark"
					size="medium"
					onClick={async () => {
						navigate(`/`);
					}}
				/>
			</div>
		</section>
	);
};

export default ReviewEmpty;
