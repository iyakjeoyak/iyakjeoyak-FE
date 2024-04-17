import TagCommon from "@/components/Tag";
import medicine from "@/assets/images/Medicine.png";
import styles from "../styles/MedicineCard.module.scss";

export default function MedicineCard() {
	return (
		<div className={styles.container}>
			<img src={medicine} />
			<div className={styles["content-container"]}>
				<div>어쩌구 브랜드</div>
				<div>어쩌구 영양제</div>
				<div className={styles["sub-info"]}>
					★<span>4.0 (311개)</span>
				</div>
				<div className={styles.tags}>
					<TagCommon text="피로개선" backgroundColor="green" />
					<TagCommon text="감기" backgroundColor="green" />
				</div>
				<div>멀티비타민</div>
			</div>
		</div>
	);
}
