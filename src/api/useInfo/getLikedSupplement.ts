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
	page,
	size,
}: {
	page: number;
	size: number;
}) {
	const response = await axios.get<LikedSupplmentArgs>(
		`/medicine-hearts?page=${page}&size=${size}`,
	);

	return response.data;
}
