import { PharmacyDetailType } from "@/api/map/getPharmacyDetail";
import { useEffect, useState } from "react";
import style from "../styles/mapdetail.module.scss";
import { AnimatePresence, motion } from "framer-motion";
interface MapDetailProps {
	marker: naver.maps.Marker;
	detailData: PharmacyDetailType | null;
}

const MapDetail = ({ marker, detailData }: MapDetailProps) => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const handleMarkerClick = () => {
			console.log("됐냐");
			setShowModal(true);
			console.log("됐냐2");
		};
		const listener = naver.maps.Event.addListener(
			marker,
			"click",
			handleMarkerClick,
		);
		// window.naver.maps.Event.addListener(marker, "click", handleMarkerClick);
		return () => {
			naver.maps.Event.removeListener(listener);
		};
	}, [marker]);

	if (!detailData) {
		return null;
	}

	const toggelModal = () => {
		setShowModal((prev) => !prev);
	};

	const handleContentClick = (e: any) => {
		e.stopPropagation();
	};

	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					className={style.container}
					onClick={toggelModal}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className={style.element}
						onClick={handleContentClick}
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						exit={{ y: 50 }}
						transition={{ duration: 0.3 }}
					>
						<div className={style.text}>{detailData.dutyName}</div>
						<div className={style.text}>주소 {detailData.dutyAddr}</div>
						<div className={style.text}>전화번호 {detailData.dutyTel1}</div>
						<div className={style.text}>
							{detailData.businessHoursList.map((item, index) => (
								<div key={index} className={style.timeBox}>
									<div className={style.timeElement}>
										{" "}
										{item.dayOfWeek} 요일
									</div>
									<div className={style.timeElement}>
										{" "}
										시간 : {item.startHour}{" "}
									</div>
									<div className={style.timeElement}> - {item.endHour} </div>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MapDetail;
