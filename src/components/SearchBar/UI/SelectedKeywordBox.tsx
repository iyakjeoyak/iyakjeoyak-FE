import styles from "../styles/SelectedKeywordBox.module.scss";
import { useSelect } from "../hooks/useSelect";

export default function SelectedKeywordBox() {
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
