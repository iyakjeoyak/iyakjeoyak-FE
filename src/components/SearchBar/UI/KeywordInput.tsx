import { IoSearch } from "react-icons/io5";
import styles from "../styles/KeywordInput.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../hooks/useSelect";

interface KeywordInputProps {
	isSearchMedicineByNameOnly?: boolean;
	// handleCurrentSelectedMedicine?: boolean; // SearchBar 외부에서 SearchBar의 형제 컴포넌트와 공유할 currenSelectedMedicine
}

export default function KeywordInput({
	isSearchMedicineByNameOnly = false,
}: KeywordInputProps) {
	const navigate = useNavigate();

	const { currentKeyword, handleCurrentKeyword } = useSelect();

	const handleChangeSelectedKeyword = (keyword: string) => {
		console.log(
			isSearchMedicineByNameOnly
				? "멈췄을때 이름만 검색하기"
				: "멈췄을때 전체 검색하기",
		);
		console.log(keyword, "결과 업데이트 함수에 api 결과 집어넣기");
	};

	const handleSearchIconClick = () => {
		if (isSearchMedicineByNameOnly) {
			console.log(
				"이름만 검색해서 외부에서 받은 currentSelectedMedicine 업데이트하기",
			);
			return;
		}

		handleCurrentKeyword("");
		navigate(`/search?keyword=${currentKeyword}`);
	};

	return (
		<div className={styles.container}>
			<input
				value={currentKeyword}
				onChange={(e) => {
					handleCurrentKeyword(e.target.value);
					handleChangeSelectedKeyword(e.target.value);
				}}
				placeholder={
					isSearchMedicineByNameOnly
						? "영양제명을 입력해주세요"
						: "검색어를 입력해주세요"
				}
			/>
			<button onClick={handleSearchIconClick}>
				<IoSearch />
			</button>
		</div>
	);
}
