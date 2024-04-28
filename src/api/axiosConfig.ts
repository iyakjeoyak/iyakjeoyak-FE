import Axios from "axios";
import { AxiosInstance } from "axios";

import {
	rejectInterceptor,
	requestInterceptor,
	responseInterceptor,
} from "@/utils/interceptor";

const axios: AxiosInstance = Axios.create({
	withCredentials: true,
	baseURL: import.meta.env.API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(responseInterceptor, rejectInterceptor);

export default axios;
