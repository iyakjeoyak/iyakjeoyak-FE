import { BestReviewBoard, MyMedicineBoard, PickedMedicine } from "./UI";

import SearchBar from "@/components/SearchBar";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
	const navigate = useNavigate();

	const handleKeywordCompleted = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
	};

	return (
		<section className={styles.container}>
			<SearchBar>
				<SearchBar.KeywordInput onClick={handleKeywordCompleted} />
				<SearchBar.SearchResultList />
			</SearchBar>
			<MyMedicineBoard />
			<BestReviewBoard />
			<PickedMedicine />
		</section>
	);
}
