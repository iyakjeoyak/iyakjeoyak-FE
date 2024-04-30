import MedicineCardItem from "./MedicineCardItem";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import medicineQueryOptions from "@/api/medicine";
import styles from "../styles/MedicineCardList.module.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const TAPS = [
	{
		label: "전체",
		value: TAPS_QUERIES.ALL,
	},
	{
		label: "기능별",
		value: TAPS_QUERIES.FEATURE,
	},
	{
		label: "성능별",
		value: TAPS_QUERIES.FUNCTION,
	},
];

export default function MedicineCardList({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen: ()=>void}) {
  const navigate = useNavigate();
  const {data: {data: medicines,
    // number,
    // size,
    // totalPages,
    // totalElement,
    // numberOfElement
  }} = useQuery(medicineQueryOptions.getMedicines({page:0, size: 8}));

  const handleTapClick = (tapValue: string) => {
    toggleIsTagsModalOpen();
		navigate(`/search?tap=${tapValue}`);
	};
	return (
    <article>
    <TapBar taps={TAPS} onClick={handleTapClick} />
		<div className={styles.container}>
			{medicines.map((medicineItem)=><MedicineCardItem key={medicineItem.id} medicineItem={medicineItem}/>)}
		</div>
    </article>
	);
}
