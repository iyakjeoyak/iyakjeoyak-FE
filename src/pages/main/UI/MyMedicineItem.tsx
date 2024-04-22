import styles from "../styles/MyMedicineItem.module.scss";
import { useState } from "react";

export default function MyMedicineItem() {
	const [isItemHovered, setIsItemHovered] = useState(false);
	if (isItemHovered) {
		return (
			<div
				className={`${styles.container} ${styles.hover}`}
				onMouseEnter={() => setIsItemHovered(true)}
				onMouseLeave={() => setIsItemHovered(false)}
			>
				<div>D-10</div>
			</div>
		);
	}
	return (
		<div
			className={styles.container}
			onMouseEnter={() => setIsItemHovered(false)}
			onMouseLeave={() => setIsItemHovered(true)}
		>
			<div className={styles.top}>얍</div>
			<div className={styles.bottom}>
				<div className={styles.name}>약 이름</div>
				<div className={styles.feature}>효능</div>
			</div>
		</div>
	);
}
