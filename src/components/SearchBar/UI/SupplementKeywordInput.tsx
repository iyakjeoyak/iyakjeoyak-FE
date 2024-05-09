import { IoSearch } from "react-icons/io5";
import styles from "../styles/KeywordInput.module.scss";
import { useSelect } from "../hooks/useSelect";

interface KeywordInputProps {
	placeholder: string;
	onChange: (keyword: string) => Promise<void> | string[];
	onSelect: (keyword: string) => void;
}

export default function SupplementKeywordInput({
	placeholder,
	onChange,
	onSelect,
}: KeywordInputProps) {
	const { currentKeyword, handleCurrentKeyword } = useSelect();

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter" && currentKeyword.name.length > 2) {
			onSelect(currentKeyword.name);
			handleCurrentKeyword({ id: 0, name: "" });
		}
	};

	return (
		<div className={styles.container}>
			<input
				value={currentKeyword.name}
				onChange={(e) => {
					handleCurrentKeyword({ id: 0, name: e.target.value });
					onChange(e.target.value);
				}}
				placeholder={placeholder}
				onKeyDown={handleKeyPress}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					onSelect(currentKeyword.name);
					handleCurrentKeyword({ id: 0, name: "" });
				}}
			>
				<IoSearch />
			</button>
		</div>
	);
}
