import getAutoCompleteResult from "./getAutoCompleteResult";
import getCategories from "./getCategories";
import getHashtags from "./getHashtags";
import { queryOptions } from "@tanstack/react-query";

const commonQueryOptions = {
	getHashtags: () =>
		queryOptions({
			queryKey: ["hashtags"],
			queryFn: getHashtags,
			initialData: [],
		}),
	getCategories: () =>
		queryOptions({
			queryKey: ["categories"],
			queryFn: () => getCategories(),
			initialData: [],
		}),
	getAutoCompleteResult: ({ keyword }: { keyword: string }) =>
		queryOptions({
			queryKey: ["auto-complete", keyword],
			queryFn: () => getAutoCompleteResult({ keyword }),
			initialData: [],
		}),
};

export default commonQueryOptions;
