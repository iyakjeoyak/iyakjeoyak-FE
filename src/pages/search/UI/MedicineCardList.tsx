import { MedicineItemType, ResponsePagenation } from "@/types";

import Loading from "@/pages/feedback/Loading";
import MedicineCardItem from "./MedicineCardItem";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import axios from "@/api/axiosConfig";
import { queryClient } from "@/main";
import styles from "../styles/MedicineCardList.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useInfiniteQuery } from "@tanstack/react-query";
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

const PAGE_SIZE = 8;

const getMedicines = async ({
  pageParam = { page: 0, size: PAGE_SIZE, categoryId: "",keyword: ""}
}: {
  pageParam?: { page: number; size: number; categoryId: string | null; keyword: string| null }
}) => {
  const { page, size, categoryId, keyword } = pageParam;
  const params:{page: string, size: string, categoryId?: string,  keyword?: string } = {
    page: page.toString(),
    size: size.toString(),
  };
  
  if (categoryId) {
    params.categoryId = categoryId;
  }
  
  
  if (keyword) {
    params.keyword = keyword;
  }
  
  const queryParams = new URLSearchParams(params).toString();

  const res = await axios.get<ResponsePagenation<MedicineItemType>>(
    `/medicine/query?${queryParams}`
  );
  return res.data;
};

export default function MedicineCardList({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen: ()=>void}) {
  let currentPage = 0;
  const navigate = useNavigate();
  const bottom = useRef<HTMLDivElement>(null);

  // categoryId, hashtagId, keyword,
  // orderField= [GRADE , HEART_COUNT , CREATED_DATE]
  // sort= ASC , DESC   { page, size, categoryId, hashtagId, keyword }
  const  {keyword, tag} = useGetURLSearch(['keyword','tag'])  as Record<string, string | null>

  const {isFetching, data:medicines, fetchNextPage}=useInfiniteQuery({
    queryKey: ['medicine', 'medicines'],
    queryFn: getMedicines,
    getNextPageParam: () => {
      const nextPage = currentPage++;
     return { page: nextPage, size: PAGE_SIZE ,categoryId: tag,  keyword };
    },
    initialPageParam: { page: 0, size: PAGE_SIZE, categoryId: tag, keyword },
    select:({pages})=>{ 
      const returnData = pages.map((page)=>page.data).flat(); 
      return returnData;
    }
    },
  )

  const handleTapClick = (tapValue: string) => {
    if (tapValue === 'all') {
      navigate(`/search?tap=${tapValue}`)
      queryClient.resetQueries({queryKey:['medicine', 'medicines']});
      return;
    }
    toggleIsTagsModalOpen();
		navigate(`/search?tap=${tapValue}`);
	};

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
     fetchNextPage();
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
		  {isFetching?  <Loading/> : <div ref={bottom} />}
    </div>
    </article>
	);
}
