import TagCommon from "@/components/Tag";
import handle from "@/assets/images/handle.png";
import medicine from "@assets/images/Medicine.png";
import styles from "../styles/PickedMedicine.module.scss";

export default function PickedMedicine() {
	return (
		<article className={styles.container}>
			<div className={styles.title}>
				MD's <span>pick</span>
			</div>
			<div className={styles["item-container"]}>
				<img src={medicine} alt="약 이름" />
				<div className={styles["content-container"]}>
					<div>브랜드명</div>
					<div>베이직 뉴트리먼트 푸퍼 데이</div>
					<div>4.0 (311개)</div>
					<div>
						<TagCommon
							text={"피로개선"}
							size="medium"
							backgroundColor="green"
						/>
						<TagCommon text={"감기"} size="medium" backgroundColor="green" />
					</div>
				</div>
			</div>
			<img className={styles.handle} src={handle} alt="장식 이미지" />
		</article>
	);
}
