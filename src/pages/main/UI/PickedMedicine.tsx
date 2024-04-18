import ElementIcon from "@assets/icons/Element";
import TagCommon from "@/components/Tag";
import handle from "@/assets/images/handle.png";
import medicine from "@assets/images/Medicine.png";
import styles from "../styles/PickedMedicine.module.scss";

export default function PickedMedicine() {
	return (
		<article className={styles.container}>
			<div className={styles["title-container"]}>
				<ElementIcon width={20} height={20} />
				<div className={styles.title}>
					MD's <span>pick</span>
				</div>
			</div>
			<div className={styles["item-container"]}>
				<img src={medicine} alt="약 이름" />
				<div className={styles["content-container"]}>
					<div className={styles.brand}>브랜드명</div>
					<div className={styles.name}>베이직 뉴트리먼트 푸퍼 데이</div>
					<div className={styles.star}>
						★<span>4.0 (311개)</span>
					</div>
					<div className={styles.tags}>
						<TagCommon text={"피로개선"} size="small" backgroundColor="green" />
						<TagCommon text={"감기"} size="small" backgroundColor="green" />
					</div>
				</div>
			</div>
			<img className={styles.handle} src={handle} alt="장식 이미지" />
		</article>
	);
}
