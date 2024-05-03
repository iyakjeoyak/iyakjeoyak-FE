import axios from "../axiosConfig";

export interface PharmacyMapType {
	dutyAddr: string;
	dutyName: string;
	dutyTel1: string;
	hpid: string;
	latitude: number;
	longitude: number;
}

export interface PharmacyDataType {
	data: PharmacyMapType[];
}

export default async function getPharmacyData(
	lat: string,
	lon: string,
	size?: number,
) {
	const response = await axios.get<PharmacyDataType>(
		`/map?lat=${lat}&lon=${lon}&size=${size}`,
	);
	return response.data;
}
