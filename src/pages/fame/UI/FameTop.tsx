import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CrownSvg from "@/assets/icons/Crown";
import styles from "@/pages/fame/styles/FameTop.module.scss";

export function FameTop() {
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
			<SwiperSlide className={`${styles.wrap}`}>
				<div className={`${styles.circle} ${styles.gold} `}></div>
				<CrownSvg fill="#ffd700" />
			</SwiperSlide>
			<SwiperSlide className={`${styles.wrap}`}>
				<div className={`${styles.circle} ${styles.silver} `}></div>
				<CrownSvg fill="#c0c0c0" />
			</SwiperSlide>
			<SwiperSlide className={`${styles.wrap}`}>
				<div className={`${styles.circle} ${styles.bronze} `}></div>
				<CrownSvg fill="#cd7f32" />
			</SwiperSlide>
		</Swiper>
	);
}
