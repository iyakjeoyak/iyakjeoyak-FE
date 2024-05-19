import axios from "../axiosConfig";
import { LikedSupplementProps } from "@/pages/userinfo/userInfoType";

export interface LikedSupplments {
	data: LikedSupplementProps[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberOfElement: number;
}

export default async function getLikedSupplement({
	page,
	size,
}: {
	page: number;
	size: number;
}) {
	const response = await axios.get<LikedSupplments>(
		`/medicine-hearts?page=${page}&size=${size}`,
	);

	return response.data;
}
