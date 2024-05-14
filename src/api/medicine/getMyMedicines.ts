import { ResponsePagenation } from "@/types";
import axios from "../axiosConfig";

// 이거 말고 새로
export default async function getMedicines(page: number = 0, size: number = 4) {
	const response = await axios.get<
		ResponsePagenation<{
			id: number;
			medicineName: string;
			expirationDate: string;
		}>
	>(`/storages?page=${page}&size=${size}`);
	return response.data.data;
}
