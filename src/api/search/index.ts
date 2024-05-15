import getAutoCompleteResult from "./getAutoCompleteResult";
import { queryOptions } from "@tanstack/react-query";

const searchQueryOptions = {
	getAutoCompleteResult: ({ keyword }: { keyword: string }) =>
		queryOptions({
			queryKey: ["auto-complete", keyword],
			queryFn: () => getAutoCompleteResult({ keyword }),
			initialData: [],
		}),
};

export default searchQueryOptions;
