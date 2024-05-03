import axios from "../axiosConfig";

export interface PostReviewBody {
  title: string,
  medicineId: number,
  tagList: number[],
  content: string,
  star: number,
}

export default async function postReview({body}:{body: PostReviewBody}) {
	const response = await axios.post(`/review`, body);
  console.log(response)
	return;
}