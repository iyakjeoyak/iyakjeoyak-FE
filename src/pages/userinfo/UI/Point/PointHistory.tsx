import "@styles/global.scss";

import { PointData, PointProps } from "../../userInfoType";
import style from "../../style/pointhistory.module.scss";
import { useEffect, useState } from "react";
import getUserPoints from "@/api/useInfo/getUserPoints";
import { showToast } from "@/utils/ToastConfig";
import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";

const mapPointDomain = {
	HEART: "좋아요로 포인트 획득",
	REVIEW: "리뷰 작성으로 포인트 획득",
};

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
					{index + 1}
					<div className={style.description}>
						{mapPointDomain[points.domain as keyof typeof mapPointDomain]}
					</div>
					<div className={style.pointBox}>
						<div className={style.description}>
							{" "}
							{points.changedValue >= 0
								? `+${points.changedValue}`
								: `-${Math.abs(points.changedValue)}`}{" "}
						</div>
					</div>
				</div>
			))
		: null;

	return (
		<section className={style.pointContainer}>
			<PathButton paths={paths} />
			<div className={style.pointTitleBox}>
				<div className={style.pointTitle}>포인트 합계</div>
				<div className={style.pointTitleNumber}>{pointSum?.point} point</div>
			</div>

			<div className={style.pointHistoryList}>{renderPointItems}</div>
		</section>
	);
};

export default PointHistory;
