import StarRating from "@/components/StarRating";
import TagCommon from "@/components/Tag";
import medicine from "@/assets/images/Medicine.png";
import styles from "../styles/MedicineCard.module.scss";

export default function MedicineCard() {
	return (
		<div className={styles.container}>
			<img src="/images/Medicine.png" />
			<div className={styles["content-container"]}>
				<div className={styles["info"]}>
					<div className={styles.brand}>어쩌구 브랜드</div>
					<div className={styles.name}>어쩌구 영양제</div>
				</div>
				<div className={styles["sub-info"]}>
					<StarRating filledStars={3.5} />
					<span>(311개)</span>
				</div>
				<div className={styles.tags}>
					<TagCommon text="피로개선" backgroundColor="green" />
					<TagCommon text="감기" backgroundColor="green" />
				</div>
			</div>
		</div>
	);
}
