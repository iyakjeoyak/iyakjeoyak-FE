import { useNavigate } from "react-router-dom";
import style from "../index.module.scss";
import { MyPageBoxProps, Review, Supplement } from "../userInfoType";

const SimpleInfoBox: React.FC<MyPageBoxProps> = ({
	sectionType,
	reviews,
	supplements,
}) => {
	const navigate = useNavigate();

	const items = sectionType === "review" ? reviews ?? [] : supplements ?? [];
	return (
		<div className={style.sectionBoxArea}>
			<div className={style.sectionFixArea}>
				<div className={style.sectionTitle}>
					{sectionType === "review" ? "작성한 후기" : "내 영양제"}
				</div>
				<div
					className={style.sectionDetail}
					onClick={() => {
						sectionType === "review"
							? navigate(`/userinfo/review`)
							: navigate(`/userinfo/user-supplement`);
					}}
				>
					더보기
				</div>
			</div>
			{items.map((item, index) => (
				<div key={index} className={style.sectionBox}>
					<div className={style.sectionName}>
						{sectionType === "review"
							? (item as Review).date
							: (item as Supplement).name}
					</div>
					{sectionType === "supplement" && "rating" in item && (
						<div className={style.sectionRateBox}>
							<div className={style.sectionText}>평균 평점</div>
							<div className={style.sectionRate}>{item.rating} / 5.0</div>
						</div>
					)}

					{sectionType === "review" && "history" in item && (
						<div className={style.sectionReviewBox}>
							<div className={style.sectionText}>
								{(item as Review).history}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default SimpleInfoBox;
