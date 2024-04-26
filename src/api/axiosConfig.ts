import axios, {
	AxiosInstance,
	AxiosResponse,
	AxiosError,
	AxiosRequestHeaders,
	InternalAxiosRequestConfig,
} from "axios";

export const instance: AxiosInstance = axios.create({
	withCredentials: true,
	baseURL: process.env.API_URL || "/api",
});

const getAccessToken = (): string | null => {
	return localStorage.getItem("accessToken");
};

// 요청 인터셉터
// access 토큰 가져오기
instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const headers: AxiosRequestHeaders = config.headers || {};
		const accessToken = getAccessToken();

		if (!accessToken) {
			window.location.href = "/login";
			return Promise.resolve(config);
		}

		headers["Content-Type"] = "application/json";
		headers["Authorization"] = `Bearer ${accessToken}`;

		config.headers = headers;
		return Promise.resolve(config);
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

// 응답 인터셉터
instance.interceptors.response.use(
	(response: AxiosResponse) => {
		// 200번대 상태 코드 처리
		return response;
	},
	(error) => {
		const { status, data } = error.response;
		// 2xx 외 상태 코드 처리

		// 401 Status
		if (error.response && status === 401) {
			if (data.message === "유효하지 않은 사용자입니다.") {
				return data.message;
			}
			window.location.href = "/login";
		}

		// 409 Status
		if (error.response && status === 409) {
			if (data.message === "이미 등록된 아이디입니다.") {
				return data.message;
			}
			if (data.message === "이미 등록된 닉네임입니다.") {
				return data.message;
			}
		}
		return Promise.reject(error);
	},
);
