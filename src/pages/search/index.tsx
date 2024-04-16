import { MedicineCardList } from "@/pages/search/UI";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";

export default function SearchPage() {
	return (
		<section>
			<SearchBar />
			<TabBar />
			<MedicineCardList />
		</section>
	);
}
