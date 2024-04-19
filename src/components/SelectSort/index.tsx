import styles from "./index.module.scss";

export interface SortType {
	name: string;
	value: string;
}

interface SelectSortProps {
	options: SortType[];
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
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}
