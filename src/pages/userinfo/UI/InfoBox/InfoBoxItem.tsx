import style from "../../index.module.scss";
import { ReviewType, SupplementType } from "../../userInfoType";

type InfoItem = ReviewType | SupplementType;

export interface ItemProps {
	items: InfoItem[];
}
function InfoBoxItem({ items }: ItemProps): JSX.Element {
	if (items.length === 0) {
		return <div className={style.sectionBox}>작성된 정보가 없습니다.</div>;
	}
	return (
		<div>
			{items.slice(0, 3).map((item, index) => (
				<div key={index} className={style.sectionBox}>
					{"date" in item && (
						<div className={style.sectionName}>{item.date}</div>
					)}
					{"history" in item && (
						<div className={style.sectionReviewBox}>
							<div className={style.sectionText}>{item.history}</div>
						</div>
					)}
					{"rating" in item && (
						<div className={style.sectionRateBox}>
							<div className={style.sectionText}>평균 평점</div>
							<div className={style.sectionRate}>{item.rating} / 5.0</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default InfoBoxItem;
