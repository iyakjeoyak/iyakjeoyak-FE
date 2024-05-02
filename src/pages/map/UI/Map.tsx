// 서버
// 1. 클라이언트로 위치와 검색 반경을 받음
// 2. 지도 api와 공공 데이터 api 호출해 약국 데이터 호출
// 3. 조회된 데이터를 필터링 및 가공 후 클라이언트로 응답

// 프론트
// 1. 서버에서 받은 데이터를 마커로 표시
// 2. 사용자는 지도 상의 마커를 클릭해 데이터 조회 가능
// 3. 저장하기 버튼으로 post요청, 삭제로 delete 요청

import { useEffect, useState } from "react";
import { MapProps, Pharmacy } from "../mapTypes";
import { PharmacyMapType } from "@/api/map/getPharmacyData";
import createMarker from "../utils/createMarker";
import setDefaultMap from "../utils/setDefaultMap";
import { loadScript } from "../utils/loadScript";
import { setGelocationMap } from "../utils/setGelocationMap";
import getPharmacyDetail, {
	PharmacyDetailType,
} from "@/api/map/getPharmacyDetail";
import MapDetail from "./MapDetail";

declare global {
	interface Window {
		naver: any;
	}
}

// 1. 맵 스크립트 로드하기 (done)
// 2. api 요청 시 반경 내 약국을 마커로 찍어줌 (done)
// 3. 마커를 누르면 상세 약국 정보를 볼 수 있음 -> api 나오면 ~~~  모달로 띄워둠 (done)
// 모달 상태 업데이트 처리...
// 4. 관심 약국으로 추가/ 삭제 가능
// 5. 추가된 관심 약국은 다음에 스크립트 로드 후 바로 불러와서 띄워주기
// 6. 약국 주소로 검색 하는 기능
const Map = ({ pharmacies }: MapProps) => {
	const [map, setMap] = useState<any>(null);
	const [mapReady, setMapReady] = useState<boolean>(false);
	const [selectedPharmacy, setSelectedPharmacy] =
		useState<null | PharmacyDetailType>(null);
	const [activeMarker, setActiveMarker] = useState<null | naver.maps.Marker>(
		null,
	);

	const handleMarkerClick = async (
		pharmacy: Pharmacy,
		marker: naver.maps.Marker,
	) => {
		try {
			const detailData = await getPharmacyDetail(pharmacy.hpid);
			setSelectedPharmacy(detailData);
			setActiveMarker(marker);
		} catch (error) {
			console.error("약국 상세 정보 조회 실패", error);
		}
	};

	useEffect(() => {
		const cleanup = loadScript(
			() => setMapReady(true),
			() => setDefaultMap(),
		);
		return cleanup;
	}, []);

	useEffect(() => {
		if (mapReady && !map) {
			// 사용자 위치 가져오고 주변 약국 및 마커 생성
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					await setGelocationMap(latitude, longitude, (newMap, response) => {
						setMap(newMap);

						// newMap
						// 	.getElement()
						// 	.addEventListener("wheel", (event) => {}, { passive: true });
						if (response.data) {
							response.data.forEach((pharmacy: PharmacyMapType) => {
								const pharmacyData: Pharmacy = {
									lat: pharmacy.latitude,
									lng: pharmacy.longitude,
									name: pharmacy.dutyName,
									hpid: pharmacy.hpid,
								};
								createMarker(pharmacyData, newMap, handleMarkerClick);
							});
						}
					});
				},
				async (error) => {
					// 사용자 위치 못가져오면 기본 위치로 요청
					const defaultLat = 37.3595704;
					const defaultLng = 127.105399;
					await setGelocationMap(defaultLat, defaultLng, (newMap, response) => {
						setMap(newMap);
						// newMap
						// 	.getElement()
						// 	.addEventListener("wheel", (event) => {}, { passive: true });

						if (response.data) {
							response.data.forEach((pharmacy: PharmacyMapType) => {
								const pharmacyData: Pharmacy = {
									lat: pharmacy.latitude,
									lng: pharmacy.longitude,
									name: pharmacy.dutyName,
									hpid: pharmacy.hpid,
								};

								createMarker(pharmacyData, newMap, handleMarkerClick);
							});
						}
					});
				},
				{ enableHighAccuracy: true },
			);
		}
	}, [mapReady, pharmacies, map, activeMarker, selectedPharmacy]);

	return (
		<>
			<div id="map" style={{ width: "100%", height: "80vh" }}></div>
			{/* <button onClick={() => InitMap(pharmacies)}>Load My Location</button> */}
			{selectedPharmacy && activeMarker && (
				<MapDetail marker={activeMarker} detailData={selectedPharmacy} />
			)}
		</>
	);
};

export default Map;
