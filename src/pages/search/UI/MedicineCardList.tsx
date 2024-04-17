import MedicineCardItem from "./MedicineCardItem";
import styles from "../styles/MedicineCardList.module.scss";

export default function MedicineCardList() {
	return (
		<article className={styles.container}>
			<MedicineCardItem />
			<MedicineCardItem />
			<MedicineCardItem />
			<MedicineCardItem />
			<MedicineCardItem />
			<MedicineCardItem />
		</article>
	);
}
