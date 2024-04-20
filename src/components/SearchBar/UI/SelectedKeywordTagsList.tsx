import styles from "../styles/SelectedKeywordTagsList.module.scss";
import { useSelect } from "../hooks/useSelect";

export default function SelectedKeywordTagsList() {
	const { selectedKeyword, handleSelectedKeyword } = useSelect();

	if (!selectedKeyword) {
		return null;
	}

	return (
		<div className={styles.container}>
			<div className={styles.tag}>
				{selectedKeyword}
				<span
					onClick={() => {
						handleSelectedKeyword("");
					}}
				>
					X
				</span>
			</div>
		</div>
	);
}
