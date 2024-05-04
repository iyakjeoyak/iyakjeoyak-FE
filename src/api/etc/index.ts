import getAutoCompleteResult from "./getAutoCompleteResult";
import getCategories from "./getCategories";
import getHashtags from "./getHashtags";
import { queryOptions } from "@tanstack/react-query";

const etcQueryOptions = {
	getHashtags: () =>
		queryOptions({
			queryKey: ["etc", "categories"],
			queryFn: getHashtags,
			initialData: [],
		}),
	getCategories: () =>
		queryOptions({
			queryKey: ["etc", "categories"],
			queryFn: () => getCategories(),
			initialData: [],
		}),
	getAutoCompleteResult: ({ keyword }: { keyword: string }) =>
		queryOptions({
			queryKey: ["etc", "auto-complete", keyword],
			queryFn: () => getAutoCompleteResult({ keyword }),
			initialData: [],
		}),
};

export default etcQueryOptions;
