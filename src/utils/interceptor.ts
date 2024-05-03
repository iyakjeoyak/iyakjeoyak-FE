import axios, {
	InternalAxiosRequestConfig,
	AxiosResponse,
	AxiosRequestHeaders,
	AxiosError,
} from "axios";
import { getAccessToken } from "./getToken";
import { logout } from "./logout";
import { showToast } from "./ToastConfig";

interface AuthResponse {
	accessToken?: string;
	refreshToken?: string;
	message?: string;
}

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
	const headers: AxiosRequestHeaders =
		(config.headers as AxiosRequestHeaders) || {};
	const accessToken = getAccessToken();
	headers["Authorization"] = `Bearer ${accessToken}`;
	config.headers = headers;
	return Promise.resolve(config);
};

export const responseInterceptor = (response: AxiosResponse): AxiosResponse =>
	response;

export const rejectInterceptor = (
	error: AxiosError,
): Promise<AxiosResponse | void> => {
	// 응답이 없으면 에러
	if (!error.response) {
		return Promise.reject(error);
	}
	const {
		response: { status, data },
	} = error;
	const authData: AuthResponse = data as AuthResponse;
	
	if (status === 400 && authData.message) {
    showToast({ type: "error", message: authData.message });
    console.error("error", data);
  }
  
	// 토큰 만료 시
	if (status === 401) {
		if (authData.message && authData.message === "만료된 토큰입니다.") {
			// 토큰 리프레시 로직
			return handleTokenRefresh(error.config);
		} else {
			// 로그아웃 처리
			logout();
			showToast({
				type: "error",
				message: "세션이 만료되었습니다. 다시 로그인 해주세요.",
			});
			return Promise.reject(error);
		}
	}

	if (authData.message) {
		showToast({ type: "error", message: authData.message });
	}

	return Promise.reject(error);
};

async function handleTokenRefresh(
	config: InternalAxiosRequestConfig | undefined,
): Promise<AxiosResponse> {
	if (!config) throw new Error("토큰 갱신을 위한 설정이 없습니다.");

	// 리프레시 만료되었는지 확인
	const tokenRefreshResult = await axios.get("/refresh-token");

	if (tokenRefreshResult.status === 200) {
		const { accessToken } = tokenRefreshResult.data;
		// 가져온 응답으로 access 갱신
		if (config.headers) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}
		return axios(config);
	} else {
		logout();
		throw new Error("토큰 갱신에 실패했습니다.");
	}
}
