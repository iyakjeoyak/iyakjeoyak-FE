import { SelectContext } from "../hooks/useSelect";
import styles from "../styles/SearchBarRoot.module.scss";
import { useState } from "react";

interface SearchBarRootProps {
	children: React.ReactNode;
}

export default function SearchBarRoot({ children }: SearchBarRootProps) {
	const [currentKeyword, setCurrentKeyword] = useState("");


	const handleCurrentKeyword = (keyword: string) => {
		setCurrentKeyword(keyword);
	};

	const value = {
		currentKeyword,
		handleCurrentKeyword,
	};

	return (
		<SelectContext.Provider value={value}>
			<div className={styles.container}>{children}</div>
		</SelectContext.Provider>
	);
}
