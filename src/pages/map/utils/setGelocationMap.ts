import getPharmacyData from "@/api/map/getPharmacyData";

export const setGelocationMap = async (
	latitude: number,
	longitude: number,
	onDataLoaded: (map: naver.maps.Map, data: any) => void,
) => {
	const mapOptions: naver.maps.MapOptions = {
		center: new naver.maps.LatLng(latitude, longitude),
		scrollWheel: true,
		draggable: true,
	};

	const mapElement = document.getElementById("map");
	if (mapElement) {
		const newMap = new naver.maps.Map(mapElement, mapOptions);

		const response = await getPharmacyData(
			latitude.toString(),
			longitude.toString(),
			10,
		);
		onDataLoaded(newMap, response);
	} else {
		console.log("맵을 찾을 수 없습니다.");
	}
};
