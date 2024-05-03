import {
	rejectInterceptor,
	requestInterceptor,
	responseInterceptor,
} from "@/utils/interceptor";

import Axios from "axios";
import { AxiosInstance } from "axios";

const axios: AxiosInstance = Axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		
	},
});

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(responseInterceptor, rejectInterceptor);

export default axios;
