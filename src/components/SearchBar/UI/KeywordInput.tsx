import { IoSearch } from "react-icons/io5";
import styles from "../styles/KeywordInput.module.scss";
import { useSelect } from "../hooks/useSelect";

interface KeywordInputProps {
	isSearchMedicineByNameOnly?: boolean;
	placeholder?: string;
	onClick: (keyword: string) => void;
}

export default function KeywordInput({
	placeholder = "검색어를 입력해주세요",
	isSearchMedicineByNameOnly = false,
	onClick,
}: KeywordInputProps) {
	const { currentKeyword, handleCurrentKeyword, handleSelectedKeyword } =
		useSelect();

	const handleChangeSelectedKeywordByDebounce = (keyword: string) => {
		console.log(
			isSearchMedicineByNameOnly
				? "멈췄을때 이름만 검색하기"
				: "멈췄을때 전체 검색하기",
		);
		console.log(keyword, "결과 업데이트 함수에 api 결과 집어넣기");
	};

	return (
		<div className={styles.container}>
			<input
				value={currentKeyword}
				onChange={(e) => {
					handleCurrentKeyword(e.target.value);
					handleChangeSelectedKeywordByDebounce(e.target.value);
				}}
				placeholder={placeholder}
			/>
			<button
				onClick={() => {
					handleCurrentKeyword("");
					handleSelectedKeyword(currentKeyword);
					onClick(currentKeyword);
				}}
			>
				<IoSearch />
			</button>
		</div>
	);
}
