import axios from "../axiosConfig";
import { PointData } from "@/pages/userinfo/userInfoType";

export default async function getUserPoints({
	page,
	size,
}: {
	page: number;
	size: number;
}) {
	const response = await axios.get<PointData>(
		`/points?page=${page}&size=${size}`,
	);
	return response.data;
}
