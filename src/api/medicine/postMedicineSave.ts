import axios from "../axiosConfig";

export default async function getMedicineSave(id: number) {
	const response = await axios.post(`/bookmarks/click`, id);
	return response.data;
}
