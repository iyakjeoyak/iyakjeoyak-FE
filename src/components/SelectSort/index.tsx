import { SortOptionType } from "@/constants/SORT_OPTIONS";
import styles from "./index.module.scss";

interface SelectSortProps {
	options: SortOptionType[];
	currentValue: string;
	handleCurrentValue: (value: string) => void;
}

export default function SelectSort({
	options,
	currentValue,
	handleCurrentValue,
}: SelectSortProps) {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		handleCurrentValue(e.target.value);
	};

	return (
		<div className={styles.container}>
			<select value={currentValue} onChange={handleChange}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
