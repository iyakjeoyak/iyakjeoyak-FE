import { createContext, useContext } from "react";

interface SelectContextType {
	currentKeyword: string;
	currentOption: string;
	selectedKeyword: string;
	handleCurrentOption: () => void;
	handleCurrentKeyword: (keyword: string) => void;
	handleSelectedKeyword: (keyword: string) => void;
	keywordSearchResultList: string[];
	handleCurrentKeywordSearchResultList: () => void;
}

export const SelectContext = createContext<SelectContextType>({
	currentKeyword: "",
	selectedKeyword: "",
	currentOption: "",
	handleCurrentOption: () => {},
	handleCurrentKeyword: () => {},
	handleSelectedKeyword: () => {},
	keywordSearchResultList: [""],
	handleCurrentKeywordSearchResultList: () => {},
});

export const useSelect = () => {
	const context = useContext(SelectContext);

	if (!context) {
		throw new Error("<Select/>의 context를 벗어남");
	}

	return context;
};
