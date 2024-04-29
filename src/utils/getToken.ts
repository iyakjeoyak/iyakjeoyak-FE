const ACCESS_TOKEN_KEY = "accessToken";

export const getAccessToken = () => {
	return (localStorage.getItem(ACCESS_TOKEN_KEY) as string) || null;
};

export const setAccessToken = (token: string) => {
	return localStorage.setItem(ACCESS_TOKEN_KEY, token);
};
