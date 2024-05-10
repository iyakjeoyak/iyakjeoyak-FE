import axios from "../axiosConfig";
import { hourListType } from "@/pages/map/mapTypes";

export interface PharmacyLikedType {
	id: number;
	dutyAddr: string;
	dutyName: string;
	dutyTel1: string;
	hpid: string;
	liked: boolean;
	latitude: number;
	longitude: number;
	businessHoursList?: hourListType[];
}

interface PharmacyLikedProps {
	data: PharmacyLikedType[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberOfElement: number;
}

export default async function getLikedPharmacy(page: number, size: number) {
	const response = await axios.get<PharmacyLikedProps>(
		`/pharmacy?page=${page}&size=${size}`,
	);
	return response.data;
}
