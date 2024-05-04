import Marker from "../UI/Marker";
import { Pharmacy } from "../mapTypes";
import ReactDOM from "react";

// export default function createMarker(
// 	pharmacy: Pharmacy,
// 	map: naver.maps.Map,
// 	onClick: (pharmacy: Pharmacy, marker: naver.maps.Marker) => void,
// ) {
// 	console.log(pharmacy.name);
// 	const marker = new window.naver.maps.Marker({
// 		map: map,
// 		animation: naver.maps.Animation.DROP,
// 		position: new window.naver.maps.LatLng(pharmacy.lat, pharmacy.lng),
// 		title: pharmacy.name,
// 		cursor: "pointer",
// 	});

// 	if (pharmacy.hpid) {
// 		window.naver.maps.Event.addListener(marker, "click", () =>
// 			onClick(pharmacy, marker),
// 		);

// 		// return () => naver.maps.Event.removeListener(listener);
// 	}
// 	return marker;
// }

export default function createMarker(
	pharmacy: Pharmacy,
	map: naver.maps.Map,
	onClick: (pharmacy: Pharmacy, marker: naver.maps.Marker) => void,
) {
	const position = new naver.maps.LatLng(pharmacy.lat, pharmacy.lng);
	const visible = map.getBounds().hasPoint(position);

	const marker = new naver.maps.Marker({
		position: new naver.maps.LatLng(pharmacy.lat, pharmacy.lng),
		title: pharmacy.name,
		map: map,
		animation: naver.maps.Animation.DROP,
		cursor: "pointer",
		visible: visible,
		icon: {
			content: `<img src='images/map_marker_icon.png' alt='지도 마커' style='cursor: pointer; width : 40px; height : 50px;'/>`,
			anchor: new naver.maps.Point(20, 25),
		},
	});

	if (pharmacy.hpid) {
		window.naver.maps.Event.addListener(marker, "click", () => {
			console.log("Marker clicked:", pharmacy.name);
			onClick(pharmacy, marker);
		});
		// window.naver.maps.removeListener(listener);
	}

	return marker;
}
