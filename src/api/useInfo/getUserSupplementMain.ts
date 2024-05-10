import axios from "../axiosConfig";
import { ShortSupplementProps } from "@/pages/userinfo/userInfoType";

export default async function getUserSupplementMain({
	page,
	size,
}: {
	page: number;
	size: number;
}) {
	const response = await axios.get<ShortSupplementProps>(
		`/storage?page=${page}&size=${size}`,
	);
	return response.data;
}
