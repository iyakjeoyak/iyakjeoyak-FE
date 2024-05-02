import { MedicineItemType, ResponsePagenation } from "@/types";

import MedicineCardItem from "./MedicineCardItem";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import axios from "@/api/axiosConfig";
import styles from "../styles/MedicineCardList.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useObserver } from "@/hooks/useObserver";
import { useRef, } from "react";

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

export default function MedicineCardList({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen: ()=>void}) {
  const navigate = useNavigate();
  const bottom = useRef<HTMLDivElement>(null);

  // categoryId, hashtagId, keyword,
  // orderField= [GRADE , HEART_COUNT , CREATED_DATE]
  // sort= ASC , DESC
  const  data = useGetURLSearch(['keyword','tag', 'tag-name'])

  console.log(data);
  
  const {isFetching, data:medicines, fetchNextPage}=useInfiniteQuery({
    queryKey: ['medicine', 'medicines'],
    queryFn: getMedicines,
    getNextPageParam: () => {
      const nextPage = currentPage++;
     return { page: nextPage, size: PAGE_SIZE };
    },
    initialPageParam: { page: 0, size: PAGE_SIZE },
    select:({pages})=>{ 
      const returnData = pages.map((page)=>page.data).flat(); 
      return returnData;
    }
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
			{medicines?.map((medicineItem)=><MedicineCardItem key={medicineItem.id} medicineItem={medicineItem}/>)}
		  {isFetching? <div>로딩중</div> : <div ref={bottom} />}
    </div>
    </article>
	);
}
