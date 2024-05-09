import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CrownSvg from "@/assets/icons/Crown";
import { fameQueryOptions } from "@/api/fame";
import styles from "@/pages/fame/styles/FameTop.module.scss";
import { useQuery } from "@tanstack/react-query";

export function FameTop() {
	const { data: fames } = useQuery(fameQueryOptions.getFame());
	const topUsers = [...fames].sort((a, b) => b.point - a.point);

	return (
		<Swiper
			className={styles.contaier}
			spaceBetween={50}
			slidesPerView={1}
			centeredSlides={true}
			loop={true}
			navigation={true}
			autoplay={{ delay: 3000 }}
			modules={[Pagination, Navigation]}
		>
			{topUsers.slice(0, 3).map((user, index) => (
				<SwiperSlide
					key={`${user.userId}-${index}`}
					className={`${styles.wrap}`}
				>
					<CrownSvg
						fill={index === 0 ? "#ffd700" : index === 1 ? "#c0c0c0" : "#cd7f32"}
						width="300"
						className={styles.crown}
					/>
					<div
						className={styles.userImageWrap}
						style={{
							background:
								index === 0 ? "#ffd700" : index === 1 ? "#c0c0c0" : "#cd7f32",
						}}
					>
						<div
							className={`${styles.circle} ${
								index === 0
									? styles.gold
									: index === 1
										? styles.silver
										: styles.bronze
							}`}
							style={{
								backgroundImage: `url(${
									user.image
										? user.image.fullPath
										: "/public/images/FameUser.png"
								})`,
							}}
						></div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
