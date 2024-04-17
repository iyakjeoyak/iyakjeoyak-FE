import { MedicineCardList } from "@/pages/search/UI";
import SearchBar from "@/components/SearchBar";
import TapBar from "@/components/TapBar";
import { useState } from "react";

const TABS = [
	{ name: "전체", value: "all" },
	{ name: "기능별", value: "feature" },
	{ name: "성능별", value: "ingredient" },
];

export default function SearchPage() {
	const [currentTapValue, setCurrentTapValue] = useState("all");

	const handleChangeCurrentTapValue = (tapValue: string) => {
		setCurrentTapValue(tapValue);
	};

	return (
		<section>
			<SearchBar />
			<TapBar
				taps={TABS}
				currentTapValue={currentTapValue}
				handleChangeCurrentTapValue={handleChangeCurrentTapValue}
			/>
			<MedicineCardList />
		</section>
	);
}
