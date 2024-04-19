import styles from "../styles/Options.module.scss";
import { useSelect } from "../hooks/useSelect";

export default function Options() {
	const { currentKeyword, keywordSearchResultList } = useSelect();

	if (!currentKeyword) {
		return null;
	}

	return (
		<div className={styles.container}>
			<div className={styles.current}>{currentKeyword}</div>
			{keywordSearchResultList.map((keyword) => (
				<div key={keyword} className={styles.option}>
					{keyword}
				</div>
			))}
		</div>
	);
}
