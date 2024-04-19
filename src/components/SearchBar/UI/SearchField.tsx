import { IoSearch } from "react-icons/io5";
import styles from "../styles/SearchField.module.scss";
import { useSelect } from "../hooks/useSelect";

export default function SearchField({ isNameOnly }: { isNameOnly?: boolean }) {
	const { currentKeyword, handleCurrentKeyword, handleSelectedKeyword } =
		useSelect();

	return (
		<div className={styles.container}>
			<input
				value={currentKeyword}
				onChange={(e) => {
					handleCurrentKeyword(e.target.value);
				}}
				placeholder={
					isNameOnly ? "검색어를 입력해주세요." : "영양제명을 입력해주세요."
				}
			/>
			<button
				onClick={() => {
					handleCurrentKeyword("");
					handleSelectedKeyword(currentKeyword);
				}}
			>
				<IoSearch />
			</button>
		</div>
	);
}
