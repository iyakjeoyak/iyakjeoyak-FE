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

export interface GetPharmacyDataParams {
	lat: string;
	lon: string;
	size?: number;
}

export default async function getPharmacyData(
	params: GetPharmacyDataParams,
): Promise<PharmacyDataType> {
	const { lat, lon, size } = params;
	const response = await axios.get<PharmacyDataType>(
		`/maps?lat=${lat}&lon=${lon}&size=${size}`,
	);
	return response.data;
}
