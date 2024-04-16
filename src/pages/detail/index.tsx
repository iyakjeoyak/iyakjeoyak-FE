import { InfoBoard, MedicineCard, ReviewBoard } from "./UI";

import SelectSort from "@/components/SelectSort";
import TabBar from "@/components/TabBar";
import styles from "./index.module.scss";

export default function DetailIdPage() {
	return (
		<>
			<section className={styles.container}>
				<MedicineCard />
				<div className={styles.board}>
					<TabBar />
					<InfoBoard />
					<SelectSort />
					<ReviewBoard />
				</div>
			</section>
		</>
	);
}
