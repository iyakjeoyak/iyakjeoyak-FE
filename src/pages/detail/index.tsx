import { InfoBoard, MedicineCard, ReviewBoard } from "./UI";

import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import medicineQueryOptions from "@/api/medicine";
import styles from "./index.module.scss";
import useGetIdByLocation from "./hooks/useGetIdByLocation";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const TAPS = [
	{
		label: "정보",
		value: TAPS_QUERIES.INFO,
	},
	{
		label: "후기",
		value: TAPS_QUERIES.REVIEW,
	},
];

export default function DetailMedicineById() {
	const navigate = useNavigate();

	const currentTapValue = useGetURLSearch("tap");

  const id = useGetIdByLocation()
  
  const {data: {
    isHeart,
    id: medicineId, 
    grade,
    bssh_NM: brand, 
    prdlst_NM: name, 
    heartCount, 
    hashtags,
    ntk_MTHD: howToEat, 
    indiv_RAWMTRL_NM: ingredient, 
    primary_FNCLTY: describe, 
    isBookMark,
    reviewList,
  }} 
  = useQuery(medicineQueryOptions.getMedicineById({medicineId: id}))

	const handleTapClick = (tapValue: string) => {
		navigate(`/detail/${medicineId}?tap=${tapValue}`);
	};

	return (
		<>
			<section className={styles.container}>
				<MedicineCard name={name} isHeart={isHeart} isBookMark={isBookMark} reviewCount={reviewList.length} brand={brand} hashtags={hashtags} grade={grade} heartCount={heartCount} />
				<div className={styles.board}>
					<TapBar taps={TAPS} onClick={handleTapClick} />
					{currentTapValue === "review" ? <ReviewBoard medicineId={medicineId} /> : <InfoBoard howToEat={howToEat} ingredient={ingredient} describe={describe}/>}
				</div>
			</section>
		</>
	);
}
