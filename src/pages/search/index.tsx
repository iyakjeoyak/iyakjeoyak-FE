import { MedicineCardList } from "@/pages/search/UI";
import SearchBar from "@/components/SearchBar";
import TagsModal from "./UI/TagsModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MedicineSearch() {
  const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
	const navigate = useNavigate();

	const handleKeywordCompletedClick = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
	};

	const handleGetAutoCompleteResults = (keyword: string) => {
		console.log(keyword, "결과 요청");
		const result = ["리", "리액", "리액트"];
		return result;
	};
  
  const toggleIsTagsModalOpen = () =>{
    setIsTagsModalOpen((prev)=>!prev)
  }
	return (
    <>
    {isTagsModalOpen && <TagsModal toggleIsTagsModalOpen={toggleIsTagsModalOpen}/>}
		<section>
			<SearchBar>
				<SearchBar.KeywordInput
					placeholder="검색어를 입력해주세요"
					onClick={handleKeywordCompletedClick}
					onChange={handleGetAutoCompleteResults}
          />
				<SearchBar.SearchResultList />
				<SearchBar.SelectedKeywordTagsList />
			</SearchBar>
			<MedicineCardList toggleIsTagsModalOpen={toggleIsTagsModalOpen}/>
		</section>
  </>
	);
}
