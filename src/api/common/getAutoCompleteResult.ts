import axios from "../axiosConfig";

export default async function getAutoCompleteResult({keyword}:{keyword: string}) {
	const response = await axios.get<string[]>(`/auto-complete?keyword=${keyword}`);
  
	return response.data;
}


