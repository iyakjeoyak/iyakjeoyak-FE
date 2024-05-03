import { MedicineDetailItemType } from "@/types";
import axios from "../axiosConfig";

export default async function getMedicineById({medicineId}:{medicineId: number}) {
	const response = await axios.get<MedicineDetailItemType>(`/medicine/${medicineId}`);
	return response.data;
}
