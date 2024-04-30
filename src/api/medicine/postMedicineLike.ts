import axios from "../axiosConfig";

interface PostMedicineLikeType {
  id: number;
}

export default async function getMedicineLike(body: PostMedicineLikeType) {
	const response = await axios.post(`/heart/medicine`, {body});
	return response.data;
}
