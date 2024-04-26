import axios, {
	AxiosInstance,
	AxiosResponse,
	AxiosError,
	AxiosRequestHeaders,
	InternalAxiosRequestConfig,
} from "axios";

interface AuthResponse {
	accessToken?: string;
	refreshToken?: string;
	message?: string;
}

const instance: AxiosInstance = axios.create({
	withCredentials: true,
	baseURL: process.env.API_URL || "/api",
});

const getAccessToken = (): string | null => {
	return localStorage.getItem("accessToken");
};

const logout = () => {
	localStorage.clear();
	window.location.href = `/login`;
};

// 요청 인터셉터
// access 토큰 가져오기
instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const headers: AxiosRequestHeaders = config.headers || {};
		const accessToken = getAccessToken();

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
	// 200번대 응답 처리
	(response: AxiosResponse): AxiosResponse => response,
	// 200번 외 응답 처리
	async (error: AxiosError): Promise<AxiosResponse | void> => {
		// 응답이 없으면 에러
		if (!error.response) {
			return Promise.reject(error);
		}
		const {
			response: { status, data },
		} = error;
		const authData: AuthResponse = data as AuthResponse;

		// 토큰 만료 시
		if (status === 401 && authData.message) {
			switch (authData.message) {
				case "만료된 토큰입니다.":
					// 토큰 리프레시
					return handleTokenRefresh(error.config);

				// 토큰 리프레시 실패 시
				case "만료된 접근입니다.":
					logout();
					break;
				default:
					return Promise.reject(error);
			}
		}

		return Promise.reject(error);
	},
);

async function handleTokenRefresh(
	config: InternalAxiosRequestConfig | undefined,
): Promise<AxiosResponse> {
	if (!config) throw new Error("토큰 갱신을 위한 설정이 없습니다.");

	// 리프레시 만료되었는지 확인
	const tokenRefreshResult = await instance.get("/refresh-token");

	if (tokenRefreshResult.status === 200) {
		const { accessToken } = tokenRefreshResult.data;
		// 가져온 응답으로 access 갱신
		if (config.headers) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}
		return instance(config);
	} else {
		logout();
		throw new Error("토큰 갱신에 실패했습니다.");
	}
}

export default instance;
