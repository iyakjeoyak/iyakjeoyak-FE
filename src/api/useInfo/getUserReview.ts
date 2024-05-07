import axios from "../axiosConfig";
import { ReviewData } from "@/pages/userinfo/userInfoType";

export default async function getUserReview({
	size,
	page,
}: {
	size: number;
	page: number;
}) {
	const response = await axios.get<ReviewData>(
		`/my/review?page=${page}&size=${size}`,
	);
	return response.data;
}
