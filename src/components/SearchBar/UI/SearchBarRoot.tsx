import { SelectContext } from "../hooks/useSelect";
import styles from "../styles/SearchBarRoot.module.scss";
import { useState } from "react";

interface SearchBarRootProps {
	children: React.ReactNode;
}

export default function SearchBarRoot({ children }: SearchBarRootProps) {
	const [currentKeyword, setCurrentKeyword] = useState("");
	const [currentOption, setCurrentOption] = useState("");
	const [selectedKeyword, setSelectedKeyword] = useState("");
	const [keywordSearchResultList, setKeywordSearchResultList] = useState<
		string[]
	>(["감", "감자", "감자깡"]);

	const handleCurrentKeyword = (keyword: string) => {
		setCurrentKeyword(keyword);
	};

	const handleSelectedKeyword = (keyword: string) => {
		setSelectedKeyword(keyword);
	};

	const handleCurrentOption = () => {
		setCurrentOption("");
	};

	const handleCurrentKeywordSearchResultList = () => {
		setKeywordSearchResultList([]);
	};

	const value = {
		currentKeyword,
		selectedKeyword,
		currentOption,
		keywordSearchResultList,
		handleCurrentKeyword,
		handleSelectedKeyword,
		handleCurrentOption,
		handleCurrentKeywordSearchResultList,
	};

	return (
		<SelectContext.Provider value={value}>
			<div className={styles.container}>{children}</div>
		</SelectContext.Provider>
	);
}
