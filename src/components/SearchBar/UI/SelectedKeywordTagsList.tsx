import { useEffect, useState } from "react";

import qs from "qs";
import styles from "../styles/SelectedKeywordTagsList.module.scss";
import { useNavigate } from "react-router-dom";

export default function SelectedKeywordTagsList() {
	const navigate = useNavigate();

	const parsedQuery = qs.parse(window.location.href.split("?")[1], {
		ignoreQueryPrefix: true,
	});

	const handleTagRemove = (tagKey: string) => {
		const updatedQuery = { ...parsedQuery };
		if (tagKey === "keyword") {
			delete updatedQuery[tagKey];
		}
		if (tagKey === "name") {
			delete updatedQuery[tagKey];
			delete updatedQuery["categoryId"];
			delete updatedQuery["hashtagId"];
		}
		const newQueryString = qs.stringify(updatedQuery, { addQueryPrefix: true });
		navigate(newQueryString);
	};

	return (
		<div className={styles.container}>
			{parsedQuery.keyword && (
				<div className={styles.tag}>
					<span>{parsedQuery.keyword as string}</span>
					<span onClick={() => handleTagRemove("keyword")}>X</span>
				</div>
			)}
			{parsedQuery.name && (
				<div className={styles.tag}>
					<span>{parsedQuery.name as string}</span>
					<span onClick={() => handleTagRemove("name")}>X</span>
				</div>
			)}
		</div>
	);
}
