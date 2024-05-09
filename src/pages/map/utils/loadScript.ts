import { showToast } from "@/utils/ToastConfig";

export const loadScript = (callback: () => void, errorCallback: () => void) => {
	const mapScript = document.createElement("script");
	const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
	mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}&submodules=geocoder`;
	mapScript.async = true;

	document.head.appendChild(mapScript);

	mapScript.onload = () => {
		callback();
	};

	mapScript.onerror = () => {
		showToast({ type: "error", message: "맵 로드에러" });
		errorCallback();
	};

	return () => {
		document.head.removeChild(mapScript);
	};
};
