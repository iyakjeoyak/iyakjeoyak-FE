import { MedicineItemType, ResponsePagenation } from "@/types";
import { QueryFunction, QueryFunctionContext, QueryKey, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

import MedicineCardItem from "./MedicineCardItem";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import axios from "@/api/axiosConfig";
import getMedicines from "@/api/medicine/getMedicines";
import medicineQueryOptions from "@/api/medicine";
import styles from "../styles/MedicineCardList.module.scss";
import { useNavigate } from "react-router-dom";
import { useObserver } from "@/hooks/useObserver";

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

interface MedicineQueryResponse {
  data: MedicineItemType[];
}

export default function MedicineCardList({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen: ()=>void}) {
  const navigate = useNavigate();
  const bottom = useRef<HTMLDivElement>(null);

  let currentPage = 0;
  const PAGE_SIZE = 8;
  
  const getMedicines = async ({
    pageParam = { page: 0, size: PAGE_SIZE }
  }: {
    pageParam?: { page: number; size: number };
  }) => {
    const { page, size } = pageParam;
    const res = await axios.get<ResponsePagenation<MedicineItemType>>(
      `/medicine?page=${page}&size=${size}`
    );
    return res.data;
  };
  
  const {isLoading, data, hasNextPage, fetchNextPage}=useInfiniteQuery<ResponsePagenation<MedicineItemType>>({
    queryKey: ['medicine', 'medicines'],
    queryFn: getMedicines,
    getNextPageParam: () => {
      console.log(currentPage)
      const nextPage = currentPage + 1;
     return { page: nextPage, size: PAGE_SIZE };
    },
    initialPageParam: { page: 0, size: PAGE_SIZE }, 
    },
  )

  const handleTapClick = (tapValue: string) => {
    toggleIsTagsModalOpen();
		navigate(`/search?tap=${tapValue}`);
	};

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void fetchNextPage();
    }
  };
  
  useObserver({
    target: bottom,
    onIntersect,
  });

	return (
    <article>
    <TapBar taps={TAPS} onClick={handleTapClick} />
		<div className={styles.container}>
			{data?.pages[0]?.data.map((medicineItem)=><MedicineCardItem key={medicineItem.id} medicineItem={medicineItem}/>)}
		  {isLoading ? <div>로딩중</div> : <div ref={bottom} />}
    </div>
    </article>
	);
}
