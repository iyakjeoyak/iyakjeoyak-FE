import axios from "../axiosConfig";

export default async function postMedicineLike(id: number) {
	const response = await axios.post(`/medicine-hearts/click`, id);
	return response.data;
}
