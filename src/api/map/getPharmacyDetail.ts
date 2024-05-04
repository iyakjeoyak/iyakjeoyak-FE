import axios from "../axiosConfig";

type hourListType = {
	dayOfWeek: string;
	startHour: string;
	endHour: string;
}[];

export interface PharmacyDetailType {
	dutyAddr: string;
	dutyName: string;
	dutyTel1: string;
	hpid: string;
	latitude: number;
	longitude: number;
	businessHoursList: hourListType;
}

export default async function getPharmacyDetail(hpid: string) {
	const response = await axios.get<PharmacyDetailType>(`/map/${hpid}`);
	return response.data;
}
