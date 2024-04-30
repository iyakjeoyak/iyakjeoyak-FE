import { MedicineItemType, ResponsePagenation } from "@/types";
import { QueryFunction, QueryFunctionContext, QueryKey, useInfiniteQuery, useQuery } from "@tanstack/react-query";

import MedicineCardItem from "./MedicineCardItem";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import getMedicines from "@/api/medicine/getMedicines";
import medicineQueryOptions from "@/api/medicine";
import styles from "../styles/MedicineCardList.module.scss";
import { useNavigate } from "react-router-dom";
import { useObserver } from "@/hooks/useObserver";
import { useRef } from "react";

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
  
  const {data: {data: medicines,
    // number,
    // size,
    // totalPages,
    // totalElement,
    // numberOfElement
  }} = useQuery({...medicineQueryOptions.getMedicines({page:0, size: 8})});

  const queryFn= async (context: any) => {
    const data = await getMedicines(context.pageParam as number, 8);
    return data;
  };

  
  const {isLoading, data, hasNextPage, fetchNextPage}=useInfiniteQuery<ResponsePagenation<MedicineItemType>>({
    queryKey: ['medicine', 'medicines'],
    queryFn,
    getNextPageParam: (currentPage: any) => {
    const nextPage = currentPage.page +1;
    return nextPage < currentPage.total_pages ? null : nextPage;
  },
  initialPageParam: 0,
})

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
			{medicines && medicines.map((medicineItem)=><MedicineCardItem key={medicineItem.id} medicineItem={medicineItem}/>)}
		  {isLoading ? <div>로딩중</div> : <div ref={bottom} />}
    </div>
    </article>
	);
}
