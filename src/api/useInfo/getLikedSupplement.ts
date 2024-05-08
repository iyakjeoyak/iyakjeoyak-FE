import axios from "../axiosConfig";

interface LikedSupplementProps {
	id: number;
	medicineId: number;
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

	console.log(response);
	return response.data;
}
