const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const getAccessToken = () => {
	return (localStorage.getItem(ACCESS_TOKEN_KEY) as string) || null;
};

export const setAccessToken = (token: string) => {
	return localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getRefreshToken = () => {
	return localStorage.getItem(REFRESH_TOKEN_KEY) || null;
};

export const setRefreshToken = (token: string) => {
	return localStorage.setItem(REFRESH_TOKEN_KEY, token);
};
