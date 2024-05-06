import axios from "../axiosConfig";
import { ShortSupplementProps } from "@/pages/userinfo/userInfoType";

export default async function getUserSupplement({
	size,
	page,
}: {
	size: number;
	page: number;
}) {
	const response = await axios.get<ShortSupplementProps>(
		`/storage?${page}&size=${size}`,
	);
	return response.data;
}
