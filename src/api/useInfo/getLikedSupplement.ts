import axios from "../axiosConfig";

interface MedicineId {
	id: number;
	image: {
		id: number;
		fullPath: string;
	};
	prdlst_NM: string;
	bssh_NM: string;
}

export interface LikedSupplementProps {
	id: number;
	medicineId: MedicineId;
}

export interface LikedSupplmentArgs {
	data: LikedSupplementProps[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberOfElement: number;
}

export default async function getLikedSupplement({
	size,
	page,
}: {
	size: number;
	page: number;
}) {
	const response = await axios.get<LikedSupplmentArgs>(
		`/heart/medicine?page=${page}&size=${size}`,
	);

	return response.data;
}
