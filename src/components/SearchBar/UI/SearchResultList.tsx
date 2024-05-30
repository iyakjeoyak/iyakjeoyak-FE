import { useEffect, useState } from "react";

import { KeywordResultItemType } from "@/pages/main";
import qs from "qs";
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

	// TODO: 밖으로 빼기,,가 가능한가
	const handleSearchKeywordSelected = (
		selectedKeyword: KeywordResultItemType,
	) => {
		const currentQueryString = location.search;
		const currentQueryParams = qs.parse(currentQueryString, {
			ignoreQueryPrefix: true,
		});

		const updatedQueryParams = {
			...currentQueryParams,
			keyword: selectedKeyword.name,
		};

		const newQueryString = qs.stringify(updatedQueryParams, {
			addQueryPrefix: true,
		});

		handleCurrentKeyword({ id: 0, name: "" });
		navigate(
			`${location.pathname === "/home" ? "/search" : location.pathname}${newQueryString}`,
		);
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

	useEffect(() => {
		if (!window.CSS || !CSS.highlights) {
			console.warn("CSS Custom Highlight API 사용불가능");
			return;
		}

		const highlight = new Highlight();

		document.querySelectorAll(".highlight").forEach((el) => {
			const textNodes = Array.from(el.childNodes).filter(
				(node) => node.nodeType === Node.TEXT_NODE,
			);
			textNodes.forEach((node) => {
				const text = node.textContent;
				if (!text) return;

				const range = new Range();

				const startIndex = text.indexOf(currentKeyword.name);
				if (startIndex === -1) return;
				const endIndex = startIndex + currentKeyword.name.length;

				range.setStart(node, startIndex);
				range.setEnd(node, endIndex);

				highlight.add(range);

				CSS.highlights.set("highlight", highlight);
			});
		});
	}, [currentKeyword.name, keywordSearchResult]);

	return (
		<div className={styles.container}>
			{keywordSearchResult &&
				keywordSearchResult.length !== 0 &&
				keywordSearchResult.map((keyword) => (
					<div
						tabIndex={0}
						key={keyword.id}
						className={`highlight ${styles.option} ${(keywordSearchResult[activeKeywordIndex].id === keyword.id || currentActiveKeyword.id === keyword.id) && styles.active}`}
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
						{keyword.name}
					</div>
				))}
		</div>
	);
}
