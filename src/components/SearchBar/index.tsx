import { IoSearch } from "react-icons/io5";
import styles from "./index.module.scss";

interface SearchBarProps {
	isNameOnly?: boolean;
}

export default function SearchBar({ isNameOnly = false }: SearchBarProps) {
	return (
		<div className={styles.container}>
			<input
				placeholder={
					isNameOnly ? "검색어를 입력해주세요." : "영양제명을 입력해주세요."
				}
			/>
			<IoSearch />
		</div>
	);
}
