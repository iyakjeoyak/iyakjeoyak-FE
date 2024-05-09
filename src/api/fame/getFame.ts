import axios from "../axiosConfig";

export default async function getFame() {
	const response = await axios.get(`/topUser`);
	return response.data;
}
