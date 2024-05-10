import { LazyMotion, m, AnimatePresence, domMax } from "framer-motion";
import { useState } from "react";
import style from "../styles/likedpharmacy.module.scss";
import stopEvent from "@/utils/stopEvent";
import { useQuery } from "@tanstack/react-query";
import pharmacyQueryOptions from "@/api/map";

const LikedPharmacy = () => {
	const [isOpen, setIsOpen] = useState(false);

	const {
		data: { data: likedData },
	} = useQuery({
		...pharmacyQueryOptions.getLikedPharmacy({ page: 0, size: 10 }),
		enabled: true,
	});

	return (
		<>
			<LazyMotion features={domMax}>
				<AnimatePresence>
					<m.div
						className={style.background}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
					>
						<m.div
							className={style.modal}
							initial={{ y: "100%" }}
							animate={{ y: isOpen ? "0%" : "70%" }}
							exit={{ y: "100%" }}
							drag="y"
							dragConstraints={{ top: 0, bottom: 0 }}
							onDragEnd={(_, info) => {
								if (info.offset.y > 50) {
									setIsOpen(false);
								} else {
									setIsOpen(true);
								}
							}}
							onClick={stopEvent("propagation")}
						>
							<div className={style.headerBox}>
								<div className={style.header} />
								<h2 className={style.headerTitle}>저장한 약국</h2>
							</div>
							<section className={style.content}>
								{likedData && likedData.length > 0 ? (
									likedData.map((liked) => (
										<div key={liked.hpid} className={style.item}>
											<h3 className={style.pharmacyName}>{liked.dutyName}</h3>
											<div className={style.pharmacyAddress}>
												주소 {liked.dutyAddr}
											</div>
											<div className={style.pharmacyTel}>
												전화번호 {liked.dutyTel1}
											</div>
											<div className={style.line} />
										</div>
									))
								) : (
									<p>저장한 약국이 없습니다.</p>
								)}
							</section>
						</m.div>
					</m.div>
				</AnimatePresence>
			</LazyMotion>
		</>
	);
};

export default LikedPharmacy;
