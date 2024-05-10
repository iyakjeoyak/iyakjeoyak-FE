import axios from "../axiosConfig";
import { ShortSupplementProps } from "@/pages/userinfo/userInfoType";

export default async function getUserSupplement({ page }: { page: number }) {
	const response = await axios.get<ShortSupplementProps>(
		`/storage?page=${page}`,
	);
	return response.data;
}
