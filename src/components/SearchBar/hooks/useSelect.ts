import { createContext, useContext } from "react";

interface SelectContextType {
	currentKeyword: string;
	handleCurrentKeyword: (keyword: string) => void;
}

export const SelectContext = createContext<SelectContextType>({
	currentKeyword: "",
	handleCurrentKeyword: () => {},
});

export const useSelect = () => {
	const context = useContext(SelectContext);

	if (!context) {
		throw new Error("<Select/>의 context를 벗어남");
	}

	return context;
};
