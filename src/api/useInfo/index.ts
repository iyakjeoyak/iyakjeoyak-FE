import getUserInfo from "./getUserInfo";
import getUserSupplement from "./getUserSupplement";
import { queryOptions } from "@tanstack/react-query";

const userInfoQueryOptions = {
	getUserInfo: () =>
		queryOptions({
			queryKey: ["user", "all"],
			queryFn: getUserInfo,
			initialData: {
				userResult: {
					userId: 0,
					nickname: "",
					gender: "",
					age: 0,
					point: undefined,
					introduce: "",
					hashtagList: [],
					image: undefined,
				},
				latestReviews: [],
				favoriteSupplements: [],
			},
		}),
	getUserSupplement: ({ size, page }: { size: number; page: number }) =>
		queryOptions({
			queryKey: ["user", "all"],
			queryFn: () => getUserSupplement({ size, page }),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),
};

export default userInfoQueryOptions;
