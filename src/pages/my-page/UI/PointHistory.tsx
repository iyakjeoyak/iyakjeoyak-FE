import "@styles/global.scss";

import { pointMockData } from "../mockData";
import { ShortPointHistory } from "../MyPageType";
import style from "../style/pointhistory.module.scss";
import { useState } from "react";

const PointHistory: React.FC = () => {
	// const userData = userMockData;
	const [pointData, SetPointData] = useState<ShortPointHistory[]>(
		pointMockData.pointHistory,
	);
	const [reviewData, SetReviewData] = useState(
		pointMockData.reviewMockData.reviews,
	);
	const [isModalOpen, setIsOpenModal] = useState(false);

	const pointDetailModalOpen = () => {
		setIsOpenModal((prev) => !prev);
		console.log("포인트 상세 내역 모달 open");
	};

	const renderPointItems = pointData.map((item, index) => (
		<div key={index} className={style.pointItem}>
			<div className={style.date}>{item.date}</div>
			<div className={style.description}>{item.category}</div>
		</div>
	));

	return (
		<section className={style.pointContainer} onClick={pointDetailModalOpen}>
			{/* {isModalOpen && (
						<작성한 후기 컴포넌트 userName = {userData.nickName}>
					)} */}
			<div className={style.pointHistoryList}>{renderPointItems}</div>
		</section>
	);
};

export default PointHistory;
