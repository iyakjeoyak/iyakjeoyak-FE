import styles from "../styles/MyMedicineItem.module.scss";

export default function MyMedicineItem() {
	return (
		<div className={styles.container}>
			<div className={styles.top}>얍</div>
			<div className={styles.bottom}>
				<div className={styles.name}>약 이름</div>
				<div className={styles.feature}>효능</div>
			</div>
		</div>
	);
}
