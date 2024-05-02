import styles from "../styles/SearchResultList.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../hooks/useSelect";
import { useState } from "react";

export default function SearchResultList({keywordSearchResult}: {keywordSearchResult?: string[]}) {
	const navigate = useNavigate();

	const { currentKeyword, handleCurrentKeyword } =
		useSelect();
	const [currentActiveKeyword, setCurrentActiveKeyword] = useState("");

	const handleSearchKeywordSelected = (selectedKeyword: string) => {
		handleCurrentKeyword("");
		navigate(`/search?keyword=${selectedKeyword}`);
	};

	const handleMouseEnter = (keyword: string) => {
		setCurrentActiveKeyword(keyword);
	};

  console.log(keywordSearchResult)
	return (
		<div className={styles.container}>
			{keywordSearchResult?.map((keyword) => (
				<div
					key={keyword}
					className={`${styles.option} ${currentActiveKeyword === keyword && styles.active}`}
					onClick={() => {
						handleSearchKeywordSelected(currentActiveKeyword);
					}}
					onMouseOut={() => {
						handleMouseEnter("");
					}}
					onMouseEnter={() => {
						handleMouseEnter(keyword);
					}}
				>
					{keyword.split(currentKeyword)[0]}
          <span>{currentKeyword}</span>
          {keyword.split(currentKeyword)[1]}
				</div>
			))}
		</div>
	);
}
