import { useSelectSort } from "../hooks/useSelectSort";

interface SortOptionProps {
	value: string;
	label: string;
}

export default function SortOption({ label, value }: SortOptionProps) {
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
