declare namespace NodeJS {
	interface ProcessEnv {
		VITE_BASE_URI: string;
		VITE_KAKAO_API_KEY: string;
		VITE_KAKAO_REDIRECT_URI: string;
		VITE_GOOGLE_API_KEY: string;
		VITE_GOOGLE_REDIRECT_URI: string;
	}
}
