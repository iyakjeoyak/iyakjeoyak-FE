import React, { useEffect } from "react";
import { loadScript } from "../utils/loadScript";
import setDefaultMap from "../utils/setDefaultMap";
import { setGelocationMap } from "../utils/setGelocationMap";
import { PharmacyMapType } from "@/api/map/getPharmacyData";
import createMarker from "../utils/createMarker";
import { Pharmacy } from "../map.types";

interface UseDisplayMapArgs {
	map: naver.maps.Map | null;
	mapReady: boolean;
	setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | null>>;
	setMarker: React.Dispatch<React.SetStateAction<naver.maps.Marker[] | null>>;
	setPharmacyData: React.Dispatch<
		React.SetStateAction<PharmacyMapType[] | null>
	>;
	handleMarkerClick: (pharmacy: Pharmacy) => void;
}

interface UseUpdateMarkersArgs {
	map: naver.maps.Map | null;
	pharmacyData: PharmacyMapType[] | null;
	marker: naver.maps.Marker[] | null;
}

export const useInitMap = ({
	setMapReady,
}: {
	setMapReady: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	useEffect(() => {
		const cleanup = loadScript(
			() => setMapReady(true),
			() => setDefaultMap(),
		);
		return cleanup;
	}, []);
};

const handleGeolocationMap = (
	latitude: number,
	longitude: number,
	handleMarkerClick: (pharmacy: Pharmacy) => void,
	setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | null>>,
	setMarker: React.Dispatch<React.SetStateAction<naver.maps.Marker[] | null>>,
	setPharmacyData: React.Dispatch<
		React.SetStateAction<PharmacyMapType[] | null>
	>,
) => {
	setGelocationMap(latitude, longitude, (newMap, response) => {
		const newMarkers: naver.maps.Marker[] = [];
		if (response.data) {
			setPharmacyData(response.data);
			response.data.forEach((pharmacy: PharmacyMapType) => {
				const formatData: Pharmacy = {
					lat: pharmacy.latitude,
					lng: pharmacy.longitude,
					name: pharmacy.dutyName,
					hpid: pharmacy.hpid,
				};

				const marker = createMarker(formatData, newMap, () =>
					handleMarkerClick(formatData),
				);
				newMarkers.push(marker);
			});
			setMarker(newMarkers);
		}
		setMap(newMap);
	});
};

export const useDisplayMap = ({
	mapReady,
	map,
	setMap,
	setMarker,
	setPharmacyData,
	handleMarkerClick,
}: UseDisplayMapArgs) => {
	useEffect(() => {
		if (mapReady && !map) {
			// 사용자 위치 가져오고 주변 약국 및 마커 생성
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					handleGeolocationMap(
						position.coords.latitude,
						position.coords.longitude,
						handleMarkerClick,
						setMap,
						setMarker,
						setPharmacyData,
					);
				},
				async () => {
					// 사용자 위치 못가져오면 기본 위치로 요청
					const defaultLat = 37.54674009217038;
					const defaultLng = 127.06623265762651;

					handleGeolocationMap(
						defaultLat,
						defaultLng,
						handleMarkerClick,
						setMap,
						setMarker,
						setPharmacyData,
					);
				},
				{ enableHighAccuracy: true },
			);
		}
	}, [mapReady]);
};

export const useUpdateMarkers = ({
	map,
	pharmacyData,
	marker,
}: UseUpdateMarkersArgs) => {
	useEffect(() => {
		if (map && pharmacyData) {
			const updateMarkers = (
				map: naver.maps.Map,
				marker: naver.maps.Marker[],
			) => {
				// 지도의 바운더리를 가져옴
				const mapBounds = map.getBounds();
				marker.forEach((currentMarker) => {
					const isVisible = mapBounds.hasPoint(currentMarker.getPosition());
					if (isVisible) return currentMarker.setMap(map);
					else return currentMarker.setMap(null);
				});
			};

			// const currentMarkers: naver.maps.Marker[] = pharmacyData.map(
			// 	(pharmacyMap: PharmacyMapType) => {
			// 		const pharmacy: Pharmacy = {
			// 			lat: pharmacyMap.latitude,
			// 			lng: pharmacyMap.longitude,
			// 			name: pharmacyMap.dutyName,
			// 			hpid: pharmacyMap.hpid,
			// 		};

			// 		return createMarker(pharmacy, map, handleMarkerClick);
			// 	},
			// );

			// updateMarkers(currentMarkers);

			if (marker) {
				const zoomMarkerUpdate = naver.maps.Event.addListener(
					map,
					"zoom_changed",
					() => updateMarkers(map, marker),
				);
				const dragMarkerUpdate = naver.maps.Event.addListener(
					map,
					"dragend",
					() => updateMarkers(map, marker),
				);

				return () => {
					naver.maps.Event.removeListener(zoomMarkerUpdate);
					naver.maps.Event.removeListener(dragMarkerUpdate);
				};
			}
		}
	}, [map]);
};
