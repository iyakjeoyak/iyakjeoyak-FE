import { matchPath, useLocation, useNavigate } from "react-router-dom";

import InfoBoard from "./UI/info/InfoBoard";
import MedicineCard from "./UI/MedicineCard";
import ReviewBoard from "./UI/review/ReviewBoard";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import medicineQueryOptions from "@/api/medicine";
import styles from "./index.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";
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

export default function MedicineDetail() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const currentTapValue = useGetURLSearch("tap");

	const medicineId = Number(matchPath("/detail/:id", pathname)?.params.id);

	if (!medicineId) return;

	const {
		data: {
			image,
			isHeart,
			grade,
			bssh_NM: brand,
			prdlst_NM: name,
			heartCount,
			hashtags,
			ntk_MTHD: howToEat,
			indiv_RAWMTRL_NM: ingredient,
			primary_FNCLTY: describe,
			isBookMark,
			reviewCount,
		},
	} = useQuery(medicineQueryOptions.getMedicineById({ medicineId }));

	const handleTapClick = (tapValue: string) => {
		navigate(`/detail/${medicineId}?tap=${tapValue}`);
	};

	return (
		<section className={styles.container}>
			<MedicineCard
				image={image}
				name={name}
				isHeart={isHeart}
				isBookMark={isBookMark}
				reviewCount={reviewCount}
				brand={brand}
				hashtags={hashtags.slice(0, 2)}
				grade={grade}
				heartCount={heartCount}
			/>
			<div className={styles.board}>
				<TapBar taps={TAPS} onClick={handleTapClick} />
				{currentTapValue === TAPS_QUERIES.REVIEW && (
					<ReviewBoard medicineId={medicineId} />
				)}
				{(currentTapValue === TAPS_QUERIES.INFO ||
					currentTapValue === null) && (
					<InfoBoard
						howToEat={howToEat}
						ingredient={ingredient}
						describe={describe}
					/>
				)}
			</div>
		</section>
	);
}
