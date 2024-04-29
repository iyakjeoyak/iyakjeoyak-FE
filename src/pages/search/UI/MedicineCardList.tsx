import MedicineCardItem from "./MedicineCardItem";
import medicineQueryOptions from "@/api/medicine";
import styles from "../styles/MedicineCardList.module.scss";
import { useQuery } from "@tanstack/react-query";

export default function MedicineCardList() {
  const {data: {data: medicines,
    // number,
    // size,
    // totalPages,
    // totalElement,
    // numberOfElement
  }} = useQuery(medicineQueryOptions.getMedicines({page:0, size: 8}))
	return (
		<article className={styles.container}>
			{medicines.map((medicineItem)=><MedicineCardItem key={medicineItem.id} medicineItem={medicineItem}/>)}
		</article>
	);
}
