import axios, { AxiosInstance, AxiosResponse } from "axios";

type requestType = {
	baseURL: string;
	headers: {
		"Content-Type": string;
		Authorization?: string;
	};
};

const config: requestType = {
	baseURL: "/api",
	headers: {
		"Content-Type": "application/json",
	},
};

interface Params {
	[key: string]: string | number | boolean;
}
interface ApiData {
	data: any;
}

type ApiFetcherParams = [string, any];
export type ApiMethods = "get" | "post" | "put" | "delete" | "patch";
export type APiFetcher = (...args: ApiFetcherParams) => Promise<any>;

const getFetcher = async (
	path: string,
	{ params }: { params: Params },
): Promise<AxiosResponse<ApiData>> => {
	return await api.get(path, { params });
};
const postFetcher = async (path: string, body: ApiData) => {
	return await api.post(path, body);
};

const patchFetcher = async (path: string, body: ApiData) => {
	return await api.put(path, body);
};
const putFetcher = async (path: string, body: ApiData) => {
	return await api.put(path, body);
};
const deleteFetcher = async (path: string, params: ApiData) => {
	return await api.delete(path, { params });
};

export const API_FETCHER: { [key in ApiMethods]: APiFetcher } = {
	get: (...args) => getFetcher(...args),
	post: (...args) => postFetcher(...args),
	put: (...args) => putFetcher(...args),
	patch: (...args) => patchFetcher(...args),
	delete: (...args) => deleteFetcher(...args),
};

export const api: AxiosInstance = axios.create(config);
