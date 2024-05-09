import { useCallback } from "react";
import { showToast } from "@/utils/ToastConfig";
import { setGelocationMap } from "../utils/setGelocationMap";
import createMarker from "../utils/createMarker";
import style from "../styles/maproot.module.scss";

const CurrentLocationButton = ({
	setMap,
	map,
}: {
	setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | null>>;
	map: naver.maps.Map | null;
}) => {
	const handleCurrentLocation = useCallback(async () => {
		if (!navigator.geolocation) {
			showToast({
				type: "error",
				message: "사용자 위치를 지원하지 않는 브라우저입니다.",
			});
			return;
		}

		navigator.geolocation.getCurrentPosition(
			async (position) => {
				const { latitude, longitude } = position.coords;
				setGelocationMap(latitude, longitude, (newMap) => {
					if (setMap) {
						setMap(newMap);

						const userLocation = {
							lat: latitude,
							lng: longitude,
							name: "현재 사용자 위치",
							hpid: "0",
						};
						createMarker(userLocation, newMap, () => {
							showToast({ type: "info", message: "현재 사용자의 위치입니다." });
						});
					}
				});
			},
			() => {
				showToast({
					type: "error",
					message: "위치 정보를 가져오는데 실패했습니다.",
				});
			},
			{ enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 },
		);
	}, [map]);

	return (
		<button onClick={handleCurrentLocation} className={style.box}>
			<div className={style.flexBox}>
				<img
					src="images/map_marker_icon.png"
					alt="사용자 위치를 표시하는 버튼"
					className={style.icon}
				/>
				<div className={style.buttonText}>사용자 위치</div>
			</div>
		</button>
	);
};

export default CurrentLocationButton;
