import { ResponsePagenation } from "@/types";
import axios from "../axiosConfig";

interface Medicines {
	id: number;
	medicineName: string;
	expirationDate: string;
}

export default async function getMedicines(page: number = 0, size: number = 4) {
	const response = await axios.get<ResponsePagenation<Medicines>>(
		`/storages?page=${page}&size=${size}`,
	);
	return response.data.data;
}
