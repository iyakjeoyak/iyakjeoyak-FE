import axios, {
	AxiosError,
	AxiosRequestHeaders,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import { getAccessToken, setAccessToken } from "./getToken";

import { logout } from "./logout";
import { showToast } from "./ToastConfig";

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
		const tokenRefreshResult = await axios.post(
			"/user/createAccessByRefresh",
			{},
			{
				withCredentials: true,
			},
		);
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
			const token = accessToken.startsWith("Bearer ");
			console.log(token);
			setAccessToken(token.slice(7));

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
	} catch (error) {
		logout();
		showToast({
			type: "error",
			message: "세션 만료. 다시 로그인 해주세요.",
		});
	}
}
