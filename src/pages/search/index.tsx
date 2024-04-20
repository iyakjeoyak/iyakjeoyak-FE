import { MedicineCardList } from "@/pages/search/UI";
import SearchBar from "@/components/SearchBar";
import { TAPS_QUERIES } from "@/constants/TAPS";
import TapBar from "@/components/TapBar";
import { useState } from "react";

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
	const [currentTapValue, setCurrentTapValue] = useState("all");

	const handleChangeCurrentTapValue = (tapValue: string) => {
		setCurrentTapValue(tapValue);
	};

	return (
		<section>
			<SearchBar>
				<SearchBar.KeywordInput />
				<SearchBar.SearchResultList />
				<SearchBar.SelectedKeywordTagsList />
			</SearchBar>
			<TapBar
				taps={TAPS}
				currentTapValue={currentTapValue}
				handleChangeCurrentTapValue={handleChangeCurrentTapValue}
			/>
			<MedicineCardList />
		</section>
	);
}
