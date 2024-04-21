import { RenderFunction, Item } from "../../InfoBoxType";
import style from "../../index.module.scss";

const renderReview: RenderFunction = (item: Item): JSX.Element => {
	if ("date" in item) {
		return (
			<div className={style.sectionBox}>
				<div className={style.sectionName}>{item.date}</div>
				{item.history && (
					<div className={style.sectionReviewBox}>
						<div className={style.sectionText}>{item.history}</div>
					</div>
				)}
			</div>
		);
	}
	return <div className={style.sectionBox}>작성된 리뷰가 없습니다</div>;
};

const renderSupplement: RenderFunction = (item: Item): JSX.Element => {
	if ("name" in item)
		return (
			<div className={style.sectionBox}>
				<div className={style.sectionName}>{item.name}</div>
				{item.rating && (
					<div className={style.sectionRateBox}>
						<div className={style.sectionText}>평균 평점</div>
						<div className={style.sectionRate}>{item.rating} / 5.0</div>
					</div>
				)}
			</div>
		);
	return <div className={style.sectionBox}>내 영양제 내역이 없습니다</div>;
};

export { renderReview, renderSupplement };
