import { useState } from "react";
import { Pharmacy } from "../map.types";
import { PharmacyMapType } from "@/api/map/getPharmacyData";
import { useMapContext } from "../utils/mapDetailContext";
import { useDisplayMap, useInitMap, useUpdateMarkers } from "../hooks";
import CurrentLocationButton from "./CurrentLocationButton";
import style from "../styles/maproot.module.scss";

const Map = () => {
	const [map, setMap] = useState<naver.maps.Map | null>(null);
	const [mapReady, setMapReady] = useState<boolean>(false);
	const [pharmacyData, setPharmacyData] = useState<PharmacyMapType[] | null>(
		null,
	);
	const [marker, setMarker] = useState<naver.maps.Marker[] | null>(null);

	const { setSelectedHpid } = useMapContext();

	const handleMarkerClick = async (pharmacy: Pharmacy) => {
		setSelectedHpid(pharmacy.hpid);
	};

	// 맵 초기 설정
	useInitMap({ setMapReady });
	// 맵 보여주기
	useDisplayMap({
		mapReady,
		map,
		setMap,
		setMarker,
		setPharmacyData,
		handleMarkerClick,
	});
	// 마커 업데이트
	useUpdateMarkers({ map, pharmacyData, marker });

	return (
		<div className={style.mapContent}>
			<div id="map" style={{ width: "100%", height: "65vh" }} />
			<CurrentLocationButton setMap={setMap} map={map} />
		</div>
	);
};

export default Map;
