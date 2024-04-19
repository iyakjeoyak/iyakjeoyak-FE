import { SelectContext } from "../hooks/useSelect";
import { useState } from "react";

interface SelectProviderProps {
	children: React.ReactNode;
}

// TODO
// main => 검색 클릭시 서치 달고 검색페이지 이동
// search => 검색 클릭시 api 요청
// modal => 약 검색 시 약 반환
// selectedKeword는 외부에서 가져와야할거같기도함(Select 외 공유 필요)

export default function SelectMain({ children }: SelectProviderProps) {
	const [currentKeyword, setCurrentKeyword] = useState("");
	const [currentOption, setCurrentOption] = useState("");
	const [selectedKeyword, setSelectedKeyword] = useState("");
	const [keywordSearchResultList, setKeywordSearchResultList] = useState<
		string[]
	>(["감", "감자", "감자깡"]);

	const handleCurrentKeyword = (keyword: string) => {
		setCurrentKeyword(keyword);
	};

	const handleSelectedKeyword = (keyword: string) => {
		setSelectedKeyword(keyword);
	};

	const handleCurrentOption = () => {
		setCurrentOption("");
	};

	const handleCurrentKeywordSearchResultList = () => {
		setKeywordSearchResultList([]);
	};

	return (
		<SelectContext.Provider
			value={{
				currentKeyword,
				selectedKeyword,
				currentOption,
				keywordSearchResultList,
				handleCurrentKeyword,
				handleSelectedKeyword,
				handleCurrentOption,
				handleCurrentKeywordSearchResultList,
			}}
		>
			<div>{children}</div>
		</SelectContext.Provider>
	);
}
