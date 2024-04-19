import { BestReviewBoard, MyMedicineBoard, PickedMedicine } from "./UI";

import SearchBar from "@/components/SearchBar";
import styles from "./index.module.scss";

export default function MainPage() {
	return (
		<section className={styles.container}>
			<SearchBar>
				<SearchBar.SearchField />
				<SearchBar.Options />
			</SearchBar>
			<MyMedicineBoard />
			<BestReviewBoard />
			<PickedMedicine />
		</section>
	);
}
