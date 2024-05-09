import { useEffect, useState } from "react";

import { SelectSortContext } from "../hooks/useSelectSort";
import styles from "../styles/SortSelectRoot.module.scss";
import { useLocation } from "react-router-dom";

export interface CurrentSortType {
	label: string;
	value: string;
}
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

	const location = useLocation();

	const toggleIsOpenOptionList = () => {
		setIsOpenOptionList((prev) => !prev);
	};

	const value = {
		currentSort,
		isOpenOptionList,
		handleCurrentSort,
		toggleIsOpenOptionList,
	};

	useEffect(() => {
		setIsOpenOptionList(false);
	}, [location]);

	return (
		<SelectSortContext.Provider value={value}>
			<div className={styles.container}>{children}</div>
		</SelectSortContext.Provider>
	);
}
