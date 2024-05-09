import { useState } from "react";
import Map from "./UI/Map";
import MapDetail from "./UI/MapDetail";
import { PharmacyDetailType } from "./mapTypes";
import { MapContext } from "./utils/mapDetailContext";
import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import { LikedPharmacy } from "./UI";
import style from "./styles/maproot.module.scss";

const PharmacyMap = () => {
	const location = useLocation();
	const paths = [location.pathname];

	const [detailData, setDetailData] = useState<PharmacyDetailType>();
	const [isLikeChanged, setIsLikeChanged] = useState(false);
	return (
		<MapContext.Provider
			value={{ detailData, setDetailData, isLikeChanged, setIsLikeChanged }}
		>
			<section className={style.mapBox}>
				<PathButton paths={paths} />
				{/* <MapSearch /> */}
			</section>
			<Map />
			<LikedPharmacy />
			<MapDetail />
		</MapContext.Provider>
	);
};

export default PharmacyMap;
