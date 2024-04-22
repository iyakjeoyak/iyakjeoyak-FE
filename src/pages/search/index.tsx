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

export default function SearchPage() {
	const navigate = useNavigate();

	const handleTapClick = (tapValue: string) => {
		navigate(`/search?tap=${tapValue}`);
	};

	return (
		<section>
			<SearchBar>
				<SearchBar.KeywordInput />
				<SearchBar.SearchResultList />
				<SearchBar.SelectedKeywordTagsList />
			</SearchBar>
			<TapBar taps={TAPS} onClick={handleTapClick} />
			<MedicineCardList />
		</section>
	);
}
