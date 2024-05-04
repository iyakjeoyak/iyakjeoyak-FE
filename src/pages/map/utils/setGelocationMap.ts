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
		zoom: 15,
	};

	const mapElement = document.getElementById("map");
	if (mapElement) {
		const newMap = new naver.maps.Map(mapElement, mapOptions);

		const initialResponse = await getPharmacyData(
			latitude.toString(),
			longitude.toString(),
			15,
		);
		onDataLoaded(newMap, initialResponse);

		let dragTimeout: NodeJS.Timeout | undefined;

		// 드래그 멈추면 다시 약국 찾아줌
		// 드래그 할때마다 요청이 들어가는데
		// 멈춘지 한 2초 되면 요청이 들어가게 할까?
		naver.maps.Event.addListener(newMap, "dragend", async function () {
			const newCenter = newMap.getCenter();

			if (dragTimeout) {
				clearTimeout(dragTimeout);
			}

			dragTimeout = setTimeout(async () => {
				const updatedResponse = await getPharmacyData(
					newCenter.y.toString(),
					newCenter.x.toString(),
					10,
				);

				onDataLoaded(newMap, updatedResponse);
			}, 2000);
		});
	} else {
		console.log("맵을 찾을 수 없습니다.");
	}
};
