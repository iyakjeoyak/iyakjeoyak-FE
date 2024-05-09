import React, { createContext, useContext } from "react";
import { PharmacyDetailType } from "@pages/map/mapTypes";

interface MapContextType {
	isLikeChanged: boolean;
	setIsLikeChanged: React.Dispatch<React.SetStateAction<boolean>>;
	detailData?: PharmacyDetailType;
	setDetailData: React.Dispatch<
		React.SetStateAction<PharmacyDetailType | undefined>
	>;
}

export const MapContext = createContext<MapContextType | null>(null);

export const useMapContext = () => {
	const context = useContext(MapContext);
	// 주스탠드로 context랑 같이 사용할 수 있음
	if (!context) {
		throw new Error("지도 조회 컨텍스트 에러");
	}

	return context;
};
