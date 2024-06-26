import axios from "../axiosConfig";
import { PharmacyDetailType } from "./types";

export default async function postLikedPharmacy(
	likedPharmacy: PharmacyDetailType,
) {
	const request = await axios.post(`/pharmacies`, likedPharmacy);
	return request.data;
}
