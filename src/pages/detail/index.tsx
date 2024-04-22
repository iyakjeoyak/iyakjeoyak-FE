import { InfoBoard, MedicineCard, ReviewBoard } from "./UI";
import { SORT_OPTIONS, SORT_QUERIES } from "@/constants/SORT_OPTIONS";

import SelectSort from "@/components/SelectSort";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import styles from "./index.module.scss";
import { useState } from "react";

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
	const [currentTapValue, setCurrentTapValue] = useState<string>(
		TAPS_QUERIES.INFO,
	);
	const [currentSortValue, setCurrentSortValue] = useState<string>(
		SORT_QUERIES.BEST,
	);

	const handleChangeCurrentTapValue = (tapValue: string) => {
		setCurrentTapValue(tapValue);
	};

	const handleCurrentSortValue = (sortValue: string) => {
		setCurrentSortValue(sortValue);
	};

	return (
		<>
			<section className={styles.container}>
				<MedicineCard />
				<div className={styles.board}>
					<TapBar
						taps={TAPS}
						currentTapValue={currentTapValue}
						handleChangeCurrentTapValue={handleChangeCurrentTapValue}
					/>
					{currentTapValue === "all" ? (
						<InfoBoard />
					) : (
						<>
							<SelectSort
								options={SORT_OPTIONS}
								currentValue={currentSortValue}
								handleCurrentValue={handleCurrentSortValue}
							/>
							<ReviewBoard />
						</>
					)}
				</div>
			</section>
		</>
	);
}
