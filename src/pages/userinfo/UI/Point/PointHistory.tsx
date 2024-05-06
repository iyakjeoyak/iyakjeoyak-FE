import "@styles/global.scss";

import { PointProps } from "../../userInfoType";
import style from "../../style/pointhistory.module.scss";
import { useEffect, useState } from "react";
import getUserPoints from "@/api/useInfo/getUserPoints";
import { showToast } from "@/utils/ToastConfig";

const PointHistory = () => {
	const [pointData, setPointData] = useState<PointProps[] | null>(null);

	useEffect(() => {
		const fetchPoints = async () => {
			try {
				const userPoints = await getUserPoints({ page: 0, size: 10 });
				setPointData(userPoints.data);
				console.log();
			} catch (error) {
				showToast({
					type: "error",
					message: "포인트 데이터를 가져오는 중 오류가 발생했습니다.",
				});
			}
		};
		fetchPoints();
	}, []);

	const renderPointItems = pointData
		? pointData.map((points, index) => (
				<div key={index} className={style.pointItem}>
					{/* <div className={style.date}>{pointData.date}</div> */}
					<div className={style.description}>{points.domain}</div>
					<div className={style.description}>{points.changeValue}</div>
				</div>
			))
		: null;

	return (
		<section className={style.pointContainer}>
			<div className={style.pointTitleBox}>
				<div className={style.pointTitle}>포인트 합계</div>

				{/* pointData 
			? pointData.map((points, index) => (
			<div key={index} className={style.pointTitle}>{pointData.pointSum}</div>)) */}
			</div>
			<div className={style.pointHistoryList}>{renderPointItems}</div>
		</section>
	);
};

export default PointHistory;
