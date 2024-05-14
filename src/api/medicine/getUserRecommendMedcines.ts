import { MedicineItemType } from "@/types";
import axios from "../axiosConfig";

export default async function getUserRecommendMedicines(size: number) {
	const response = await axios.get<MedicineItemType[]>(
		`/medicines/recommend?size=${size}`,
	);
	return response.data;
}
