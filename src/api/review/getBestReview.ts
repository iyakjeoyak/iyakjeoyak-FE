import { ReviewItemType } from "@/types";
import axios from "../axiosConfig";

export default async function getBestReview({size}:{size: number}) {
	const response = await axios.get<ReviewItemType[]>(`/review/top?size=${size}`);
  return response.data;
}