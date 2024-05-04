import { Pharmacy } from "../mapTypes";

export default function createMarker(
	pharmacy: Pharmacy,
	map: naver.maps.Map,
	onClick: (pharmacy: Pharmacy, marker: naver.maps.Marker) => void,
) {
	console.log(pharmacy.name);
	const marker = new window.naver.maps.Marker({
		map: map,
		animation: naver.maps.Animation.DROP,
		position: new window.naver.maps.LatLng(pharmacy.lat, pharmacy.lng),
		title: pharmacy.name,
		cursor: true,
	});

	if (pharmacy.hpid) {
		window.naver.maps.Event.addListener(marker, "click", () =>
			onClick(pharmacy, marker),
		);

		// return () => naver.maps.Event.removeListener(listener);
	}
	return marker;
}
