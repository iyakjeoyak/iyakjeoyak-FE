import { BestReviewBoard, CuratingBoard, MyMedicineBoard } from "./UI";

import PickedMedicineBoard from "./UI/PickedMedicineBoard";
import SearchBar from "@/components/SearchBar";
import getAutoCompleteResult from "@/api/search/getAutoCompleteResult";
import qs from "qs";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface KeywordResultItemType {
	id: number;
	name: string;
}

export default function Main() {
	const navigate = useNavigate();
	const [keywordSearchResult, setKeywordSearchResult] = useState<
		KeywordResultItemType[]
	>([]);

	const handleKeywordCompletedClick = (keyword: string) => {
		const currentQueryString = location.search;
		const currentQueryParams = qs.parse(currentQueryString, {
			ignoreQueryPrefix: true,
		});

		const updatedQueryParams = {
			...currentQueryParams,
			keyword,
		};

		const newQueryString = qs.stringify(updatedQueryParams, {
			addQueryPrefix: true,
		});

		navigate(`/search${newQueryString}`);
	};

	const handleGetAutoCompleteResults = async (keyword: string) => {
		if (keyword.length < 2) {
			return;
		}

		const response = await getAutoCompleteResult({ keyword });
		setKeywordSearchResult(response);
	};

	return (
		<section className={styles.container} style={{ paddingBottom: "220px" }}>
			<SearchBar>
				<SearchBar.KeywordInput
					placeholder="검색어를 입력해주세요"
					onClick={handleKeywordCompletedClick}
					onChange={handleGetAutoCompleteResults}
				/>
				<SearchBar.SearchResultList keywordSearchResult={keywordSearchResult} />
			</SearchBar>
			<MyMedicineBoard />
			<BestReviewBoard />
			<CuratingBoard />
			<PickedMedicineBoard />
		</section>
	);
}
