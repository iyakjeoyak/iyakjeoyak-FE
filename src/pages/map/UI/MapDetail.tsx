import style from "../styles/mapdetail.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useMapContext } from "../utils/mapDetailContext";
import { Button } from "@/components/Button";
import HeartIcon from "@/assets/icons/HeartIcon";
import postLikedPharmacy from "@/api/map/postLikedPharmacy";
import { hourListType } from "../mapTypes";
import HeartFilledIcon from "@/assets/icons/HeartFilledIcon";
import { useEffect, useState } from "react";

const dayOfWeekMap = {
	Mon: "월요일",
	Tue: "화요일",
	Wed: "수요일",
	Thu: "목요일",
	Fri: "금요일",
	Sat: "토요일",
	Sun: "일요일",
	Hol: "공휴일",
};

const MapDetail = () => {
	const { detailData, setDetailData } = useMapContext();
	const [isLiked, setIsLiked] = useState(detailData?.liked ?? false);

	useEffect(() => {
		setIsLiked(detailData?.liked ?? false);
	}, [detailData]);

	if (!detailData) {
		return null;
	}

	const handleClose = () => {
		if (detailData && detailData.liked == !isLiked) {
			postLikedPharmacy({ ...detailData, liked: isLiked });
		}
		setDetailData(undefined);
		setIsLiked(false);
	};

	const toggleLike = () => {
		setIsLiked((prev) => !prev);
	};

	return (
		<AnimatePresence>
			<motion.div
				className={style.container}
				onClick={handleClose}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				<motion.div
					className={style.element}
					onClick={(e) => e.stopPropagation()}
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					exit={{ y: 50 }}
					transition={{ duration: 0.3 }}
				>
					<div className={style.header}>
						<div className={style.title}>{detailData.dutyName}</div>

						<Button
							// className={style.likeButton}
							variant="greentransparent"
							size="xs"
							onClick={toggleLike}
							icon={
								isLiked ? (
									<HeartFilledIcon width={15} height={15} />
								) : (
									<HeartIcon width={15} height={15} />
								)
							}
						>
							&nbsp; 좋아요
						</Button>
					</div>

					<div className={style.detailBox}>
						<div className={style.boxHead}>주소</div>
						<div>{detailData.dutyAddr}</div>
					</div>
					<div className={style.detailBox}>
						<div className={style.boxHead}>전화번호</div>
						<div>{detailData.dutyTel1}</div>
					</div>

					<div className={style.text}>
						{detailData.businessHoursList?.map((hour: hourListType) => (
							<div key={hour.dayOfWeek} className={style.timeBox}>
								<div className={style.timeElement}>
									{" "}
									{
										dayOfWeekMap[hour.dayOfWeek as keyof typeof dayOfWeekMap]
									}{" "}
									요일
								</div>
								<div className={style.timeElement}>
									{" "}
									시간 : {hour.startHour}{" "}
								</div>
								<div className={style.timeElement}> - {hour.endHour} </div>
							</div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default MapDetail;
