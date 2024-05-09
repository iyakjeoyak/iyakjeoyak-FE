export default function setDefaultMap() {
	const defaultLat = 37.54674009217038;
	const defaultLng = 127.06623265762651;
	const mapOptions = {
		center: new window.naver.maps.LatLng(defaultLat, defaultLng),
		scrollWheel: true,
		draggable: true,
		zoom: 15,
	};

	const map = new window.naver.maps.Map("map", mapOptions);
	new window.naver.maps.Marker({
		position: new window.naver.maps.LatLng(defaultLat, defaultLng),
		map: map,
		title: "기본 위치",
	});
}
