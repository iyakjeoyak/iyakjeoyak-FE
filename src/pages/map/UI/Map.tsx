import { useState } from "react";
import { Pharmacy } from "../mapTypes";
import getPharmacyDetail from "@/api/map/getPharmacyDetail";
import { PharmacyMapType } from "@/api/map/getPharmacyData";
import { useMapContext } from "../utils/mapDetailContext";
import { useDisplayMap, useInitMap, useUpdateMarkers } from "../hooks";
import { showToast } from "@/utils/ToastConfig";

// 1. 맵 스크립트 로드하기 (done)
// 2. api 요청 시 반경 내 약국을 마커로 찍어줌 (done)
// 3. 마커를 누르면 상세 약국 정보를 볼 수 있음 -> 모달로 띄워둠 (done)

// 해야할 것 & 체크할 거
// 화면 이동하면 기존의 마커는 지워지게 -> useUpdateMarkers 되는지 확인해보기

// 사용자 위치 받으나 안받으나 둘다 지도 잘띄워짐

// 4. 관심 약국으로 추가/ 삭제 가능
// 5. 추가된 관심 약국은 다음에 스크립트 로드 후 바로 불러와서 띄워주기
// 6. 약국 이름으로 검색 하는 기능

const Map = ({}) => {
	const [map, setMap] = useState<naver.maps.Map | null>(null);
	const [mapReady, setMapReady] = useState<boolean>(false);
	const [pharmacyData, setPharmacyData] = useState<PharmacyMapType[] | null>(
		null,
	);
	const [marker, setMarker] = useState<naver.maps.Marker[] | null>(null);
	const { setDetailData } = useMapContext();
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
		<>
			<div id="map" style={{ width: "100%", height: "80vh" }}></div>
		</>
	);
};

export default Map;
