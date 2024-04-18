import TagCommon from "@/components/Tag";
import styles from "../styles/BestReviewItem.module.scss";

interface MedicineItemProps {
	imgUrl?: string;
	name?: string;
	tag?: string;
}

export default function BestReviewItem({
	name = "약 이름",
	imgUrl = "이미지",
	tag = "효능",
}: MedicineItemProps) {
	return (
		<div className={styles["container"]}>
			<div className={styles.img}>{imgUrl}</div>
			<div className={styles["content-container"]}>
				<div className={styles.name}>{name}</div>
				<TagCommon text={tag} size="small" backgroundColor={"green"} />
			</div>
		</div>
	);
}
