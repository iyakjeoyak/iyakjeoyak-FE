// import { MedicineItemType } from "@/types";

import { calculateDday } from "../utils";
import styles from "../styles/MyMedicineItem.module.scss";
import { useState } from "react";

// interface MyMedicineItem extends MedicineItemType{
interface MyMedicineItem {
  isBlank?: boolean;
}

export default function MyMedicineItem({isBlank = false}:MyMedicineItem) {
  if (isBlank){
    return 	<div
    className={styles.container}
  >
    <div className={styles.top}></div>
    <div className={styles.bottom}>
      <div className={styles.name}></div>
      <div className={styles.feature}></div>
    </div>
  </div>
  }
  
	const [isItemHovered, setIsItemHovered] = useState(false);

	const today = new Date();

	const medicineExpiration = new Date("2025-05-23");

	const dday = calculateDday(today, medicineExpiration);

	if (isItemHovered) {
		return (
			<div
				className={`${styles.container} ${styles.hover}`}
				onMouseEnter={() => setIsItemHovered(true)}
				onMouseLeave={() => setIsItemHovered(false)}
			>
				<div>{dday}</div>
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
