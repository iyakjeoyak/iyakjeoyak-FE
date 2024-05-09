import { Pharmacy } from "../mapTypes";

export default function createMarker(
	pharmacy: Pharmacy,
	map: naver.maps.Map,
	onClick: (pharmacy: Pharmacy, marker: naver.maps.Marker) => void,
) {
	const position = new naver.maps.LatLng(pharmacy.lat, pharmacy.lng);
	const visible = map.getBounds().hasPoint(position);

	const markerType = pharmacy.name === "현재 사용자 위치" ? "user" : "pharmacy";
	const markerIcon =
		markerType === "user"
			? {
					content: `<img src='images/map_user_marker.png' alt='사용자 위치 마커' style='cursor:pointer; width: 40px; height:40px;' />`,
					anchor: new naver.maps.Point(20, 25),
				}
			: {
					content: `<img src='images/map_marker_icon.png' alt='지도 마커' style='cursor: pointer; width : 40px; height : 40px;'/>`,
					anchor: new naver.maps.Point(30, 40),
				};

	const marker = new naver.maps.Marker({
		position: new naver.maps.LatLng(pharmacy.lat, pharmacy.lng),
		title: pharmacy.name,
		map: map,
		cursor: "pointer",
		visible: visible,
		icon: markerIcon,
	});

	if (pharmacy.hpid) {
		window.naver.maps.Event.addListener(marker, "click", () => {
			onClick(pharmacy, marker);
		});
	}

	return marker;
}
