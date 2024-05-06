import { useState } from "react";
import Map from "./UI/Map";
import MapDetail from "./UI/MapDetail";
import { PharmacyDetailType } from "./mapTypes";
import { MapContext } from "./utils/mapDetailContext";
import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import { LikedPharmacy } from "./UI";

const PharmacyMap = () => {
	const location = useLocation();

	const paths = [location.pathname];

	const [detailData, setDetailData] = useState<PharmacyDetailType>();
	return (
		<MapContext.Provider value={{ detailData, setDetailData }}>
			<PathButton paths={paths} />
			<Map />
			<LikedPharmacy />
			<MapDetail />
		</MapContext.Provider>
	);
};

export default PharmacyMap;
