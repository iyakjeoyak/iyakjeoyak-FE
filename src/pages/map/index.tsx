import { useState } from "react";
import { Map } from "./UI";
import MapDetail from "./UI/MapDetail";
import { PharmacyDetailType } from "./mapTypes";
import { MapContext } from "./utils/mapDetailContext";

const PharmacyMap = () => {
	const [detailData, setDetailData] = useState<PharmacyDetailType>();
	return (
		<MapContext.Provider value={{ detailData, setDetailData }}>
			<Map />
			<MapDetail />
		</MapContext.Provider>
	);
};

export default PharmacyMap;
