import style from "../style/mypage.module.scss";
import { MyPageBoxProps, Review, Supplement } from "../MyPageType";

const MyPageBox: React.FC<MyPageBoxProps> = ({
	sectionType,
	reviews,
	supplements,
}) => {
	const items = sectionType === "review" ? reviews ?? [] : supplements ?? [];

	return (
		<div className={style.sectionBoxArea}>
			<div className={style.sectionFixArea}>
				<div className={style.sectionTitle}>
					{sectionType === "review" ? "작성한 후기" : "내 영양제"}
				</div>
				<div className={style.sectionDetail}>더보기</div>
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
				</div>
			))}
		</div>
	);
};

export default MyPageBox;
