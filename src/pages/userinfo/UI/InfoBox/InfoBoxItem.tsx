import { ReviewType, SupplementType } from "../../userInfoType";

import isZero from "@/utils/isZero";
import style from "../../index.module.scss";
import formatDateString from "@/utils/formatDate";

type InfoItem = ReviewType | SupplementType;

export interface ItemProps {
	items?: InfoItem[];
}
function InfoBoxItem({ items }: ItemProps): JSX.Element {
	if (!items || isZero(items.length)) {
		return <div className={style.sectionBox}>작성된 정보가 없습니다.</div>;
	}

	return (
		<div>
			{items.slice(0, 3).map((item, index) => (
				<div key={index} className={style.sectionBox}>
					{"createdDate" in item && typeof item.createdDate === "string" && (
						<div className={style.sectionName}>
							{formatDateString(item.createdDate)}
						</div>
					)}
					{"expirationDate" in item &&
						typeof item.expirationDate === "string" && (
							<div className={style.sectionName}>
								{formatDateString(item.expirationDate)}
							</div>
						)}
					{"title" in item && (
						<div className={style.sectionReviewBox}>
							<div className={style.sectionText}>{item.title}</div>
						</div>
					)}
					{"grade" in item && (
						<div className={style.sectionRateBox}>
							<div className={style.sectionText}>평균 평점</div>
							<div className={style.sectionRate}>{item.grade} / 5.0</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default InfoBoxItem;
