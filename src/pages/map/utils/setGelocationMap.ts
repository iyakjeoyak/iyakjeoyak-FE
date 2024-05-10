import getPharmacyData from "@/api/map/getPharmacyData";
import { showToast } from "@/utils/ToastConfig";

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

		//추가된 부분
		if (initialResponse && initialResponse.data) {
			onDataLoaded(newMap, initialResponse);
		} else {
			showToast({ type: "error", message: "약국 데이터를 찾을 수 없습니다." });
		}

		let dragTimeout: NodeJS.Timeout | undefined;

		// 드래그 멈추면 1초 뒤 다시 약국 찾아줌
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

				if (updatedResponse && updatedResponse.data) {
					onDataLoaded(newMap, updatedResponse);
				} else {
					showToast({
						type: "error",
						message: "드래그 후 약국을 찾을 수 없습니다.",
					});
				}
			}, 1000);
		});
	} else {
		showToast({ type: "error", message: "맵을 찾을 수 없습니다." });
	}
};
