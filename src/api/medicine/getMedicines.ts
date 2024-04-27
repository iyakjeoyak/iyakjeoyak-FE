import { MedicineItemType } from "@/types";
import instance from "..";

export default async function getMedicines() {
	const response = await instance.get<{ content: MedicineItemType[] }>(`/medicines`);
	return response.data;
}
