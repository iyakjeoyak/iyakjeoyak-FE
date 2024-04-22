import { BestReviewBoard, MyMedicineBoard, PickedMedicine } from "./UI";

import SearchBar from "@/components/SearchBar";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export default function Main() {
	const navigate = useNavigate();

	const handleKeywordCompletedClick = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
	};

	const handleGetAutoCompleteResults = (keyword: string) => {
		console.log(keyword, "결과 요청");
		const result = ["리", "리액", "리액트"];
		return result;
	};

	return (
		<section className={styles.container}>
			<SearchBar>
				<SearchBar.KeywordInput
					placeholder="검색어를 입력해주세요"
					onClick={handleKeywordCompletedClick}
					onChange={handleGetAutoCompleteResults}
				/>
				<SearchBar.SearchResultList />
			</SearchBar>
			<MyMedicineBoard />
			<BestReviewBoard />
			<PickedMedicine />
		</section>
	);
}
