import { SelectSortContext } from "../hooks/useSelectSort";
import styles from "../styles/SortSelectRoot.module.scss";
import { useState } from "react";

export interface CurrentSortType {label: string, value: string};
interface SortSelectRootProps {
	children: React.ReactNode;
	currentSort: any;
	handleCurrentSort: (sortOption: any) => void;
}

export default function SortSelectRoot({
	children,
	currentSort,
	handleCurrentSort,
}: SortSelectRootProps) {
	const [isOpenOptionList, setIsOpenOptionList] = useState(false);

	const toggleIsOpenOptionList = () => {
		setIsOpenOptionList((prev) => !prev);
	};

	const value = {
		currentSort,
		isOpenOptionList,
		handleCurrentSort,
		toggleIsOpenOptionList,
	};

	return (
		<SelectSortContext.Provider value={value}>
			<div className={styles.container}>{children}</div>
		</SelectSortContext.Provider>
	);
}
