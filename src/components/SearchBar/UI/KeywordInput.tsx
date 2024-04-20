import { IoSearch } from "react-icons/io5";
import styles from "../styles/KeywordInput.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelect } from "../hooks/useSelect";

interface KeywordInputProps {
	isSearchMedicineByNameOnly?: boolean;
	placeholder?: string;
	onClick?: (keyword: string) => void;
}

export default function KeywordInput({
	placeholder = "검색어를 입력해주세요",
	isSearchMedicineByNameOnly = false,
	onClick,
}: KeywordInputProps) {
	const navigate = useNavigate();

	const { currentKeyword, handleCurrentKeyword, handleSelectedKeyword } =
		useSelect();

	const handleChangeSelectedKeyword = (keyword: string) => {
		console.log(
			isSearchMedicineByNameOnly
				? "멈췄을때 이름만 검색하기"
				: "멈췄을때 전체 검색하기",
		);
		console.log(keyword, "결과 업데이트 함수에 api 결과 집어넣기");
	};

	const handleSearchIconClick = () => {
		// 이름만 검색하는 경우 onClick props로 본인의 selectkeyword를 업데이트 해줘야함
		// placeholder="약 이름을 검색해주세요", isSearchMedicineByNameOnly = false, onClick 가 한 상황을 바라보는데 이걸 굳이 분리해줘야하나 하는 생각
		// 근데 또 onClick의 유무로 placeholder랑 isSearchMedicineByNameOnly 상황을 설정해줘도 되나하는 생각
		if (onClick) {
			onClick(currentKeyword);
			return;
		}

		handleCurrentKeyword("");
		handleSelectedKeyword(currentKeyword);
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
				placeholder={placeholder}
			/>
			<button onClick={handleSearchIconClick}>
				<IoSearch />
			</button>
		</div>
	);
}
