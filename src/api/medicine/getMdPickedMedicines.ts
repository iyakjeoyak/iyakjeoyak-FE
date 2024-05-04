import { MedicineDetailItemType, ResponsePagenation } from "@/types";

import axios from "../axiosConfig";

// 페이지네이션 노필요
export default async function getMdPickedMedicines() {
	const response = await axios.get<ResponsePagenation<MedicineDetailItemType>>(`/medicine/md?page=0&size=5`);
	return response.data.data;
}
