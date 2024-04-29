import { SelectSortContext } from "../hooks/useSelectSort";
import styles from "../styles/SortSelectRoot.module.scss";
import { useState } from "react";

interface SortSelectRootProps {
	children: React.ReactNode;
	currentSortValue: string;
	handleCurrentSortValue: (value: string) => void;
}

export default function SortSelectRoot({
	children,
	currentSortValue,
	handleCurrentSortValue,
}: SortSelectRootProps) {
	const [isOpenOptionList, setIsOpenOptionList] = useState(false);

	const toggleIsOpenOptionList = () => {
		setIsOpenOptionList((prev) => !prev);
	};

	const value = {
		currentSortValue,
		isOpenOptionList,
		handleCurrentSortValue,
		toggleIsOpenOptionList,
	};

	return (
		<SelectSortContext.Provider value={value}>
			<div className={styles.container}>{children}</div>
		</SelectSortContext.Provider>
	);
}
