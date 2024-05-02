import { MedicineItemType } from "@/types";
import axios from "../axiosConfig";

export default async function getMedicines() {
	const response = await axios.get<{ content: MedicineItemType[] }>(
		`/medicines`,
	);
	return response.data;
}
