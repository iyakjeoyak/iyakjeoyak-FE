import axios from "../axiosConfig";
import { PharmacyDetailType } from "@pages/map/mapTypes";

export default async function getPharmacyDetail(hpid: string) {
	const response = await axios.get<PharmacyDetailType>(`/maps/${hpid}`);
	return response.data;
}
