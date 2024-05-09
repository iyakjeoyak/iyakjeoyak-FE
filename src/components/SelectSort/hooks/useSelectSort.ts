import { createContext, useContext } from "react";

import { CurrentSortType } from "../UI/SortSelectRoot";

interface SelectSortContextType {
	handleCurrentSort: (sortOption: CurrentSortType) => void;
	currentSort: CurrentSortType;
	isOpenOptionList: boolean;
	toggleIsOpenOptionList: () => void;
}

// TODO: ReviewBoard보다 먼저 선언되기 때문에 타입선언 불가능 => 제너릭으로 해야할듯?

export const SelectSortContext = createContext<SelectSortContextType>({
	handleCurrentSort: () => {},
	currentSort: {label: '', value: ''},
	isOpenOptionList: false,
	toggleIsOpenOptionList: () => {},
});

export const useSelectSort = () => {
	const context = useContext(SelectSortContext);

	if (!context) {
		throw new Error("SelectSort 의 context를 벗어남");
	}

	return context;
};
