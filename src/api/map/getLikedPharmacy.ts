import axios from "../axiosConfig";
import { hourListType } from "./types";

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

interface LikedPharmacyList {
	data: PharmacyLikedType[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberOfElement: number;
}

export default async function getLikedPharmacy(page: number, size: number) {
	const response = await axios.get<LikedPharmacyList>(
		`/pharmacies?page=${page}&size=${size}`,
	);
	return response.data;
}
