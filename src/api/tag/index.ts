import getCategories from "./getCategories";
import getHashtags from "./getHashtags";
import { queryOptions } from "@tanstack/react-query";

const tagQueryOptions = {
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
};

export default tagQueryOptions;
