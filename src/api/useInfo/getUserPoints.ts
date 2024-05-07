import axios from "../axiosConfig";
import { PointData } from "@/pages/userinfo/userInfoType";

export default async function getUserPoints({
	size,
	page,
}: {
	size: number;
	page: number;
}) {
	const response = await axios.get<PointData>(
		`/point?page=${page}&size=${size}`,
	);
	return response.data;
}
