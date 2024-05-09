import { useState } from "react";
import { Pharmacy } from "../mapTypes";
import getPharmacyDetail from "@/api/map/getPharmacyDetail";
import { PharmacyMapType } from "@/api/map/getPharmacyData";
import { useMapContext } from "../utils/mapDetailContext";
import { useDisplayMap, useInitMap, useUpdateMarkers } from "../hooks";
import { showToast } from "@/utils/ToastConfig";
import CurrentLocationButton from "./CurrentLocationButton";
import style from "../styles/maproot.module.scss";

const Map = () => {
	const [map, setMap] = useState<naver.maps.Map | null>(null);
	const [mapReady, setMapReady] = useState<boolean>(false);
	const [pharmacyData, setPharmacyData] = useState<PharmacyMapType[] | null>(
		null,
	);
	const [marker, setMarker] = useState<naver.maps.Marker[] | null>(null);
	const { setDetailData, detailData } = useMapContext();
	const handleMarkerClick = async (pharmacy: Pharmacy) => {
		try {
			const pharmacyDetail = await getPharmacyDetail(pharmacy.hpid);
			setDetailData(pharmacyDetail);
		} catch (error) {
			showToast({ type: "error", message: "지도를 가져오는데 실패했습니다." });
		}
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
