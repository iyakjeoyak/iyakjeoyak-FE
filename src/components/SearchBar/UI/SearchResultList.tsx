import { useEffect, useState } from "react";

import { KeywordResultItemType } from "@/pages/main";
import styles from "../styles/SearchResultList.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../hooks/useSelect";

export default function SearchResultList({
	keywordSearchResult,
}: {
	keywordSearchResult?: KeywordResultItemType[];
}) {
	const navigate = useNavigate();

	const [activeKeywordIndex, setActiveKeywordIndex] = useState<number>(-1);
	const { currentKeyword, handleCurrentKeyword } = useSelect();

	if (!currentKeyword) return;

	const [currentActiveKeyword, setCurrentActiveKeyword] =
		useState<KeywordResultItemType>({ id: 0, name: "" });

	const handleSearchKeywordSelected = (
		selectedKeyword: KeywordResultItemType,
	) => {
		handleCurrentKeyword({ id: 0, name: "" });
		navigate(`/search?keyword=${selectedKeyword.name}`);
	};

	const handleMouseEnter = (keyword: KeywordResultItemType) => {
		setCurrentActiveKeyword(keyword);
	};

	function handleKeyDown(this: Window, ev: KeyboardEvent) {
		if (!keywordSearchResult) return;
		if (ev.key === "ArrowDown") {
			if (keywordSearchResult.length === activeKeywordIndex + 1) {
				return;
			}
			setActiveKeywordIndex((prevIndex) => prevIndex + 1);
			return;
		}
		if (ev.key === "ArrowUp") {
			if (activeKeywordIndex === 0) {
				return;
			}
			setActiveKeywordIndex((prevIndex) => prevIndex - 1);
			return;
		}
		if (activeKeywordIndex === -1) {
			setActiveKeywordIndex(0);
		}
		if (ev.key === "Enter") {
			handleSearchKeywordSelected(keywordSearchResult[activeKeywordIndex]);
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeKeywordIndex, keywordSearchResult]);

	return (
		<div className={styles.container}>
			{keywordSearchResult &&
				keywordSearchResult?.length !== 0 &&
				keywordSearchResult?.map((keyword) => {
					return (
						<div
							tabIndex={0}
							key={keyword.id}
							className={`${styles.option} ${(keywordSearchResult[activeKeywordIndex].id === keyword.id || currentActiveKeyword.id === keyword.id) && styles.active}`}
							onClick={() => {
								handleSearchKeywordSelected(currentActiveKeyword);
							}}
							onMouseOut={() => {
								handleMouseEnter({ id: 0, name: "" });
							}}
							onMouseEnter={() => {
								handleMouseEnter(keyword);
							}}
						>
							{keyword.name.split(currentKeyword.name)[0]}
							<span>{currentKeyword.name}</span>
							{keyword.name.split(currentKeyword.name)[1]}
						</div>
					);
				})}
		</div>
	);
}
