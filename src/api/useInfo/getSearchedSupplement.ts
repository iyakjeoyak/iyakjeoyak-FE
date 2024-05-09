import { ResponsePagenation } from "@/types";
import axios from "../axiosConfig";

interface SearchedCategory {
	id: number;
	name: string;
}

interface SearchedHashtag {
	id: number;
	name: string;
}

interface SearchedImage {
	id: number;
	fullPath: string;
}

export interface SupplementProduct {
	id: number;
	heartCount: number;
	grade: number;
	categories: SearchedCategory[];
	hashtags: SearchedHashtag[];
	reviewCount: number;
	image?: SearchedImage | null;
	isHeart: boolean | null;
	isBookMark: boolean | null;
	prdlst_NM: string;
	bssh_NM: string;
}

export default async function getSearchedSupplement(
	keyword: string,
	page: number = 0,
	size: number = 4,
) {
	const response = await axios.get<ResponsePagenation<SupplementProduct>>(
		`/medicine/query?keyword=${keyword}&page=${page}&size=${size}`,
	);
	return response.data.data;
}
