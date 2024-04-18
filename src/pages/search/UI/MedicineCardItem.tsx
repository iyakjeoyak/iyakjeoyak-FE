import TagCommon from "@/components/Tag";
import medicine from "@/assets/images/Medicine.png";
import styles from "../styles/MedicineCardItem.module.scss";
import { useNavigate } from "react-router-dom";

export default function MedicineCardItem() {
	const navigator = useNavigate();

	return (
		<div
			className={styles.container}
			onClick={() => {
				navigator("/detail/1");
			}}
		>
			<img src={medicine} alt="어쩌구영양제" />
			<div className={styles["content-container"]}>
				<div className={styles["text-container"]}>
					<div className={styles.name}>어쩌구영양제</div>
					<div className={styles.info}>
						<span>★</span>4.0(311개)
					</div>
				</div>
				<div className={styles.tags}>
					<TagCommon text="감기" size="medium" backgroundColor="green" />
					<TagCommon text="감기" size="medium" backgroundColor="green" />
					<TagCommon text="감기" size="medium" backgroundColor="green" />
				</div>
			</div>
		</div>
	);
}
