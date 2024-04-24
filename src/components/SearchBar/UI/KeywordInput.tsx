import { IoSearch } from "react-icons/io5";
import styles from "../styles/KeywordInput.module.scss";
import { useSelect } from "../hooks/useSelect";

interface KeywordInputProps {
	placeholder: string;
	onChange: (keyword: string) => string[];
	onClick: (keyword: string) => void;
}

export default function KeywordInput({
	placeholder,
	onChange,
	onClick,
}: KeywordInputProps) {
	const {
		currentKeyword,
		handleCurrentKeyword,
		handleCurrentKeywordSearchResultList,
	} = useSelect();

	return (
		<div className={styles.container}>
			<input
				value={currentKeyword}
				onChange={(e) => {
					handleCurrentKeyword(e.target.value);
					const results = onChange(e.target.value);
					handleCurrentKeywordSearchResultList(results);
				}}
				placeholder={placeholder}
			/>
			<button
				onClick={() => {
					onClick(currentKeyword);
				}}
			>
				<IoSearch />
			</button>
		</div>
	);
}
