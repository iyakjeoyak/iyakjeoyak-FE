import style from "../styles/mapdetail.module.scss";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import { usePharmacy } from "../utils/mapDetailContext";

const MapDetail = () => {
	const { selectedPharmacy, showModal, setShowModal } = usePharmacy();

	if (!selectedPharmacy) {
		return null;
	}
	// console.log("왜안나와..:", showModal);
	const toggleModal = () => {
		// console.log("전에:", showModal);
		setShowModal(showModal);
		// console.log("뒤에:", showModal);
	};

	return (
		// <AnimatePresence>
		// 	{showModal && (
		// 		<motion.div
		// 			className={style.container}
		// 			onClick={toggelModal}
		// 			initial={{ opacity: 0 }}
		// 			animate={{ opacity: 1 }}
		// 			exit={{ opacity: 0 }}
		// 			transition={{ duration: 0.3 }}
		// 		>
		// 			<motion.div
		// 				className={style.element}
		// 				onClick={handleContentClick}
		// 				initial={{ y: 50 }}
		// 				animate={{ y: 0 }}
		// 				exit={{ y: 50 }}
		// 				transition={{ duration: 0.3 }}
		// 			>
		// 				<div className={style.text}>{detailData.dutyName}</div>
		// 				<div className={style.text}>주소 {detailData.dutyAddr}</div>
		// 				<div className={style.text}>전화번호 {detailData.dutyTel1}</div>
		// 				<div className={style.text}>
		// 					{detailData.businessHoursList.map((item, index) => (
		// 						<div key={index} className={style.timeBox}>
		// 							<div className={style.timeElement}>
		// 								{" "}
		// 								{item.dayOfWeek} 요일
		// 							</div>
		// 							<div className={style.timeElement}>
		// 								{" "}
		// 								시간 : {item.startHour}{" "}
		// 							</div>
		// 							<div className={style.timeElement}> - {item.endHour} </div>
		// 						</div>
		// 					))}
		// 				</div>
		// 			</motion.div>
		// 		</motion.div>
		// 	)}
		// </AnimatePresence>

		<Modal>
			<Modal.Trigger
				openElement={<button onClick={toggleModal}>Show Details</button>}
			/>
			{showModal && (
				<Modal.Content>
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
				</Modal.Content>
			)}
		</Modal>
	);
};

export default MapDetail;
