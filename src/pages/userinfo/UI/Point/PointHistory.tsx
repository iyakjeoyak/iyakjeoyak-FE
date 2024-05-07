import "@styles/global.scss";

import { PointData, PointProps } from "../../userInfoType";
import style from "../../style/pointhistory.module.scss";
import { useEffect, useState } from "react";
import getUserPoints from "@/api/useInfo/getUserPoints";
import { showToast } from "@/utils/ToastConfig";
import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";

const PointHistory = () => {
	const [pointData, setPointData] = useState<PointProps[] | null>(null);
	const [pointSum, setPointSum] = useState<PointData | null>(null);

	const location = useLocation();
	const paths = [location.pathname];

	useEffect(() => {
		const fetchPoints = async () => {
			try {
				const userPoints = await getUserPoints({ page: 0, size: 10 });
				setPointData(userPoints.pageResult.data);
				setPointSum(userPoints);
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
					<div className={style.description}>{points.domain}</div>
					<div className={style.pointBox}>
						<div className={style.description}> 포인트 이력</div>
						<div className={style.description}>{points.changedValue}</div>
					</div>
				</div>
			))
		: null;

	return (
		<section className={style.pointContainer}>
			<PathButton paths={paths} />
			<div className={style.pointTitleBox}>
				<div className={style.pointTitle}>포인트 합계</div>
				<div className={style.pointTitle}>{pointSum?.point}</div>
			</div>

			<div className={style.pointHistoryList}>{renderPointItems}</div>
		</section>
	);
};

export default PointHistory;
