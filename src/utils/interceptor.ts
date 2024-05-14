import {
	AxiosError,
	AxiosRequestHeaders,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import { getAccessToken, getRefreshToken, setAccessToken } from "./getToken";
import { logout } from "./logout";
import { showToast } from "./ToastConfig";
import axios from "@/api/axiosConfig";

interface AuthResponse {
	accessToken?: string;
	refreshToken?: string;
	message?: string;
	detail?: string;
	code?: string;
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

	// 토큰 만료 시
	if (status === 401) {
		return handleTokenRefresh(error.config);
	}

	if (status === 400 && authData.message) {
		showToast({ type: "error", message: authData.message[0] });
	}

	if (authData.message) {
		showToast({ type: "error", message: authData.message[0] });
	}

	return Promise.reject(error);
};

async function handleTokenRefresh(
	config: InternalAxiosRequestConfig | undefined,
): Promise<AxiosResponse | void> {
	if (!config) {
		logout();
		showToast({
			type: "error",
			message: "토큰 갱신을 위한 설정이 없습니다.",
		});
		throw new Error("토큰 갱신을 위한 설정이 없습니다.");
	}

	try {
		// 리프레시 만료되었는지 확인
		// /user/createAccessByRefresh
		const refreshToken = getRefreshToken();
		if (refreshToken) {
			const tokenRefreshResult = await axios.post("/users/access-token", {
				refreshToken: refreshToken,
			});
			if (tokenRefreshResult.status === 200) {
				const accessToken = tokenRefreshResult.headers["authorization"];
				if (!accessToken) {
					showToast({
						type: "error",
						message: "새 액세스 토큰을 받아오는 데 실패했습니다.",
					});
					logout();
				}

				// 로컬 스토리지에 access 갱신
				setAccessToken(accessToken);

				// 가져온 응답으로 헤더 갱신
				if (config.headers) {
					config.headers["Authorization"] = `Bearer ${accessToken}`;
				}
				return axios(config);
			} else {
				logout();
				showToast({
					type: "error",
					message: "세션 만료. 다시 로그인 해주세요.",
				});
				return Promise.reject(new Error("토큰 갱신에 실패했습니다."));
			}
		}
	} catch (error) {
		// logout();
		showToast({
			type: "error",
			message: "세션 만료. 다시 로그인 해주세요.",
		});
	}
}
