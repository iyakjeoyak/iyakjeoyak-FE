import { MedicineItemType, ResponsePagenation } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BlankBox from "../../../components/BlankBox";
import Loading from "@/pages/feedback/Loading";
import MedicineCardItem from "./MedicineCardItem";
import SelectSort from "@/components/SelectSort";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import axios from "@/api/axiosConfig";
import qs from "qs";
import { queryClient } from "@/main";
import styles from "../styles/MedicineCardList.module.scss";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const enum SEARCHLIST_SORT_QUERIES {
	HIGH_GRADE = "high_star",
	LOW_GRADE = "low_star",
	// MOST_REVIEWED = 'most_reviewed',
	// LOW_REVIEWED = 'low_reviewed',
	MOST_LIKED = "most_liked",
	LOW_LIKED = "low_liked",
}

export const SEARCHLIST_SORT_OPTIONS: SortOptionType[] = [
	{
		label: "평점 높은 순",
		value: SEARCHLIST_SORT_QUERIES.HIGH_GRADE,
	},
	{
		label: "평점 낮은 순",
		value: SEARCHLIST_SORT_QUERIES.LOW_GRADE,
	},
	// {
	// 	label: "리뷰 많은 순",
	// 	value: SEARCHLIST_SORT_QUERIES.MOST_REVIEWED,
	// },
	{
		label: "좋아요 많은 순",
		value: SEARCHLIST_SORT_QUERIES.MOST_LIKED,
	},
	{
		label: "좋아요 적은 순",
		value: SEARCHLIST_SORT_QUERIES.LOW_LIKED,
	},
];

export interface SortOptionType {
	label: string;
	value: SEARCHLIST_SORT_QUERIES;
}

export interface SortMappingType {
	orderBy: string;
	sort: "ASC" | "DESC";
}

const SEARCHLIST_SORT_QUERIES_MAPPING: Record<
	SEARCHLIST_SORT_QUERIES,
	SortMappingType
> = {
	[SEARCHLIST_SORT_QUERIES.HIGH_GRADE]: { orderBy: "GRADE", sort: "DESC" },
	[SEARCHLIST_SORT_QUERIES.LOW_GRADE]: { orderBy: "GRADE", sort: "ASC" },
	// [SEARCHLIST_SORT_QUERIES.MOST_REVIEWED]: { orderBy: 'CREATED_DATE', sort: 'DESC' },
	// [SEARCHLIST_SORT_QUERIES.LOW_REVIEWED]: { orderBy: 'CREATED_DATE', sort: 'DESC' },
	[SEARCHLIST_SORT_QUERIES.MOST_LIKED]: { orderBy: "HEART_COUNT", sort: "ASC" },
	[SEARCHLIST_SORT_QUERIES.LOW_LIKED]: { orderBy: "HEART_COUNT", sort: "DESC" },
};

const TAPS = [
	{
		label: "전체",
		value: TAPS_QUERIES.ALL,
	},
	{
		label: "기능별",
		value: TAPS_QUERIES.FEATURE,
	},
	{
		label: "성능별",
		value: TAPS_QUERIES.FUNCTION,
	},
];

const PAGE_SIZE = 8;

const getMedicinesByQuery = async ({
	pageParam,
}: {
	pageParam?: { queryParams: string };
}) => {
	const res = await axios.get<ResponsePagenation<MedicineItemType>>(
		`/medicines/query${pageParam?.queryParams}`,
	);
	return res.data;
};

export default function MedicineCardList({
	toggleIsTagsModalOpen,
	handleCurrentTab,
}: {
	toggleIsTagsModalOpen: (tapValue: string) => void;
	handleCurrentTab: (tapValue: string) => void;
}) {
	const navigate = useNavigate();
	const { search } = useLocation();
	const bottom = useRef<HTMLDivElement>(null);

	const [currentSort, setCurrentSort] = useState<SortOptionType>(
		SEARCHLIST_SORT_OPTIONS[0],
	);

	const handleCurrentSort = (sortOption: SortOptionType) => {
		setCurrentSort(sortOption);
	};

	const queryParamsObject = qs.parse(search, { ignoreQueryPrefix: true });
	const { tap, name, ...restQueryParams } = queryParamsObject;

	const nextPageParams = {
		size: PAGE_SIZE,
		...restQueryParams,
		...SEARCHLIST_SORT_QUERIES_MAPPING[currentSort.value],
	};

	const { isFetching, data, fetchNextPage } = useInfiniteQuery({
		queryKey: ["medicine", "medicines"],
		queryFn: getMedicinesByQuery,
		getNextPageParam: (_data) => {
			const nextPageQueryString = qs.stringify(
				{ ...nextPageParams, page: _data.number + 1 },
				{ addQueryPrefix: true },
			);

			return { queryParams: nextPageQueryString };
		},
		initialPageParam: {
			queryParams: qs.stringify(
				{
					...nextPageParams,
					page: 0,
				},
				{ addQueryPrefix: true },
			),
		},
		select: ({ pages }) => {
			const returnData = pages?.map((page) => page.data).flat();
			const totalElement = pages[0].totalElement;
			return { medicines: returnData, totalElement };
		},
	});

	const handleTapClick = (tapValue: string) => {
		if (tapValue === "all") {
			navigate(`/search?tap=${tapValue}`);
			return;
		}
		toggleIsTagsModalOpen(tapValue);
		handleCurrentTab(tapValue);
	};

	const onIntersect: IntersectionObserverCallback = ([entry]) => {
		const isLast = data?.medicines.length === data?.totalElement;

		if (entry.isIntersecting && !isLast) {
			fetchNextPage();
		}
	};

	useIntersectionObserver({
		target: bottom,
		onIntersect,
	});

	useEffect(() => {
		queryClient.resetQueries({ queryKey: ["medicine", "medicines"] });
	}, [search, currentSort]);

	return (
		<article>
			<TapBar taps={TAPS} onClick={handleTapClick} />
			<SelectSort
				currentSort={currentSort}
				handleCurrentSort={handleCurrentSort}
			>
				<SelectSort.SortCurrentOption />
				<SelectSort.SortOptionList>
					{SEARCHLIST_SORT_OPTIONS.map((sort) => (
						<SelectSort.SortOption
							key={sort.value}
							value={sort.value}
							label={sort.label}
						/>
					))}
				</SelectSort.SortOptionList>
			</SelectSort>
			<div className={styles.container}>
				{!isFetching && data && data?.medicines.length === 0 && (
					<div style={{ paddingTop: "200px" }}>
						<BlankBox text="검색된 영양제가 없습니다" />
					</div>
				)}
				{data &&
					data.medicines.length !== 0 &&
					data.medicines.map((medicineItem, index) => (
						<MedicineCardItem key={index} medicineItem={medicineItem} />
					))}
				{isFetching ? (
					<div
						style={{
							paddingTop: "170px",
							position: "relative",
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Loading />
					</div>
				) : (
					<div ref={bottom} />
				)}
			</div>
		</article>
	);
}
