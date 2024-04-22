import styles from "../styles/SearchResultList.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../hooks/useSelect";
import { useState } from "react";

export default function SearchResultList() {
	const navigate = useNavigate();

	const { currentKeyword, keywordSearchResultList, handleCurrentKeyword } =
		useSelect();
	const [currentActiveKeyword, setCurrentActiveKeyword] = useState("");

	// TODO: api 요청해서 List 업데이트 가능하면 삭제예정
	if (!currentKeyword) return null;

	const handleSearchKeywordSelected = (selectedKeyword: string) => {
		handleCurrentKeyword("");
		navigate(`/search?keyword=${selectedKeyword}`);
	};

	const handleMouseEnter = (keyword: string) => {
		setCurrentActiveKeyword(keyword);
	};

	return (
		<div className={styles.container}>
			{keywordSearchResultList.map((keyword) => (
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
					{keyword}
				</div>
			))}
		</div>
	);
}
