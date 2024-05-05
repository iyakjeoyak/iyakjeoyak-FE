import { CurrentSortType } from "./SortSelectRoot";
import { useSelectSort } from "../hooks/useSelectSort";

export default function SortOption({ label, value }: CurrentSortType ) {
	const { handleCurrentSort, toggleIsOpenOptionList } = useSelectSort();
  
	return (
		<div
			onClick={() => {
				handleCurrentSort({label, value});
				toggleIsOpenOptionList();
			}}
		>
			{label}
		</div>
	);
}
