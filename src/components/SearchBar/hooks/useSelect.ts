import { createContext, useContext } from "react";

interface SelectContextType {
	currentKeyword: string;
	keywordSearchResultList: string[];
	handleCurrentKeyword: (keyword: string) => void;
	handleCurrentKeywordSearchResultList: () => void;
}

export const SelectContext = createContext<SelectContextType>({
	keywordSearchResultList: [""],
	currentKeyword: "",
	handleCurrentKeyword: () => {},
	handleCurrentKeywordSearchResultList: () => {},
});

export const useSelect = () => {
	const context = useContext(SelectContext);

	if (!context) {
		throw new Error("<Select/>의 context를 벗어남");
	}

	return context;
};
