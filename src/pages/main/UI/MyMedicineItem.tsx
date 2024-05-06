// import { MedicineItemType } from "@/types";

import { MedicineItemType } from "@/types";
import { calculateDday } from "../utils";
import styles from "../styles/MyMedicineItem.module.scss";
import { useState } from "react";

// interface MyMedicineItem extends MedicineItemType{
interface MyMedicineItem {
	medicine: MedicineItemType;
	isBlank?: boolean;
}

export default function MyMedicineItem({
	medicine,
	isBlank = false,
}: MyMedicineItem) {
	if (isBlank) {
		return (
			<div className={styles.container}>
				<div className={styles.top}></div>
				<div className={styles.bottom}>
					<div className={styles.name}></div>
					<div className={styles.feature}></div>
				</div>
			</div>
		);
	}

	const [isItemHovered, setIsItemHovered] = useState(false);
	const today = new Date();
	const medicineExpiration = new Date("2025-05-23");
	const dday = calculateDday(today, medicineExpiration);

	const splittedName = medicine?.prdlst_NM.split(" ");
	return (
		<div
			className={`${styles.container} ${isItemHovered ? styles.hover : ""}`}
			onMouseEnter={() => setIsItemHovered(true)}
			onMouseLeave={() => setIsItemHovered(false)}
		>
			<div className={styles.top}>
				<img
					src="/images/no_medicine_img.jpg"
					alt="약 이름"
					width={50}
					height={60}
				/>
			</div>
			<div className={styles.bottom}>
				<div className={styles.name}>
					{splittedName.map((name) => (
						<div>{name}</div>
					))}
				</div>
			</div>
			<div className={styles.dday}>D-{dday}</div>
		</div>
	);
}
