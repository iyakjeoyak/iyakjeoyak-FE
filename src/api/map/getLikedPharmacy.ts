import axios from "../axiosConfig";
import { PharmacyDetailType } from "@/pages/map/mapTypes";

export default async function getLikedPharmacy(size: number, page: number) {
	const response = await axios.get<PharmacyDetailType[]>(
		`/pharmacy?page=${page}&size=${size}`,
	);
	return response.data;
}
