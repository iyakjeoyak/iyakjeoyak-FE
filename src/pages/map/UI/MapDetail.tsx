import style from "../styles/mapdetail.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/Modal";
import { usePharmacy } from "../utils/mapDetailContext";
import { useEffect } from "react";

const MapDetail = () => {
	const { selectedPharmacy, showModal, toggleModal } = usePharmacy();

	console.log(showModal);

	// useEffect(() => {
	// 	console.log(`MapDetail - showModal state: ${showModal}`);
	// }, [showModal, selectedPharmacy]);

	if (!selectedPharmacy || !showModal) {
		return null;
	}

	console.log(selectedPharmacy, "이름나옴?");

	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					className={style.container}
					onClick={toggleModal}
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
						<div className={style.text}>{selectedPharmacy.dutyName}</div>
						<div className={style.text}>주소 {selectedPharmacy.dutyAddr}</div>
						<div className={style.text}>
							전화번호 {selectedPharmacy.dutyTel1}
						</div>
						<div className={style.text}>
							{selectedPharmacy.businessHoursList.map((item, index) => (
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
