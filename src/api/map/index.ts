import { queryOptions } from "@tanstack/react-query";
import getPharmacyData, { GetPharmacyDataParams } from "./getPharmacyData";
import getPharmacyDetail from "./getPharmacyDetail";
import getLikedPharmacy from "./getLikedPharmacy";

const pharmacyQueryOptions = {
	getPharmacyInfo: ({
		lat, // 줄임말 지양
		lon,
		size,
	}: GetPharmacyDataParams) =>
		queryOptions({
			queryKey: ["pharmacy"],
			queryFn: () => getPharmacyData({ lat, lon, size }),
		}),

	getPharmacyDetail: ({ hpid }: { hpid: string }) =>
		queryOptions({
			queryKey: ["pharmacy", "pharmacyDetail", hpid],
			queryFn: () => getPharmacyDetail(hpid),
			initialData: {
				dutyAddr: "",
				dutyName: "",
				dutyTel1: "",
				hpid: "",
				liked: false,
				latitude: 0,
				longitude: 0,
				businessHoursList: [],
			},
		}),

	getLikedPharmacy: ({ page, size }: { page: number; size: number }) =>
		queryOptions({
			queryKey: ["pharmacy", "likedPharmacy"],
			queryFn: () => getLikedPharmacy(page, size),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),
};

export default pharmacyQueryOptions;
