import axios from "../axiosConfig";

export default async function getFame() {
	const response = await axios.get(`/top-users`);
	return response.data;
}
