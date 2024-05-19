export type hourListType = {
	dayOfWeek: string;
	startHour: string;
	endHour: string;
};

export interface PharmacyDetailType {
	dutyAddr: string;
	dutyName: string;
	dutyTel1: string;
	hpid: string;
	liked: boolean;
	latitude: number;
	longitude: number;
	businessHoursList?: hourListType[];
}
