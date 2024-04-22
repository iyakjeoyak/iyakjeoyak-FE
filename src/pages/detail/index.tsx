import { InfoBoard, MedicineCard, ReviewBoard } from "./UI";

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

	const handleChangeCurrentTapValue = (tapValue: string) => {
		setCurrentTapValue(tapValue);
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
					{currentTapValue === "all" ? <InfoBoard /> : <ReviewBoard />}
				</div>
			</section>
		</>
	);
}
