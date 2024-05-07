import { queryOptions } from "@tanstack/react-query";
import getFame from "./getFame";

export const fameQueryOptions = {
	getFame: () =>
		queryOptions({
			queryKey: ["fameuser"],
			queryFn: () => getFame(),
			initialData: [],
		}),
};
