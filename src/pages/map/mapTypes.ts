export interface Pharmacy {
	lat: number;
	lng: number;
	name: string;
	hpid: string;
}

export interface MapProps {
	pharmacies: Pharmacy[];
}

export type hourListType = {
	dayOfWeek: string;
	startHour: string;
	endHour: string;
};

export interface PharmacyDetailType {
	dutyAddr: string;
	dutyName: string;
	dutyTel1: string;
	liked?: boolean;
	hpid: string;
	latitude: number;
	longitude: number;
	businessHoursList?: hourListType[];
}
