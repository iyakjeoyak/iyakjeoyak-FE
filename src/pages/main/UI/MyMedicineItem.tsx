import { ShortSupplementInfo } from "@/pages/userinfo/userInfoType";
import { calculateDday } from "../utils";
import styles from "../styles/MyMedicineItem.module.scss";
import { useState } from "react";

// interface MyMedicineItem extends MedicineItemType{
interface MyMedicineItem {
	medicine?: ShortSupplementInfo;
	isBlank?: boolean;
}

export default function MyMedicineItem({ medicine }: MyMedicineItem) {
	if (!medicine) {
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
	const medicineExpiration = new Date(medicine.expirationDate);
	const dday = calculateDday(today, medicineExpiration);

	const splittedName = medicine?.medicineName.split(" ");

	return (
		<div
			className={`${styles.container} ${isItemHovered ? styles.hover : ""}`}
			onMouseEnter={() => setIsItemHovered(true)}
			onMouseLeave={() => setIsItemHovered(false)}
		>
			<div className={styles.top}>
				{!isItemHovered && (
					<img
						src={medicine?.image?.fullPath ?? "/images/no_medicine_img.jpg"}
						alt="약 이름"
						width={50}
						height={60}
					/>
				)}
			</div>
			<div className={styles.bottom}>
				{!isItemHovered && (
					<div className={styles.name}>
						{splittedName?.map((name) => <div key={name}>{name}</div>)}
					</div>
				)}
			</div>
			{isItemHovered && <div className={styles.dday}>D-{dday}</div>}
		</div>
	);
}
