import { MedicineCardList } from "@/pages/search/UI";
import SearchBar from "@/components/SearchBar";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import { useNavigate } from "react-router-dom";

const TAPS = [
	{
		label: "전체",
		value: TAPS_QUERIES.ALL,
	},
	{
		label: "기능별",
		value: TAPS_QUERIES.FEATURE,
	},
	{
		label: "성능별",
		value: TAPS_QUERIES.FUNCTION,
	},
];

export default function MedicineSearch() {
	const navigate = useNavigate();

	const handleTapClick = (tapValue: string) => {
		navigate(`/search?tap=${tapValue}`);
	};

	const handleKeywordCompletedClick = (keyword: string) => {
		navigate(`/search?keyword=${keyword}`);
	};

	const handleGetAutoCompleteResults = (keyword: string) => {
		console.log(keyword, "결과 요청");
		const result = ["리", "리액", "리액트"];
		return result;
	};
  
	return (
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
			<TapBar taps={TAPS} onClick={handleTapClick} />
			<MedicineCardList />
		</section>
	);
}
