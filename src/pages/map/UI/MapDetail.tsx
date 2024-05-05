import style from "../styles/mapdetail.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useMapContext } from "../utils/mapDetailContext";
import { Button } from "@/components/Button";
import HeartIcon from "@/assets/icons/HeartIcon";
import postLikedPharmacy from "@/api/map/postLikedPharmacy";
import { hourListType } from "../mapTypes";
import HeartFilledIcon from "@/assets/icons/HeartFilledIcon";
import { useState } from "react";

const MapDetail = () => {
	const { detailData, setDetailData } = useMapContext();
	const [isLiked, setIsLiked] = useState(detailData?.liked);

	if (!detailData) {
		return null;
	}

	const handleClose = () => {
		if (detailData && detailData.liked == !isLiked) {
			postLikedPharmacy({ ...detailData, liked: isLiked });
			setDetailData(undefined);
		}
	};

	const toggleLike = () => {
		setIsLiked((prev) => !prev);
	};

	return (
		<AnimatePresence>
			{detailData && (
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
						<div className={style.text}>{detailData.dutyName}</div>
						<Button
							className={style.text}
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
						/>

						<div className={style.text}>주소 {detailData.dutyAddr}</div>
						<div className={style.text}>전화번호 {detailData.dutyTel1}</div>
						<div className={style.text}>
							{detailData.businessHoursList?.map((hour: hourListType) => (
								<div key={hour.dayOfWeek} className={style.timeBox}>
									<div className={style.timeElement}>
										{" "}
										{hour.dayOfWeek} 요일
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
			)}
		</AnimatePresence>

		// <Modal>
		// 	<Modal.Trigger
		// 		openElement={<button onClick={toggleModal}>Show Details</button>}
		// 	/>
		// 	<Modal.Content className={style.container}>
		// 		<div className={style.text}>{selectedPharmacy.dutyName}</div>
		// 		<div className={style.text}>주소 {selectedPharmacy.dutyAddr}</div>
		// 		<div className={style.text}>전화번호 {selectedPharmacy.dutyTel1}</div>
		// 		<div className={style.text}>
		// 			{selectedPharmacy.businessHoursList.map((item, index) => (
		// 				<div key={index} className={style.timeBox}>
		// 					<div className={style.timeElement}> {item.dayOfWeek} 요일</div>
		// 					<div className={style.timeElement}> 시간 : {item.startHour} </div>
		// 					<div className={style.timeElement}> - {item.endHour} </div>
		// 				</div>
		// 			))}
		// 		</div>
		// 	</Modal.Content>
		// </Modal>
	);
};

export default MapDetail;
