import { InfoBoard, MedicineCard, ReviewBoard } from "./UI";

import SelectSort from "@/components/SelectSort";
import TapBar from "@/components/TapBar";
import styles from "./index.module.scss";
import { useState } from "react";

const TABS = [
	{ name: "정보", value: "all" },
	{ name: "후기", value: "review" },
];

export default function DetailIdPage() {
	const [currentTapValue, setCurrentTapValue] = useState("all");

	const handleChangeCurrentTapValue = (tapValue: string) => {
		setCurrentTapValue(tapValue);
	};

	return (
		<>
			<section className={styles.container}>
				<MedicineCard />
				<div className={styles.board}>
					<TapBar
						taps={TABS}
						currentTapValue={currentTapValue}
						handleChangeCurrentTapValue={handleChangeCurrentTapValue}
					/>
					{currentTapValue === "all" ? (
						<InfoBoard />
					) : (
						<>
							<SelectSort />
							<ReviewBoard />
						</>
					)}
				</div>
			</section>
		</>
	);
}
