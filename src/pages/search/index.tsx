import { MedicineCardList } from "@/pages/search/UI";
import SearchBar from "@/components/SearchBar";
import TagsModal from "./UI/TagsModal";
import getAutoCompleteResult from "@/api/common/getAutoCompleteResult";
import { queryClient } from "@/main";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MedicineSearch() {
	const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
	const [keywordSearchResult, setKeywordSearchResult] = useState<string[]>([]);

	const navigate = useNavigate();

	const handleKeywordCompletedClick = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
		setKeywordSearchResult([]);
	};

	const handleGetAutoCompleteResults = async (keyword: string) => {
		if (keyword.length <= 2) {
			setKeywordSearchResult([]);
			return;
		}
		const response = await getAutoCompleteResult({ keyword });
		setKeywordSearchResult(response);
	};

	const toggleIsTagsModalOpen = () => {
		setIsTagsModalOpen((prev) => !prev);
		// 모달이 닫힐때만 데이터를 비워줌
		if (isTagsModalOpen)
			queryClient.resetQueries({ queryKey: ["medicine", "medicines"] });
	};

	return (
		<>
			{isTagsModalOpen && (
				<TagsModal toggleIsTagsModalOpen={toggleIsTagsModalOpen} />
			)}
			<section>
				<SearchBar>
					<SearchBar.KeywordInput
						placeholder="검색어를 입력해주세요"
						onClick={handleKeywordCompletedClick}
						onChange={handleGetAutoCompleteResults}
					/>
					<SearchBar.SearchResultList
						keywordSearchResult={keywordSearchResult}
					/>
					<SearchBar.SelectedKeywordTagsList />
				</SearchBar>
				<MedicineCardList toggleIsTagsModalOpen={toggleIsTagsModalOpen} />
			</section>
		</>
	);
}
