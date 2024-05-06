import { KeywordResultItemType } from "@/pages/main";
import styles from "../styles/SearchResultList.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../hooks/useSelect";
import { useState } from "react";

export default function SearchResultList({
	keywordSearchResult,
}: {
	keywordSearchResult?: KeywordResultItemType[];
}) {
	const navigate = useNavigate();

	const { currentKeyword, handleCurrentKeyword } = useSelect();
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

	return (
		<div className={styles.container}>
			{keywordSearchResult?.map((keyword) => (
				<div
					key={keyword.id}
					className={`${styles.option} ${currentActiveKeyword.id === keyword.id && styles.active}`}
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
			))}
		</div>
	);
}
