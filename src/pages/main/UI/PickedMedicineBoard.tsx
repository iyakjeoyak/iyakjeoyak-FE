import PickedMedicine from "./PickedMedicine";
import medicineQueryOptions from "@/api/medicine";
import { useQuery } from "@tanstack/react-query";

const PickedMedicineBoard = () => {
	const { data: medicines } = useQuery(
		medicineQueryOptions.getMdPickedMedicines(),
	);

	// TODO: add swiper

	return (
		<div>
			{medicines.length !== 0 &&
				medicines
					?.slice(0, 1)
					.map((medicine) => (
						<PickedMedicine key={medicine.id} medicine={medicine} />
					))}
		</div>
	);
};

export default PickedMedicineBoard;
