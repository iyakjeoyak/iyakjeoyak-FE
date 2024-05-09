import { MedicineDetailItemType } from "@/types";
import axios from "../axiosConfig";

export default async function getMdPickedMedicines() {
	const response =
		await axios.get<{ ranking: number; medicine: MedicineDetailItemType }[]>(
			`/medicine/week`,
		);
	return response.data;
}
