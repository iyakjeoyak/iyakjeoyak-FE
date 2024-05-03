import { MedicineItemType, ResponsePagenation } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BlankMyMedicineBoard from "./BlankMedicineCard";
import Loading from "@/pages/feedback/Loading";
import MedicineCardItem from "./MedicineCardItem";
import SelectSort from "@/components/SelectSort";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import axios from "@/api/axiosConfig";
import qs from 'qs';
import { queryClient } from "@/main";
import styles from "../styles/MedicineCardList.module.scss";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useObserver } from "@/hooks/useObserver";

export const enum SEARCHLIST_SORT_QUERIES  {
  HIGH_GRADE = 'high_star',
  LOW_GRADE = 'low_star',
  // MOST_REVIEWED = 'most_reviewed',
  // LOW_REVIEWED = 'low_reviewed',
  MOST_LIKED = 'most_liked',
  LOW_LIKED = 'low_liked'
}

export const SEARCHLIST_SORT_OPTIONS:SortOptionType[] = [
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
    label: string,
    value: SEARCHLIST_SORT_QUERIES,
  }

export interface SortMappingType {
  orderField: string;
  sort: 'ASC' | 'DESC';
}

const SEARCHLIST_SORT_QUERIES_MAPPING: Record<SEARCHLIST_SORT_QUERIES, SortMappingType> = {
  [SEARCHLIST_SORT_QUERIES.HIGH_GRADE]: { orderField: 'GRADE', sort: 'ASC' },
  [SEARCHLIST_SORT_QUERIES.LOW_GRADE]: { orderField: 'GRADE', sort: 'DESC' },
  // [SEARCHLIST_SORT_QUERIES.MOST_REVIEWED]: { orderField: 'CREATED_DATE', sort: 'DESC' },
  // [SEARCHLIST_SORT_QUERIES.LOW_REVIEWED]: { orderField: 'CREATED_DATE', sort: 'DESC' },
  [SEARCHLIST_SORT_QUERIES.MOST_LIKED]: { orderField: 'HEART_COUNT', sort: 'ASC' },
  [SEARCHLIST_SORT_QUERIES.LOW_LIKED]: { orderField: 'HEART_COUNT', sort: 'DESC' }
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

const getMedicinesAll = async ({
  pageParam 
}: {
  pageParam?: { queryParams: string }
}) => {
  const res = await axios.get<ResponsePagenation<MedicineItemType>>(
    `/medicine${pageParam?.queryParams}`
  );
  return res.data;
};

const getMedicinesByQuery = async ({
  pageParam 
}: {
  pageParam?: { queryParams: string }
}) => {

  console.log(pageParam?.queryParams)
  const res = await axios.get<ResponsePagenation<MedicineItemType>>(
    `/medicine/query${pageParam?.queryParams}`
  );
  return res.data;
};

export default function MedicineCardList({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen: ()=>void}) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const bottom = useRef<HTMLDivElement>(null);

  const [currentSort, setCurrentSort] = useState<SortOptionType>(SEARCHLIST_SORT_OPTIONS[0]);

	const handleCurrentSort = (sortOption: SortOptionType) => {
    setCurrentSort(sortOption);
	};

  const queryParamsObject = qs.parse(search, { ignoreQueryPrefix: true });
  const { tap, tagname, ...restQueryParams } = queryParamsObject;

  const nextPageParams = {
    size: PAGE_SIZE,
    ...restQueryParams,
    ...SEARCHLIST_SORT_QUERIES_MAPPING[currentSort.value]
  };

  const {isFetching, data , fetchNextPage} = useInfiniteQuery({
    queryKey: ['medicine', 'medicines'],
    queryFn: (tap === 'all' || !tap) ? getMedicinesAll : getMedicinesByQuery,
    getNextPageParam: (_data) => {
      const nextPageQueryString = qs.stringify({...nextPageParams, page: _data.number}, { addQueryPrefix: true });
     
      return { queryParams: nextPageQueryString };
    },
    initialPageParam: {
      queryParams: qs.stringify({
        ...nextPageParams,
        page: 0,
      }, { addQueryPrefix: true })
    },
    select: ({pages}) => { 
      const returnData = pages?.map((page)=>page.data).flat(); 
      const totalElement = pages[0].totalElement;
      return ({medicines: returnData, totalElement });
      },
    },
  )

  const handleTapClick = (tapValue: string) => {
    if (tapValue === 'all') {
      navigate(`/search?tap=${tapValue}`)
      return;
    }
    toggleIsTagsModalOpen();
		navigate(`/search?tap=${tapValue}`);
	};

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    const isLast = data?.medicines.length === data?.totalElement;

    if (entry.isIntersecting && !isLast) {
     fetchNextPage();
    }
  };
  
  useObserver({
    target: bottom,
    onIntersect,
  });

  useEffect(()=>{
    queryClient.resetQueries({queryKey:['medicine', 'medicines']});
  },[search, currentSort])

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
			{(!data || data.medicines.length === 0) ? < BlankMyMedicineBoard/> : data.medicines.map((medicineItem)=><MedicineCardItem key={medicineItem.id} medicineItem={medicineItem}/>)}
		  {isFetching?  <Loading/> : <div ref={bottom} />}
    </div>
    </article>
	);
}
