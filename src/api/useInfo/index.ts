import { queryOptions } from "@tanstack/react-query";
import getUserPoints from "./getUserPoints";
import getUserReview from "./getUserReview";
import getSupplementDetail from "./getSupplementDetail";
import getLikedSupplement from "./getLikedSupplement";
import getSearchedSupplement from "./getSearchedSupplement";
import getUserInfo from "./getUserInfo";
import getUserSupplement from "./getUserSupplement";
import getUserSupplementMain from "./getUserSupplementMain";

const userInfoQueryOptions = {
	getUserInfo: () =>
		queryOptions({
			queryKey: ["userInfo"],
			queryFn: () => getUserInfo(),
		}),

	getUserPoints: ({ page, size }: { page: number; size: number }) =>
		queryOptions({
			queryKey: ["userInfo", "point"],
			queryFn: () => getUserPoints({ page, size }),
			initialData: {
				point: 0,
				pageResult: {
					data: [],
					number: 0,
					size: 0,
					totalPages: 0,
					totalElement: 0,
					numberOfElement: 0,
				},
			},
		}),

	getUserReview: ({ page, size }: { page: number; size: number }) =>
		queryOptions({
			queryKey: ["userInfo", "userReview"],
			queryFn: () => getUserReview({ page, size }),
		}),

	getUserSupplementMain: ({ size, page }: { size: number; page: number }) =>
		queryOptions({
			queryKey: ["user", "all"],
			queryFn: () => getUserSupplementMain({ size, page }),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),

	getLikedSupplement: ({ page, size }: { page: number; size: number }) =>
		queryOptions({
			queryKey: ["userInfo", "like"],
			queryFn: () => getLikedSupplement({ page, size }),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),

	getUserSupplement: ({ page }: { page: number }) =>
		queryOptions({
			queryKey: ["userInfo", "storage"],
			queryFn: () => getUserSupplement({ page }),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),

	getUserSupplementDetail: ({ storageId }: { storageId: number }) =>
		queryOptions({
			queryKey: ["userInfo", "storage", storageId],
			queryFn: () => getSupplementDetail({ storageId }),
			initialData: {
				id: 0,
				medcine: null,
				medicineName: "",
				expirationDate: "",
				memo: "",
				image: null,
			},
		}),

	getKeywordSearchedSupplement: ({ keyword }: { keyword: string }) =>
		queryOptions({
			queryKey: ["userInfo", "storage", keyword],
			queryFn: () => getSearchedSupplement(keyword),
			initialData: [
				{
					id: 0,
					heartCount: 0,
					grade: 0,
					categories: [],
					hashtags: [],
					reviewCount: 0,
					image: null,
					isHeart: null,
					isBookMark: null,
					prdlst_NM: "",
					bssh_NM: "",
				},
			],
		}),
};

export default userInfoQueryOptions;
