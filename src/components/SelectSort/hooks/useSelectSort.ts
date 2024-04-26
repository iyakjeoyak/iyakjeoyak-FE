import { createContext, useContext } from "react";

interface SelectSortContextType {
	handleCurrentSortValue: (value: string) => void;
	currentSortValue: string;
	isOpenOptionList: boolean;
	toggleIsOpenOptionList: () => void;
}

export const SelectSortContext = createContext<SelectSortContextType>({
	handleCurrentSortValue: () => {},
	currentSortValue: "",
	isOpenOptionList: false,
	toggleIsOpenOptionList: () => {},
});

export const useSelectSort = () => {
	const context = useContext(SelectSortContext);

	if (!context) {
		throw new Error("<SelectSort />의 context를 벗어남");
	}

	return context;
};
