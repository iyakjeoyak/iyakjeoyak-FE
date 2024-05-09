import { createContext, useContext } from "react";

export interface KeywordResultItemType {
	id: number;
	name: string;
}
interface SelectContextType {
	currentKeyword: KeywordResultItemType;
	handleCurrentKeyword: (keyword: KeywordResultItemType) => void;
}

export const SelectContext = createContext<SelectContextType>({
	currentKeyword: { id: 0, name: "" },
	handleCurrentKeyword: () => {},
});

export const useSelect = () => {
	const context = useContext(SelectContext);

	if (!context) {
		throw new Error("Select의 context를 벗어남");
	}

	return context;
};
