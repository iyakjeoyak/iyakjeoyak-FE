export interface Pharmacy {
	lat: number;
	lng: number;
	name: string;
	hpid: string;
}

export interface MapProps {
	pharmacies: Pharmacy[];
}
