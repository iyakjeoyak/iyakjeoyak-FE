import { IoSearch } from "react-icons/io5";
import styles from "../styles/KeywordInput.module.scss";
import { useSelect } from "../hooks/useSelect";

interface KeywordInputProps {
	placeholder: string;
	onChange: (keyword: string) => Promise<void>;
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
	} = useSelect();

	return (
		<div className={styles.container}>
			<input
				value={currentKeyword}
				onChange={(e) => {
          handleCurrentKeyword(e.target.value);
					onChange(e.target.value);
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
