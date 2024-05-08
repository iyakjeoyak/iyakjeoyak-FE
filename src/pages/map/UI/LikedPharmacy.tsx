import { LazyMotion, m, AnimatePresence, domMax } from "framer-motion";
import { useState } from "react";
import style from "../styles/likedpharmacy.module.scss";
import stopEvent from "@/utils/stopEvent";
import getLikedPharmacy from "@/api/map/getLikedPharmacy";
import { showToast } from "@/utils/ToastConfig";
import { useMutation } from "@tanstack/react-query";
import { PharmacyDetailType } from "../mapTypes";

const LikedPharmacy = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [likedData, setLikedData] = useState<PharmacyDetailType[]>([]);

	const { mutate } = useMutation({
		mutationFn: ({ page, size }: { page: number; size: number }) =>
			getLikedPharmacy(page, size),
		onSuccess: (data) => {
			setLikedData(data);
			console.log(likedData);
		},
		onError: () => {
			showToast({
				type: "error",
				message: "저장된 약국 정보를 가져오는데 실패했습니다.",
			});
		},
	});

	const likedPharmacyData = (page: number, size: number) => {
		mutate({ page, size });
	};

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
							initial={{ y: "80%" }}
							animate={{ y: isOpen ? 0 : 30 }}
							exit={{ y: "30%" }}
							drag="y"
							dragConstraints={{ top: 30, bottom: 0 }}
							onDragEnd={(_, info) => {
								if (info.offset.y > 40) {
									setIsOpen(false);
								} else {
									setIsOpen(true);
								}
							}}
							onClick={stopEvent("propagation")}
						>
							<div className={style.headerBox}>
								<div className={style.header} />
								<h2 className={style.headerTitle}>00님이 저장한 약국</h2>
							</div>
							<section className={style.content}>
								{likedData && likedData.length > 0 ? (
									likedData.map((liked) => (
										<div key={liked.hpid} className={style.item}>
											<h3>{liked.dutyName}</h3>
											<p>{liked.dutyAddr}</p>
											<p>{liked.dutyTel1}</p>
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
