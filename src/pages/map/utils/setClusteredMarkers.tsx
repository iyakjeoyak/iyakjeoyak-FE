// import { MarkerClustering } from "./naverCluster.js";

// interface Pharmacy {
// 	lat: number;
// 	lng: number;
// 	name: string;
// }

// export function setClusteredMarkers(map: any, pharmacies: Pharmacy[]) {
// 	const markers = pharmacies.map(
// 		(pharmacy) =>
// 			new window.naver.maps.Marker({
// 				position: new window.naver.maps.LatLng(pharmacy.lat, pharmacy.lng),
// 				map: map,
// 				title: pharmacy.name,
// 			}),
// 	);

// if (window.naver && window.naver.maps) {
// 	const markerClusteringOptions = {
// 		map: map,
// 		markers: markers,
// 		disableClickZoom: false,
// 		gridSize: 120,
// 		minClusterSize: 2,
// 		maxZoom: 18,
// 		averageCenter: true,
// 	};
// 	new MarkerClustering(markerClusteringOptions);
// } else {
// 	console.log("클러스터링 되니 안되네");
// }
// }
