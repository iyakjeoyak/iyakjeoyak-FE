import axios from "../axiosConfig";

interface PostMedicineBookmarkType {
  id: number;
}

export default async function getMedicineLike(body: PostMedicineBookmarkType) {
	const response = await axios.post(`/bookmark`, {body});
	return response.data;
}
