import axios from "../axiosConfig";
import { ReviewData } from "@/pages/userinfo/userInfoType";

export default async function getUserReview({
	page,
	size,
}: {
	page: number;
	size: number;
}) {
	const response = await axios.get<ReviewData>(
		`/my/review?page=${page}&size=${size}`,
	);
	return response.data;
}
