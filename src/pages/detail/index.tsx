import { InfoBoard, MedicineCard, ReviewBoard } from "./UI";

import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import styles from "./index.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useNavigate } from "react-router-dom";

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

export default function DetailIdPage() {
	const navigate = useNavigate();

	const currentTapValue = useGetURLSearch("tap");

	const handleTapClick = (tapValue: string) => {
		navigate(`/detail/1?tap=${tapValue}`);
	};

	return (
		<>
			<section className={styles.container}>
				<MedicineCard />
				<div className={styles.board}>
					<TapBar taps={TAPS} onClick={handleTapClick} />
					{currentTapValue === "review" ? <ReviewBoard /> : <InfoBoard />}
				</div>
			</section>
		</>
	);
}
