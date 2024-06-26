import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ElementIcon from "@/assets/icons/Element";
import PickedMedicine from "./PickedMedicine";
import getArrayRandomElement from "@/utils/getArrayRandomElement";
import medicineQueryOptions from "@/api/medicine";
import styles from "../../styles/PickedMedicine.module.scss";
import { useQuery } from "@tanstack/react-query";

const PickedMedicineBoard = () => {
	const { data: medicines } = useQuery(
		medicineQueryOptions.getMdPickedMedicines(),
	);

	const randomMedicine =
		medicines && medicines.length > 0 ? getArrayRandomElement(medicines) : null;
	return (
		<article className={styles.container}>
			<div className={styles["title-container"]}>
				<ElementIcon width={20} height={20} />
				<div className={styles.title}>
					MD's <span>pick</span>
				</div>
			</div>

			{randomMedicine && <PickedMedicine medicine={randomMedicine} />}
		</article>
	);
};

export default PickedMedicineBoard;
