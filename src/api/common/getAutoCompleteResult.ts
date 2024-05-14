import { KeywordResultItemType } from "@/pages/main";
import axios from "../axiosConfig";

export default async function getAutoCompleteResult({
	keyword,
}: {
	keyword: string;
}) {
	const response = await axios.get<KeywordResultItemType[]>(
		`/auto-completes?keyword=${keyword}`,
	);

	return response.data;
}
