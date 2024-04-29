import { useSelectSort } from "../hooks/useSelectSort";

interface SortOptionProps {
	value: string;
	label: string;
}

export default function SortOption({ label, value }: SortOptionProps) {
	const { handleCurrentSortValue, toggleIsOpenOptionList } = useSelectSort();
	return (
		<div
			onClick={() => {
				handleCurrentSortValue(value);
				toggleIsOpenOptionList();
			}}
		>
			{label}
		</div>
	);
}
