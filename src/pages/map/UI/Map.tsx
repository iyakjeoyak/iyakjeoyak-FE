// 서버
// 1. 클라이언트로 위치와 검색 반경을 받음
// 2. 지도 api와 공공 데이터 api 호출해 약국 데이터 호출
// 3. 조회된 데이터를 필터링 및 가공 후 클라이언트로 응답

// 프론트
// 1. 서버에서 받은 데이터를 마커로 표시
// 2. 사용자는 지도 상의 마커를 클릭해 데이터 조회 가능
// 3. 저장하기 버튼으로 post요청, 삭제로 delete 요청

import { Pharmacy } from "../mapTypes";
import getPharmacyDetail, {
	PharmacyDetailType,
} from "@/api/map/getPharmacyDetail";
import { useEffect, useState } from "react";

import MapDetail from "./MapDetail";
import { PharmacyMapType } from "@/api/map/getPharmacyData";
import { PharmacyProvider } from "../utils/mapDetailProvider";
import createMarker from "../utils/createMarker";
import { loadScript } from "../utils/loadScript";
import setDefaultMap from "../utils/setDefaultMap";
import { setGelocationMap } from "../utils/setGelocationMap";
import { usePharmacy } from "../utils/mapDetailContext";

declare global {
	interface Window {
		naver: any;
	}
}

// interface Markers {
// 	[key: string]: naver.maps.Marker;
// }
// 1. 맵 스크립트 로드하기 (done)
// 2. api 요청 시 반경 내 약국을 마커로 찍어줌 (done)
// 3. 마커를 누르면 상세 약국 정보를 볼 수 있음 -> 모달로 띄워둠 (done)

// 해야할 것 & 체크할 거
// 모달 상태 업데이트 처리...
// 화면 이동하면 기존의 마커는 지워지게
// 선택하면 페이지에서 정보 보여주고
// 한번 더 누르면 모달을 띄우자!

// 4. 관심 약국으로 추가/ 삭제 가능
// 5. 추가된 관심 약국은 다음에 스크립트 로드 후 바로 불러와서 띄워주기
// 6. 약국 이름으로 검색 하는 기능

const Map = ({}) => {
	const [map, setMap] = useState<any>(null);
	const [mapReady, setMapReady] = useState<boolean>(false);
	const [selectedPharmacy, setSelectedPharmacy] =
		useState<null | PharmacyDetailType>(null);
	const [_, setMarkers] = useState<naver.maps.Marker[]>([]);
	const { setShowModal, showModal } = usePharmacy();
	const [pharmacyData, setPharmacyData] = useState<any>();

	// 맵 가져오기
	useEffect(() => {
		const cleanup = loadScript(
			() => setMapReady(true),
			() => setDefaultMap(),
		);
		return cleanup;
	}, []);

	const handleMarkerClick = (pharmacy: Pharmacy) => {
		getPharmacyDetail(pharmacy.hpid)
			.then((detailData) => {
				setSelectedPharmacy(detailData);
				setShowModal(true);
			})
			.catch((error) => {
				console.error("지도를 가져오는데 실패했습니다.", error);
			});
	};

	useEffect(() => {
		if (selectedPharmacy) {
			setShowModal(showModal);
		}
	}, [selectedPharmacy, showModal]);

	useEffect(() => {
		if (mapReady && !map) {
			// 사용자 위치 가져오고 주변 약국 및 마커 생성
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;

					await setGelocationMap(latitude, longitude, (newMap, response) => {
						setMap(newMap);
						const newMarkers: naver.maps.Marker[] = [];
						setPharmacyData(response.data);
						if (response.data) {
							response.data.forEach((pharmacy: PharmacyMapType) => {
								const formatData: Pharmacy = {
									lat: pharmacy.latitude,
									lng: pharmacy.longitude,
									name: pharmacy.dutyName,
									hpid: pharmacy.hpid,
								};

								// createMarker(pharmacyData, newMap, handleMarkerClick);
								const marker = createMarker(formatData, newMap, () =>
									handleMarkerClick(formatData),
								);
								newMarkers.push(marker);
							});
							setMarkers(newMarkers);
						}
					});
				},
				async (error) => {
					console.log(error, "위치를 가져오지 못했습니다.");
					// 사용자 위치 못가져오면 기본 위치로 요청
					const defaultLat = 37.3595704;
					const defaultLng = 127.105399;
					await setGelocationMap(defaultLat, defaultLng, (newMap, response) => {
						setMap(newMap);
						const newMarkers: naver.maps.Marker[] = [];
						if (response.data) {
							response.data.forEach((pharmacy: PharmacyMapType) => {
								const pharmacyData: Pharmacy = {
									lat: pharmacy.latitude,
									lng: pharmacy.longitude,
									name: pharmacy.dutyName,
									hpid: pharmacy.hpid,
								};
								const marker = createMarker(
									pharmacyData,
									newMap,
									handleMarkerClick,
								);
								newMarkers.push(marker);
							});
							setMarkers(newMarkers);
						}
					});
				},
				{ enableHighAccuracy: true },
			);
		}
	}, [mapReady, map]);

	useEffect(() => {
		if (map) {
			const updateMarkers = (currentMarkers: naver.maps.Marker[]) => {
				const mapBounds = map.getBounds();
				const newMarker = currentMarkers.map((marker) => {
					const isVisible = mapBounds.hasLatLng(marker.getPosition());
					marker.setVisible(isVisible);
					return marker;
				});
				setMarkers(newMarker);
			};

			const currentMarkers = pharmacyData.map((pharmacy: Pharmacy) =>
				createMarker(pharmacy, map, handleMarkerClick),
			);
			updateMarkers(currentMarkers);

			naver.maps.Event.addListener(map, "zoom_changed", () =>
				updateMarkers(currentMarkers),
			);
			naver.maps.Event.addListener(map, "dragend", () =>
				updateMarkers(currentMarkers),
			);
		}
	}, [map]);

	return (
		<>
			<PharmacyProvider>
				<div id="map" style={{ width: "100%", height: "80vh" }}></div>
				{showModal && <MapDetail />}
			</PharmacyProvider>
		</>
	);
};

export default Map;
