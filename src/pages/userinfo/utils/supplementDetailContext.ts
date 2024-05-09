import { createContext, useContext } from "react";
import { DetailSupplementArgs } from "@/api/useInfo/getSupplementDetail";

interface supplementDetailContextType {
	detailData: DetailSupplementArgs | null;
	setDetailData: React.Dispatch<
		React.SetStateAction<DetailSupplementArgs | null>
	>;
}

export const SupplementContext =
	createContext<supplementDetailContextType | null>(null);

export const useSupplementContext = () => {
	const context = useContext(SupplementContext);
	if (!context) {
		throw new Error("영양제 상세 정보 컨텍스트 에러");
	}

	return context;
};
