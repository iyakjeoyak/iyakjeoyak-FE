import { MedicineItemType, ResponsePagenation } from "@/types";

import axios from "../axiosConfig";

export default async function getMedicines({page, size}:{page:number, size:number}) {
	const response = await axios.get<ResponsePagenation<MedicineItemType>>(`/medicine?page=${page}&size=${size}`);
	return response.data;
}
