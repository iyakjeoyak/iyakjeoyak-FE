import { MedicineItemType, ResponsePagenation } from "@/types";
import axios from "../axiosConfig";

export default async function getMedicines(page: number, size: number) {
	const response = await axios.get<ResponsePagenation<MedicineItemType>>(
		`/medicines?page=${page}&size=${size}`,
	);
	return response.data;
}
