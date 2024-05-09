import axios from "../axiosConfig";

interface Category {
	id: number;
	name: string;
}

interface Image {
	id: number;
	fullPath: string;
}

interface medicineDetail {
	id: number;
	heartCount: number;
	reviewCount: number;
	grade: number;
	categories: Category;
	hashtags: Category;
	isHeart: boolean;
	isBookMark: boolean;
	image: Image;
	prdlst_NM: string;
	bssh_NM: string;
	indiv_RAWMTRL_NM: string;
	primary_FNCLTY: string;
	ntk_MTHD: string;
	iftkn_ATNT_MATR_CN: string;
}

export interface DetailSupplementArgs {
	id: number;
	medcine: medicineDetail | null;
	medicineName: string;
	expirationDate: string;
	memo: string;
	image: {
		id: number;
		fullPath: string;
	} | null;
}

export default async function getSupplementDetail({
	storageId,
}: {
	storageId: number;
}) {
	const response = await axios.get<DetailSupplementArgs>(
		`/storage/${storageId}`,
	);

	return response.data;
}
